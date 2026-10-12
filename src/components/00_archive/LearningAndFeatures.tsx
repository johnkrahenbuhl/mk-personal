import { Compass, Star, Sparkles, BookOpen, Target } from 'lucide-react';

export const LearningAndFeatures = () => {
  const learningPoints = [
    "Deep self-discovery and personal growth",
    "Effective stress management and resilience building",
    "Actionable goal-setting frameworks",
    "Advanced time management strategies",
    "Masterful communication and leadership skills"
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Spiritual Laws of Success",
      desc: "Align with universal principles fostering inner harmony and external prosperity."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: "Life-Time Access & Support",
      desc: "Comprehensive online curriculum with instant updates and continuous guidance."
    },
    {
      icon: <Target className="w-6 h-6 text-amber-400" />,
      title: "Supportive Community",
      desc: "Join a global network offering continuous guidance, accountability, and encouragement."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: What you'll learn image & list */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="People learning together" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-100 rounded-full z-0 opacity-50 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-teal-100 rounded-full z-0 opacity-50 blur-2xl"></div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-slate-100">
                <h4 className="font-serif font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                  <Compass className="text-amber-500 w-5 h-5"/> What You'll Learn
                </h4>
                <ul className="space-y-3">
                  {learningPoints.slice(0,3).map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">Curriculum Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-teal-950 mb-6 leading-tight">
              Unlock Your <span className="text-amber-500 italic">Highest</span> Potential
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Our comprehensive programs are designed to bridge the gap between where you are and where you want to be, blending practical strategy with deep internal alignment.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-teal-900 flex items-center justify-center shrink-0 shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-teal-950 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};