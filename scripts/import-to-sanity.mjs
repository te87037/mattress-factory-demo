import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const projectId = process.env.SANITY_PROJECT_ID?.trim();
const dataset = process.env.SANITY_DATASET?.trim() || "production";
const token = process.env.SANITY_TOKEN?.trim();
const apiVersion = "2026-08-03";

if (!projectId) throw new Error("SANITY_PROJECT_ID is required.");
if (!token) throw new Error("SANITY_TOKEN is required.");

const site = JSON.parse(
  await fs.readFile(path.join(root, "content", "site.json"), "utf8"),
);
const productData = JSON.parse(
  await fs.readFile(path.join(root, "content", "products.json"), "utf8"),
);

const mutations = [
  {
    createOrReplace: {
      _id: "siteSettings",
      _type: "siteSettings",
      ...site,
    },
  },
  ...productData.products.map((product, index) => ({
    createOrReplace: {
      _id: `product-${product.id}`,
      _type: "product",
      visible: product.visible !== false,
      order: index + 1,
      contentId: {
        _type: "slug",
        current: product.id,
      },
      name: product.name,
      tag: product.tag,
      description: product.description,
      features: product.features,
    },
  })),
];

const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${encodeURIComponent(dataset)}?returnIds=true`;
const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({mutations}),
  signal: AbortSignal.timeout(30000),
});

if (!response.ok) {
  const detail = await response.text();
  throw new Error(`Sanity import failed: ${response.status} ${detail}`);
}

const result = await response.json();
console.log(`Imported site settings and ${productData.products.length} products.`);
console.log(JSON.stringify(result, null, 2));
