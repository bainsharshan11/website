import { Hammer, Truck, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: 'Demolition Services',
      description: 'We handle demolition projects of all sizes, from selective interior demo to full structural removal.',
      items: [
        'Interior demolition (walls, ceilings, flooring)',
        'Residential home demolition',
        'Garage and outbuilding removal',
        'Commercial and light industrial demolition',
        'Concrete and asphalt removal',
        'Selective and precision demolition',
      ],
    },
    {
      icon: Truck,
      title: 'Excavation Services',
      description: 'Our excavation services prepare your site properly—because a strong build starts with solid groundwork.',
      items: [
        'Site preparation and grading',
        'Foundation excavation',
        'Trenching and utilities',
        'Drainage and water management',
        'Backfilling and compaction',
        'Driveways and access preparation',
      ],
    },
    {
      icon: Wrench,
      title: 'Additional Services',
      description: 'Comprehensive support services to complete your project from start to finish.',
      items: [
        'Debris removal and hauling',
        'Land clearing',
        'Soil removal and replacement',
        'Job site cleanup',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive demolition and excavation solutions for every project size
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-8 border-t-4 border-slate-900"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-lg mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-slate-900 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
