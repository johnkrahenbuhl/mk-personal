import React from 'react';
import { PlaneTakeoff, Pause, Waypoints } from 'lucide-react';

export const Pillars2 = () => {
  const pillars = [
    {
      icon: <Pause className="w-8 h-8 text-teal-600" />,
      title: "Delayed Dreams",
        description: "Long before I found my current path, I knew I wanted to help people. Personal development has been a huge part of my life for more than 25 years. That passion eventually led me to become a certified Life Coach. I had a vision. I imagined creating a business... MORE where I could encourage people, help them believe in themselves, and support them in creating a better life.But sometimes the dream you have isn't meant for that moment. Around the same time I became a certified coach, I welcomed my fourth child and my priorities shifted. Being present for my children became my focus.I wanted to be there for the school events, the practices, the games, the everyday moments that you don't get back. So my coaching business never really took off. But here's the thing: The dream didn't disappear.  It just went on the shelf. Years later, I would realize that it wasn't gone at all.I was simply waiting for the right time, and the right opportunity, to bring it back to life."
    },
    {
        icon: <Waypoints className="w-8 h-8 text-teal-600" />,
      title: "The Turning Point",
        description: "Then life threw us a curveball. My husband's company required employees to return to the office, but they had permanently closed the office in our area. Suddenly, his job meant commuting to another city, an enormous change for our family. We had a decision to make. We needed additional income and also flexibility. We didn't want one person's career to come at the expense of our family life. We wanted options, wanted to be able to adapt, and most importantly, we wanted to create a future where we weren't completely dependent on someone else's decisions. That's when something clicked. I realized I could keep waiting for the \"perfect\" time or I could create my own path. So I decided to build something of my own. Not because I wanted another job. Because I wanted more choices. More flexibility. More independence. More purpose. More control over my time. And the opportunity to create something that could grow with me."
      },
      {
          icon: <PlaneTakeoff className="w-8 h-8 text-teal-600" />,
      title: "Purpose & Freedom",
          description: "I wanted something that could fit into my life not take over my life. Something flexible. Something meaningful. Something I could build for myself and grow over time. That search eventually led me to start my online business. And it changed the way I looked at what was possible. Today, I'm passionate about helping other people discover that same possibility—especially those who find themselves asking, \"What's next for me?\""
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