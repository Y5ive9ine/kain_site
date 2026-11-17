import type { APIRoute } from 'astro';
import { posts } from '../data/posts';

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;'
  })[character] ?? character);
}

export const GET: APIRoute = ({ site }) => {
  const baseSite = site ?? new URL('https://example.com');
  const basePath = import.meta.env.BASE_URL || '/';
  const feedUrl = new URL(`${basePath}rss.xml`, baseSite).toString();
  const items = posts.map((post) => {
    const url = new URL(`${basePath}notes/${post.slug}/`, baseSite).toString();
    return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${escapeXml(post.excerpt)}</description>
        <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Kain Yin Notes</title>
        <link>${baseSite.toString()}</link>
        <description>关于产品、设计系统、前端和个人网站的文章。</description>
        <language>zh-CN</language>
        <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
};
