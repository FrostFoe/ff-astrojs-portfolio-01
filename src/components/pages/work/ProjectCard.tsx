'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cardHoverTapVariants, itemVariants } from '@/lib/animations'
import type { ProjectFrontmatter } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export default function ProjectCard({
  project,
}: {
  project: ProjectFrontmatter
}) {
  return (
    <motion.div
      variants={{ ...itemVariants, ...cardHoverTapVariants }}
      whileHover="hover"
      whileTap="tap"
    >
      <Link href={`/product/${project.slug}`} className="block group">
        <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {project.image && (
            <div className="overflow-hidden aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="প্রকল্প থাম্বনেইল"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl sm:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="mt-3 text-base text-muted-foreground leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services?.slice(0, 3).map((service) => (
                <Badge key={service} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>
            <div className="flex items-center mt-6 text-sm font-medium text-primary">
              প্রকল্প দেখুন
              <IoArrowForward className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
