import { getSortedPostsData } from '@/lib/posts';
import Card from '@/components/ui/Card';

export default function ProyectosPage() {
  const allProjectsData = getSortedPostsData('projects');

  return (
    <section>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjectsData.map((project) => (
          <Card key={project.slug} post={project} type="proyectos" />
        ))}
      </div>
    </section>
  );
}
