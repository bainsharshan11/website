import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white font-bold text-xl sm:text-2xl hover:text-gray-300 transition-colors"
            >
              EVERYTHING DEMO DEMOLITION
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+17789576191"
              className="flex items-center gap-2 bg-white text-slate-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Phone size={18} />
              778-957-6191
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+17789576191"
              className="flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold mt-4"
            >
              <Phone size={18} />
              778-957-6191
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
