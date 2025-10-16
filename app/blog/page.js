import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { postsQuery } from '@/lib/sanity.queries';

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <main className="pt-32 pb-20 px-8 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-6 text-center">
          Blog
        </h1>
        <p className="text-[clamp(1.1rem,2.5vw,1.35rem)] text-center max-w-[800px] mx-auto mb-12 leading-relaxed text-[#5A6C7D]">
          Insights on wellness, cognitive performance, and balanced living.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts && posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="bg-white border border-[#E8EDF2] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#2A9D8F] block"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#1A2332]">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-[#5A6C7D] text-base leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              )}
              {post.publishedAt && (
                <p className="text-sm text-[#2A9D8F] font-medium">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}