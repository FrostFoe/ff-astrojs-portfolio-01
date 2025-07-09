'use client'

import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <motion.footer
      className="relative z-10 border-t border-border/60 mt-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col items-center text-center">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <Link
            href="/"
            className="flex flex-col items-center gap-2 mb-4 md:mb-6 text-foreground transition-colors hover:text-primary"
          >
            <Logo />
            <span className="font-semibold text-base md:text-lg">FrostFoe</span>
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="টুইটার"
            variants={buttonHoverTapVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaTwitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="গিটহাব"
            variants={buttonHoverTapVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </motion.a>
        </motion.div>

        <motion.div
          className="text-sm text-muted-foreground"
          variants={itemVariants}
        >
          {currentYear && (
            <p>© {currentYear} FrostFoe. সর্বস্বত্ব সংরক্ষিত।</p>
          )}
          <p className="mt-1">একটি ডিজাইন ও প্রযুক্তি স্টুডিও।</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
