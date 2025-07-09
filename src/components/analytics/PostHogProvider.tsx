'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { Suspense } from 'react'
import PostHogPageView from './PostHogPageview'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  })
}

export default function PostHogProviderClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PostHogProvider client={posthog}>
      <Suspense>{<PostHogPageView />}</Suspense>
      {children}
    </PostHogProvider>
  )
}
