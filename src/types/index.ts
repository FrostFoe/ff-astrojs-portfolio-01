import { z } from 'zod'

export const projectFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  year: z.string(),
  image: z.string().optional(),
  services: z.array(z.string()).optional(),
  client: z.string(),
  live_url: z.string().optional(),
})

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>

export const postFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  image: z.string().optional(),
  author: z.string().default('FrostFoe'),
  readingTime: z.string().optional(),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>
