import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    github: z.string().url(),
    category: z.string(), // "Full-stack", "DevOps", "AI"
    image: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};