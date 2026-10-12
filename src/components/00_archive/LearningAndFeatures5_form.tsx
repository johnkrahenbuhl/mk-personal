import { useState } from 'react';
import { Sparkles, BookOpen, Target } from 'lucide-react';

export const LearningAndFeatures5 = () => {
  // State tracking for the lead generation fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

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

  // Dynamically update field data on user keystrokes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Triggers when user clicks 'START TODAY' with all required inputs valid
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipient = "radiantselfworth@gmail.com";
    const subject = encodeURIComponent(`New Lead Inquiry: Explore Opportunity - ${formData.firstName} ${formData.lastName}`);
    
    const bodyContent = 
`Hello Radiant Self Worth Team,

A new lead has submitted interest via the web form.

--- LEAD DETAILS ---
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone Number: ${formData.phone}

Consent Details:
[X] User agreed to receive information regarding the online business and product line.

Best regards,
Automated Web Form Notification`;

    const body = encodeURIComponent(bodyContent);
    window.location.href = `mailto:${recipient}?subject=${subject}?&body=${body}`;
  };

  return (
    <section id="programs" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Features */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">Curriculum Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-teal-950 mb-6 leading-tight">
              Unlock Your <span className="text-amber-500 italic">Highest</span> Potential
            </h3>
            
            <div className="mb-8"> 
              <p className="text-slate-600 text-lg leading-relaxed">
                Our comprehensive programs are designed to bridge the gap between where you are and where you want to be, blending practical strategy with deep internal alignment.
              </p>
            </div>

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

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-sand p-8 md:p-12 shadow-2xl max-w-md mx-auto md:ml-auto w-full">
              
              {/* Corrected Hierarchy Block */}
              <div className="text-center mb-8">
                <span className="block text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
                  NEXT STEP
                </span>
                <h2 className="font-serif font-bold text-3xl text-teal-950 tracking-tight">
                  Plan Your Path
                </h2>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" 
                  required 
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" 
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" 
                  required 
                />
                
                <div className="flex items-start gap-3 mt-6">
                  <input type="checkbox" id="consent" className="mt-1 accent-earth" required />
                  <label htmlFor="consent" className="text-[10px] leading-tight text-gray-500">
                    By ticking this box you agree to receive information about our online business and award winning product line via phone, message and email. We respect your privacy and you can opt out at any time.
                  </label>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="w-full rounded-full bg-teal-900 text-white tracking-widest font-medium py-4 hover:bg-teal-800 transition duration-300"> 
                    START TODAY
                  </button>
                  
                  {/* Microcopy Text */}
                  <p className="text-center text-xs text-slate-500 mt-3 italic">
                    We will call you within 24 hours to chat about your goals.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
