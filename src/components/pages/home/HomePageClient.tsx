'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import ProjectCard from '@/components/pages/work/ProjectCard'
import PostCard from '@/components/pages/writing/PostCard'
import { Button } from '@/components/ui/button'
import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import type { PostFrontmatter, ProjectFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function HomePageClient({
  projects,
  posts,
}: {
  projects: ProjectFrontmatter[]
  posts: PostFrontmatter[]
}) {
  return (
    <PageWrapper className="w-full min-h-screen flex flex-col items-center px-4 pt-32 sm:pt-36 md:pt-40 pb-16">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="w-full max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl text-center font-medium text-foreground/90"
          variants={itemVariants}
        >
          একটি ডিজাইন ও
          <br />
          প্রযুক্তি স্টুডিও।
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          variants={itemVariants}
        >
          ডিজিটাল অভিজ্ঞতা তৈরি করা যা সঠিক অনুভূতি দেয় এবং আরও ভালোভাবে কাজ
          করে। আমরা সুন্দর, কার্যকরী ওয়েবসাইট এবং অ্যাপ্লিকেশন তৈরি করি যা একটি
          স্থায়ী ছাপ ফেলে।
        </motion.p>
      </motion.div>

      {projects.length > 0 && (
        <motion.section
          className="w-full max-w-5xl mt-20 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-foreground mb-10 text-center"
            variants={itemVariants}
          >
            নির্বাচিত কাজ
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" variants={itemVariants}>
            <motion.div
              className="inline-block"
              variants={buttonHoverTapVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" variant="outline">
                <Link href="/work">
                  সমস্ত কাজ দেখুন <IoArrowForward className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}

      {posts.length > 0 && (
        <motion.section
          className="w-full max-w-4xl mt-20 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-foreground mb-10 text-center"
            variants={itemVariants}
          >
            ব্লগ থেকে
          </motion.h2>
          <motion.div variants={containerVariants}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" variants={itemVariants}>
            <motion.div
              className="inline-block"
              variants={buttonHoverTapVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" variant="outline">
                <Link href="/writing">
                  আরও নিবন্ধ পড়ুন <IoArrowForward className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </PageWrapper>
  )
}
