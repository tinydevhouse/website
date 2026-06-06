// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import process from 'node:process';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExpressiveCode from 'rehype-expressive-code';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import config from './astro-theme-config.ts';
import { toneExpressiveCodeOptions } from './src/config/expressive-code.ts';
import remarkWaffleEmoji from './src/plugins/remark-waffle-emoji.mjs';

// https://astro.build/config
const sitemapExcludedPaths = new Set(['/search/']);
const configuredSite = process.env.ASTRO_SITE_URL || config.site.url;
const configuredBaseValue = process.env.ASTRO_SITE_BASE ?? config.site.base;
const configuredBase =
  configuredBaseValue === '/' ? '' : configuredBaseValue.replace(/\/$/, '');

/** @param {string} pathname */
function withoutConfiguredBase(pathname) {
  if (!configuredBase) return pathname;
  if (!pathname.startsWith(configuredBase)) return pathname;

  return pathname.slice(configuredBase.length) || '/';
}

export default defineConfig({
  site: configuredSite,
  base: configuredBase || undefined,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !sitemapExcludedPaths.has(withoutConfiguredBase(new URL(page).pathname)),
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },

  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [remarkDirective, remarkWaffleEmoji],
      rehypePlugins: [
        [rehypeExpressiveCode, toneExpressiveCodeOptions],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { ariaHidden: true, tabIndex: -1, class: 'heading-anchor' },
            content: { type: 'text', value: '#' },
          },
        ],
      ],
    }),
  },
});
