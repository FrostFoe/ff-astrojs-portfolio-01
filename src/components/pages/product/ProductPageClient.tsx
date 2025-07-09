'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import type { ProjectFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoArrowBack,
  IoBriefcaseOutline,
  IoBuildOutline,
  IoCalendarClearOutline,
  IoGlobeOutline,
} from 'react-icons/io5'

export default function ProductPageClient({
  frontmatter,
  children,
}: {
  frontmatter: ProjectFrontmatter
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
          <Link href="/work">
            <IoArrowBack className="mr-2 h-4 w-4" />
            কাজে ফিরে যান
          </Link>
        </Button>
      </motion.div>

      <motion.header
        className="mb-8 w-full max-w-4xl"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl font-medium text-foreground sm:text-4xl md:text-5xl mb-6"
          variants={itemVariants}
        >
          {frontmatter.title}
        </motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 text-left">
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
          >
            <IoBriefcaseOutline className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">ক্লায়েন্ট</p>
              <p className="font-semibold text-foreground">
                {frontmatter.client}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
          >
            <IoCalendarClearOutline className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">বছর</p>
              <p className="font-semibold text-foreground">
                {frontmatter.year}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2 sm:col-span-2 flex items-start gap-3"
            variants={itemVariants}
          >
            <IoBuildOutline className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">সেবা</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {frontmatter.services?.map((service: string) => (
                  <Badge key={service} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {frontmatter.live_url && (
        <motion.div className="my-8 w-full max-w-4xl" variants={itemVariants}>
          <motion.div
            className="inline-block"
            variants={buttonHoverTapVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button asChild>
              <Link
                href={frontmatter.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                লাইভ সাইট দেখুন <IoGlobeOutline className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      )}

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
            className="object-cover w-full"
            data-ai-hint="প্রকল্প হিরো"
            priority
          />
        </motion.div>
      )}

      <motion.div className="w-full max-w-4xl" variants={itemVariants}>
        <Separator className="my-12" />
        {children}
      </motion.div>
    </PageWrapper>
  )
}
