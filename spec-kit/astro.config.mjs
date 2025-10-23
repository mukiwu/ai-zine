// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mukiwu.github.io',
  base: '/ai-zine/spec-kit',
  vite: {
    plugins: [tailwindcss()]
  }
});