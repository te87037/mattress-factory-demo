# 凱麗企業社簡易內容後台

## 老闆日常操作

老闆只使用 Sanity Studio 網址，不需要 GitHub：

1. 登入後台。
2. 選擇「聯絡與營業資訊」或「床墊產品」。
3. 修改文字、上傳照片。
4. 按「發布」。
5. 官網會在下一次自動同步後更新，最長約 15 分鐘。

後台不開放網站版面、CSS、程式碼、部署設定或 GitHub 分支。

## 管理者一次性設定

### 1. 建立 Sanity 專案

1. 登入 Sanity 管理介面。
2. 建立新專案，名稱可填「凱麗企業社官網」。
3. Dataset 使用 `production`，並維持 Public。
4. 記下 Project ID。

### 2. 建立 Sanity Token

在 Sanity 專案的 API Tokens 建立：

- `SANITY_AUTH_TOKEN`：供 GitHub Actions 部署 Studio。
- `SANITY_WRITE_TOKEN`：供首次匯入既有網站內容。

Token 只放在 GitHub Actions Secrets，不寫入程式碼。

### 3. 設定 GitHub Actions Variables

Repository Settings → Secrets and variables → Actions → Variables：

- `SANITY_PROJECT_ID`：Sanity Project ID
- `SANITY_DATASET`：`production`
- `SANITY_STUDIO_HOST`：例如 `kaili-mattress-admin`

`SANITY_STUDIO_HOST` 必須以英文字母開頭，部署後網址會是：

`https://kaili-mattress-admin.sanity.studio`

### 4. 設定 GitHub Actions Secrets

Repository Settings → Secrets and variables → Actions → Secrets：

- `SANITY_AUTH_TOKEN`
- `SANITY_WRITE_TOKEN`

Public dataset 不需要 `SANITY_API_READ_TOKEN`。若日後改成 Private dataset，再建立唯讀 Token 並新增該 Secret。

### 5. 匯入目前網站資料

GitHub → Actions → `Import Existing Content to Sanity` → Run workflow。

這會匯入：

- 公司與聯絡資訊
- 營業時間
- 配送與試躺說明
- 四種床墊產品名稱、描述與特色

目前產品照片需要在 Sanity Studio 內重新上傳。

### 6. 部署後台

GitHub → Actions → `Deploy Sanity Studio` → Run workflow。

完成後使用：

`https://<SANITY_STUDIO_HOST>.sanity.studio`

### 7. 邀請老闆

Sanity 專案 → Members → Invite member，輸入老闆 Email。

只把後台網址交給老闆，不需要提供 GitHub 網址或帳號。

## 官網更新方式

- 老闆按「發布」後，內容會儲存在 Sanity。
- GitHub Pages 每 15 分鐘重新取得已發布內容。
- 網站建置時會下載產品圖片，只接受 JPG、PNG 或 WebP。
- Sanity 尚未設定、資料不完整或暫時無法連線時，官網會使用 repository 內的既有內容，不會因此變空白。

## 可選：發布後立即更新

部署工作也支援 GitHub `repository_dispatch` 事件 `sanity-content-update`。日後可在 Sanity 建立 webhook 呼叫 GitHub API，讓發布後立即觸發部署；未設定 webhook 時，15 分鐘排程仍可正常運作。
