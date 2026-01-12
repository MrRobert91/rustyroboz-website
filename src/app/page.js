import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-electric-blue/20 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          David Robert
        </h1>
        <p className="text-xl md:text-2xl text-electric-blue font-medium mb-4">
          Data Scientist & ML Engineer
        </p>
        <p className="max-w-2xl text-gray-400 text-lg mb-10 leading-relaxed">
          Transforming raw data into actionable insights through advanced machine learning and predictive modeling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/proyectos"
            className="px-8 py-3 bg-gradient-to-r from-electric-blue to-teal text-white font-semibold rounded-full shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/40 hover:scale-105 transition-all duration-300"
          >
            View Work
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-teal">
            Technical Expertise
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'SQL', 'Docker', 'AWS', 'NLP', 'Computer Vision', 'Git', 'MLOps', 'FastAPI'].map((skill) => (
            <div key={skill} className="group p-4 bg-charcoal/50 backdrop-blur-sm border border-white/5 rounded-xl text-center hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-blue/10">
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-400">A selection of my recent work.</p>
          </div>
          <Link href="/proyectos" className="hidden md:block text-electric-blue hover:text-teal transition-colors">
            View all projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-electric-blue/30 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              {/* Placeholder for project image */}
              <svg className="w-16 h-16 text-gray-700 group-hover:text-electric-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">Predictive Maintenance</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">Developed a machine learning model to predict equipment failures, reducing downtime by 25% using time-series analysis.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">Python</span>
                <span className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">TensorFlow</span>
              </div>
              <Link href="/proyectos" className="text-sm font-medium text-electric-blue hover:text-teal transition-colors flex items-center gap-1">
                View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-electric-blue/30 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              {/* Placeholder for project image */}
              <svg className="w-16 h-16 text-gray-700 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal transition-colors">Sentiment Analysis Platform</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">Built an NLP pipeline to analyze customer feedback from multiple sources providing real-time insights.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">BERT</span>
                <span className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">FastAPI</span>
              </div>
              <Link href="/proyectos" className="text-sm font-medium text-electric-blue hover:text-teal transition-colors flex items-center gap-1">
                View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/proyectos" className="text-electric-blue font-medium hover:text-teal transition-colors">
            View all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
