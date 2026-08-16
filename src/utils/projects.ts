import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

/**
 * Canonical project ordering: featured projects first (by their manual
 * projectOrder, newest first as a tiebreak), then everything else.
 */
const sortProjects = (a: Project, b: Project) => {
  if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;

  const orderA = a.data.projectOrder ?? Number.POSITIVE_INFINITY;
  const orderB = b.data.projectOrder ?? Number.POSITIVE_INFINITY;

  if (orderA !== orderB) return orderA - orderB;

  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
};

/**
 * The one list both the home page and the projects index derive from, so a
 * project's displayed number is the same wherever it appears.
 */
export const getNumberedProjects = (projects: Project[]) =>
  projects
    .filter((p) => !p.data.draft)
    .sort(sortProjects)
    .map((project, i) => ({ project, num: String(i + 1).padStart(2, '0') }));
