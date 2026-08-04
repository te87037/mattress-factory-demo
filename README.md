# 凱麗企業社床墊工廠官網

這是凱麗企業社正式官網專案，採用 **Next.js 靜態網站 + Sanity Studio 內容後台 + GitHub Pages 自動部署**。

> **Pages CMS／PageCMS 已完全停用。**
>
> 不要再使用 `https://app.pagescms.org/`、`cms-preview` 分支、`sanity-cms` 分支或 Cloudflare Pages 預覽流程。所有內容修改都在 Sanity Studio 完成。

## 正式網址

- 官網：<https://te87037.github.io/mattress-factory-demo/>
- 內容後台（Sanity Studio）：<https://te87037.github.io/mattress-factory-demo/studio/>
- GitHub 專案：<https://github.com/te87037/mattress-factory-demo>
- GitHub Actions：<https://github.com/te87037/mattress-factory-demo/actions>
- 官網部署工作：<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>
- 最新部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
- 完整老闆交接手冊：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/SKILL.md>
- 專案維運記憶：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/MEMORY.md>

官網左下角有一個低透明度齒輪，點擊後會開啟 Sanity Studio。此入口只是方便使用，真正的存取權限由 Sanity 帳號控制。

## 老闆日常更新

### 修改電話、地址或營業時間

1. 開啟 <https://te87037.github.io/mattress-factory-demo/studio/>。
2. 使用已加入此 Sanity 專案的帳號登入。
3. 點「聯絡與營業資訊」。
4. 修改電話、地址、營業時間或其他欄位。
5. 按右上角「發布」。
6. 等待 GitHub Pages 自動重新部署。

只儲存草稿不會顯示在官網，必須按「發布」。

### 新增產品

1. 開啟 Sanity Studio。
2. 點「床墊產品」。
3. 按右上角「＋」新增產品。
4. 填寫名稱、排序、標籤、描述與產品特色。
5. 上傳最多 8 張 JPG、PNG 或 WebP 照片。
6. 拖曳調整照片順序；第一張為封面。
7. 確認「顯示於官網」已開啟。
8. 按「發布」。

產品發布後會自動加入官網，不需要修改程式碼或手動填寫系統 ID。

## 內容多久生效

部署排程每 15 分鐘執行一次，時間為每小時的 `00、15、30、45` 分。建置通常另需 3～8 分鐘，因此發布後一般約 5～20 分鐘生效。

急需立即更新時：

1. 開啟 <https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>。
2. 點右側「Run workflow」。
3. Branch 選 `main`。
4. 再按綠色「Run workflow」。
5. 等待 `build`、`deploy`、`record-status` 都完成。
6. 查看 <https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>，確認建置與發布皆為 `success`。

看到舊內容時，可重新整理、使用無痕視窗，或在網址後加入版本參數，例如：

`https://te87037.github.io/mattress-factory-demo/?v=20260804`

## Sanity 專案

- Project ID：`1n448ksq`
- Dataset：`production`
- Sanity 管理介面：<https://www.sanity.io/manage/project/1n448ksq>

自架 Studio 必須在 Sanity 管理介面保留以下 CORS：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

CORS Origin 只填網域，不要填 `/mattress-factory-demo/studio/`。

## GitHub 設定

Repository Variables：

- `SANITY_PROJECT_ID=1n448ksq`
- `SANITY_DATASET=production`

Repository Secret：

- `SANITY_TOKEN`

設定位置：

- Variables：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>
- Secrets：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>
- GitHub Pages：<https://github.com/te87037/mattress-factory-demo/settings/pages>

`SANITY_TOKEN` 只供手動重新匯入初始內容使用。官網讀取公開 Dataset 不需要 Token，Sanity Studio 編輯則使用登入者自己的 Sanity Session。

不要建立或依賴舊的：

- `SANITY_WRITE_TOKEN`
- `SANITY_AUTH_TOKEN`
- `SANITY_API_READ_TOKEN`
- `SANITY_STUDIO_HOST`

## 手動重新匯入內容

工作流程：<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>

這不是日常發布功能。它會將 repository 內的 `content/site.json` 與 `content/products.json` 寫回 Sanity，可能覆蓋既有資料。只有 Dataset 被清空、建立新 Dataset，或已確認 repository 內容才是正確版本時才執行。

## 本機開發

```bash
npm install
npm run dev
```

本機官網：<http://localhost:3000>

正式檢查：

```bash
npm run typecheck
npm run build
```

Sanity Studio：

```bash
cd studio
npm install
npm run dev
```

程式修改請使用分支與 Pull Request，建置成功後再合併到 `main`。不要直接編輯 `out/`，因為每次部署都會重新產生。

## 重要檔案

- `.github/workflows/deploy-pages.yml`：建置並發布官網與 Studio。
- `.github/workflows/import-sanity-content.yml`：手動將 repository 內容寫回 Sanity。
- `scripts/sync-sanity-content.mjs`：Sanity → 建置內容與圖片。
- `scripts/import-to-sanity.mjs`：repository → Sanity 初始匯入。
- `content/site.json`：聯絡與企業資訊 fallback。
- `content/products.json`：產品資料 fallback。
- `studio/`：Sanity Studio 原始碼。
- `docs/handoff/SKILL.md`：完整操作、部署與故障排查。
- `docs/handoff/MEMORY.md`：專案現況與不可遺漏設定。

## 技術架構

- Next.js App Router
- React
- TypeScript
- Static Export
- Sanity Studio / Content Lake
- GitHub Actions
- GitHub Pages
