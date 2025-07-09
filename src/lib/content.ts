'use server'

import fs from 'fs'
import path from 'path'
import type { PostFrontmatter, ProjectFrontmatter } from '@/types'
import { postFrontmatterSchema, projectFrontmatterSchema } from '@/types'
import matter from 'gray-matter'
import { cache } from 'react'
import { z } from 'zod'

const contentDirectory = path.join(process.cwd(), 'content')

async function getContent<T extends z.ZodType<any, any>>(
  contentType: 'work' | 'writing' | 'pages',
  schema: T,
  slug?: string,
): Promise<any> {
  const dir = path.join(contentDirectory, contentType)

  if (slug) {
    const filePath = path.join(dir, `${slug}.mdx`)
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const frontmatter = schema.parse({ ...data, slug })
      return { frontmatter, content }
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return null
      }
      console.error(`Error processing ${filePath}:`, error)
      return null
    }
  } else {
    if (!fs.existsSync(dir)) {
      return []
    }
    const filenames = fs.readdirSync(dir)
    return filenames
      .map((filename) => {
        if (!filename.endsWith('.mdx')) {
          return null
        }
        const slug = filename.replace(/\.mdx$/, '')
        const filePath = path.join(dir, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        try {
          const frontmatter = schema.parse({ ...data, slug })
          return { frontmatter, content }
        } catch (error) {
          console.error(`Error processing ${filePath}:`, error)
          return null
        }
      })
      .filter(Boolean)
  }
}

export const getProjects = cache(async (): Promise<ProjectFrontmatter[]> => {
  const projectsData = await getContent('work', projectFrontmatterSchema)
  const projects = projectsData.map(
    (p: any) => p.frontmatter as ProjectFrontmatter,
  )
  return projects.sort(
    (a: ProjectFrontmatter, b: ProjectFrontmatter) =>
      parseInt(b.year) - parseInt(a.year),
  )
})

export const getProjectBySlug = cache(async (slug: string) => {
  return getContent('work', projectFrontmatterSchema, slug)
})

export const getPosts = cache(async (): Promise<PostFrontmatter[]> => {
  const postFiles = await getContent(
    'writing',
    postFrontmatterSchema.omit({ readingTime: true }),
  )

  const posts = postFiles.map((postFile: any) => postFile.frontmatter)

  return (posts as PostFrontmatter[]).sort(
    (a: PostFrontmatter, b: PostFrontmatter) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
})

export const getPostBySlug = cache(async (slug: string) => {
  const postFile = await getContent(
    'writing',
    postFrontmatterSchema.omit({ readingTime: true }),
    slug,
  )
  if (postFile) {
    const wordCount = postFile.content.split(/\s+/).filter(Boolean).length
    const readingTime = `${Math.ceil(wordCount / 200)} মিনিট পঠন`
    postFile.frontmatter = postFrontmatterSchema.parse({
      ...postFile.frontmatter,
      readingTime,
    })
  }
  return postFile
})

export const getPageContent = cache(async (slug: string) => {
  const page = await getContent('pages', z.any(), slug)
  if (!page) {
    throw new Error(`No content found for page: ${slug}`)
  }
  return page
})
