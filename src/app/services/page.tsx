import ServicesPageClient from '@/components/pages/services/ServicesPageClient'
import { getPageContent } from '@/lib/content'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('services')
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    alternates: {
      canonical: '/services',
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      url: '/services',
      type: 'website',
    },
  }
}

export default async function ServicesPage() {
  const { frontmatter, content } = await getPageContent('services')

  return (
    <ServicesPageClient frontmatter={frontmatter}>
      <div className="prose prose-xl md:prose-2xl text-center text-muted-foreground dark:prose-invert leading-relaxed space-y-8">
        <MDXRemote source={content} />
      </div>
    </ServicesPageClient>
  )
}
