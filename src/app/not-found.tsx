'use client'

import { Button } from '@/components/ui/button'
import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TbZoomQuestion } from 'react-icons/tb'

export default function NotFound() {
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <TbZoomQuestion className="w-16 h-16 text-destructive mb-6" />
      </motion.div>
      <motion.h1
        className="text-3xl md:text-5xl font-medium text-foreground mb-4"
        variants={itemVariants}
      >
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
        variants={itemVariants}
      >
        দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন তার অস্তিত্ব নেই বা সরানো হয়েছে।
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
          <Button asChild size="lg">
            <Link href="/">হোমপেজে যান</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
