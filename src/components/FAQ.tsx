import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured and compliant with all local regulations. We carry comprehensive liability insurance and workers compensation coverage.',
    },
    {
      question: 'Do you handle permits?',
      answer: 'We can assist with permit requirements depending on the project. We will guide you through the process and help ensure all necessary permits are obtained.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the greater metro area and surrounding counties. Contact us to confirm service availability in your location.',
    },
    {
      question: 'How do I get a quote?',
      answer: 'Call us or use the contact form below to request a free quote. We will schedule a site visit to assess your project and provide a detailed estimate.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. During our site assessment, we will provide a detailed timeline for your specific project.',
    },
    {
      question: 'Do you handle debris removal?',
      answer: 'Yes, debris removal and hauling is included in our services. We will leave your site clean and ready for the next phase of construction.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Have questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-slate-900 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
