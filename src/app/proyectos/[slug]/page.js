
import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | David Robert`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto pt-10 pb-20">
      <Link href="/proyectos" className="inline-flex items-center text-terracotta hover:text-mocha mb-8 transition-colors font-medium">
        ← Back to Projects
      </Link>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-serif text-mocha mb-4">{project.title}</h1>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">{project.description}</p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-mocha mb-4">About the Project</h2>
            <div className="text-charcoal/80 leading-relaxed space-y-4">
              <p>{project.content}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/60 p-6 rounded-xl border border-white/50 shadow-sm">
            <h3 className="text-lg font-bold text-mocha mb-4 uppercase tracking-wider text-sm border-b border-mocha/10 pb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cream border border-mocha/10 rounded-full text-xs font-medium text-mocha/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-mocha/5 p-6 rounded-xl border border-mocha/10">
            <h3 className="text-lg font-bold text-mocha mb-4 uppercase tracking-wider text-sm border-b border-mocha/10 pb-2">Links</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-charcoal/80 hover:text-terracotta transition-colors text-sm font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                View Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 text-charcoal/80 hover:text-terracotta transition-colors text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
