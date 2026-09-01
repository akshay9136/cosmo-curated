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
    author: z.string().default('Cosmo Curated Editorial'),
    readingTime: z.number().optional(), // minutes; auto-derived if omitted
    seoKeywords: z.array(z.string()).optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};

