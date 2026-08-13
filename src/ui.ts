const ui = {
  backLink: '← All Field Notes',
  readingTime: (n: number) => `${n} min read`,
  updated: 'Updated',
  relatedPosts: 'Related',
  allPosts: 'All Field Notes →',
  blogEyebrow: 'Building & writing',
  blogTitle: 'Field Notes',
  heroTitle: 'Tiny Dev House',
  heroTitleLine2: '',
  viewAll: 'All Field Notes →',
  readLink: 'Read →',
  postFeed: {
    all: 'All',
    filterLabel: 'Filter posts by category',
    previousCategories: 'Scroll categories left',
    nextCategories: 'Scroll categories right',
    searchLabel: 'Search posts',
    empty: 'No posts match this filter.',
    more: 'Load more',
    read: 'Read',
  },
};

export function getUiText() {
  return ui;
}
