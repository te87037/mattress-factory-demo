import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pagePath = path.join(root, "app/page.tsx");
const sitePath = path.join(root, "content/site.json");
const productsPath = path.join(root, "content/products.json");

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const siteSource = readJson(sitePath);
const productSource = readJson(productsPath);

const requiredSiteFields = [
  "brand",
  "brandMark",
  "city",
  "serviceArea",
  "phone",
  "address",
  "businessDays",
  "businessHours",
  "lunchBreak",
  "holidayNotice",
  "visitNotice",
  "depositNotice",
  "paymentMethods",
  "orderChangeNotice",
  "heritageYear",
];

for (const field of requiredSiteFields) {
  if (typeof siteSource[field] !== "string" || !siteSource[field].trim()) {
    throw new Error(`content/site.json 的 ${field} 必須是非空白文字。`);
  }
}

const phoneHref = siteSource.phone.replace(/\D/g, "");
if (phoneHref.length < 7 || phoneHref.length > 15) {
  throw new Error("聯絡電話格式不正確。請輸入 7 至 15 位數字的電話號碼。");
}

const rawProducts = productSource.products;
if (!Array.isArray(rawProducts) || rawProducts.length === 0) {
  throw new Error("content/products.json 至少需要一項產品。");
}

const allowedImage = /^uploads\/products\/[^/]+\.(?:jpe?g|png|webp)$/i;
const ids = new Set();

const products = rawProducts.map((product, index) => {
  for (const field of ["id", "name", "tag", "description"]) {
    if (typeof product[field] !== "string" || !product[field].trim()) {
      throw new Error(`第 ${index + 1} 項產品的 ${field} 必須是非空白文字。`);
    }
  }

  if (ids.has(product.id)) {
    throw new Error(`產品識別碼重複：${product.id}`);
  }
  ids.add(product.id);

  const sourceImages = Array.isArray(product.images) ? product.images : [];
  const legacyImages = product.image
    ? [{src: product.image, alt: product.imageAlt || product.name}]
    : [];
  const images = (sourceImages.length > 0 ? sourceImages : legacyImages).map((image, imageIndex) => {
    if (!image || typeof image.src !== "string" || !allowedImage.test(image.src)) {
      throw new Error(`產品「${product.name}」的第 ${imageIndex + 1} 張照片路徑不合法。`);
    }

    return {
      src: image.src,
      alt: typeof image.alt === "string" && image.alt.trim()
        ? image.alt.trim()
        : product.name,
    };
  });

  if (images.length > 8) {
    throw new Error(`產品「${product.name}」最多只能有 8 張照片。`);
  }

  if (!Array.isArray(product.features) || product.features.some((item) => typeof item !== "string" || !item.trim())) {
    throw new Error(`產品「${product.name}」至少需要一項有效特色。`);
  }

  if (typeof product.visible !== "boolean") {
    throw new Error(`產品「${product.name}」的 visible 必須是布林值。`);
  }

  return {
    id: product.id.trim(),
    visible: product.visible,
    name: product.name.trim(),
    tag: product.tag.trim(),
    description: product.description.trim(),
    images,
    features: product.features.map((item) => item.trim()),
  };
});

const site = {
  ...siteSource,
  phoneHref,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteSource.address)}`,
};

const advantages = [
  {
    number: "01",
    title: `家族自 ${site.heritageYear} 年製床`,
    description: `${site.heritageYear} 年代表家族開始製作床墊，目前仍由家族經營。`,
  },
  {
    number: "02",
    title: "苑裡自家工廠",
    description: "床墊由苗栗苑裡的自家工廠製作，可到現場了解與試躺。",
  },
  {
    number: "03",
    title: site.serviceArea,
    description: "依地區與訂單條件，以自家車或貨運安排配送。",
  },
  {
    number: "04",
    title: "舊床免費回收",
    description: "配送時可一併安排舊床回收，不另外加收回收費用。",
  },
];

const deliveryItems = [
  ["01", "配送範圍", site.serviceArea],
  ["02", "配送方式", "依地區與訂單條件，由自家車或貨運安排配送。"],
  ["03", "樓層費用", "二樓及有電梯大樓不加收費用；其他特殊搬運情況請先確認。"],
  ["04", "舊床回收", "舊床回收不另外加收費用，可在安排配送時一併告知。"],
];

const faqs = [
  [
    `${site.brand}從 ${site.heritageYear} 年就成立了嗎？`,
    `${site.heritageYear} 年代表家族開始製作床墊；目前仍由家族經營。企業社實際設立年份未在網站上另行標示。`,
  ],
  ["試躺一定要提前預約嗎？", `${site.visitNotice}。建議先電話確認接待時間。`],
  ["營業時間是什麼時候？", `${site.businessDays} ${site.businessHours}，${site.lunchBreak}；${site.holidayNotice}。`],
  ["床墊下單後多久可以完成？", "一般與客製尺寸床墊的製作時間目前不在網站公開，請依款式、規格與工廠排程於下單時確認。"],
  ["可以做特殊尺寸嗎？", "可以。請提供床架內徑、預計尺寸與搬運條件，工廠會先評估再確認製作與報價。"],
  ["配送範圍包含離島嗎？", `${site.serviceArea}；實際依地區以自家車或貨運安排。`],
  ["樓層搬運會另外收費嗎？", "二樓及有電梯的大樓不加收費用；其他樓層、無電梯或特殊搬運情況，請在配送前先電話確認。"],
  ["舊床回收需要另外付費嗎？", "舊床回收不另外加收費用，安排配送時可一併確認回收需求。"],
];

const serialize = (value) => JSON.stringify(value, null, 2);
let page = fs.readFileSync(pagePath, "utf8");

const carouselImport = 'import {ProductCarousel} from "./components/ProductCarousel";';
if (!page.includes(carouselImport)) {
  page = `${carouselImport}\n\n${page}`;
}

const generatedContent = `const site = ${serialize(site)};\n\nconst advantages = ${serialize(advantages)};\n\nconst products = ${serialize(products)}.filter((product) => product.visible);\n\nconst deliveryItems = ${serialize(deliveryItems)};`;

const contentPattern = /const site = \{[\s\S]*?const deliveryItems = \[[\s\S]*?\n\];/;
if (!contentPattern.test(page)) {
  throw new Error("找不到首頁內容區塊，無法套用 CMS 資料。");
}
page = page.replace(contentPattern, generatedContent);

const generatedFaq = `const faqs = ${serialize(faqs)};\n\nfunction MattressCutaway`;
const faqPattern = /const faqs = \[[\s\S]*?\n\];\n\nfunction MattressCutaway/;
if (!faqPattern.test(page)) {
  throw new Error("找不到 FAQ 區塊，無法套用 CMS 資料。");
}
page = page.replace(faqPattern, generatedFaq);

page = page.replace(
  /家族自 [^年\n]+ 年開始製作床墊，[^。\n]+目前仍由家族經營。/g,
  `家族自 ${site.heritageYear} 年開始製作床墊，${site.brand}目前仍由家族經營。`,
);

page = page.replace("先看四種主要床墊品項。", "查看目前提供的床墊品項。");

if (!page.includes("<ProductCarousel")) {
  const oldVisual = `                  <div className={\`product-visual mattress-\${index + 1}\`}>\n                    <span className="product-index">0{index + 1}</span>\n                    <span className="product-tag">{product.tag}</span>\n                    <div className="mini-mattress" aria-hidden="true">\n                      <span /><span /><span />\n                    </div>\n                  </div>`;
  const newVisual = `                  <ProductCarousel\n                    images={product.images}\n                    productName={product.name}\n                    tag={product.tag}\n                    index={index}\n                  />`;

  if (!page.includes(oldVisual)) {
    throw new Error("找不到產品圖片區塊，無法啟用多圖輪播。");
  }
  page = page.replace(oldVisual, newVisual);
}

fs.writeFileSync(pagePath, page);

console.log(`CMS content applied: ${products.filter((product) => product.visible).length} visible products.`);
