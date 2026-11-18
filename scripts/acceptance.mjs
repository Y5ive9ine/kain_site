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
const routes = [
  '/',
  '/work/',
  '/notes/',
  '/experiments/',
  '/now/',
  '/work/context-atlas/',
  '/work/field-signals/',
  '/work/decision-room/',
  '/work/type-garden/',
  '/work/calm-queue/',
  '/notes/portfolio-as-a-set-of-judgements/'
];

const desktop = await context.newPage();
await desktop.setViewportSize({ width: 1440, height: 1000 });
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
const desktopHero = await desktop.locator('.home-hero').boundingBox();
assert(desktopHero && Math.abs(desktopHero.height - 900) <= 1, 'desktop hero should be 900px tall');
assert(await desktop.locator('.home-hero-copy h1').evaluate((node) => Math.abs(parseFloat(getComputedStyle(node).fontSize) - 41.7021) <= 0.5), 'desktop hero heading should match the Poulo type scale');
const workMenu = desktop.locator('[data-menu="work"]');
await workMenu.click();
assert(await workMenu.getAttribute('aria-expanded') === 'true', 'desktop Work menu did not report expanded');
assert(await desktop.locator('[data-popover="work"]').isVisible(), 'desktop Work popover did not open');
await desktop.mouse.click(20, 420);
assert(await desktop.locator('[data-popover="work"]').isHidden(), 'desktop Work popover did not close on outside click');
const experimentsMenu = desktop.locator('[data-menu="experiments"]');
await experimentsMenu.click();
assert(await desktop.locator('[data-popover="experiments"]').isVisible(), 'desktop Experiments popover did not open');
await desktop.mouse.click(20, 420);
const aboutMenu = desktop.locator('.desktop-nav [data-chat]');
await aboutMenu.click();
assert(await desktop.locator('#chat-panel').isVisible(), 'desktop About panel did not open');
await desktop.locator('#chat-panel [data-chat]').click();
assert(await desktop.locator('#chat-panel').isHidden(), 'desktop About panel did not close');
await desktop.locator('[data-hero-chat]').first().click();
assert(await desktop.locator('[data-hero-chat-panel]').isVisible(), 'hero detail panel did not open');
await desktop.locator('[data-hero-chat]').first().click();
assert(await desktop.locator('[data-hero-chat-panel]').isHidden(), 'hero detail panel did not close');
if (await desktop.locator('[data-cookie]').count()) {
  await desktop.locator('[data-cookie-decline]').click();
  assert(await desktop.locator('[data-cookie]').count() === 0, 'cookie banner did not close');
}
const initialVisibleCards = await desktop.locator('[data-case-card]:not([hidden])').count();
await desktop.locator('[data-filter="SaaS"]').click();
const filteredCards = await desktop.locator('[data-case-card]:not([hidden])').count();
assert(filteredCards > 0 && filteredCards < initialVisibleCards, 'work filter did not reduce the showcase');
await desktop.locator('[data-view="grid"]').click();
assert(await desktop.locator('[data-case-list]').getAttribute('data-view') === 'grid', 'grid view did not activate');
await desktop.locator('[data-view="deck"]').click();
assert(await desktop.locator('[data-case-list]').getAttribute('data-view') === 'deck', 'deck view did not activate');
await desktop.locator('[data-filter="All"]').click();
  await desktop.locator('[data-view="showcase"]').click();
  await desktop.evaluate(() => document.activeElement?.blur());
await desktop.screenshot({ path: path.join(qaDir, 'home-desktop.png'), fullPage: true });

const mobile = await context.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto(`${origin}/`, { waitUntil: 'networkidle' });
const mobileHero = await mobile.locator('.home-hero').boundingBox();
assert(mobileHero && Math.abs(mobileHero.height - 940) <= 1, 'mobile hero should be 940px tall');
assert(await mobile.locator('.home-hero-copy h1').evaluate((node) => Math.abs(parseFloat(getComputedStyle(node).fontSize) - 36.383) <= 0.5), 'mobile hero heading should match the Poulo type scale');
assert(await mobile.locator('.mobile-nav').isVisible(), 'mobile navigation should be visible');
await mobile.locator('.mobile-nav [data-mobile]').click();
assert(await mobile.locator('.mobile-nav nav a').first().isVisible(), 'mobile menu should open');
await mobile.waitForTimeout(50);
assert(await mobile.locator('.mobile-nav [data-mobile]').getAttribute('aria-expanded') === 'true', 'mobile menu did not report expanded');
await mobile.locator('.mobile-nav [data-mobile-chat]').click();
assert(await mobile.locator('[data-hero-chat-panel]').isVisible(), 'mobile Pouya section did not open');
await mobile.locator('[data-hero-chat]').first().click();
assert(await mobile.locator('[data-hero-chat-panel]').isHidden(), 'mobile Pouya section did not close');
await mobile.locator('.mobile-nav [data-mobile]').click();
const mobileOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
assert(!mobileOverflow, 'homepage has horizontal overflow at mobile width');
await mobile.locator('.mobile-theme, .mobile-nav [data-theme-toggle]').first().click();
await mobile.waitForTimeout(350);
assert(await mobile.evaluate(() => document.documentElement.dataset.theme === 'dark'), 'mobile theme toggle did not activate dark theme');
await mobile.screenshot({ path: path.join(qaDir, 'home-mobile-dark.png'), fullPage: true });

await mobile.goto(`${origin}/work/context-atlas/`, { waitUntil: 'networkidle' });
assert(await mobile.locator('.case-index').isVisible(), 'case study index should be visible on mobile');
const caseOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
assert(!caseOverflow, 'case study has horizontal overflow at mobile width');
await mobile.screenshot({ path: path.join(qaDir, 'case-mobile.png'), fullPage: true });

for (const width of [375, 768, 1024, 1920]) {
  const page = await context.newPage();
  await page.setViewportSize({ width, height: 900 });
  await page.goto(`${origin}/`, { waitUntil: 'networkidle' });
  assert((await page.locator('h1').count()) === 1, `homepage should have one h1 at ${width}px`);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  assert(!overflow, `homepage has horizontal overflow at ${width}px`);
  const hero = await page.locator('.home-hero').boundingBox();
  const expectedHeroHeight = width <= 520 ? 940 : width <= 800 ? 992 : 900;
  assert(hero && Math.abs(hero.height - expectedHeroHeight) <= 1, `homepage hero has unexpected height at ${width}px`);
  if (width === 768) await page.screenshot({ path: path.join(qaDir, 'home-tablet.png'), fullPage: true });
  await page.close();
}

const rss = await context.request.get(`${origin}/rss.xml`);
assert(rss.ok(), 'RSS endpoint failed');
const rssText = await rss.text();
assert(rssText.includes('<rss version="2.0">') && rssText.includes('<item>'), 'RSS output is incomplete');

const sitemap = await context.request.get(`${origin}/sitemap.xml`);
assert(sitemap.ok(), 'Sitemap endpoint failed');
const sitemapText = await sitemap.text();
assert(sitemapText.includes('<urlset') && sitemapText.includes('/work/context-atlas/') && sitemapText.includes('/work/calm-queue/'), 'Sitemap output is incomplete');

const robots = await context.request.get(`${origin}/robots.txt`);
assert(robots.ok(), 'robots.txt endpoint failed');
assert((await robots.text()).includes('Sitemap:'), 'robots.txt is missing Sitemap directive');

await browser.close();
console.log(`Playwright acceptance passed for ${routes.length} content routes plus RSS, Sitemap, and robots.txt.`);
