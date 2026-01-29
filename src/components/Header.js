import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-slate/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-800 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-electric-blue to-teal rounded-lg shadow-lg group-hover:shadow-electric-blue/50 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <path d="M9 9h6" />
              <path d="M9 15h6" />
              <circle cx="15" cy="6" r="1.5" className="fill-current" />
              <circle cx="6" cy="6" r="1.5" className="fill-current" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            David Robert
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {[
            { name: 'Sobre mí', href: '/about' },
            { name: 'Proyectos', href: '/proyectos' },
            { name: 'Blog', href: '/blog' },
            { name: 'CV', href: '/cv' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-electric-blue transition-colors duration-300 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-teal transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-electric-blue to-teal rounded-full shadow-lg hover:shadow-electric-blue/25 hover:scale-105 transition-all duration-300"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
