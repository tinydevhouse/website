# Tiny Dev House

Source for the [Tiny Dev House](https://github.com/tinydevhouse/website) website —
a typography-first Astro site with MDX posts, dark mode, built-in Pagefind search,
RSS, and a sitemap.

## Features

- Astro 6 static site
- Markdown and MDX posts in `src/content/blog`
- Projects collection in `src/content/projects`
- Blog index with category filters and inline list search
- `/search` route powered by Pagefind
- `Cmd`/`Ctrl` + `K` command palette for quick post search
- Dark mode with CSS tokens
- Custom code block theme via Expressive Code
- Related posts, RSS, sitemap, Open Graph metadata, and JSON-LD
- Optional giscus comments, disabled by default
- Optional `focusEffect: 'scroll-dark'` for long-form posts

## Requirements

- Node.js 24.15.0 or newer (see `.nvmrc`)
- [pnpm](https://pnpm.io) (the project is pinned via `packageManager` in `package.json`)

## Getting Started

```bash
git clone https://github.com/tinydevhouse/website.git
cd website
pnpm install
pnpm dev
```

The local dev server usually starts at `http://localhost:4321`.

## Commands

| Command         | Action                                         |
| --------------- | ---------------------------------------------- |
| `pnpm dev`      | Start the local dev server                     |
| `pnpm build`    | Build the site and generate the Pagefind index |
| `pnpm preview`  | Preview the production build                   |
| `pnpm check`    | Run Astro type checks                          |
| `pnpm lint`     | Run ESLint                                     |
| `pnpm lint:css` | Run Stylelint                                  |
| `pnpm format`   | Format source files with Prettier              |

## Customize

Most site-level settings live in `astro-theme-config.ts` — site title, navigation,
About page content, comments, and social links.

Posts live in `src/content/blog/` and projects in `src/content/projects/`. The
filename becomes the URL slug.

## Deploy

The site is a static build deployed to **Netlify**, which publishes automatically
on every push to `main`.

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `pnpm build`    |
| Output directory | `dist`          |
| Node version     | 24.15.0 or newer |

`pnpm build` writes the static site and the Pagefind search index to `dist`.

No analytics run by default. To opt into Vercel Analytics, set
`PUBLIC_VERCEL_ANALYTICS=true`.
