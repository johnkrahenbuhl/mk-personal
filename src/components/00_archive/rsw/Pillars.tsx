import React from 'react';
import { Users, Shield, Heart } from 'lucide-react';

export const Pillars = () => {
  const pillars = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "About Us",
      description: "Your premier destination for personal development. Our acclaimed training programs are celebrated for their transformative effects, empowering individuals worldwide."
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Our Promise",
      description: "Our courses are expertly designed to provide top-tier content and an exceptional learning experience tailored to achieve tangible, real-world results."
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Why Choose Us",
      description: "We commit to providing personalized support and guidance, customized to your specific needs and aspirations for ultimate growth."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 -mt-32 relative z-20">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-10 shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-transform duration-300 border border-slate-200 group">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(pillar.icon as React.ReactElement, { 
                  className: 'w-8 h-8 group-hover:text-white transition-colors' 
                })}
              </div>
              <h3 className="text-2xl font-serif text-teal-950 font-bold mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};