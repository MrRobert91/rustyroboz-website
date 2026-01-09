import { getSortedPostsData } from '@/lib/posts';
import Card from '@/components/ui/Card';

export default function BlogPage() {
  const allPostsData = getSortedPostsData('blog');

  return (
    <section>
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
      <div className="space-y-8">
        {allPostsData.map((post) => (
          <Card key={post.slug} post={post} type="blog" />
        ))}
      </div>
    </section>
  );
}
