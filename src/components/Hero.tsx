import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mb-6">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            Professional Demolition & Excavation Services
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Strong Demolition.<br />
          Precise Excavation.<br />
          <span className="text-gray-300">Built on Experience.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your trusted local demolition and excavation contractor for residential, commercial, and light industrial projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Request a Free Quote
            <ArrowRight size={20} />
          </button>
          <a
            href="tel:+17789576191"
            className="flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-600 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20"
          >
            <Phone size={20} />
            Call Now: 778-957-6191
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg">
            <h3 className="text-white font-bold text-3xl mb-2">Safe</h3>
            <p className="text-gray-300">Safety-first approach on every job site</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg">
            <h3 className="text-white font-bold text-3xl mb-2">Efficient</h3>
            <p className="text-gray-300">Modern equipment and experienced crew</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg">
            <h3 className="text-white font-bold text-3xl mb-2">No BS</h3>
            <p className="text-gray-300">Clear pricing and honest communication</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
