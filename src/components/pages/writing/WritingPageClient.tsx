'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { containerVariants, headerItemVariants } from '@/lib/animations'
import type { PostFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import PostCard from './PostCard'

export default function WritingPageClient({
  posts,
  frontmatter,
}: {
  posts: PostFrontmatter[]
  frontmatter: any
}) {
  return (
    <PageWrapper>
      <motion.div className="mb-16 text-center" variants={headerItemVariants}>
        <h1 className="text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <motion.div className="w-full max-w-4xl" variants={containerVariants}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </motion.div>
    </PageWrapper>
  )
}
