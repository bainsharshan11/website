import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">EVERYTHING DEMO DEMOLITION</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional demolition and excavation services built on experience, safety, and results. Your trusted local contractor for residential and commercial projects.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-white" />
                <a href="tel:+17789576191" className="hover:text-white transition-colors">
                  778-957-6191
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-white" />
                <a href="mailto:hagsbains@gmail.com" className="hover:text-white transition-colors">
                  hagsbains@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-white" />
                <span>Lower Mainland, Island & Okanagan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Process', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Demolition</li>
              <li>Excavation</li>
              <li>Site Preparation</li>
              <li>Debris Removal</li>
              <li>Land Clearing</li>
              <li>Utility Trenching</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} EVERYTHING DEMO DEMOLITION. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Licensed, Insured & Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
