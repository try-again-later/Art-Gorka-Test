import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    cssMinify: false,
    minify: false,
    modulePreload: { polyfill: false },
  },
});
