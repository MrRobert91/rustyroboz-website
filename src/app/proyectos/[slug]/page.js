import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostSlugs('projects');
  return paths.map(p => ({ slug: p.params.slug }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData('projects', params.slug).catch(() => notFound());
  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function ProjectPost({ params }) {
  const postData = await getPostData('projects', params.slug).catch(() => notFound());

  return (
    <article className="prose lg:prose-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">
        {new Date(postData.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      {postData.githubUrl && (
        <a href={postData.githubUrl} className="mt-8 inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors no-underline">
          Ver en GitHub
        </a>
      )}
    </article>
  );
}
