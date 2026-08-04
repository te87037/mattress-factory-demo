# 凱麗企業社床墊工廠官網 Memory

> 最後整理：2026-08-04（Asia/Taipei）
>
> 本文件保存目前真實架構、網址、部署方式與不可遺漏設定。不得在本文件寫入 Token、密碼或私人憑證。

## 1. 現行架構

- 正式網站：Next.js 靜態匯出
- 內容後台：Sanity Studio
- 內容資料：Sanity Content Lake
- 正式託管：GitHub Pages
- 自動化：GitHub Actions
- 正式分支：`main`
- Node.js：22

**Pages CMS／PageCMS 已完全淘汰。**

不要使用：

- `https://app.pagescms.org/`
- `cms-preview`
- `sanity-cms`
- Cloudflare Pages 預覽
- Pages CMS GitHub App
- `.pages.yml`
- CMS 建立 Pull Request 的舊發布流程

## 2. 專案識別

- Repository：`te87037/mattress-factory-demo`
- Repository URL：<https://github.com/te87037/mattress-factory-demo>
- 官網：<https://te87037.github.io/mattress-factory-demo/>
- Studio：<https://te87037.github.io/mattress-factory-demo/studio/>
- Sanity Project ID：`1n448ksq`
- Sanity Dataset：`production`
- Sanity Manage：<https://www.sanity.io/manage/project/1n448ksq>

## 3. 維運網址

- GitHub Actions：<https://github.com/te87037/mattress-factory-demo/actions>
- Deploy workflow：<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>
- Import workflow：<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>
- 部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
- Variables：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>
- Secrets：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>
- Pages 設定：<https://github.com/te87037/mattress-factory-demo/settings/pages>
- 完整 Skill：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/SKILL.md>

## 4. 老闆日常資料流

1. 老闆開啟 Sanity Studio。
2. 修改聯絡資訊或產品。
3. 按「發布」。
4. GitHub Actions 每 15 分鐘讀取 Sanity。
5. 建置官網與 Studio。
6. 發布到 GitHub Pages。
7. 一般約 5～20 分鐘生效。

官網左下角有低透明度齒輪，可開啟 Studio。此齒輪不是安全措施，真正權限由 Sanity 帳號與角色控制。

## 5. 後台功能

### 聯絡與營業資訊

可管理：

- 品牌名稱與品牌縮寫
- 電話
- 地址
- 服務區域
- 配送範圍
- 營業日與營業時間
- 午休與假日說明
- 試躺說明
- 訂金與付款方式
- 訂單修改或取消說明
- 家族開始製床年份

### 床墊產品

可管理：

- 新增任意數量產品
- 排序
- 顯示或隱藏
- 名稱
- 標籤
- 描述
- 特色
- 最多 8 張照片

圖片規則：

- JPG、PNG、WebP
- 第一張為封面
- 可拖曳排序
- 官網支援箭頭、圓點與手機滑動
- 舊單張照片欄位仍相容

## 6. 部署時間

排程：

- 每小時 `00` 分
- 每小時 `15` 分
- 每小時 `30` 分
- 每小時 `45` 分

建置通常 3～8 分鐘。Sanity 發布後一般 5～20 分鐘出現在正式官網。

手動立即部署：

1. 開啟 Deploy workflow。
2. 點「Run workflow」。
3. Branch 選 `main`。
4. 執行。
5. 確認 `build`、`deploy`、`record-status` 完成。
6. 查看 `docs/GITHUB_PAGES_STATUS.md`。

## 7. GitHub Actions 設定

### Variables

- `SANITY_PROJECT_ID=1n448ksq`
- `SANITY_DATASET=production`

### Secret

只使用：

- `SANITY_TOKEN`

用途：手動重新匯入初始內容。

不使用：

- `SANITY_WRITE_TOKEN`
- `SANITY_AUTH_TOKEN`
- `SANITY_API_READ_TOKEN`
- `SANITY_STUDIO_HOST`

官網讀取 public Dataset 不需要 Token。Studio 使用登入者自己的 Sanity Session。

## 8. Sanity 設定

### CORS

必須保留：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

不要填：

`https://te87037.github.io/mattress-factory-demo/studio/`

只填：

`https://te87037.github.io`

### Studio 託管

- 不使用 `sanity deploy`
- 不使用 `*.sanity.studio`
- Studio 與官網一起部署
- Studio build 複製到 `out/studio/`

## 9. 自動建置流程

`.github/workflows/deploy-pages.yml` 會：

1. Checkout `main`。
2. 安裝 Node.js 22。
3. 安裝網站依賴。
4. 執行 `npm run build`。
5. `prebuild` 呼叫 `prepare-content`。
6. 從 Sanity 讀取已發布資料。
7. 更新 `content/site.json`。
8. 更新 `content/products.json`。
9. 下載產品照片到 `public/uploads/products/`。
10. 執行 `scripts/apply-content.mjs`。
11. Next.js 建立 `out/index.html`。
12. 安裝 Studio 依賴。
13. 建立 Studio。
14. 複製 `studio/dist/` 到 `out/studio/`。
15. 驗證 `out/studio/index.html`。
16. 上傳 Pages artifact。
17. 發布 GitHub Pages。
18. 寫入 `docs/GITHUB_PAGES_STATUS.md`。

Sanity 暫時連線失敗或資料不完整時，使用 repository fallback，不會把網站清空。

## 10. 部署 concurrency

必須維持：

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

歷史上曾因 `true` 導致排程與手動部署互相取消。目前必須排隊執行。

## 11. 手動匯入功能

Workflow：`.github/workflows/import-sanity-content.yml`

腳本：`scripts/import-to-sanity.mjs`

行為：

- 讀取 repository fallback JSON
- 對 Sanity 執行 `createOrReplace`
- 可能覆蓋相同 ID 的現有資料
- 不會上傳產品照片到 Sanity

只在 Dataset 被清空、新建 Dataset 或已確認 repository 內容正確時使用。不可當成日常發布功能。

## 12. 重要檔案

- `README.md`：專案入口與操作摘要
- `CMS_SETUP.md`：Sanity CMS 操作入口，檔名沿用但內容不再是 Pages CMS
- `docs/SANITY_SETUP.md`：Sanity 設定與操作
- `docs/SANITY_SETUP_RESULT.md`：目前啟用狀態
- `docs/GITHUB_PAGES_STATUS.md`：最新部署狀態，由 workflow 自動更新
- `docs/handoff/SKILL.md`：完整交接操作
- `docs/handoff/MEMORY.md`：本文件
- `.github/workflows/deploy-pages.yml`：正式部署
- `.github/workflows/import-sanity-content.yml`：高風險手動匯入
- `.github/workflows/validate-preview.yml`：官網 PR 建置驗證；名稱雖保留 preview，但不再屬於 Pages CMS
- `.github/workflows/validate-sanity-studio.yml`：Studio PR 建置驗證
- `scripts/sync-sanity-content.mjs`：Sanity → repository build data
- `scripts/import-to-sanity.mjs`：repository → Sanity
- `scripts/apply-content.mjs`：JSON → Next.js 頁面
- `content/site.json`：聯絡資訊 fallback
- `content/products.json`：產品 fallback
- `studio/`：Sanity Studio

## 13. 已處理的重要事故

### Pages CMS 淘汰

舊 Pages CMS 設定與 workflow 已從 `main` 移除，但歷史分支可能仍存在。任何維運不得回到 Pages CMS。

### Sanity-hosted Studio 失敗

曾嘗試部署到 `kaili-mattress-admin.sanity.studio`，因權限不足失敗。現在改成 GitHub Pages 自架 Studio，舊網址無效。

### Studio list ID 錯誤

根清單、單例文件與產品清單使用固定 ID，避免：

```text
`id` is required for lists
```

### DividerBuilder 錯誤

禁止：

```ts
S.divider().id("content-divider")
```

正確：

```ts
S.divider()
```

### 部署互相取消

`cancel-in-progress` 已改為 `false`。

## 14. 安全原則

- 不在 repository 保存 Token 值。
- 不在聊天、Issue、Email 或截圖傳 Token。
- 老闆使用自己的 GitHub 與 Sanity 帳號。
- 不共用原開發者密碼。
- 後台入口隱密不等於安全。
- 不刪除 `production` Dataset。
- 不刪除正確 CORS Origin。
- 不直接編輯 `out/`。
- 程式修改先分支、PR、CI，再合併 `main`。

## 15. 未來處理問題的順序

1. 確認 Sanity 是否真的按「發布」。
2. 查看 `docs/GITHUB_PAGES_STATUS.md`。
3. 查看最新 GitHub Actions。
4. 判斷是 Sanity 資料、建置、部署或瀏覽器快取。
5. 必要時手動部署。
6. 只有明確出現 `401` 或 `403` 才處理 Token。
7. 不要因內容沒更新就回頭使用 PageCMS。

## 16. 移交完成條件

- 老闆能登入 Studio。
- 老闆能修改電話並發布。
- 老闆能新增產品。
- 老闆能上傳與排序多張照片。
- 老闆知道發布後約 5～20 分鐘生效。
- 老闆知道如何手動部署。
- 老闆能查看最新部署狀態。
- 老闆知道 PageCMS 已完全停用。
- 老闆不使用 `cms-preview` 或 `sanity-cms`。
- GitHub Variables 正確。
- Secret 只使用 `SANITY_TOKEN`。
- Sanity CORS 正確。
- GitHub Pages 使用 GitHub Actions。
