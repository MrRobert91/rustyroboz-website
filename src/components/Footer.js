const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nombre Apellido. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter / X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
