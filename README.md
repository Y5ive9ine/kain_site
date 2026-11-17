# Kain Personal Site — design package

本目录包含个人网站第一版 Astro 实现，以及信息架构、低保真线框和设计令牌。

## 文件

- `site-map-wireframes-design-spec.md`：站点地图、首页与作品详情页的桌面端/移动端低保真规格。
- `personal-site-wireframes.html`：可直接在浏览器打开的低保真线框预览。
- `design-tokens.css`：CSS Variables 版本，推荐在 Astro 或普通 HTML 项目中直接引入。
- `design-tokens.json`：用于设计系统、脚本或其他构建工具的令牌源文件。
- `tailwind.tokens.js`：使用 Tailwind 时的映射配置。
- `src/pages/index.astro`：首页。
- `src/pages/work/index.astro`：作品列表页。
- `src/pages/work/[slug].astro`：作品详情页模板。
- `src/pages/notes/`：文章列表与文章详情页。
- `src/pages/experiments/index.astro`：实验项目页。
- `src/pages/now.astro`：Now 页面。
- `src/data/projects.ts`：可扩展的作品内容模型和示例内容。
- `src/data/posts.ts`、`src/data/experiments.ts`：文章与实验内容模型。
- `src/components/`：布局、导航、项目卡片和视觉示意组件。
- `src/styles/`：全局样式与构建时使用的令牌。
- `src/pages/rss.xml.ts`、`src/pages/sitemap.xml.ts`、`src/pages/robots.txt.ts`：SEO、RSS 和爬虫入口。
- `scripts/acceptance.mjs`：基于 Playwright 的生产预览验收脚本。
- `dist/`：Astro 静态构建输出。

## 本地开发

建议使用 Node.js 20.19+ 或 22+。

```powershell
npm install
npm run dev
```

默认地址是 `http://localhost:4321/`。

构建和检查：

```powershell
npm run check
npm run build
npm run preview -- --host 127.0.0.1
npm run test:browser
```

## GitHub Pages 部署

仓库已经包含 `.github/workflows/deploy-pages.yml`。首次发布时：

1. 在 GitHub 创建一个空仓库。
2. 在本地初始化并推送：

```powershell
cd D:\work\kain_site
git init
git branch -M main
git add .
git commit -m "Build Astro personal site"
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```

3. 在 GitHub 仓库的 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**。
4. 后续推送到 `main` 会自动运行检查、构建和发布。

工作流会自动读取 GitHub Pages 的项目路径，因此仓库部署到 `username.github.io/repository` 时，Astro 的资源路径和 RSS/Sitemap URL 会使用正确的 base path。使用自定义域名时，在 GitHub Pages 设置中配置域名即可。

如果已经有正式域名，可在构建前设置 `PUBLIC_SITE_URL`，用于生成 canonical URL：

```powershell
$env:PUBLIC_SITE_URL = 'https://your-domain.example'
npm run build
```

也可以复制 `.env.example` 为 `.env`，再填入正式域名；GitHub Pages 工作流会自动注入项目站点地址和 `BASE_PATH`。

## 预览

直接双击 `personal-site-wireframes.html`，或在 PowerShell 中运行：

```powershell
Start-Process .\personal-site-wireframes.html
```

## 下一步实现顺序

1. 用真实项目内容替换 `src/data/projects.ts` 中的示例案例。
2. 文章内容稳定后，可迁移到 Astro Content Collections 或 Markdown/MDX。
3. 配置正式域名和统计工具；RSS、Sitemap、robots 与 canonical 已经接入。
4. 在生产托管平台继续使用构建命令 `npm run build`，发布目录为 `dist`。
