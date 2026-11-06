// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmocurated.com',
  // Keep established slashless links, canonicals, and sitemap URLs consistent.
  trailingSlash: 'never',
  redirects: {
    '/articles/death-of-a-massive-star': {
      status: 301,
      destination: '/articles/death-of-massive-star',
    },
  },
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
});