import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#1A2332]">
          Blog
        </h1>
        <p className="text-xl text-[#5A6C7D] mb-12">
          Insights on wellness, science, and living in balance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="bg-white border border-[#E8EDF2] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-[#1A2332]">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-[#5A6C7D] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-4 text-sm text-[#2A9D8F]">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
