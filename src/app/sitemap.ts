import { getPosts, getProjects } from '@/lib/content'
import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const projects = await getProjects()

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/writing/${post.slug}`,
    lastModified: post.date,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/product/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const staticRoutes = [
    '',
    '/work',
    '/writing',
    '/about',
    '/contact',
    '/services',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...staticRoutes, ...projectRoutes, ...postRoutes]
}
