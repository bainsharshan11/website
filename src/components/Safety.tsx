import { Shield, Award, FileCheck, HardHat } from 'lucide-react';

export default function Safety() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Safety & Compliance
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Safety isn't optional—it's standard. We follow strict safety protocols and comply with all local regulations and environmental requirements. Our crew is trained, insured, and equipped to handle complex jobs responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: 'Safety First',
              description: 'Comprehensive safety protocols on every job site',
            },
            {
              icon: Award,
              title: 'Fully Insured',
              description: 'Complete insurance coverage for your peace of mind',
            },
            {
              icon: FileCheck,
              title: 'Compliant',
              description: 'All local regulations and permits handled',
            },
            {
              icon: HardHat,
              title: 'Trained Crew',
              description: 'Experienced, certified operators and workers',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-white transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white text-slate-900 rounded-lg mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
