const Footer = () => {
  return (
    <footer className="bg-cream border-t border-mocha/10 mt-auto">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-mocha/60 text-sm">
        <p>&copy; {new Date().getFullYear()} David Robert. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-terracotta transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-terracotta transition-colors">GitHub</a>
          <a href="#" className="hover:text-terracotta transition-colors">Twitter / X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
