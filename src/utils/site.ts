const baseUrl = import.meta.env.BASE_URL || '/';

export function sitePath(path = '') {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, '');
  if (!normalizedPath) return normalizedBase;
  if (normalizedPath.startsWith('#')) return `${normalizedBase}${normalizedPath}`;
  return `${normalizedBase}${normalizedPath}`;
}
