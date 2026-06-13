# Tiny Dev House Website

This is the source for [tinydevhouse.com](https://tinydevhouse.com), where we keep project descriptions, building notes, lessons learned, and the occasional waffling.

The site is an Astro static site with Markdown/MDX content, a project archive, dark mode, Pagefind search, RSS, sitemap output, Open Graph metadata, and a small configuration surface for the parts that should be easy to personalize.

## About Tiny Dev House

[Tiny Dev House](https://tinydevhouse.com) is an indie software studio focused on data ownership and thoughtful applications that use interesting machine learning concepts to create value from data locally.

## What Is Here

- `src/pages/` contains the main routes.
- `src/content/blog/` contains blog posts.
- `src/content/projects/` contains project pages.
- `src/content/from-template/` keeps template/reference posts out of the main blog.
- `src/components/` contains shared UI.
- `src/styles/` contains design tokens, page styles, prose styles, and component CSS.
- `astro-theme-config.ts` is the main place for site title, navigation, social links, comments, and About page copy.

## Requirements

- Node.js 24.15.0 or newer.
- pnpm. The expected version is pinned in `package.json`.

## Local Development

```bash
pnpm install
pnpm dev
```

The dev server usually starts at `http://localhost:4321`.

## Common Commands

| Command         | Action                                         |
| --------------- | ---------------------------------------------- |
| `pnpm dev`      | Start the local dev server                     |
| `pnpm check`    | Run Astro type checks                          |
| `pnpm build`    | Build the site and generate the Pagefind index |
| `pnpm preview`  | Preview the production build                   |
| `pnpm lint`     | Run ESLint                                     |
| `pnpm lint:css` | Run Stylelint                                  |
| `pnpm format`   | Format source files with Prettier              |

## Writing Content

Create posts in `src/content/blog/` and projects in `src/content/projects/`. The filename becomes the URL slug.

Images that belong to content can live in `src/assets/`, then be imported or referenced from Markdown frontmatter depending on the page layout.

## Using This As A Template

This repository is personal to Tiny Dev House, but the site is intentionally easy to adapt.

1. Fork or copy the repository.
2. Update `astro-theme-config.ts` with your site URL, title, navigation, social links, About page content, and comment settings.
3. Replace `public/logo-dark.svg`, favicons, `public/og.png`, and any sample images you do not want.
4. Replace or remove content in `src/content/blog/`, `src/content/projects/`, and `src/content/from-template/`.
5. Update package metadata in `package.json`.
6. Run `pnpm check` and `pnpm build`.

If you deploy under a subpath, set `site.base` in `astro-theme-config.ts`. If you deploy at a domain root, keep it empty.

## Shipping Tiny Dev House

The production site is deployed by Netlify. Every push to `main` triggers a new build.

Before pushing:

```bash
pnpm check
pnpm build
```

Then commit and push:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

Netlify settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `pnpm build`    |
| Output directory | `dist`          |
| Node version     | 24.15.0 or newer |
