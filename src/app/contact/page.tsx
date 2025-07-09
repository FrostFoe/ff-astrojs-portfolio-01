import ContactPageClient from '@/components/pages/contact/ContactPageClient'
import { getPageContent } from '@/lib/content'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPageContent('contact')
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    alternates: {
      canonical: '/contact',
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      url: '/contact',
      type: 'website',
    },
  }
}

export default async function ContactPage() {
  const { frontmatter } = await getPageContent('contact')
  return <ContactPageClient frontmatter={frontmatter} />
}
