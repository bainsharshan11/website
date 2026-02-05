import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Reliable, fast, and easy to work with. They handled our demolition cleanly and professionally.',
      author: 'Sarah M.',
      role: 'Homeowner',
    },
    {
      text: 'Clear pricing, no surprises, and great results. Highly recommend.',
      author: 'Mike T.',
      role: 'General Contractor',
    },
    {
      text: 'Professional crew, modern equipment, and they finished ahead of schedule. Will use them again.',
      author: 'Jennifer L.',
      role: 'Property Developer',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="text-slate-900 mb-4" size={40} />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
