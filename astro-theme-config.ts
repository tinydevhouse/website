type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Tiny Dev House website.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
    /** Production origin, used for canonical links, sitemap, and Open Graph metadata. */
    url: 'https://tinydevhouse.com',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: 'Tiny Dev House',
    logoLabel: 'Tiny Dev House',
    /**
     * Single monochrome logo placed in `public/`. It replaces the `logoLabel`
     * text in the header and is painted with the theme's text color via a CSS
     * mask, so it adapts to light/dark automatically. Only the SVG's shape is
     * used — its own fill color is ignored. Set to '' to show the text wordmark.
     */
    logo: '/logo-dark.svg',
    description: 'Indie software built with care. Local-first tools that respect your data.',
    author: 'Tiny Dev House',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: '/og.png',
  },

  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Blog', href: '/blog' }, { label: 'About', href: '/about' }]
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ] as NavItem[],

  // Footer links stay visible by default so readers have a stable way to move around.
  footerNav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  content: {
    categoryOrder: [
      'Design',
      'Getting Started',
      'Markdown',
      'Open Source',
      'Systems',
      'Notes',
      'Research',
      'Performance',
      'MDX',
    ],
  },

  behavior: {
    smoothScroll: true,
  },

  comments: {
    // One-line switch after you fill the giscus values:
    // mode: 'off'           -> no comments
    // mode: 'giscus'        -> original giscus theme
    // mode: 'giscus-custom' -> Astro Tone custom giscus theme
    // Local preview can also use PUBLIC_GISCUS_MODE and PUBLIC_GISCUS_* in .env.local.
    mode: 'off',
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      customLightTheme: '/giscus-light.css',
      customDarkTheme: '/giscus-dark.css',
      lang: 'en',
      loading: 'eager',
    },
  },

  social: {
    website: 'https://tinydevhouse.com', // e.g. 'https://your-site.com'
    email: 'sabrina@tinydevhouse.com', // e.g. 'hello@your-site.com'
    mastodon: '', // e.g. 'https://mastodon.social/@yourhandle'
    devto: '', // e.g. 'https://dev.to/yourhandle'
    linkedin: 'https://www.linkedin.com/in/sabrinafpereira/', // e.g. 'https://www.linkedin.com/in/yourhandle'
    github: 'https://github.com/sf-pear', // e.g. 'https://github.com/yourhandle'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Tiny Dev House',
    role: 'Independent software studio in Sweden.',
    location: 'Sweden',
    focus: 'AI/ML engineering, computer vision, LLM agents, GraphRAG, and local-first tools.',
    lead: [
      'A one-person software studio creating opinionated tools that respect your data.',
      // 'I build local-first apps, clean exports, on-device AI, and desktop software that feels calm, useful, and carefully made. No tracking by default. No lock-in disguised as convenience. No giant platform ambitions.',
      // 'Just focused tools with a point of view — built by someone who cares about the details.',
    ],
    headline: ['Tiny Dev', 'House'],
    statementLabel: 'Position',
    statementTitle: 'Indie software built with care.',
    statement: [
      'I care about software that feels thoughtfully made — not just functional, but calm, fast, clear. Something you truly love to use. Tools that do not harvest your data, trap your files, or turn every useful feature into a subscription.',
      'Most of what I build starts from a personal frustration: a workflow that should be simpler, a desktop tool that should exist, or an AI feature that should run closer to where the data actually lives.',
      'Tiny Dev House is a place for software built with love with sharp edges in all the right places.',
    ],
    personalStatement:
      'I\'m Sabrina, a developer based in Sweden, originally from Brazil. My day job is AI/ML engineering at Knightec Group, mostly around computer vision, LLM agents, GraphRAG and predictive models. Before that I studied design, and before that I was a kid making Geocities-era websites for friends. Tiny Dev House happens around work and parenting, usually in the quieter parts of the day. That is part of the point too: serious software can come from a full life, a busy life, a life with a toddler in it.',
    careerLabel: 'Log',
    careerHeading: 'Studio log',
    career: [
      {
        period: 'Current',
        title: 'Tiny Dev House',
        description:
          'Building independent software projects, writing field notes, and keeping the infrastructure deliberately simple.',
      },
      {
        period: 'Ongoing',
        title: 'Local-first experiments',
        description:
          'Testing sync models, SQLite-shaped product decisions, and interfaces that do not need a platform account to be useful.',
      },
      {
        period: 'Always',
        title: 'Repair culture',
        description:
          'Preferring tools that can be inspected, exported, backed up, and fixed without begging a vendor dashboard.',
      },
    ],
    interests: [
      'Local-first apps, on-device AI, and interfaces that make messy personal data feel manageable',
      'Tools with personality: Logseq, Vivaldi, PowerToys, ShareX, Ueli',
      'The old personal web, pixel art, games, fantasy and sci-fi',
      'Roller derby, biking around Gothenburg, and getting near the ocean whenever possible',
      'Good coffee, Nordic noir, and building things after bedtime',
    ],
    interestsLabel: 'Biases',
    interestsHeading: 'What the work keeps returning to',
    principles: [
      {
        title: 'Built with care.',
        body: 'A tool should feel like someone thought about the details. Delight is not polish added at the end; it is part of the reason the thing exists.',
      },
      {
        title: 'Local-first when it matters.',
        body: 'Personal software should run on your machine, keep working offline, and put as few accounts and servers as possible between you and your own stuff.',
      },
      {
        title: 'Yours to keep.',
        body: 'No lock-in. No subscription holding your files hostage. Export matters because leaving should always be allowed.',
      },
    ],
  },
};

export default config;
