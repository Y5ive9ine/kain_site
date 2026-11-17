import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:4321';
const origin = baseUrl.replace(/\/$/, '');
const root = process.cwd();
const qaDir = path.join(root, 'qa');
await fs.mkdir(qaDir, { recursive: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  locale: 'zh-CN',
  colorScheme: 'light'
});
const desktop = await context.newPage();
await desktop.setViewportSize({ width: 1440, height: 1000 });
const routes = [
  '/',
  '/work/',
  '/notes/',
  '/experiments/',
  '/now/',
  '/work/context-atlas/',
  '/notes/portfolio-as-a-set-of-judgements/'
];

for (const route of routes) {
  const response = await desktop.goto(`${origin}${route}`, { waitUntil: 'networkidle' });
  assert(response?.ok(), `${route} returned ${response?.status()}`);
  assert((await desktop.locator('h1').count()) === 1, `${route} should have one h1`);
  assert((await desktop.locator('meta[name="description"]').count()) === 1, `${route} is missing description`);
  assert((await desktop.locator('link[rel="canonical"]').count()) === 1, `${route} is missing canonical`);
  assert((await desktop.locator('script[type="application/ld+json"]').count()) === 1, `${route} is missing JSON-LD`);
  const overflow = await desktop.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  assert(!overflow, `${route} has horizontal overflow at desktop width`);
}

await desktop.goto(`${origin}/`, { waitUntil: 'networkidle' });
await desktop.screenshot({ path: path.join(qaDir, 'home-desktop.png'), fullPage: true });

const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto(`${origin}/`, { waitUntil: 'networkidle' });
assert(await mobile.locator('.mobile-nav').isVisible(), 'mobile navigation should be visible');
await mobile.locator('.mobile-nav summary').click();
assert(await mobile.locator('.mobile-nav nav a').first().isVisible(), 'mobile menu should open');
const mobileOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
assert(!mobileOverflow, 'homepage has horizontal overflow at mobile width');
await mobile.locator('.mobile-nav [data-theme-toggle]').click();
await mobile.waitForTimeout(350);
assert(await mobile.evaluate(() => document.documentElement.dataset.theme === 'dark'), 'mobile theme toggle did not activate dark theme');
await mobile.screenshot({ path: path.join(qaDir, 'home-mobile-dark.png'), fullPage: true });

await mobile.goto(`${origin}/work/context-atlas/`, { waitUntil: 'networkidle' });
assert(await mobile.locator('.case-index').isVisible(), 'case study index should be visible on mobile');
const caseOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
assert(!caseOverflow, 'case study has horizontal overflow at mobile width');
await mobile.screenshot({ path: path.join(qaDir, 'case-mobile.png'), fullPage: true });

const rss = await context.request.get(`${origin}/rss.xml`);
assert(rss.ok(), 'RSS endpoint failed');
const rssText = await rss.text();
assert(rssText.includes('<rss version="2.0">') && rssText.includes('<item>'), 'RSS output is incomplete');

const sitemap = await context.request.get(`${origin}/sitemap.xml`);
assert(sitemap.ok(), 'Sitemap endpoint failed');
const sitemapText = await sitemap.text();
assert(sitemapText.includes('<urlset') && sitemapText.includes('/work/context-atlas/'), 'Sitemap output is incomplete');

const robots = await context.request.get(`${origin}/robots.txt`);
assert(robots.ok(), 'robots.txt endpoint failed');
assert((await robots.text()).includes('Sitemap:'), 'robots.txt is missing Sitemap directive');

await browser.close();
console.log(`Playwright acceptance passed for ${routes.length} content routes plus RSS, Sitemap, and robots.txt.`);
