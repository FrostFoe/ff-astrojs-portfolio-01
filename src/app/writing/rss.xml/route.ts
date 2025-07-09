import { getPosts } from '@/lib/content'
import RSS from 'rss'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export async function GET() {
  const posts = await getPosts()

  const feed = new RSS({
    title: 'ফ্রস্টফো | লেখা',
    description: 'ডিজাইন, প্রযুক্তি এবং এর মধ্যের সবকিছু নিয়ে চিন্তাভাবনা।',
    feed_url: `${siteUrl}/writing/rss.xml`,
    site_url: siteUrl,
    language: 'bn',
    pubDate: new Date(),
  })

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/writing/${post.slug}`,
      guid: post.slug,
      date: post.date,
      author: post.author,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
