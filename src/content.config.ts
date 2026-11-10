import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TAG_SLUGS } from './data/tags';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.enum(TAG_SLUGS)).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
