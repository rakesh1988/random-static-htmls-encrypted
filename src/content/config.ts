import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    subject: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'notes': notesCollection,
};
