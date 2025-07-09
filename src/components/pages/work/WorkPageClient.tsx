'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { containerVariants, headerItemVariants } from '@/lib/animations'
import type { ProjectFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function WorkPageClient({
  projects,
  frontmatter,
}: {
  projects: ProjectFrontmatter[]
  frontmatter: any
}) {
  return (
    <PageWrapper>
      <motion.div className="text-center mb-16" variants={headerItemVariants}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </PageWrapper>
  )
}
