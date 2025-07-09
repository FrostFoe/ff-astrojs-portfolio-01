import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function formatBengaliDate(dateString: string): string {
  const date = new Date(dateString)
  const bengaliMonths = [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ]
  const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

  const day = String(date.getDate())
    .split('')
    .map((digit) => bengaliNumbers[parseInt(digit)])
    .join('')
  const month = bengaliMonths[date.getMonth()]
  const year = String(date.getFullYear())
    .split('')
    .map((digit) => bengaliNumbers[parseInt(digit)])
    .join('')

  return `${month} ${day}, ${year}`
}
