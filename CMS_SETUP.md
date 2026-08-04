# 官網內容後台設定：Sanity Studio

> 本檔名為了保留既有連結而沿用 `CMS_SETUP.md`，但目前使用的 CMS 是 **Sanity Studio**。
>
> **Pages CMS／PageCMS 已被完全取代。** 不要使用 `https://app.pagescms.org/`、`cms-preview`、`sanity-cms`、Pages CMS GitHub App、Cloudflare Pages 預覽或「送出審核」舊流程。

## 目前唯一的內容後台

- Sanity Studio：<https://te87037.github.io/mattress-factory-demo/studio/>
- 官網：<https://te87037.github.io/mattress-factory-demo/>
- GitHub repository：<https://github.com/te87037/mattress-factory-demo>
- Sanity 專案管理：<https://www.sanity.io/manage/project/1n448ksq>

## 老闆可以修改的內容

- 公司名稱、品牌縮寫
- 電話、地址、服務區域與配送範圍
- 營業日、營業時間、午休與假日說明
- 試躺、訂金、付款與訂單修改說明
- 新增、修改、排序、顯示或隱藏床墊產品
- 產品名稱、標籤、描述與特色
- 每項產品最多 8 張照片

版面、CSS、程式碼與部署設定不在 Sanity Studio 開放。

## 修改聯絡資訊

1. 開啟 <https://te87037.github.io/mattress-factory-demo/studio/>。
2. 使用已加入 Sanity 專案的帳號登入。
3. 點左側「聯絡與營業資訊」。
4. 修改電話、地址、營業時間或其他欄位。
5. 點右上角「發布」。
6. 等待網站自動部署。

只儲存草稿不會更新正式官網，必須按「發布」。

## 新增產品

1. 開啟 Sanity Studio。
2. 點左側「床墊產品」。
3. 點右上角「＋」。
4. 填寫產品名稱。
5. 填寫「排序」；數字越小越前面。
6. 填寫產品標籤、描述與特色。
7. 上傳 JPG、PNG 或 WebP 照片，最多 8 張。
8. 拖曳照片調整順序；第一張為產品封面。
9. 確認「顯示於官網」已開啟。
10. 點右上角「發布」。

新增產品不需要手動輸入系統識別碼。

## 隱藏產品

1. 開啟產品文件。
2. 關閉「顯示於官網」。
3. 按「發布」。

暫時下架請使用隱藏，不要直接刪除，才能保留產品內容與照片。

## 發布後多久生效

GitHub Pages 每 15 分鐘重新建置，排程為每小時：

- `00` 分
- `15` 分
- `30` 分
- `45` 分

建置通常另需 3～8 分鐘，因此一般約 5～20 分鐘生效。

急需立即更新時，直接開啟：

<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>

操作：

1. 點「Run workflow」。
2. Branch 選 `main`。
3. 再點綠色「Run workflow」。
4. 等待所有工作完成。
5. 開啟 <https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>。
6. 確認「官網與 Studio 建置」和「GitHub Pages 發布」都是 `success`。

## Sanity 一次性設定

### Project

- Project ID：`1n448ksq`
- Dataset：`production`
- Dataset 必須維持可供官網讀取的設定。

### CORS

在 <https://www.sanity.io/manage/project/1n448ksq> 進入：

`Settings → API settings → CORS Origins`

新增或保留：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

不要填完整 Studio 路徑；以下是錯誤示例：

`https://te87037.github.io/mattress-factory-demo/studio/`

CORS 只填 Origin：

`https://te87037.github.io`

### 專案成員

老闆應使用自己的 Sanity 帳號加入專案，不要共用原開發者密碼。交接前必須實際確認老闆能登入、修改、上傳照片與發布。

## GitHub Actions 設定

Variables：<https://github.com/te87037/mattress-factory-demo/settings/variables/actions>

- `SANITY_PROJECT_ID=1n448ksq`
- `SANITY_DATASET=production`

Secrets：<https://github.com/te87037/mattress-factory-demo/settings/secrets/actions>

- `SANITY_TOKEN`

只使用這一個 Secret。不要再使用舊的 `SANITY_WRITE_TOKEN`、`SANITY_AUTH_TOKEN` 或 `SANITY_API_READ_TOKEN`。

## PageCMS 舊流程處理

以下項目全部視為舊系統，不得再操作：

- `https://app.pagescms.org/`
- `cms-preview` 分支
- `sanity-cms` 分支
- Pages CMS GitHub App
- `.pages.yml`
- `cms-submit-review.yml`
- Cloudflare Pages 分支預覽
- 從 CMS 建立 Pull Request 的發布方式

目前正確流程是：

`Sanity Studio 發布 → GitHub Actions 每 15 分鐘建置 → GitHub Pages 正式官網`

## 詳細交接文件

- 完整維運手冊：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/SKILL.md>
- 專案 Memory：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/handoff/MEMORY.md>
- Sanity 設定：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/SANITY_SETUP.md>
