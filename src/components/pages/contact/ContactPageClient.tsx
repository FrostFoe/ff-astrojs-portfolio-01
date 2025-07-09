'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { Card } from '@/components/ui/card'
import { containerVariants, itemVariants } from '@/lib/animations'
import { motion } from 'framer-motion'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import ContactForm from './ContactForm'

export default function ContactPageClient({
  frontmatter,
}: {
  frontmatter: any
}) {
  return (
    <PageWrapper className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 sm:pt-36 md:pt-40 pb-16">
      <motion.div
        className="text-center mb-16 max-w-6xl"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {frontmatter.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
      >
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <Card className="p-8 h-full">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="p-8 h-full">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-foreground mb-2 flex items-center">
                  <IoMail className="w-5 h-5 mr-3 text-muted-foreground" /> ইমেল
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  hello@frostfoe.design
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-foreground mb-2 flex items-center">
                  <IoLocationSharp className="w-5 h-5 mr-3 text-muted-foreground" />{' '}
                  অবস্থান
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  ইন্টারনেট, সর্বত্র
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-foreground mb-2">
                  কথোপকথন শুরু করুন
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  আমি নতুন প্রকল্প, সৃজনশীল ধারণা বা দূরদর্শী কোনো কিছুর অংশ
                  হওয়ার সুযোগ নিয়ে আলোচনা করার জন্য সর্বদা প্রস্তুত।
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}
