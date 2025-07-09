'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import Logo from './Logo'
import { ThemeSwitcher } from './ThemeSwitcher'

const navItems = [
  { name: 'কাজ', href: '/work' },
  { name: 'সেবা', href: '/services' },
  { name: 'লেখা', href: '/writing' },
  { name: 'সম্পর্কে', href: '/about' },
  { name: 'যোগাযোগ', href: '/contact' },
]

const MotionLink = motion(Link)

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-2 z-50 w-full flex justify-center px-4 md:top-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
    >
      <div className="w-full flex items-center justify-between rounded-full border border-border/40 bg-background/80 px-2 py-2 text-foreground shadow-lg backdrop-blur-lg sm:px-3 md:w-auto">
        <MotionLink
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo />
          <span className="hidden font-medium text-sm sm:inline">FrostFoe</span>
        </MotionLink>

        <div className="mx-2 hidden h-5 w-px bg-border/60 md:block"></div>
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => {
            const isActive =
              (item.href !== '/' && pathname.startsWith(item.href)) ||
              (item.href === '/work' && pathname.startsWith('/product'))

            return (
              <MotionLink
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm"
                    layoutId="active-nav-link"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </MotionLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <CgMenu className="h-5 w-5" />
                  <span className="sr-only">মেনু খুলুন</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col space-y-4 pt-10">
                  {navItems.map((item) => {
                    const isActive =
                      (item.href !== '/' && pathname.startsWith(item.href)) ||
                      (item.href === '/work' && pathname.startsWith('/product'))
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          isActive
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
