# 凱麗企業社 Sanity Studio 設定與操作

> **Pages CMS／PageCMS 已停用。**
>
> 現在唯一的內容後台是 Sanity Studio。不要使用 `app.pagescms.org`、`cms-preview`、`sanity-cms` 或 Cloudflare Pages 預覽流程。

## 1. 正式網址

- 官網：<https://te87037.github.io/mattress-factory-demo/>
- Sanity Studio：<https://te87037.github.io/mattress-factory-demo/studio/>
- GitHub repository：<https://github.com/te87037/mattress-factory-demo>
- GitHub Actions：<https://github.com/te87037/mattress-factory-demo/actions>
- 手動部署：<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>
- 手動匯入：<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>
- 最新部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
- Sanity 管理介面：<https://www.sanity.io/manage/project/1n448ksq>

官網左下角有低透明度齒輪，可直接開啟 Studio。

## 2. 老闆每天怎麼使用

### 修改電話、地址、營業時間

1. 開啟 Sanity Studio。
2. 登入自己的 Sanity 帳號。
3. 點「聯絡與營業資訊」。
4. 修改需要的欄位。
5. 點右上角「發布」。
6. 等待自動部署。

注意：只儲存草稿不會顯示在官網，必須按「發布」。

### 新增床墊產品

1. 開啟 Sanity Studio。
2. 點「床墊產品」。
3. 點右上角「＋」。
4. 填寫產品名稱。
5. 填寫排序；數字越小越前面。
6. 填寫標籤、描述與產品特色。
7. 上傳照片。
8. 開啟「顯示於官網」。
9. 點「發布」。

產品發布後會自動加入官網，不需修改程式碼，也不需手動填系統 ID。

### 產品照片規則

- 每項產品最多使用 8 張。
- 支援 JPG、PNG、WebP。
- 第一張為封面。
- 可拖曳排序。
- 手機版官網可左右滑動。
- 建議單張小於 2 MB。
- HEIC 請先轉成 JPG 或 WebP。

### 隱藏產品

1. 打開該產品。
2. 關閉「顯示於官網」。
3. 按「發布」。

暫時下架不要直接刪除，以免失去內容與照片。

## 3. 發布後多久生效

部署每 15 分鐘執行一次：

- 每小時 `00` 分
- 每小時 `15` 分
- 每小時 `30` 分
- 每小時 `45` 分

GitHub Pages 建置通常另需 3～8 分鐘，因此發布後一般約 5～20 分鐘生效。

若官網仍顯示舊內容：

1. 確認 Sanity 已按「發布」。
2. 查看最新 GitHub Actions。
3. 查看 `docs/GITHUB_PAGES_STATUS.md`。
4. 重新整理或使用無痕視窗。
5. 在官網網址後加版本參數，例如 `?v=20260804`。

## 4. 手動立即部署

開啟：

<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>

步驟：

1. 登入 GitHub。
2. 點「Run workflow」。
3. Branch 選 `main`。
4. 點綠色「Run workflow」。
5. 等待 `build` 完成。
6. 等待 `deploy` 完成。
7. 等待 `record-status` 完成。
8. 開啟部署狀態文件。
9. 確認建置與發布都是 `success`。
10. 確認「本次部署電話」與 Sanity 已發布電話一致。

## 5. Sanity 專案設定

### 基本資料

- Project ID：`1n448ksq`
- Dataset：`production`
- Studio 託管方式：GitHub Pages `/studio/`
- 不使用 `sanity deploy`
- 不使用 `*.sanity.studio` 網址

### CORS

開啟：<https://www.sanity.io/manage/project/1n448ksq>

進入：

`Settings → API settings → CORS Origins`

新增或保留：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

錯誤填法：

`https://te87037.github.io/mattress-factory-demo/studio/`

正確填法：

`https://te87037.github.io`

### 成員交接

1. 老闆建立自己的 Sanity 帳號。
2. 管理者在 Sanity 專案邀請老闆。
3. 老闆開啟 Studio 並登入。
4. 測試修改一個欄位。
5. 測試新增產品。
6. 測試上傳照片。
7. 測試按「發布」。

不要共用原開發者的帳號或密碼。

## 6. GitHub Actions 設定

### Variables

設定頁：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>

- `SANITY_PROJECT_ID`：`1n448ksq`
- `SANITY_DATASET`：`production`

### Secret

設定頁：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>

只需要：

- `SANITY_TOKEN`

用途：手動將 repository 內的初始內容寫回 Sanity。

不要再使用：

- `SANITY_WRITE_TOKEN`
- `SANITY_AUTH_TOKEN`
- `SANITY_API_READ_TOKEN`
- `SANITY_STUDIO_HOST`

安全規則：

- Token 不可放進文件、程式碼、Issue、聊天、Email 或截圖。
- Token 外洩後，立即在 Sanity 撤銷並建立新的 Token。
- 更新 Token 時，只在 GitHub Secrets 頁面輸入。

## 7. 自動部署流程

主要 workflow：`.github/workflows/deploy-pages.yml`

觸發方式：

- Push 到 `main`。
- 手動 Run workflow。
- `repository_dispatch` 的 `sanity-content-update`。
- 每 15 分鐘排程。

流程：

1. Checkout `main`。
2. 使用 Node.js 22。
3. 安裝官網依賴。
4. 從 Sanity 讀取已發布內容。
5. 更新 `content/site.json`。
6. 更新 `content/products.json`。
7. 下載產品圖片到 `public/uploads/products/`。
8. 建置 Next.js 靜態網站。
9. 安裝 Studio 依賴。
10. 建置 Sanity Studio。
11. 將 Studio 複製到 `out/studio/`。
12. 發布整個 `out/` 到 GitHub Pages。
13. 更新 `docs/GITHUB_PAGES_STATUS.md`。

部署 concurrency 使用：

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

新的部署會排隊，不應取消正在執行的部署。

## 8. 手動重新匯入 Sanity

開啟：

<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>

這不是日常操作。它會把 repository 的 `content/site.json` 與 `content/products.json` 寫回 Sanity，可能覆蓋同 ID 的資料。

只有以下情況才執行：

- Dataset 被清空。
- 建立新的 Dataset。
- 已確認 repository 內容才是正確版本。

步驟：

1. 確認 GitHub Secret `SANITY_TOKEN` 存在。
2. 開啟匯入 workflow。
3. 點「Run workflow」。
4. Branch 選 `main`。
5. 等待成功。
6. 回到 Studio 檢查資料。
7. 再執行一次正式部署。

匯入腳本不會把 repository 產品照片上傳回 Sanity，產品照片仍需在 Studio 上傳。

## 9. PageCMS 已淘汰

下列舊項目不再使用：

- `https://app.pagescms.org/`
- `cms-preview` 分支
- `sanity-cms` 分支
- Pages CMS GitHub App
- `.pages.yml`
- `cms-submit-review.yml`
- Cloudflare Pages Preview
- CMS 儲存後建立 Pull Request 的流程

目前正確資料流：

`Sanity Studio 發布 → GitHub Actions 建置 → GitHub Pages 官網`

## 10. 相關文件

- 專案 README：<https://github.com/te87037/mattress-factory-demo/blob/main/README.md>
- CMS 說明入口：<https://github.com/te87037/mattress-factory-demo/blob/main/CMS_SETUP.md>
- 完整交接手冊：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/SKILL.md>
- 專案 Memory：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/MEMORY.md>
- 最新部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
