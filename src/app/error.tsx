'use client'

import { Button } from '@/components/ui/button'
import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { IoWarningOutline } from 'react-icons/io5'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <IoWarningOutline className="w-16 h-16 text-destructive mb-6" />
      </motion.div>
      <motion.h1
        className="text-3xl md:text-5xl font-medium text-foreground mb-4"
        variants={itemVariants}
      >
        কিছু একটা ভুল হয়েছে!
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
        variants={itemVariants}
      >
        একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা হোমপেজে
        ফিরে যান।
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        variants={itemVariants}
      >
        <motion.div
          variants={buttonHoverTapVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button onClick={() => reset()} size="lg">
            আবার চেষ্টা করুন
          </Button>
        </motion.div>
        <motion.div
          variants={buttonHoverTapVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/">হোমপেজে যান</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
