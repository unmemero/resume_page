import { defineCollection, z } from 'astro:content'

const skills = defineCollection({
    type: 'content',
    schema: z.any().optional(),
});

const experience = defineCollection({
    type: 'content',
    schema: z.any().optional(),
});

const education = defineCollection({
    type: 'content',
    schema: z.any().optional(),
});

const projects = defineCollection({
    type: 'content',
    schema: z.any().optional(),
});

export const collections = {
    'skills': skills,
    'experience': experience,
    'education': education,
    'projects': projects
};
