import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseSite = site ?? new URL('https://example.com');
  const basePath = import.meta.env.BASE_URL || '/';
  const sitemap = new URL(`${basePath}sitemap.xml`, baseSite).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
