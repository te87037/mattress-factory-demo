# 官網內容後台與預覽流程

## 老闆可編輯的內容

- 產品名稱、標籤、描述、特色、顯示狀態
- 產品照片與照片替代文字
- 電話、地址、服務區域與配送範圍
- 營業日、營業時間、午休與國定假日說明
- 試躺、訂金、付款與訂單修改說明

版面、CSS、導覽結構與部署設定不在後台開放。

## Pages CMS

1. 開啟 `https://app.pagescms.org/`
2. 使用 GitHub 登入
3. 安裝 Pages CMS GitHub App，僅授權 `te87037/mattress-factory-demo`
4. 選擇 `cms-preview` 分支
5. 修改「床墊產品」或「聯絡與營業資訊」
6. 儲存後，資料只會寫入 `cms-preview`，不會直接更動 `main`
7. 確認預覽後，按「送出審核」建立 Pull Request
8. 合併至 `main` 後，正式 GitHub Pages 官網才會更新

## Cloudflare Pages 分支預覽（一次性設定）

GitHub Pages 繼續作為正式站。Cloudflare Pages 只負責提供分支 Preview 網址。

- 連接 GitHub 儲存庫：`te87037/mattress-factory-demo`
- Production branch：`main`
- Framework preset：Next.js (Static HTML Export)
- Build command：`npm run build`
- Build output directory：`out`
- Root directory：留空
- 開啟所有非 Production branch 的 Preview deployments

完成後，`cms-preview` 每次有新提交都會產生或更新獨立的 `pages.dev` 預覽網址，不影響正式 GitHub Pages 網址。

## 安全限制

- 圖片只允許 JPG、JPEG、PNG、WebP
- 圖片路徑只能位於 `public/uploads/products`
- 聯絡電話、必填文字、產品識別碼與特色會在建置前驗證
- `main` 部署工作只監聽 `main`
- 預覽分支會執行 TypeScript 與靜態建置檢查
