import Link from 'next/link';

export default function CVPage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-8">Currículum Vitae</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Resumen Profesional</h2>
        <p className="text-gray-600 mb-4">
          Machine Learning Engineer con X años de experiencia en el diseño, desarrollo y despliegue de modelos de aprendizaje automático en entornos de producción. Experto en NLP y MLOps, con un historial probado en la entrega de soluciones que resuelven problemas de negocio complejos.
        </p>
        <h3 className="text-xl font-bold mb-2">Tecnologías Clave</h3>
        <p className="text-gray-600">
          Python, TensorFlow, PyTorch, Scikit-learn, Docker, Kubernetes, AWS, GCP.
        </p>
      </div>
      <a
        href="/cv_david_robert_12_25_en.pdf"
        download
        className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Descargar CV en PDF
      </a>
    </section>
  );
}
