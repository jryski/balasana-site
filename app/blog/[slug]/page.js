import { client } from '@/lib/sanity.client'
import { postQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-balasana-teal bg-[#E8F5F3] pl-6 py-4 my-8 italic rounded">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'

      return (
        <a
          href={href}
          className="font-semibold text-balasana-teal underline decoration-2 underline-offset-2 transition-colors duration-150 hover:text-balasana-dark"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside pl-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside pl-6 space-y-2">{children}</ol>,
  },
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) {
    return <div>Post not found</div>
  }

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
                year: 'numeric'
              })}
            </span>
          )}
        </div>

        <div className="prose prose-lg max-w-none text-balasana-charcoal prose-headings:text-balasana-dark prose-strong:text-balasana-dark prose-a:text-balasana-teal prose-blockquote:text-balasana-charcoal dark:prose-invert">
          <PortableText value={post.body} components={components} />
        </div>
      </div>
    </article>
  )
}