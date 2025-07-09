import { slugify } from '@/lib/utils'
import type { MDXComponents } from 'mdx/types'
import MdxImage from './MdxImage'

export const mdxComponents: MDXComponents = {
  img: ({ src, alt }) => (
    <MdxImage
      src={src!}
      alt={alt!}
      width={1200}
      height={600}
      className="rounded-lg"
      data-ai-hint="mdx ছবি"
    />
  ),
  h2: ({ children }) => {
    const slug = slugify(
      typeof children === 'string' ? children : String(children),
    )
    return (
      <h2 id={slug} className="group relative">
        <a
          href={`#${slug}`}
          className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
        >
          #
        </a>
        {children}
      </h2>
    )
  },
  h3: ({ children }) => {
    const slug = slugify(
      typeof children === 'string' ? children : String(children),
    )
    return (
      <h3 id={slug} className="group relative">
        <a
          href={`#${slug}`}
          className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
        >
          #
        </a>
        {children}
      </h3>
    )
  },
}
