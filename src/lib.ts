import { getCollection } from 'astro:content';
export async function getPosts() {
  return (await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)).sort((a, b) => +b.data.date - +a.data.date);
}
export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
