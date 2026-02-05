import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    stack: z.array(z.string()),
    category: z.string(), // "Full-stack", "DevOps", "AI"
    githubUrl: z.string().url(),
    devopsFeatures: z.array(z.string()), // Pour les colonnes DevOps
  }),
});

export const collections = { projects };