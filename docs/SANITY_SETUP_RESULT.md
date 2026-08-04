# Sanity 目前啟用狀態

> 舊的 Sanity-hosted Studio 部署失敗紀錄已失效。
>
> 目前 Studio 已改為與官網一起部署到 GitHub Pages，Pages CMS／PageCMS 也已完全停用。

## 現況

- 內容系統：Sanity Content Lake
- 內容後台：Sanity Studio
- Project ID：`1n448ksq`
- Dataset：`production`
- 官網部署：GitHub Pages
- Studio 部署：GitHub Pages `/studio/`
- 內容匯入：已完成
- 官網與 Studio 建置：已完成並持續自動部署

## 正式網址

- 官網：<https://te87037.github.io/mattress-factory-demo/>
- Sanity Studio：<https://te87037.github.io/mattress-factory-demo/studio/>
- Sanity 管理介面：<https://www.sanity.io/manage/project/1n448ksq>
- GitHub Actions：<https://github.com/te87037/mattress-factory-demo/actions>
- 手動部署：<https://github.com/te87037/mattress-factory-demo/actions/workflows/deploy-pages.yml>
- 最新部署狀態：<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>

## 不再使用的舊網址與流程

以下項目已淘汰，不得再作為操作依據：

- 舊 Studio：`https://kaili-mattress-admin.sanity.studio`
- Pages CMS：`https://app.pagescms.org/`
- `cms-preview` 分支
- `sanity-cms` 分支
- Cloudflare Pages 分支預覽
- Pages CMS 建立 Pull Request 的發布流程
- `sanity deploy`

## 正確發布方式

1. 開啟 <https://te87037.github.io/mattress-factory-demo/studio/>。
2. 修改聯絡資訊或產品。
3. 按右上角「發布」。
4. 等待每 15 分鐘執行的 GitHub Pages 部署。
5. 一般約 5～20 分鐘在官網生效。
6. 急需更新時，手動執行「Deploy website and Studio to GitHub Pages」。

## CORS

Sanity 管理介面必須保留：

- Origin：`https://te87037.github.io`
- Allow credentials：開啟

## GitHub 設定

Variables：

- `SANITY_PROJECT_ID=1n448ksq`
- `SANITY_DATASET=production`

Secret：

- `SANITY_TOKEN`

只使用 `SANITY_TOKEN`。不要再使用 `SANITY_WRITE_TOKEN`、`SANITY_AUTH_TOKEN` 或 `SANITY_API_READ_TOKEN`。

## 驗證方式

最新真實部署結果不固定寫在本文件，而是由 workflow 自動更新：

<https://github.com/te87037/mattress-factory-demo/blob/main/docs/GITHUB_PAGES_STATUS.md>

該文件應顯示：

- 官網與 Studio 建置：`success`
- GitHub Pages 發布：`success`
- 本次部署電話與 Sanity 已發布電話一致
- Workflow Run ID 為最新執行編號
