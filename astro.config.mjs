import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://rakesh1988.github.io',
  base: process.env.BASE_PATH || '/random-static-htmls-encrypted/',
  output: 'static',
  build: {
    format: 'file'
  }
});
