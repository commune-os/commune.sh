import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    server: {
        fs: {
              allow: ['..'],
        },
    },
    build: {
        minify: 'esbuild',
        cssMinify: true,
        sourcemap: true
  },
});

