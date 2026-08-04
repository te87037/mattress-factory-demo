---
name: mattress-factory-owner-handoff
description: 維護、發布與排查凱麗企業社床墊工廠官網、Sanity Studio 與 GitHub Pages。適用於老闆日常更新、產品新增、多圖管理、手動部署、Sanity 設定、帳號移交與故障排查。
---

# 凱麗企業社官網維運 Skill

## 0. 先讀這段

本網站目前的唯一內容後台是 **Sanity Studio**。

**Pages CMS／PageCMS 已完全淘汰。** 不要再使用：

- `https://app.pagescms.org/`
- `cms-preview` 分支
- `sanity-cms` 分支
- Pages CMS GitHub App
- `.pages.yml`
- `cms-submit-review.yml`
- Cloudflare Pages 預覽
- 從 CMS 建立 Pull Request 的發布方式

目前正確資料流只有：

`Sanity Studio 按發布 → GitHub Actions 建置 → GitHub Pages 正式官網`

## 1. 所有重要網址

### 老闆每天會用到

- 正式官網：<https://te87037.github.io/mattress-factory-demo/>
- 內容後台：<https://te87037.github.io/mattress-factory-demo/studio/>

官網左下角有低透明度齒輪，點擊會開啟內容後台。

### GitHub 維運網址

- Repository：<https://github.com/te87037/mattress-factory-demo>
- Actions 總覽：<https://github.com/te87037/mattress-factory-demo/actions>
- 官網與 Studio 部署：<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>
- 手動重新匯入 Sanity：<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>
- 最新部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
- Pages 設定：<https://github.com/te87037/mattress-factory-demo/settings/pages>
- Actions Variables：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>
- Actions Secrets：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>

### Sanity 維運網址

- Sanity Project：<https://www.sanity.io/manage/project/1n448ksq>
- Project ID：`1n448ksq`
- Dataset：`production`

## 2. 老闆日常修改聯絡資訊

1. 用手機或電腦開啟 <https://te87037.github.io/mattress-factory-demo/studio/>。
2. 使用已加入 Sanity 專案的帳號登入。
3. 點左側「聯絡與營業資訊」。
4. 修改電話、地址、營業時間、休息時間、試躺或付款說明。
5. 檢查欄位內容。
6. 點右上角「發布」。
7. 等待自動部署。

重要：

- 只修改或儲存草稿不會更新正式官網。
- 一定要按「發布」。
- 不需要進 GitHub。
- 不需要更換 Token。

## 3. 老闆新增產品

1. 開啟 Sanity Studio。
2. 點左側「床墊產品」。
3. 點右上角「＋」。
4. 填寫產品名稱。
5. 填寫「排序」：數字越小，官網越前面。
6. 填寫產品標籤。
7. 填寫產品描述。
8. 新增產品特色。
9. 上傳產品照片。
10. 確認「顯示於官網」已開啟。
11. 點「發布」。

產品不需要手動輸入系統 ID。Sanity 會自動建立文件 ID，官網會在下一次部署時自動加入產品。

## 4. 產品照片操作

規則：

- 每項產品最多 8 張。
- 支援 JPG、PNG、WebP。
- 第一張為封面。
- 可以拖曳調整順序。
- 官網桌面版有左右箭頭與圓點。
- 官網手機版可以左右滑動。
- 建議單張照片小於 2 MB。
- HEIC 請先轉成 JPG 或 WebP。

建議照片順序：

1. 產品完整正面。
2. 側面厚度。
3. 表布與車縫細節。
4. 內材或結構。
5. 實際擺放情境。
6. 尺寸或客製說明。

## 5. 隱藏、恢復與刪除產品

### 暫時下架

1. 打開產品。
2. 關閉「顯示於官網」。
3. 按「發布」。

### 重新上架

1. 打開產品。
2. 開啟「顯示於官網」。
3. 按「發布」。

### 刪除產品

只有確定永遠不需要該內容與照片時才刪除。暫時下架請使用「顯示於官網」，不要刪除。

## 6. 發布後多久會生效

GitHub Pages 每 15 分鐘執行一次部署：

- `00` 分
- `15` 分
- `30` 分
- `45` 分

建置與發布通常另需 3～8 分鐘，所以一般約 5～20 分鐘生效。

範例：

- 10:02 發布：通常 10:15 開始建置，約 10:18～10:23 生效。
- 10:14 發布：可能趕上 10:15，約 10:18～10:23 生效。
- 10:16 發布：通常等 10:30，約 10:33～10:38 生效。

## 7. 手動立即部署

內容很急時，不必等下一個 15 分鐘排程。

1. 登入 GitHub。
2. 開啟 <https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>。
3. 在頁面右側找到「Run workflow」。
4. 點「Run workflow」。
5. Branch 選 `main`。
6. 再點綠色「Run workflow」。
7. 等待新的一筆 workflow run 出現。
8. 點進該 run。
9. 確認 `build` 完成。
10. 確認 `deploy` 完成。
11. 確認 `record-status` 完成。
12. 開啟 <https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>。
13. 確認「官網與 Studio 建置」為 `success`。
14. 確認「GitHub Pages 發布」為 `success`。
15. 確認「本次部署電話」與 Sanity 已發布電話一致。

## 8. 瀏覽器仍顯示舊內容

依序處理：

1. 確認 Sanity 已按「發布」。
2. 確認最新部署成功。
3. 在瀏覽器重新整理。
4. 關閉頁面後重新開啟。
5. 使用無痕視窗。
6. 在網址後加入版本參數。

版本參數範例：

`https://te87037.github.io/mattress-factory-demo/?v=20260804-1`

版本參數只用來避開瀏覽器快取，不會修改網站內容。

## 9. GitHub 必要設定

### Variables

開啟：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>

必須存在：

- `SANITY_PROJECT_ID`：`1n448ksq`
- `SANITY_DATASET`：`production`

### Secret

開啟：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>

只需要：

- `SANITY_TOKEN`

用途：手動將 repository 初始內容匯入 Sanity。

不要建立或依賴：

- `SANITY_WRITE_TOKEN`
- `SANITY_AUTH_TOKEN`
- `SANITY_API_READ_TOKEN`
- `SANITY_STUDIO_HOST`

### GitHub Pages

開啟：<https://github.com/te87037/mattress-factory-demo/settings/pages>

確認 Build and deployment 的 Source 使用 GitHub Actions。

## 10. Sanity 必要設定

### Project

- Project ID：`1n448ksq`
- Dataset：`production`
- Studio：GitHub Pages 自架版本
- Studio URL：<https://te87037.github.io/mattress-factory-demo/studio/>

### CORS

開啟 <https://www.sanity.io/manage/project/1n448ksq>，進入：

`Settings → API settings → CORS Origins`

必須有：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

錯誤：

`https://te87037.github.io/mattress-factory-demo/studio/`

正確：

`https://te87037.github.io`

### 帳號交接

老闆必須使用自己的 Sanity 帳號加入專案。不要把原開發者的帳號密碼交給老闆，也不要多人共用同一組密碼。

交接測試：

1. 老闆登入 Studio。
2. 修改一個測試欄位。
3. 按發布。
4. 新增一個測試產品。
5. 上傳照片。
6. 按發布。
7. 確認官網更新。
8. 刪除或隱藏測試產品。

## 11. 自動部署技術流程

主要 workflow：`.github/workflows/deploy-pages.yml`

觸發方式：

- Push 到 `main`。
- GitHub Actions 手動執行。
- `repository_dispatch` 的 `sanity-content-update`。
- 每 15 分鐘排程。

執行順序：

1. Checkout `main`。
2. 安裝 Node.js 22。
3. 安裝官網依賴。
4. 執行 `npm run build`。
5. `prebuild` 執行 `npm run prepare-content`。
6. `scripts/sync-sanity-content.mjs` 從 Sanity 讀取已發布資料。
7. 更新 `content/site.json`。
8. 更新 `content/products.json`。
9. 下載產品照片到 `public/uploads/products/`。
10. `scripts/apply-content.mjs` 套用內容。
11. Next.js 產生 `out/index.html`。
12. 安裝 `studio/` 依賴。
13. 建置 Sanity Studio。
14. 複製 `studio/dist/` 到 `out/studio/`。
15. 確認 `out/studio/index.html` 存在。
16. 上傳 GitHub Pages artifact。
17. 發布 GitHub Pages。
18. 更新 `docs/GITHUB_PAGES_STATUS.md`。

Sanity 暫時無法連線或資料不完整時，網站會保留 repository 內既有 fallback 內容，不會被清空。

## 12. 部署排隊設定

部署 workflow 必須維持：

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

原因：手動部署可能與每 15 分鐘排程同時發生。`false` 會排隊，避免新任務取消舊任務。

若發現部署一直是 `cancelled`：

1. 打開 `.github/workflows/deploy-pages.yml`。
2. 確認 `cancel-in-progress` 沒被改回 `true`。
3. 確認不是使用者手動取消。
4. 等待目前 Pages 任務完成。
5. 再手動執行一次部署。

## 13. 手動重新匯入 Sanity

Workflow：<https://github.com/te87037/mattress-factory-demo/actions/workflows/import-sanity-content.yml>

這是一個高風險救援功能，不是日常發布功能。

它會：

- 讀取 `content/site.json`。
- 讀取 `content/products.json`。
- 使用 `createOrReplace` 寫回 Sanity。
- 覆蓋相同 ID 的 site settings 與產品。

只有下列情況才執行：

- Dataset 被清空。
- 建立新 Dataset。
- 已確認 repository 內容比 Sanity 正確。

操作：

1. 先備份或確認 Sanity 現有內容。
2. 確認 `SANITY_TOKEN` 有效。
3. 開啟匯入 workflow。
4. 點「Run workflow」。
5. Branch 選 `main`。
6. 執行。
7. 回到 Studio 檢查資料。
8. 再執行正式部署。

此匯入不會把 repository 產品照片上傳回 Sanity，照片仍需在 Studio 上傳。

## 14. 本機開發

官網：

```bash
npm install
npm run dev
```

網址：<http://localhost:3000>

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

程式修改規則：

1. 從 `main` 建立新分支。
2. 在分支修改。
3. 建立 Pull Request。
4. 等待 Validate website。
5. 需要時等待 Validate Sanity Studio。
6. 全部成功後才合併。
7. 不直接在 `main` 試錯。
8. 不直接編輯 `out/`。

## 15. 常見故障

### Sanity 已發布，官網沒有更新

1. 確認不是草稿。
2. 確認已等待 5～20 分鐘。
3. 查看最新部署狀態。
4. 手動部署一次。
5. 使用無痕視窗。

不要先重設 Token。只有 workflow 明確出現 `401`、`403` 或授權錯誤時才處理 Token。

### Studio 無法登入或出現 CORS

確認：

- 網址為 <https://te87037.github.io/mattress-factory-demo/studio/>。
- 帳號已加入 Project `1n448ksq`。
- CORS Origin 是 `https://te87037.github.io`。
- Allow credentials 已開啟。

### 圖片建置失敗

- 改成 JPG、PNG 或 WebP。
- 壓縮圖片。
- 移除損壞圖片後重新上傳。
- 每項產品最多 8 張。

### Studio 結構錯誤

根清單、文件與產品清單可以指定固定 ID。

不要使用：

```ts
S.divider().id("content-divider")
```

`S.divider()` 不支援 `.id()`。正確寫法：

```ts
S.divider()
```

## 16. PageCMS 舊分支

Repository 目前可能仍看得到：

- `cms-preview`
- `sanity-cms`

這些是歷史分支，不是正式內容來源。老闆與接手人員不可選擇這些分支操作或部署。正式內容與程式只以 `main` 為準。

## 17. 完整移交清單

- [ ] 老闆已收藏官網網址。
- [ ] 老闆已收藏 Studio 網址。
- [ ] 老闆已加入 Sanity Project。
- [ ] 老闆能登入 Studio。
- [ ] 老闆能修改電話並發布。
- [ ] 老闆能新增產品。
- [ ] 老闆能上傳多張照片。
- [ ] 老闆知道第一張照片是封面。
- [ ] 老闆知道發布後約 5～20 分鐘生效。
- [ ] 老闆知道如何手動部署。
- [ ] 老闆能查看最新部署狀態。
- [ ] 老闆知道 PageCMS 已停用。
- [ ] 老闆不會使用 `cms-preview` 或 `sanity-cms`。
- [ ] GitHub Variables 正確。
- [ ] GitHub Secret 只保留 `SANITY_TOKEN`。
- [ ] Sanity CORS 正確。
- [ ] GitHub Pages Source 是 GitHub Actions。
- [ ] 原開發者未在文件留下 Token 或密碼。

## 18. 其他文件

- README：<https://github.com/te87037/mattress-factory-demo/blob/main/README.md>
- CMS 設定入口：<https://github.com/te87037/mattress-factory-demo/blob/main/CMS_SETUP.md>
- Sanity 設定：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/SANITY_SETUP.md>
- Sanity 現況：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/SANITY_SETUP_RESULT.md>
- Memory：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/MEMORY.md>
- 部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>
