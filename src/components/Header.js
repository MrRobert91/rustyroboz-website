import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          ML Engineer
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sobre mí
          </Link>
          <Link href="/proyectos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/cv" className="text-gray-600 hover:text-gray-900 transition-colors">
            CV
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
