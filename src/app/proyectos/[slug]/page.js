import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Date from '@/components/ui/Date';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData('projects', slug);
  return {
    title: postData.title,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs('projects');
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const postData = await getPostData('projects', slug);
  const crumbs = [
    { label: 'Proyectos', href: '/proyectos' },
    { label: postData.title },
  ];

  return (
    <article>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">
        <Date dateString={postData.date} />
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
