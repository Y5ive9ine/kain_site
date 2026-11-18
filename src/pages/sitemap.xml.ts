import type { APIRoute } from 'astro';
import { personalProjects, projects } from '../data/projects';
import { posts } from '../data/posts';

const pouloRoutes = [
  'work/ai-agentic/fetaui/',
  'work/ai-agentic/billdr/',
  'work/ai-agentic/chloe/',
  'work/ai-agentic/otera/',
  'work/website/nexscale-website/',
  'work/saas/qpage/',
  'work/saas/weldica/'
];

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;'
  })[character] ?? character);
}

type SitemapEntry = {
  path: string;
  priority: string;
  lastmod?: string;
};

export const GET: APIRoute = ({ site }) => {
  const baseSite = site ?? new URL('https://example.com');
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const siteRoot = new URL(normalizedBasePath, baseSite);
  const urls: SitemapEntry[] = [
    { path: '', priority: '1.0' },
    { path: 'work/', priority: '0.9' },
    { path: 'notes/', priority: '0.8' },
    { path: 'experiments/', priority: '0.7' },
    { path: 'now/', priority: '0.6' },
    ...[...projects, ...personalProjects].map((project) => ({ path: `work/${project.slug}/`, priority: '0.8' })),
    ...pouloRoutes.map((path) => ({ path, priority: '0.8' })),
    ...posts.map((post) => ({ path: `notes/${post.slug}/`, priority: '0.7', lastmod: post.date }))
  ];

  const entries = urls.map((entry) => {
    const loc = new URL(entry.path, siteRoot).toString();
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
    return `<url><loc>${escapeXml(loc)}</loc>${lastmod}<changefreq>monthly</changefreq><priority>${entry.priority}</priority></url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
