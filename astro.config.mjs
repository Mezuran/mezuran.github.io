// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mezuran.github.io',
  base: '/',

  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), sitemap()],
  adapter: vercel()
});
