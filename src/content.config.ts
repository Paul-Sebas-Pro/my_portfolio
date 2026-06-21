import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    stack: z.array(z.string()),
    category: z.string(),
    githubUrl: z.string().url(),
    devopsFeatures: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    readTime: z.number(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    clientType: z.string(),
    sector: z.string(),
    duration: z.string(),
    results: z.array(z.string()),
    stack: z.array(z.string()),
    pubDate: z.date(),
  }),
});

export const collections = { projects, blog, caseStudies };
