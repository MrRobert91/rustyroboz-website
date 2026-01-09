import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostSlugs('blog');
  return paths.map(p => ({ slug: p.params.slug }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData('blog', params.slug).catch(() => notFound());
  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function BlogPost({ params }) {
  const postData = await getPostData('blog', params.slug).catch(() => notFound());

  return (
    <article className="prose lg:prose-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1>{postData.title}</h1>
      <div className="text-gray-500 mb-8">
        {new Date(postData.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
