# 床墊工廠官網 Demo

以「工廠直營、實在透明」為核心的 Next.js 單頁官網示範。

## 特色

- 工廠直營視覺：暖白、深藍灰、磚紅、木色
- 手機與桌面響應式版面
- 床墊分層結構示意圖（純 SVG，不依賴外部圖庫）
- 產品卡、材料說明、製作流程、尺寸客製、FAQ、聯絡 CTA
- GitHub Pages 自動部署工作流程
- 靜態輸出，可改部署到 Vercel、Cloudflare Pages 或一般主機

## 修改品牌資料

開啟 `app/page.tsx`，修改最上方 `site`：

```ts
const site = {
  brand: "厚眠床墊工廠",
  city: "新北市",
  phone: "02-0000-0000",
  lineUrl: "https://line.me/R/ti/p/@your-line-id",
  address: "新北市（請換成實際地址）",
};
```

產品資料在同一個檔案的 `products` 陣列中。

## 本機執行

```bash
npm install
npm run dev
```

瀏覽 `http://localhost:3000`。

## GitHub Pages

1. Repository → **Settings** → **Pages**。
2. Source 選擇 **GitHub Actions**。
3. `.github/workflows/deploy-pages.yml` 會自動建置及部署。

網站網址：`https://te87037.github.io/mattress-factory-demo/`

`next.config.ts` 會在 GitHub Actions 中自動套用 repository `basePath`，本機開發則維持 `/`。

部署觸發紀錄：2026-08-03 11:57 Asia/Taipei

## 正式上線前應替換

- 品牌與 Logo
- 工廠／產品實拍照片
- 真實材料、價格、保固與配送條件
- LINE、電話、地址、營業時間
- 隱私權政策與表單資料處理方式

## 技術

- Next.js App Router
- React
- TypeScript
- 純 CSS
- Static Export
- GitHub Actions / GitHub Pages
