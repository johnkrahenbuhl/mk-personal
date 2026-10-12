// src/components/rsw/Hero-full-rsw.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroImg from '../../assets/hero-bg.jpg'; 

interface HeroFullRSWProps {
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HeroFullRSW: React.FC<HeroFullRSWProps> = ({
  title = (
    <>
      Own Your <span className="text-amber-400 italic">Evolution</span> Today!
    </>
  ),
  subtitle = "The tide is turning. Take control of your career, reclaim your worth, and build a rewarding educational business that secures your future.",
  ctaText = "Start a Conversation",
  ctaLink = "#programs",
}) => {
  return (
    /* 
      We use 'isolation' to create a clean stack layer context.
      We use a fixed height or min-h-screen to maintain layout space natively in the flow.
    */
    <section className="relative min-h-screen flex items-center justify-center py-20 isolation-auto">
      
      {/* 
        THE TRICK: This background container uses fixed positioning relative to the screen,
        but absolute boundary tracking to match the height of this layout section.
      */}
      <div 
        className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Background Overlays locked to the full viewport background */}
        <div className="absolute inset-0 bg-teal-950/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
      </div>

      {/* Content Wrapper - Keeps text perfectly positioned safely above the background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 md:px-12 text-center text-white">
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl w-full text-center drop-shadow-lg">
          {title}
        </h1>
        
        <p className="w-full max-w-2xl text-center text-lg md:text-xl md:leading-relaxed mb-10 text-slate-100 font-light drop-shadow-md">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 mb-12 w-full">
          <a 
            href={ctaLink} 
            className="px-8 py-4 rounded-full bg-amber-500 text-teal-950 font-bold text-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2"
          >
            {ctaText} <ChevronRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroFullRSW;