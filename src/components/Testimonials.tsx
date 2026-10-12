export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love the life-style....part time hours & full time results! I was a teacher, working my butt off to make $50k per year. Thanks to this business I've been able to retire from teaching, I work a fraction of the hours I used to and have more than tripled my income.",
      author: "Lise Reitsma",
      location: "Canada"
    },
    {
      quote: "This online business has enabled me to earn an executive-level income. The growth both personally and financially has been astounding.",
      author: "Bex Kirner",
      location: "New Zealand"
    },
    {
      quote: "I made over $100k in my first 12 months working very part time! Now I only work a few hours a day! I absolutely love what I do.",
      author: "Karen Murphy",
      location: "Australia"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white/[50%]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xs font-bold tracking-[0.2em] text-earth mb-4" >A COMMUNITY OF SUPPORT</h2>
        < h3 className = "font-serif text-4xl md:text-5xl text-charcoal mb-16" >Shared Journeys, Extraordinary Results</h3>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center space-y-6 px-4">
              <p className="text-lg italic font-serif text-gray-700 leading-relaxed">"{t.quote}"</p>
              <div className="w-12 h-[1px] bg-earth"></div>
              <div>
                <p className="font-bold text-sm tracking-wider uppercase text-charcoal">{t.author}</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}