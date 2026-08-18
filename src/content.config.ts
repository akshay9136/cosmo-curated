import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    heroImage: z.string().optional(),
    hashtags: z.array(z.string()),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
