'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import {
  buttonHoverTapVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { IoArrowForward } from 'react-icons/io5'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, { message: 'নাম কমপক্ষে ২টি অক্ষরের হতে হবে।' }),
  email: z
    .string()
    .email({ message: 'অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা লিখুন।' }),
  message: z
    .string()
    .min(10, { message: 'বার্তা কমপক্ষে ১০টি অক্ষরের হতে হবে।' }),
})

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form submitted:', values)
    toast({
      title: 'বার্তা পাঠানো হয়েছে!',
      description:
        'যোগাযোগ করার জন্য ধন্যবাদ। আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।',
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>নাম</FormLabel>
                <FormControl>
                  <Input placeholder="আপনার নাম" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ইমেল</FormLabel>
                <FormControl>
                  <Input placeholder="আপনার ইমেল" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>বার্তা</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="আপনার প্রকল্প, আপনার পরিকল্পনা, আপনার চ্যালেঞ্জ সম্পর্কে আমাকে বলুন..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="md:col-span-2"
          variants={{ ...itemVariants, ...buttonHoverTapVariants }}
          whileHover="hover"
          whileTap="tap"
        >
          <Button type="submit" size="lg" className="w-full">
            বার্তা পাঠান <IoArrowForward className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  )
}
