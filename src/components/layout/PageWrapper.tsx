'use client'

import { containerVariants as defaultContainerVariants } from '@/lib/animations'
import { motion, type Variants } from 'framer-motion'

export default function PageWrapper({
  children,
  className,
  variants = defaultContainerVariants,
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div
      className={
        className ||
        'w-full min-h-screen flex flex-col items-center px-4 pt-28 sm:pt-32 md:pt-36 pb-16'
      }
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
