import { mdxComponents } from '@/components/mdx/MdxComponents'
import PostPageClient from '@/components/pages/post/PostPageClient'
import { getPostBySlug, getPosts } from '@/lib/content'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.id)
  if (!post) {
    return {
      title: 'পোস্ট খুঁজে পাওয়া যায়নি',
    }
  }
  const { frontmatter } = post
  const ogImages = frontmatter.image
    ? [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ]
    : []

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    alternates: {
      canonical: `/writing/${params.id}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      url: `/writing/${params.id}`,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.image ? [frontmatter.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    id: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.id)

  if (!post) {
    notFound()
  }

  return (
    <PostPageClient frontmatter={post.frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none text-muted-foreground dark:prose-invert leading-relaxed prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </PostPageClient>
  )
}
