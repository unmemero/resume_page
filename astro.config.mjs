// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rafaelgarciaresume.com',
  base: '/',
  output: 'server', 
  vite: {
    build: {
      sourcemap: false,
    },
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel() 
});