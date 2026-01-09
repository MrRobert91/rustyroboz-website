export default function ContactoPage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-8">Contacto</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-600 mb-6">
          Si quieres hablar sobre un proyecto, una oportunidad o simplemente quieres saludar, no dudes en contactarme a través de los siguientes canales.
        </p>
        <div className="space-y-4">
          <p><strong>Email:</strong> <a href="mailto:email@ejemplo.com" className="text-blue-600 hover:underline">email@ejemplo.com</a></p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-blue-600 hover:underline font-semibold">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:underline font-semibold">GitHub</a>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Twitter / X</a>
          </div>
        </div>
      </div>
    </section>
  );
}
