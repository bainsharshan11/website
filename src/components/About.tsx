import { Shield, Calendar, Users, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything Demo Demolition is a locally owned and operated demolition and excavation company built on hard work, honesty, and results. We work closely with homeowners, builders, and contractors to deliver dependable services with clear communication and zero surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
            <ul className="space-y-4">
              {[
                'Safety-first on every job site',
                'Efficient planning and execution',
                'Clean, organized work areas',
                'Transparent pricing and timelines',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {[
                'Experienced operators and crew',
                'Fully insured and compliant',
                'Modern, well-maintained equipment',
                'Respect for your property and schedule',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-slate-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full mb-4">
              <Shield size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Safety First</h4>
            <p className="text-gray-600">
              Strict safety protocols and full compliance with all local regulations
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full mb-4">
              <Calendar size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Serving BC Since 2019</h4>
            <p className="text-gray-600">
              Years of experience serving the British Columbia community
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full mb-4">
              <Users size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Experienced</h4>
            <p className="text-gray-600">
              Skilled operators and crew with years of industry experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
