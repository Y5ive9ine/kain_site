const baseUrl = import.meta.env.BASE_URL || '/';

export function sitePath(path = '') {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, '');
  if (!normalizedPath) return normalizedBase;
  if (normalizedPath.startsWith('#')) return `${normalizedBase}${normalizedPath}`;
  return `${normalizedBase}${normalizedPath}`;
}

export function projectPath(slug: string, reference = true) {
  if (!reference) return sitePath(`work/${slug}/`);
  if (slug === 'nexscale') return sitePath('work/website/nexscale-website/');
  if (slug === 'qpage' || slug === 'weldica') return sitePath(`work/saas/${slug}/`);
  return sitePath(`work/ai-agentic/${slug}/`);
}
