'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/button'
import { containerVariants, itemVariants } from '@/lib/animations'
import { formatBengaliDate } from '@/lib/utils'
import type { PostFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoArrowBack,
  IoCalendarClearOutline,
  IoPersonOutline,
  IoTimeOutline,
} from 'react-icons/io5'

export default function PostPageClient({
  frontmatter,
  children,
}: {
  frontmatter: PostFrontmatter
  children: React.ReactNode
}) {
  return (
    <PageWrapper>
      <motion.div
        className="w-full max-w-4xl mb-8"
        variants={itemVariants}
        whileHover={{
          x: -4,
          transition: { type: 'spring', stiffness: 400, damping: 10 },
        }}
      >
        <Button
          variant="ghost"
          asChild
          className="text-muted-foreground hover:text-foreground"
        >
          <Link href="/writing">
            <IoArrowBack className="mr-2 h-4 w-4" />
            লেখায় ফিরে যান
          </Link>
        </Button>
      </motion.div>

      <motion.header
        className="mb-8 text-left w-full max-w-4xl"
        variants={itemVariants}
      >
        <h1 className="text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {frontmatter.excerpt}
        </p>
      </motion.header>

      <motion.div
        className="my-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-muted-foreground w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <IoPersonOutline size={16} />
          <span>{frontmatter.author}</span>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <IoCalendarClearOutline size={16} />
          <span>{formatBengaliDate(frontmatter.date)}</span>
        </motion.div>
        {frontmatter.readingTime && (
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
          >
            <IoTimeOutline size={16} />
            <span>{frontmatter.readingTime}</span>
          </motion.div>
        )}
      </motion.div>

      {frontmatter.image && (
        <motion.div
          className="my-12 overflow-hidden rounded-lg shadow-xl w-full max-w-4xl"
          variants={itemVariants}
        >
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            data-ai-hint="নিবন্ধ হিরো"
            priority
          />
        </motion.div>
      )}

      <motion.div className="w-full max-w-4xl" variants={itemVariants}>
        {children}
      </motion.div>
    </PageWrapper>
  )
}
