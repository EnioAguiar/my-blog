// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: 'https://brainnoises.com',
	integrations: [mdx(), sitemap(), pagefind()],
	i18n: {
		defaultLocale: 'pt',
		locales: ['pt', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	vite: {
		resolve: {
			alias: {
				'@/assets': path.resolve(__dirname, './src/assets'),
				'@/components': path.resolve(__dirname, './src/components'),
				'@/layouts': path.resolve(__dirname, './src/layouts'),
				'@/pages': path.resolve(__dirname, './src/pages'),
				'@/styles': path.resolve(__dirname, './src/styles'),
				'@/i18n': path.resolve(__dirname, './src/i18n'),
				'@/consts': path.resolve(__dirname, './src/consts.ts'),
			},
		},
	},
});