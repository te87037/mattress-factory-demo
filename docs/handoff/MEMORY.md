# 凱麗企業社床墊工廠官網 Memory

> 最後整理：2026-08-04（Asia/Taipei）
>
> 本文件保存專案現況與不可遺漏的維運資訊。Token、密碼與私人憑證不得寫入本文件。

## 專案識別

- GitHub repository：`te87037/mattress-factory-demo`
- 正式分支：`main`
- 官網：`https://te87037.github.io/mattress-factory-demo/`
- Sanity Studio：`https://te87037.github.io/mattress-factory-demo/studio/`
- Sanity Project ID：`1n448ksq`
- Sanity Dataset：`production`
- 網站技術：Next.js 靜態匯出 + GitHub Pages
- 內容後台：Sanity Studio，自行託管於 GitHub Pages 的 `/studio/`
- Node.js：GitHub Actions 使用 Node 22

## 老闆日常操作

老闆平常只需要使用 Sanity Studio：

1. 登入後台。
2. 修改「聯絡與營業資訊」或「床墊產品」。
3. 上傳或排序產品照片。
4. 按「發布」。
5. 等待自動部署。

官網左下角有低透明度齒輪，點擊可進入後台。這個入口只是方便使用，不是權限保護；真正權限由 Sanity 帳號控制。

## 官網目前支援的後台內容

### 聯絡與營業資訊

包含品牌、電話、地址、營業日、營業時間、午休、假日、試躺、配送、付款與其他官網文字。

### 床墊產品

- 可新增任意數量產品。
- 可設定排序。
- 可隱藏或顯示產品。
- 可填寫名稱、標籤、描述與特色。
- 每項產品最多使用 8 張照片。
- 圖片支援 JPG、PNG、WebP。
- 第一張為封面。
- 官網支援箭頭、圓點與手機左右滑動。
- 舊的單張照片欄位仍相容。

## 部署模型

主要 workflow：`.github/workflows/deploy-pages.yml`

觸發方式：

- Push 到 `main`。
- GitHub Actions 手動執行。
- `repository_dispatch`：`sanity-content-update`。
- 每 15 分鐘排程。

排程為每小時 `00、15、30、45` 分。

一般內容發布後約 5～20 分鐘在官網生效。GitHub Actions concurrency 設為：

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

新部署應排隊，不應取消正在執行的舊部署。

## 建置流程

`npm run build` 前會自動執行：

1. `scripts/sync-sanity-content.mjs`
2. 從 Sanity 讀取已發布內容。
3. 更新 `content/site.json`。
4. 更新 `content/products.json`。
5. 下載 Sanity 產品圖片到 `public/uploads/products/`。
6. `scripts/apply-content.mjs` 將資料套用到 Next.js 頁面。
7. Next.js 輸出靜態網站到 `out/`。
8. `studio/` 獨立建置。
9. `studio/dist/` 複製到 `out/studio/`。
10. 整個 `out/` 發布到 GitHub Pages。

Sanity 資料不完整或暫時無法取得時，會使用 repository 內既有內容作為 fallback，不會把網站變成空白。

## GitHub Actions 設定

### Variables

- `SANITY_PROJECT_ID=1n448ksq`
- `SANITY_DATASET=production`

### Secret

只使用：

- `SANITY_TOKEN`

`SANITY_TOKEN` 只供手動重新匯入初始內容使用。官網讀取公開 Dataset 不需要 Token，Studio 由登入者自己的 Sanity Session 寫入。

不要建立或依賴：

- `SANITY_WRITE_TOKEN`
- `SANITY_AUTH_TOKEN`
- `SANITY_API_READ_TOKEN`

舊的 `SANITY_STUDIO_HOST` 不再使用，可以刪除。

## Sanity 設定

自架 Studio 必須保留 CORS：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

Origin 不包含 `/mattress-factory-demo/studio/`。

## 手動部署

GitHub：

`Actions → Deploy website and Studio to GitHub Pages → Run workflow → main`

部署完成後查看：

`docs/GITHUB_PAGES_STATUS.md`

應顯示：

- 官網與 Studio 建置：`success`
- GitHub Pages 發布：`success`
- 本次部署電話：應與 Sanity 已發布電話一致
- Workflow Run ID：最新執行編號

## 手動重新匯入 Sanity

Workflow：`.github/workflows/import-sanity-content.yml`

用途只限：

- Sanity Dataset 被清空。
- 建立新 Dataset。
- 確認 repository 內容要覆蓋 Sanity。

此 workflow 使用 `SANITY_TOKEN`，呼叫 `scripts/import-to-sanity.mjs`。

警告：

- 會 `createOrReplace` 固定 ID 的 site settings 與 repository 產品。
- 可能覆蓋 Sanity 現有內容。
- 不會把 repository 的產品圖片上傳回 Sanity。
- 不可當作日常發布功能。

## 重要檔案

- `.github/workflows/deploy-pages.yml`：官網與 Studio 發布。
- `.github/workflows/import-sanity-content.yml`：危險的手動初始資料匯入。
- `scripts/sync-sanity-content.mjs`：Sanity → repository 建置內容。
- `scripts/import-to-sanity.mjs`：repository → Sanity 初始內容。
- `scripts/apply-content.mjs`：將 JSON 內容套用至網站。
- `content/site.json`：網站聯絡與企業資訊 fallback。
- `content/products.json`：產品 fallback。
- `studio/sanity.config.ts`：Studio 設定與導覽結構。
- `studio/sanity.cli.ts`：Studio Project、Dataset 與 GitHub Pages base path。
- `studio/schemaTypes/`：Sanity Schema。
- `docs/GITHUB_PAGES_STATUS.md`：最新部署結果。
- `docs/SANITY_SETUP.md`：Sanity 基礎設定說明。
- `docs/handoff/SKILL.md`：完整操作與故障排查手冊。

## 已修正過的重要問題

### Sanity 導覽結構 ID

根清單、單例文件與產品清單使用固定 ID，避免 Studio 載入時出現：

```text
`id` is required for lists
```

### DividerBuilder

`S.divider()` 不支援 `.id()`。禁止改成：

```ts
S.divider().id("...")
```

正確寫法：

```ts
S.divider()
```

### GitHub Pages 部署互相取消

曾因 `cancel-in-progress: true` 導致排程與手動部署互相取消，目前已改為 `false`。

### Sanity-hosted Studio 權限不足

目前不使用 `sanity deploy`，Studio 與官網一起建置後發布到 GitHub Pages，因此不需要 Deploy Studio Token。

## 安全與權限

- 不在 repository 保存 Token 值。
- 不在聊天、Issue、Email 或截圖中傳 Token。
- 老闆應使用自己的 GitHub 與 Sanity 帳號。
- 不共用原開發者密碼。
- 老闆需有 Sanity 編輯權限。
- 需要管理 Secrets、Variables、Pages 或成員時，老闆需有 GitHub repository Admin 權限。
- 隱藏後台齒輪不構成安全控制。

## 移交完成條件

- 老闆能登入 Studio。
- 老闆能修改電話並發布。
- 老闆能新增、排序、隱藏產品。
- 老闆能上傳多張產品照片。
- 老闆知道發布後需等待自動部署。
- 老闆知道如何手動執行部署。
- 老闆能查看部署狀態檔。
- GitHub Variables 與 `SANITY_TOKEN` 已由老闆帳號管理。
- Sanity CORS 與專案成員已完成交接。

## 回應未來維運問題時的原則

1. 先判斷是「Sanity 未發布」、「部署未執行」、「部署失敗」或「瀏覽器快取」。
2. 先查看 `docs/GITHUB_PAGES_STATUS.md`，不要猜測部署結果。
3. 需要查 CI 時，查看最新 GitHub Actions 的第一個失敗步驟。
4. 不因網站沒更新就直接重設 Token。
5. 所有程式修改先使用分支與 PR，建置通過後再合併。
6. 不直接編輯 `out/`，因為每次部署都會重建。
7. 不刪除 `production` Dataset、CORS Origin 或 GitHub Pages workflow。
