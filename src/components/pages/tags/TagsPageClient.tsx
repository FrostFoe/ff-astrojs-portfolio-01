'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { Badge } from '@/components/ui/badge'
import {
  containerVariants,
  headerItemVariants,
  itemVariants,
} from '@/lib/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TagsListPageClient({
  tags,
  frontmatter,
}: {
  tags: { tag: string; slug: string }[]
  frontmatter: any
}) {
  return (
    <PageWrapper>
      <motion.div
        className="text-center mb-16 md:mb-20"
        variants={headerItemVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl flex flex-wrap justify-center gap-4"
        variants={containerVariants}
      >
        {tags.map(({ tag, slug }) => (
          <motion.div
            key={slug}
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href={`/tags/${slug}`}>
              <Badge
                variant="secondary"
                className="text-base md:text-lg px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {tag}
              </Badge>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  )
}
