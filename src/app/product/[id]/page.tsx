import { mdxComponents } from '@/components/mdx/MdxComponents'
import ProductPageClient from '@/components/pages/product/ProductPageClient'
import { getProjectBySlug, getProjects } from '@/lib/content'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.id)
  if (!project) {
    return {
      title: 'প্রকল্প খুঁজে পাওয়া যায়নি',
    }
  }

  const { frontmatter } = project
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
    description: frontmatter.description,
    alternates: {
      canonical: `/product/${params.id}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      url: `/product/${params.id}`,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    id: project.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const project = await getProjectBySlug(params.id)

  if (!project) {
    notFound()
  }

  return (
    <ProductPageClient frontmatter={project.frontmatter}>
      <div className="prose md:prose-lg lg:prose-xl max-w-none text-muted-foreground dark:prose-invert leading-relaxed prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <MDXRemote source={project.content} components={mdxComponents} />
      </div>
    </ProductPageClient>
  )
}
