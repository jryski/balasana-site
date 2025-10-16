import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { postQuery, postsQuery } from '@/lib/sanity.queries';
import { PortableText } from '@portabletext/react';

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  const components = {
    block: {
      normal: ({ children }) => (
        <p className="mb-8 text-lg leading-relaxed text-balasana-charcoal dark:text-balasana-cream">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="text-4xl font-semibold mt-16 mb-8 text-balasana-dark dark:text-balasana-cream leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold mt-12 mb-6 text-balasana-dark dark:text-balasana-cream leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-10 mb-5 text-balasana-dark dark:text-balasana-cream leading-tight">
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-balasana-teal pl-8 my-10 italic text-2xl bg-gray-50 dark:bg-gray-800 py-6 pr-8 rounded-r-xl text-balasana-dark dark:text-balasana-cream">
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-balasana-dark dark:text-balasana-cream">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a 
            href={value?.href} 
            target={target} 
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-balasana-teal underline hover:opacity-80 transition-opacity"
          >
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-10 mb-8 space-y-3">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-10 mb-8 space-y-3">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="text-lg leading-relaxed text-balasana-charcoal dark:text-balasana-cream pl-2">
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className="text-lg leading-relaxed text-balasana-charcoal dark:text-balasana-cream pl-2">
          {children}
        </li>
      ),
    },
  };

  return (
    <main className="pt-32 pb-20 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-block text-balasana-teal text-lg mb-12 hover:opacity-80 transition-opacity font-medium"
        >
          ← Back to Blog
        </Link>
        
        <article>
          <header className="mb-16 pb-12 border-b-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-5xl font-semibold mb-8 leading-tight text-balasana-dark dark:text-balasana-cream">
              {post.title}
            </h1>
            {post.publishedAt && (
              <p className="text-balasana-gray text-base font-medium">
                Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </header>
          
          <div className="blog-content prose prose-lg max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
}