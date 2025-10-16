import { client } from '@/lib/sanity.client'
import { postQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'

const components = {
  // Promote to <h3> only when the block is SHORT and ~all chars are bold.
  block: {
    normal: ({ children, value }) => {
      const spans = Array.isArray(value?.children) ? value.children : []
      const nonWs = spans.filter(s => (s.text || '').trim().length > 0)

      const totalChars = nonWs.reduce((n, s) => n + (s.text || '').length, 0)
      const boldChars = nonWs.reduce(
        (n, s) => n + ((Array.isArray(s.marks) && s.marks.includes('strong')) ? (s.text || '').length : 0),
        0
      )
      const text = nonWs.map(s => s.text || '').join('').replace(/\s+/g, ' ').trim()
      const words = text.split(' ').filter(Boolean).length
      const hasSentencePunct = /[.!?;:]/.test(text)

      const boldRatio = totalChars ? boldChars / totalChars : 0
      const looksLikeHeadline = boldRatio >= 0.95 && words <= 14 && !hasSentencePunct

      if (looksLikeHeadline) return <h3>{children}</h3>
      return <p>{children}</p>
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const isExternal = /^https?:\/\//i.test(href)
      return (
        <a
          href={href}
          className="font-semibold text-balasana-teal underline decoration-2 underline-offset-2 transition-colors duration-150 hover:text-balasana-dark"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer noopener' : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPost({ params }) {
  // Next 15 dynamic route
  const { slug } = await params

  const post = await client.fetch(postQuery, { slug })
  if (!post) return <div>Post not found</div>

  return (
    <article className="pt-32 pb-20 px-8">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-[#1A2332] leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-[#5A6C7D] mb-8 pb-8 border-b border-[#E8EDF2]">
          <span>{post.author}</span>
          {post.publishedAt && (
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <div className="
          prose prose-lg max-w-none text-balasana-charcoal
          prose-headings:text-balasana-dark prose-strong:text-balasana-dark
          prose-a:text-balasana-teal prose-a:no-underline hover:prose-a:underline
          prose-li:marker:text-balasana-teal
          dark:prose-invert
        ">
          <PortableText value={post.body} components={components} />
        </div>
      </div>
    </article>
  )
}
