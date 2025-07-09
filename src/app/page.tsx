import HomePageClient from '@/components/pages/home/HomePageClient'
import { getPosts, getProjects } from '@/lib/content'
import type { PostFrontmatter, ProjectFrontmatter } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ফ্রস্টফো | একটি ডিজাইন ও প্রযুক্তি স্টুডিও।',
  description:
    'একজন ডিজাইন ও প্রযুক্তি শিল্পী, যিনি ডিজিটাল অভিজ্ঞতা তৈরি করেন যা সঠিক অনুভূতি দেয় এবং আরও ভালোভাবে কাজ করে।',
  alternates: {
    canonical: '/',
  },
}

export default async function Home() {
  const projects: ProjectFrontmatter[] = (await getProjects()).slice(0, 2)
  const posts: PostFrontmatter[] = (await getPosts()).slice(0, 2)

  return <HomePageClient projects={projects} posts={posts} />
}
