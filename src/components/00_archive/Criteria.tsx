import { Check } from 'lucide-react';

export default function Criteria() {
  const criteriaList = [
    "Ready to create an additional income stream.",
    "Have a compelling reason to succeed.",
    "Ready to build towards $15-20K+ months over the next 6-12 months.",
    "Has at least a few hours per day to devote to a new venture."
  ];

  return (
    <section className="py-24 bg-stone/40 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-earth mb-4">INVITATION</h2>
        <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-16">Who this is suited to</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {criteriaList.map((item, index) => (
            <div key={index} className="bg-white p-8 flex flex-col items-center text-center shadow-sm border border-stone">
              <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center mb-6 text-earth">
                <Check size={20} />
              </div>
              <p className="text-charcoal font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}