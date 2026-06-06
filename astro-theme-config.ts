type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Astro Tone theme.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
    /** Production origin, used for canonical links, sitemap, and Open Graph metadata. */
    url: 'https://example.com',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: 'Tiny Dev House',
    logoLabel: 'Tiny Dev House',
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
    website: 'https://example.com', // e.g. 'https://your-site.com'
    email: '', // e.g. 'hello@your-site.com'
    mastodon: '', // e.g. 'https://mastodon.social/@yourhandle'
    devto: '', // e.g. 'https://dev.to/yourhandle'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/yourhandle'
    github: 'https://github.com/tinydevhouse', // e.g. 'https://github.com/yourhandle'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Tiny Dev House',
    role: 'Independent software studio in Sweden.',
    location: 'Sweden',
    focus: 'Local-first tools, small ML workflows, personal infrastructure.',
    lead: 'Tiny Dev House builds small, useful software with a bias for ownership, repairability, and boring systems that keep working.',
    headline: ['Independent', 'software.'],
    statementLabel: 'Position',
    statementTitle: 'Serious engineering, without the unicorn cosplay.',
    statement:
      'The work here is technical, practical, and mildly suspicious of platforms. Most projects orbit local-first computing, privacy, machine learning utilities, and tools that let people keep custody of their data.',
    careerLabel: 'Log',
    careerHeading: 'Studio log',
    career: [
      {
        period: 'Current',
        title: 'Tiny Dev House',
        description:
          'Building independent software projects, writing field notes, and keeping the infrastructure deliberately small.',
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
      'Local-first software and open protocols',
      'Self-hosting without making it a full-time job',
      'Small machine learning tools that do one useful thing',
      'Gardens, bicycles, Linux, and systems that can be repaired',
    ],
    interestsLabel: 'Biases',
    interestsHeading: 'What the work keeps returning to',
    principles: [
      {
        title: 'Local-first.',
        body: 'Your data should live on your machine. A tool that works offline is a tool you actually own.',
      },
      {
        title: 'Boring stacks.',
        body: 'SQLite and flat files beat distributed systems until they genuinely don\'t. Choose boring technology, then defend that choice.',
      },
      {
        title: 'Small surface.',
        body: 'A tool that does one thing well beats a platform every time. Scope creep is a design failure.',
      },
      {
        title: 'Export always.',
        body: 'If you can\'t get your data out in a standard format, you don\'t own it. Export is a feature, not an afterthought.',
      },
      {
        title: 'Repair culture.',
        body: 'Software should be inspectable, forkable, and fixable without begging a vendor dashboard. Open source where it makes sense.',
      },
    ],
  },
};

export default config;
