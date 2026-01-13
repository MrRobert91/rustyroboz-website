import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gold/30 rounded-full blur-[100px] animate-float opacity-50"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6 text-mocha">
          David Robert
        </h1>
        <p className="text-xl md:text-2xl text-terracotta font-medium mb-4 font-serif italic">
          Data Scientist & ML Engineer
        </p>
        <p className="max-w-2xl text-charcoal/80 text-lg mb-10 leading-relaxed">
          Transforming raw data into actionable insights through advanced machine learning and predictive modeling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/proyectos"
            className="px-8 py-3 bg-mocha text-cream font-semibold rounded-full shadow-lg shadow-mocha/20 hover:shadow-mocha/40 hover:scale-105 transition-all duration-300"
          >
            View Work
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-3 bg-transparent border-2 border-mocha/20 text-mocha font-semibold rounded-full hover:bg-mocha/5 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif text-center mb-16 text-mocha">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'SQL', 'Docker', 'AWS', 'NLP', 'Computer Vision', 'Git', 'MLOps', 'FastAPI'].map((skill) => (
            <div key={skill} className="group p-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-xl text-center hover:border-terracotta/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-terracotta/5">
              <span className="text-mocha/80 font-medium group-hover:text-terracotta transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12 border-b border-mocha/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold font-serif text-mocha mb-2">Featured Projects</h2>
            <p className="text-charcoal/60">A selection of my recent work.</p>
          </div>
          <Link href="/proyectos" className="hidden md:block text-terracotta hover:text-mocha transition-colors font-medium">
            View all projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 hover:border-terracotta/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="h-48 bg-gradient-to-br from-mocha/5 to-terracotta/5 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center border-b border-white/50">
              {/* Placeholder for project image */}
              <svg className="w-16 h-16 text-mocha/20 group-hover:text-terracotta transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold font-serif text-mocha mb-2 group-hover:text-terracotta transition-colors">Predictive Maintenance</h3>
              <p className="text-charcoal/70 mb-4 line-clamp-2 leading-relaxed">Developed a machine learning model to predict equipment failures, reducing downtime by 25% using time-series analysis.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-mocha/5 text-mocha/70 rounded-full">Python</span>
                <span className="px-3 py-1 text-xs font-medium bg-mocha/5 text-mocha/70 rounded-full">TensorFlow</span>
              </div>
              <Link href="/proyectos" className="text-sm font-bold text-terracotta hover:text-mocha transition-colors flex items-center gap-1 uppercase tracking-wide">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 hover:border-terracotta/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="h-48 bg-gradient-to-br from-mocha/5 to-terracotta/5 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center border-b border-white/50">
              {/* Placeholder for project image */}
              <svg className="w-16 h-16 text-mocha/20 group-hover:text-terracotta transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold font-serif text-mocha mb-2 group-hover:text-terracotta transition-colors">Sentiment Analysis Platform</h3>
              <p className="text-charcoal/70 mb-4 line-clamp-2 leading-relaxed">Built an NLP pipeline to analyze customer feedback from multiple sources providing real-time insights.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-mocha/5 text-mocha/70 rounded-full">BERT</span>
                <span className="px-3 py-1 text-xs font-medium bg-mocha/5 text-mocha/70 rounded-full">FastAPI</span>
              </div>
              <Link href="/proyectos" className="text-sm font-bold text-terracotta hover:text-mocha transition-colors flex items-center gap-1 uppercase tracking-wide">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/proyectos" className="text-terracotta font-medium hover:text-mocha transition-colors">
            View all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
