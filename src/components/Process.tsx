import { Phone, ClipboardCheck, DollarSign, Hammer, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Initial Contact',
      description: 'Call or request a quote online',
    },
    {
      icon: ClipboardCheck,
      title: 'Site Assessment',
      description: 'We review the scope and conditions',
    },
    {
      icon: DollarSign,
      title: 'Clear Pricing',
      description: 'Detailed, straightforward estimates',
    },
    {
      icon: Hammer,
      title: 'Execution',
      description: 'Safe, efficient, professional work',
    },
    {
      icon: CheckCircle,
      title: 'Final Cleanup',
      description: 'Site left clean and ready for next phase',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures your project runs smoothly from start to finish
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-300 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg relative z-10 border border-slate-700">
                        <Icon size={36} />
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold -mr-2 -mt-2 border-2 border-slate-900">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 text-center border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let's discuss your demolition or excavation needs.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:scale-105"
          >
            Request Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
