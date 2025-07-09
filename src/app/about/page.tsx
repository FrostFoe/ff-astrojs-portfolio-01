import AboutPageClient from '@/components/pages/about/AboutPageClient'
import { getPageContent } from '@/lib/content'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('about')
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    alternates: {
      canonical: '/about',
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      url: '/about',
      type: 'website',
    },
  }
}

export default async function AboutPage() {
  const { frontmatter, content } = await getPageContent('about')

  return (
    <AboutPageClient frontmatter={frontmatter}>
      <div className="prose prose-xl md:prose-2xl text-center text-muted-foreground dark:prose-invert leading-relaxed space-y-8">
        <MDXRemote source={content} />
      </div>
    </AboutPageClient>
  )
}
