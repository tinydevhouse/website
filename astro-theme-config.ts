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
    github: 'https://github.com/tinydevhouse',
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
    // website: 'https://tinydevhouse.com', // e.g. 'https://your-site.com'
    github: 'https://github.com/sf-pear', // e.g. 'https://github.com/yourhandle'
    linkedin: 'https://www.linkedin.com/in/sabrinafpereira/', // e.g. 'https://www.linkedin.com/in/yourhandle'
    devto: 'https://dev.to/sfpear', // e.g. 'https://dev.to/yourhandle'
    // mastodon: '', // e.g. 'https://mastodon.social/@yourhandle'
    email: 'sabrina@tinydevhouse.com', // e.g. 'hello@your-site.com'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Sabrina Pereira',
    role: 'Building and shipping after bedtime.',
    location: 'Sweden',
    // interests: 'Creating tools that bring interesting machine learning concepts to consumer applications.',
    interests: 'Software development, machine learning, data science, and visualization. And other equally fun things, like roller skating and sipping coconuts at the beach.',
    lead: [
      'An indie software studio creating tools that feel great to use and respect your data.',
    ],
    headline: ['Tiny Dev', 'House'],
    statementLabel: 'Position',
    statementTitle: 'Indie software built with care.',
    statement: [
      'Tiny Dev House is about building thoughtful software that brings interesting machine learning concepts to consumer applications in a way we don\'t usually see. Applications that are beautiful, powerful, and truly enjoyable to use. Most of what you find here began as tools for solving probably way too specific and personal problems. But as I used and improved them, they grew into something I thought could be genuinely useful to others.',
      'I believe our data should be ours, so I focus on keeping it safe while still creating value from it on our own machines. I am tired of proprietary data formats and being stuck in someone else\'s system.',
      'This is my way to resist.',
      // 'I care about software that feels thoughtfully made — not just functional, but calm, fast, clear. Something you truly love to use. Tools that do not harvest your data, trap your files, or turn every useful feature into a subscription.',
      // 'Most of what I build starts from a personal frustration: a workflow that should be simpler, a desktop tool that should exist, or an AI feature that should run closer to where the data actually lives.',
      // 'Tiny Dev House is a place for software built with love with sharp edges in all the right places.',
    ],
    principles: [
      {
        title: 'Built with care.',
        body: 'We care deeply about user experience and believe software should feel like there is care in the details. Polish is not just about looks but how it feels to use an application and the principles behind it.',
      },
      {
        title: 'Your data is yours.',
        body: 'No vendor lock-in. Your files and the value created through metadata generation should be yours to keep and use as you want.',
      },
      {
        title: 'Powerful and local.',
        body: 'Powerful AI features should not be defined by sending off your data to someone else\'s servers. We want to give users useful features that can run on their own machines and without a network connection.',
      },
    ],
  },
};

export default config;
