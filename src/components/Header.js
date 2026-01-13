import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-mocha/5 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-mocha to-terracotta rounded-lg shadow-md group-hover:shadow-terracotta/30 transition-all duration-300">
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
              className="text-cream"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M9 3v18" />
              <path d="M9 9h6" />
              <path d="M9 15h6" />
              <circle cx="15" cy="6" r="1.5" className="fill-current text-gold" />
              <circle cx="6" cy="6" r="1.5" className="fill-current text-gold" />
            </svg>
          </div>
          <span className="text-xl font-bold font-serif text-mocha">
            David Robert
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {[
            { name: 'About', href: '/about' },
            { name: 'Projects', href: '/proyectos' },
            { name: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-mocha/70 hover:text-terracotta transition-colors duration-300 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-5 py-2 text-sm font-semibold text-white bg-[#D87D4A] hover:bg-[#3E2723] rounded-full shadow-lg hover:shadow-terracotta/25 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
