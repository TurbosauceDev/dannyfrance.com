// Edited in the site editor (/keystatic → Projects), stored in projects.json.
// TODO(Danny): rewrite the one-liners in your own words.
import data from './projects.json';
import type { TagSlug } from './tags';

export type Project = { name: string; blurb: string; when: string; status: string; tags: TagSlug[]; url?: string | null };
export const PROJECTS = data.items as Project[];
