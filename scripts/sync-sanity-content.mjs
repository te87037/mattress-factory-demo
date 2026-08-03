import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const projectId = process.env.SANITY_PROJECT_ID?.trim();
const dataset = process.env.SANITY_DATASET?.trim() || "production";
const readToken = process.env.SANITY_API_READ_TOKEN?.trim();
const apiVersion = "2026-08-03";

if (!projectId) {
  console.log("SANITY_PROJECT_ID is not configured. Using repository content as fallback.");
  process.exit(0);
}

const query = `{
  "site": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    brand,
    brandMark,
    city,
    serviceArea,
    phone,
    address,
    businessDays,
    businessHours,
    lunchBreak,
    holidayNotice,
    visitNotice,
    depositNotice,
    paymentMethods,
    orderChangeNotice,
    heritageYear
  },
  "products": *[_type == "product"] | order(order asc, _createdAt asc){
    "id": contentId.current,
    visible,
    name,
    tag,
    description,
    "images": images[]{
      "url": asset->url,
      "alt": alt
    },
    "legacyImageUrl": image.asset->url,
    "legacyImageAlt": image.alt,
    features
  }
}`;

const queryUrl = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${encodeURIComponent(dataset)}`);
queryUrl.searchParams.set("query", query);

const headers = readToken ? {Authorization: `Bearer ${readToken}`} : {};

const response = await fetch(queryUrl, {
  headers,
  signal: AbortSignal.timeout(20000),
});

if (!response.ok) {
  throw new Error(`Sanity content query failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const site = payload?.result?.site;
const products = payload?.result?.products;

if (!site || !Array.isArray(products) || products.length === 0) {
  console.log("Sanity does not contain complete published content yet. Using repository content as fallback.");
  process.exit(0);
}

const uploadsDir = path.join(root, "public", "uploads", "products");
await fs.mkdir(uploadsDir, {recursive: true});

const existingFiles = await fs.readdir(uploadsDir).catch(() => []);
await Promise.all(
  existingFiles
    .filter((file) => file.startsWith("sanity-"))
    .map((file) => fs.rm(path.join(uploadsDir, file), {force: true})),
);

const extensionFromContentType = (contentType, url) => {
  const normalized = contentType?.split(";")[0]?.trim().toLowerCase();
  if (normalized === "image/jpeg") return "jpg";
  if (normalized === "image/png") return "png";
  if (normalized === "image/webp") return "webp";

  const pathname = new URL(url).pathname.toLowerCase();
  if (pathname.endsWith(".jpeg") || pathname.endsWith(".jpg")) return "jpg";
  if (pathname.endsWith(".png")) return "png";
  if (pathname.endsWith(".webp")) return "webp";
  return null;
};

const safeId = (value) => String(value || "product").replace(/[^a-z0-9_-]/gi, "-").toLowerCase();

const downloadImage = async ({url, alt}, product, imageIndex) => {
  const imageResponse = await fetch(url, {
    signal: AbortSignal.timeout(30000),
  });

  if (!imageResponse.ok) {
    throw new Error(`Failed to download image ${imageIndex + 1} for ${product.name}: ${imageResponse.status}`);
  }

  const extension = extensionFromContentType(imageResponse.headers.get("content-type"), url);
  if (!extension) {
    throw new Error(`Unsupported image type for ${product.name}. Use JPG, PNG or WebP.`);
  }

  const filename = `sanity-${safeId(product.id)}-${String(imageIndex + 1).padStart(2, "0")}.${extension}`;
  const filePath = path.join(uploadsDir, filename);
  const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
  await fs.writeFile(filePath, imageBuffer);

  return {
    src: `uploads/products/${filename}`,
    alt: String(alt || product.name || "產品照片").trim(),
  };
};

const normalizedProducts = [];
for (const product of products) {
  const sourceImages = Array.isArray(product.images)
    ? product.images.filter((item) => item?.url)
    : [];

  if (sourceImages.length === 0 && product.legacyImageUrl) {
    sourceImages.push({
      url: product.legacyImageUrl,
      alt: product.legacyImageAlt || product.name,
    });
  }

  const images = [];
  for (const [imageIndex, sourceImage] of sourceImages.slice(0, 8).entries()) {
    images.push(await downloadImage(sourceImage, product, imageIndex));
  }

  normalizedProducts.push({
    id: String(product.id || "").trim(),
    visible: product.visible !== false,
    name: String(product.name || "").trim(),
    tag: String(product.tag || "").trim(),
    description: String(product.description || "").trim(),
    images,
    features: Array.isArray(product.features)
      ? product.features.map((item) => String(item).trim()).filter(Boolean)
      : [],
  });
}

await fs.writeFile(
  path.join(root, "content", "site.json"),
  `${JSON.stringify(site, null, 2)}\n`,
);
await fs.writeFile(
  path.join(root, "content", "products.json"),
  `${JSON.stringify({products: normalizedProducts}, null, 2)}\n`,
);

console.log(`Sanity content synchronized: ${normalizedProducts.length} products.`);
