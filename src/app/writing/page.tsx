import WritingPageClient from '@/components/pages/writing/WritingPageClient'
import { getPageContent, getPosts } from '@/lib/content'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('writing')
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    alternates: {
      canonical: '/writing',
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      url: '/writing',
      type: 'website',
    },
  }
}

export default async function WritingPage() {
  const posts = await getPosts()
  const { frontmatter } = await getPageContent('writing')

  return <WritingPageClient posts={posts} frontmatter={frontmatter} />
}
