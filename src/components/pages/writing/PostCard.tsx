'use client'

import { itemVariants } from '@/lib/animations'
import { formatBengaliDate } from '@/lib/utils'
import type { PostFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function PostCard({ post }: { post: PostFrontmatter }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -2,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      className="border-b border-border/60 last:border-b-0"
    >
      <Link
        href={`/writing/${post.slug}`}
        className="group block rounded-lg py-8 transition-all duration-300 hover:bg-secondary/50 md:-mx-6 md:px-6"
      >
        <div className="grid grid-cols-1 items-start gap-x-8 md:grid-cols-12">
          {post.image && (
            <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
              <div className="overflow-hidden rounded-lg aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="নিবন্ধ থাম্বনেইল"
                />
              </div>
            </div>
          )}

          <div
            className={`col-span-12 ${
              post.image ? 'md:col-span-8' : 'md:col-span-12'
            }`}
          >
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">
                {formatBengaliDate(post.date)}
              </span>
            </div>
            <h3 className="text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              {post.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center text-sm font-medium text-primary">
              নিবন্ধটি পড়ুন
              <IoArrowForward className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
