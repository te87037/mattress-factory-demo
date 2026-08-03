# 凱麗企業社簡易內容後台

## 老闆日常操作

老闆只使用官網的 Studio 網址，不需要 GitHub：

1. 登入後台。
2. 選擇「聯絡與營業資訊」或「床墊產品」。
3. 修改文字、上傳照片。
4. 按「發布」。
5. 官網會在下一次自動同步後更新，最長約 15 分鐘。

後台不開放網站版面、CSS、程式碼、部署設定或 GitHub 分支。

## 後台網址

正式後台由 GitHub Pages 與官網一起託管：

`https://te87037.github.io/mattress-factory-demo/studio/`

不再使用 `*.sanity.studio`，因此不需要 Deploy Studio Token。

## GitHub Actions 設定

### Secret

只保留一個 Repository Secret：

- `SANITY_TOKEN`：Sanity Editor Token，供首次匯入或重新匯入內容

Token 不可貼入聊天、Issue、程式碼或一般文件。

### Variables

- `SANITY_PROJECT_ID`：`1n448ksq`
- `SANITY_DATASET`：`production`

舊的 `SANITY_STUDIO_HOST` 已不再使用，可以保留或刪除。

## Sanity CORS 一次性設定

因為 Studio 改由 GitHub Pages 自行託管，請在 Sanity 專案設定加入 CORS Origin：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

路徑 `/mattress-factory-demo/studio/` 不要填入 Origin；Origin 只填網域。

## 內容資料

目前網站既有資料已成功匯入 Sanity：

- 公司與聯絡資訊
- 營業時間
- 配送與試躺說明
- 四種床墊產品名稱、描述與特色

產品照片需在 Studio 內重新上傳。

## 官網更新方式

- 老闆按「發布」後，內容會儲存在 Sanity。
- GitHub Pages 每 15 分鐘重新取得已發布內容。
- 網站建置時會下載產品圖片，只接受 JPG、PNG 或 WebP。
- Sanity 資料不完整或暫時無法連線時，官網會使用 repository 內的既有內容，不會因此變空白。

## 可選：發布後立即更新

部署工作支援 GitHub `repository_dispatch` 事件 `sanity-content-update`。未設定 webhook 時，15 分鐘排程仍可正常運作。
