import PostHogProvider from '@/components/analytics/PostHogProvider'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Tiro_Bangla } from 'next/font/google'

const tiroBangla = Tiro_Bangla({
  subsets: ['bengali', 'latin'],
  weight: '400',
  variable: '--font-tiro-bangla',
})

const siteConfig = {
  name: 'FrostFoe',
  description: 'একটি ডিজাইন ও প্রযুক্তি স্টুডিও।',
  url: 'https://frostfoe.design',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | FrostFoe`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" className={tiroBangla.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
            <Toaster />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
