// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, BASE_PATH } from './src/config/site.ts';

// Fully STATIC output for GitHub Pages (project site) — every page is
// prerendered at build time, no server runtime involved.
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  // Inline small stylesheets into <head> so the render-blocking CSS request
  // (flagged by Lighthouse) disappears — improves FCP/LCP on marketing pages.
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    // Plain sitemap (no i18n auto-grouping): hreflang is emitted manually,
    // per-page, in src/components/Seo.astro — more robust than the
    // integration's path-segment locale detection given English lives at
    // the bare path instead of a `/en` segment.
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
