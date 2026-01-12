import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section id="about" className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Hola, soy un Machine Learning Engineer
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
          Apasionado por transformar datos en soluciones inteligentes. Me especializo en NLP, MLOps y la creación de sistemas de IA robustos y escalables.
        </p>
      </section>

      {/* Áreas de Interés */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Áreas de Interés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-md">Machine Learning</div>
          <div className="p-4 bg-white rounded-lg shadow-md">Deep Learning</div>
          <div className="p-4 bg-white rounded-lg shadow-md">NLP / Computer Vision</div>
          <div className="p-4 bg-white rounded-lg shadow-md">MLOps</div>
          <div className="p-4 bg-white rounded-lg shadow-md">Data Science</div>
        </div>
      </section>

      {/* Filosofía de Trabajo */}
      <section>
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Filosofía de Trabajo</h3>
          <p className="text-gray-600">
            Creo en la construcción de soluciones de Machine Learning que no solo sean técnicamente avanzadas, sino también prácticas, mantenibles y que aporten un valor de negocio real. Me motiva resolver problemas complejos que requieren un análisis profundo y un enfoque creativo, siempre con un ojo puesto en la reproducibilidad y la escalabilidad del sistema final.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Explora mi trabajo</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/proyectos" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Ver Proyectos
          </Link>
          <Link href="/blog" className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors">
            Leer mi Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
