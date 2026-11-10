import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TAG_SLUGS } from './data/tags';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // The editor writes empty dates as null; treat that as unset.
    updated: z.preprocess((v) => v ?? undefined, z.coerce.date().optional()),
    description: z.string().nullish().transform((v) => v || undefined),
    tags: z.array(z.enum(TAG_SLUGS)).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
