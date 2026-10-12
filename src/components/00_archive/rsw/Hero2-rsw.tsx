import { ChevronRight } from 'lucide-react';
// Import your local asset here
import heroBg from '../../assets/hero-bg.jpg';

export const Hero2RSW = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(${heroBg})',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-teal-950/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 backdrop-blur-sm text-sm font-semibold tracking-widest uppercase mb-6 border border-amber-500/30">
          Transform Your Life
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto drop-shadow-lg">
          Start Your Journey to <span className="text-amber-400 italic">Success</span> Today!
        </h1>
        <p className="text-lg md:text-xl md:leading-relaxed mb-10 max-w-2xl mx-auto text-slate-100 font-light drop-shadow-md">
          Personal Development & Leadership Education to help you reach unprecedented levels of success, balance, and inner peace.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#programs" className="px-8 py-4 rounded-full bg-amber-500 text-teal-950 font-bold text-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center gap-2">
            Explore Programs <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};