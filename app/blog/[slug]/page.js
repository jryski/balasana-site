import { client } from '@/lib/sanity.client'
import { postQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    normal: ({children}) => <p className="mb-6 text-lg leading-relaxed">{children}</p>,
    h2: ({children}) => <h2 className="text-3xl font-semibold text-[#1A2332] mt-12 mb-6">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-semibold text-[#1A2332] mt-8 mb-4">{children}</h3>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-[#2A9D8F] bg-[#E8F5F3] pl-6 py-4 my-8 italic rounded">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>,
    number: ({children}) => <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="text-lg">{children}</li>,
    number: ({children}) => <li className="text-lg">{children}</li>,
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

        <div className="text-[#2C3E50]">
          <PortableText value={post.body} components={components} />
        </div>
      </div>
    </article>
  )
}