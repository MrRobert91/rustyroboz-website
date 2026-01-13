
export const metadata = {
  title: "Blog | David Robert",
  description: "Thoughts, tutorials, and insights on AI.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Explainable AI",
      date: "October 24, 2024",
      excerpt: "Why model interpretability is becoming more crucial than raw accuracy in enterprise applications.",
      readTime: "5 min read"
    },
    {
      title: "Optimizing Transformer Models for Edge Devices",
      date: "September 15, 2024",
      excerpt: "A practical guide to quantization and pruning for running LLMs on consumer hardware.",
      readTime: "8 min read"
    },
    {
      title: "From Notebook to Production: MLOps Best Practices",
      date: "August 3, 2024",
      excerpt: "How to structure your ML projects for reproducibility and seamless deployment.",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto pt-10 pb-20">
      <h1 className="text-4xl font-bold font-serif text-mocha mb-12 text-center">Writing</h1>

      <div className="space-y-10">
        {posts.map((post, idx) => (
          <article key={idx} className="group relative bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:bg-white/70 transition-all duration-300">
            <div className="flex items-center gap-3 text-sm font-medium text-terracotta mb-3">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-terracotta rounded-full"></span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-mocha mb-3 group-hover:text-terracotta transition-colors font-serif">
              {post.title}
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <a href="#" className="inline-flex items-center font-bold text-mocha group-hover:underline decoration-terracotta underline-offset-4 decoration-2">
              Read Article
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
