import WorkPageClient from '@/components/pages/work/WorkPageClient'
import { getProjects } from '@/lib/content'
import type { Metadata } from 'next'

const frontmatter = {
  title: 'আমার কাজ',
  subtitle: 'আমি গর্বিত এমন কিছু প্রকল্পের সংগ্রহ।',
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: frontmatter.title,
    description: frontmatter.subtitle,
    alternates: {
      canonical: '/work',
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subtitle,
      url: '/work',
      type: 'website',
    },
  }
}

export default async function WorkPage() {
  const projects = await getProjects()

  return <WorkPageClient projects={projects} frontmatter={frontmatter} />
}
