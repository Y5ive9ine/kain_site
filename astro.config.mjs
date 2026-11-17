import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  base: process.env.BASE_PATH || '',
  output: 'static',
  build: {
    format: 'directory'
  }
});
