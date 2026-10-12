import { ChevronRight } from 'lucide-react';
// Import your local asset here
import heroBg from '../../assets/hero-bg.jpg';

export const Hero3RSW = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        // FIXED: Changed heroImg to heroBg to match the import statement above
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
       <div className="absolute inset-0 bg-teal-950/30 mix-blend-multiply"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 md:px-12 text-center text-white">
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl w-full text-center drop-shadow-lg">
          Own Your <span className="text-amber-400 italic">Evolution</span> Today!
        </h1>
        
        <p className="w-full max-w-2xl text-center text-lg md:text-xl md:leading-relaxed mb-10 text-slate-100 font-light drop-shadow-md">
          The tide is turning. Take control of your career, reclaim your worth, and build a rewarding educational business that secures your future.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 mb-12 w-full">
          <a 
            href="#programs" 
            className="px-8 py-4 rounded-full bg-amber-500 text-teal-950 font-bold text-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2"
          >
            Choose Your 10-Minute Window <ChevronRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};
