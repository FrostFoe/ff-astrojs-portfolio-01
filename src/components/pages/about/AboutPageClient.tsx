'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { itemVariants } from '@/lib/animations'
import { motion } from 'framer-motion'

export default function AboutPageClient({
  frontmatter,
  children,
}: {
  frontmatter: any
  children: React.ReactNode
}) {
  return (
    <PageWrapper className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 sm:pt-36 md:pt-40 pb-16">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-12 text-center max-w-4xl"
        variants={itemVariants}
      >
        {frontmatter.title}
      </motion.h1>
      <motion.div
        className="w-full max-w-4xl text-center"
        variants={itemVariants}
      >
        {children}
      </motion.div>
    </PageWrapper>
  )
}
