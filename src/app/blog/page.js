import Link from 'next/link';
import { posts } from '@/data/blog';

export const metadata = {
  title: "Blog | David Robert",
  description: "Thoughts, tutorials, and insights on AI.",
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto pt-10 pb-20">
      <h1 className="text-4xl font-bold font-serif text-mocha mb-12 text-center">Writing</h1>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="group relative bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:bg-white/70 transition-all duration-300">
            <div className="flex items-center gap-3 text-sm font-medium text-terracotta mb-3">
              <span>{post.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-mocha mb-3 group-hover:text-terracotta transition-colors font-serif">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4 line-clamp-2">
              {post.description}
            </p>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-mocha group-hover:underline decoration-terracotta underline-offset-4 decoration-2">
              Read Article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
