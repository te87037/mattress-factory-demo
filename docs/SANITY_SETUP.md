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

- 專案名稱：凱麗企業社官網
- Dataset：`production`
- Dataset visibility：Public

### 2. 建立兩個 Sanity Token

Sanity 將內容寫入與 Studio 部署分成不同權限，請分別建立：

- `SANITY_WRITE_TOKEN`：角色選 `Editor`，用於匯入公司、產品與聯絡資料。
- `SANITY_AUTH_TOKEN`：角色選 `Deploy Studio`，用於部署 `*.sanity.studio` 後台。

建議設定到期日，Token 只儲存在 GitHub Actions Secrets，不可貼入聊天、Issue 或程式碼。

### 3. GitHub Actions Variables

Repository Settings → Secrets and variables → Actions → Variables：

- `SANITY_PROJECT_ID`：Sanity Project ID
- `SANITY_DATASET`：`production`
- `SANITY_STUDIO_HOST`：`kaili-mattress-admin`

### 4. GitHub Actions Secrets

Repository Settings → Secrets and variables → Actions → Secrets：

- `SANITY_WRITE_TOKEN`：Editor Token
- `SANITY_AUTH_TOKEN`：Deploy Studio Token

舊的 `SANITY_TOKEN` 不再使用，可在確認新設定成功後刪除。

### 5. 初始化

設定完成後，更新 `.github/sanity-setup-trigger` 即會依序：

1. 匯入目前公司與產品資料。
2. 建置繁體中文 Sanity Studio。
3. 部署後台。
4. 將結果寫入 `docs/SANITY_SETUP_RESULT.md`。

後台網址：

`https://kaili-mattress-admin.sanity.studio`

### 6. 邀請老闆

Sanity 專案 → Members → Invite member，輸入老闆 Email。

只把後台網址交給老闆，不需要提供 GitHub 網址或帳號。

## 官網更新方式

- 老闆按「發布」後，內容會儲存在 Sanity。
- GitHub Pages 每 15 分鐘重新取得已發布內容。
- 網站建置時會下載產品圖片，只接受 JPG、PNG 或 WebP。
- Sanity 資料不完整或暫時無法連線時，官網使用 repository 內既有內容，不會變空白。
