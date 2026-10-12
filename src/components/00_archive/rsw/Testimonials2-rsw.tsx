import { Quote, Star } from 'lucide-react';

export const TestimonialsRSW = () => {
  const testimonials = [
    {
      name: "Christina",
      location: "Canada",
      text: "Since diving into these online courses, I have been able to fall in love with myself. The actionable steps provided have led me to feel again...",
    },
    {
      name: "Eamon",
      location: "United Kingdom",
      text: "Valuable and transformative material from the very first day. Easy to understand and expounded in a relaxed, friendly and professional manner.",
    },
    {
      name: "Katy",
      location: "New Zealand",
      text: "Significant shifts in my mindset, emotional state and way of thinking. Truly life-transforming! I highly recommend these programs.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-teal-800 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-teal-950 opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">Success Stories</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-16">Stories of Transformation</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-teal-800/40 backdrop-blur-sm border border-teal-700/50 p-8 rounded-2xl text-left relative hover:bg-teal-800/60 transition-colors flex flex-col h-full">
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6 text-amber-400">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-teal-50 text-lg leading-relaxed mb-8 italic flex-grow">"{test.text}"</p>
              <div className="flex items-center gap-4 border-t border-teal-700/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center font-bold text-xl text-amber-100 shrink-0">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className="text-teal-300 text-sm">{test.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};