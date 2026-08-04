---
name: mattress-factory-owner-handoff
description: 維護、發布與排查凱麗企業社床墊工廠官網及 Sanity 後台。適用於老闆日常更新、GitHub Pages 部署、Sanity 設定、產品新增、照片管理與故障排查。
---

# 凱麗企業社官網維運 Skill

## 1. 使用範圍

這份文件交給老闆、網站接手人員或協助維運的 AI 使用。

日常內容更新不需要修改程式碼，也不需要進入 GitHub。只有網站沒有更新、需要重新部署、修改版面或更換技術設定時，才需要操作 GitHub。

## 2. 重要網址

- 官網：`https://te87037.github.io/mattress-factory-demo/`
- 內容後台：`https://te87037.github.io/mattress-factory-demo/studio/`
- GitHub 專案：`https://github.com/te87037/mattress-factory-demo`
- 部署狀態：GitHub 專案內的 `docs/GITHUB_PAGES_STATUS.md`

官網左下角有一個低透明度齒輪，可直接開啟後台。

## 3. 老闆日常更新流程

### 3.1 修改電話、地址、營業時間或其他資訊

1. 開啟內容後台。
2. 使用 Sanity 帳號登入。
3. 進入「聯絡與營業資訊」。
4. 修改需要調整的欄位。
5. 按右上角「發布」。
6. 等待下一次官網部署。

只按「儲存草稿」不會出現在官網，必須按「發布」。

### 3.2 新增產品

1. 開啟內容後台。
2. 進入「床墊產品」。
3. 按「＋」新增文件。
4. 填寫產品名稱、排序、標籤、描述與特色。
5. 上傳產品照片。
6. 確認「顯示於官網」已開啟。
7. 按「發布」。

產品不需要手動填寫系統 ID。官網會依「排序」欄位顯示，數字越小越前面。

### 3.3 管理產品照片

- 每項產品最多使用 8 張照片。
- 支援 JPG、PNG、WebP。
- 第一張照片會作為封面。
- 可在後台拖曳調整照片順序。
- 官網支援左右箭頭、圓點及手機左右滑動。
- 建議單張圖片控制在 2 MB 以內，避免部署時間過長。
- 不建議使用 HEIC；請先轉成 JPG 或 WebP。

### 3.4 暫時隱藏產品

1. 打開該產品。
2. 關閉「顯示於官網」。
3. 按「發布」。

不要為了暫時下架而刪除產品，關閉顯示即可保留資料與照片。

## 4. 內容何時會出現在官網

內容發布後，GitHub Pages 每 15 分鐘自動重新建置一次。

部署時間通常還需要約 3～8 分鐘，因此一般會在發布後 5～20 分鐘生效。排程時間為每小時的：

- `00` 分
- `15` 分
- `30` 分
- `45` 分

部署採排隊執行，不會再因新任務啟動而取消正在執行的任務。

看到舊內容時，先以重新整理或無痕視窗確認。必要時可在網址後加入任意版本參數，例如：

`https://te87037.github.io/mattress-factory-demo/?v=20260804`

## 5. 手動立即部署

內容很急、不想等 15 分鐘排程時：

1. 登入 GitHub。
2. 開啟 `te87037/mattress-factory-demo`。
3. 點上方「Actions」。
4. 左側選擇「Deploy website and Studio to GitHub Pages」。
5. 點右側「Run workflow」。
6. Branch 選擇 `main`。
7. 再按一次綠色「Run workflow」。
8. 等待 `build`、`deploy` 與 `record-status` 完成。

部署完成後，確認：

- `build` 為綠色成功。
- `deploy` 為綠色成功。
- `docs/GITHUB_PAGES_STATUS.md` 顯示：
  - 官網與 Studio 建置：`success`
  - GitHub Pages 發布：`success`
  - Workflow Run ID 為最新執行編號。

狀態檔會記錄本次同步到官網的電話，可用來確認 Sanity 新資料是否真的被抓到。

## 6. 自動部署的技術流程

主要工作流程：`.github/workflows/deploy-pages.yml`

觸發條件：

- `main` 分支有新提交。
- GitHub Actions 手動執行。
- 收到 `repository_dispatch` 的 `sanity-content-update` 事件。
- 每 15 分鐘排程執行。

建置順序：

1. Checkout `main`。
2. 安裝 Node.js 22。
3. 安裝官網依賴。
4. 執行 `npm run build`。
5. `prebuild` 先執行：
   - 從 Sanity 讀取已發布內容。
   - 將資料同步到 `content/site.json` 與 `content/products.json`。
   - 下載 Sanity 產品照片到 `public/uploads/products/`。
   - 將內容套用到 Next.js 頁面。
6. 安裝 `studio/` 依賴。
7. 建置 Sanity Studio。
8. 將 `studio/dist/` 複製到 `out/studio/`。
9. 確認 `out/index.html` 與 `out/studio/index.html` 存在。
10. 上傳 GitHub Pages artifact。
11. 發布到 GitHub Pages。
12. 更新 `docs/GITHUB_PAGES_STATUS.md`。

Sanity 暫時連線失敗或內容不完整時，程式會保留 repository 內既有內容，不會把網站清空。

## 7. 必要的 GitHub 設定

### Repository Variables

位置：`Settings → Secrets and variables → Actions → Variables`

- `SANITY_PROJECT_ID`：`1n448ksq`
- `SANITY_DATASET`：`production`

### Repository Secret

位置：`Settings → Secrets and variables → Actions → Secrets`

只需要：

- `SANITY_TOKEN`

用途：只供「重新匯入 repository 既有內容到 Sanity」使用。

安全規則：

- 不可把 Token 放入程式碼、文件、聊天、Issue、截圖或 Email。
- 不要把 Token 交給不需要重新匯入權限的人。
- Token 外洩時，立即在 Sanity 撤銷並建立新 Token，再更新 GitHub Secret。
- 官網日常讀取公開資料不需要 Token。
- Studio 編輯使用登入者自己的 Sanity 帳號，不使用 GitHub Secret。

## 8. 必要的 Sanity 設定

- Project ID：`1n448ksq`
- Dataset：`production`
- Studio 由 GitHub Pages 自行託管，不使用 `*.sanity.studio`。

### CORS Origin

Sanity Manage 的 `Settings → API settings → CORS Origins` 必須保留：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

不要填入 `/mattress-factory-demo/studio/`，CORS Origin 只填網域。

### 帳號交接

應邀請老闆本人的 Sanity 帳號加入專案，不要共用原開發者密碼。

交接完成前確認老闆能：

- 登入 Studio。
- 修改聯絡資訊。
- 新增產品。
- 上傳照片。
- 發布內容。

## 9. 重新匯入 repository 內容到 Sanity

工作流程：`.github/workflows/import-sanity-content.yml`

這不是日常部署工具。它會把 repository 內的 `content/site.json` 與 `content/products.json` 寫回 Sanity，可能覆蓋同 ID 的現有內容。

只有下列情況才使用：

- Sanity 資料被清空。
- 新建 Dataset 後需要建立初始資料。
- 已確認 repository 內容才是正確版本。

操作方式：

1. 先確認 GitHub Secret `SANITY_TOKEN` 有效。
2. 開啟 GitHub `Actions`。
3. 選擇「Import Existing Content to Sanity」。
4. 點「Run workflow」，Branch 選 `main`。
5. 等待執行成功。
6. 回到 Studio 檢查資料。
7. 再手動執行一次正式部署。

注意：匯入腳本不會把 repository 的產品照片重新上傳到 Sanity。照片仍應在 Studio 內上傳。

## 10. 本機開發與測試

技術人員需要修改版面時：

```bash
npm install
npm run dev
```

正式建置檢查：

```bash
npm run typecheck
npm run build
```

Studio 本機執行：

```bash
cd studio
npm install
npm run dev
```

程式修改請使用分支與 Pull Request，不直接在 `main` 試錯。合併前至少確認：

- TypeScript 檢查成功。
- Next.js 靜態建置成功。
- `out/index.html` 存在。
- Studio 建置成功。
- `out/studio/index.html` 存在。

## 11. 常見故障排查

### 11.1 後台已發布，但官網仍是舊資料

依序確認：

1. Sanity 頁面右上角是否已按「發布」，不是只有草稿。
2. 是否已等待下一個 15 分鐘排程及建置時間。
3. 開啟 GitHub Actions，確認最新部署是否成功。
4. 查看 `docs/GITHUB_PAGES_STATUS.md` 的 Workflow Run ID 與電話。
5. 手動執行一次部署。
6. 使用無痕視窗或加入 `?v=任意值` 測試。

不要一開始就更換 Token。只有日誌明確顯示 `401`、`403` 或授權錯誤時，才處理 Token 或帳號權限。

### 11.2 部署顯示 failed

打開失敗的 workflow，查看第一個紅色步驟：

- `Build website`：通常是 Sanity 資料格式、圖片格式或程式錯誤。
- `Build Studio`：通常是 Studio Schema 或結構程式錯誤。
- `Deploy to GitHub Pages`：通常是 Pages 權限、環境或 GitHub 平台問題。
- `Record status`：通常是同時有提交導致 push 衝突；重新執行 workflow 即可。

### 11.3 部署顯示 cancelled

目前設定為 `cancel-in-progress: false`，正常情況應排隊而不是互相取消。

若再次出現 cancelled：

1. 確認 `deploy-pages.yml` 的 concurrency 沒被改回 `true`。
2. 查看是否由使用者手動取消。
3. 等待其他 Pages 任務完成後重新執行。

### 11.4 Studio 無法登入或出現 CORS 錯誤

確認：

- 使用正確的 Sanity 專案成員帳號。
- CORS Origin 為 `https://te87037.github.io`。
- Allow credentials 已開啟。
- 網址是 `/mattress-factory-demo/studio/`。

### 11.5 圖片造成建置失敗

- 改用 JPG、PNG 或 WebP。
- 壓縮過大的照片。
- 移除損壞圖片後重新上傳。
- 每項產品最多保留 8 張。

### 11.6 Studio 首頁出現結構錯誤

不要任意替 `S.divider()` 加 `.id()`；Sanity 的 DividerBuilder 不支援 `.id()`。

自訂清單、文件或產品清單可以使用固定 ID，但分隔線保持 `S.divider()`。

## 12. 網站完整移交清單

交接人與老闆逐項確認：

- [ ] 老闆已加入 GitHub repository，至少可查看 Actions；需要管理設定時應有 Admin 權限。
- [ ] 老闆已加入 Sanity Project，能登入 Studio。
- [ ] 老闆已收藏官網與後台網址。
- [ ] 老闆已實際修改一個測試欄位並發布。
- [ ] 老闆已新增一個測試產品並上傳照片。
- [ ] 老闆知道發布後通常需等待 5～20 分鐘。
- [ ] 老闆知道如何手動執行 GitHub Pages 部署。
- [ ] GitHub Variables 已確認。
- [ ] GitHub Secret `SANITY_TOKEN` 已確認存在，但沒有把值寫入文件。
- [ ] Sanity CORS 設定已確認。
- [ ] `docs/GITHUB_PAGES_STATUS.md` 顯示最新部署成功。
- [ ] 原開發者私人帳號、密碼與 Token 沒有直接交付或寫入 repository。

## 13. 變更原則

- 內容修改：在 Sanity Studio 完成。
- 版面與功能修改：在 GitHub 分支完成，經過建置檢查後合併到 `main`。
- 不直接修改 GitHub Pages 產物；部署會重新產生 `out/`。
- 不刪除 `production` Dataset，除非已完整備份並確認重建方案。
- 不刪除 CORS Origin，否則自架 Studio 將無法正常登入與寫入。
- 不把後台入口當作安全措施；真正權限由 Sanity 登入與角色控制。
