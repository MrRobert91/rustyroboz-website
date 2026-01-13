
import { posts } from '@/data/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | David Robert`,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto pt-10 pb-20">
      <Link href="/blog" className="inline-flex items-center text-terracotta hover:text-mocha mb-8 transition-colors font-medium">
        ← Back to Blog
      </Link>

      <header className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-terracotta mb-4">
          <span>{post.date}</span>
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-mocha/5 rounded-full text-mocha/70 text-xs">#{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-mocha leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto italic">
          {post.description}
        </p>
      </header>

      <div className="prose prose-lg prose-headings:font-serif prose-headings:text-mocha prose-p:text-charcoal/80 prose-a:text-terracotta hover:prose-a:text-mocha prose-strong:text-mocha mx-auto bg-white/40 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-sm border border-white/50">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </div>
    </article>
  );
}
