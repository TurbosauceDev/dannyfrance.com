import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://dannyfrance.com',
  // Pages stay static; only the /keystatic editor and its /api routes run on the server.
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [react(), keystatic(), sitemap({ filter: (page) => !page.includes('/keystatic') })],
  markdown: { shikiConfig: { theme: 'github-dark-dimmed' } },
});
