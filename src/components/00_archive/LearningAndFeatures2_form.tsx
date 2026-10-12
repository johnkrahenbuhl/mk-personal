import { useState } from 'react';
import { Compass, Star, Sparkles, BookOpen, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const LearningAndFeatures2 = () => {
  // State tracking for the lead generation fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // State to manage inline submission success routing view
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Dynamically update field data on user keystrokes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Triggers when user clicks 'LEARN MORE' with all required inputs valid
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipient = "radiantselfworth@gmail.com";
    const subject = encodeURIComponent(`New Lead Inquiry: Explore Opportunity - ${formData.firstName} ${formData.lastName}`);
    
    // Structured body with clean formatting layout for Radiant Self Worth
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

    // Open user's native email client with pre-filled fields
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Switch right panel layout screen to the inline confirmation view state
    setIsSubmitted(true);
  };

  // Allows the user to reset the form view manually if needed
  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

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

          {/* Right Side: Conditional Form OR Confirmation State */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="bg-sand p-8 md:p-12 shadow-2xl max-w-md w-full min-h-[550px] flex flex-col justify-center transition-all duration-500 ease-in-out">
              
              {!isSubmitted ? (
                /* Native Form Interface */
                <div className="animate-fade-in">
                  <div className="text-center mb-8">
                    <h2 className="text-xs font-bold tracking-[0.15em] text-earth mb-2">EXPLORE THE OPPORTUNITY</h2>
                    <h3 className="font-serif text-3xl text-teal-950">Align your future</h3>
                  </div>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors text-slate-800" 
                      required 
                    />
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors text-slate-800" 
                      required 
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors text-slate-800" 
                      required 
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors text-slate-800" 
                      required 
                    />
                    
                    <div className="flex items-start gap-3 mt-6">
                      <input type="checkbox" id="consent" className="mt-1 accent-earth" required />
                      <label htmlFor="consent" className="text-[10px] leading-tight text-gray-500">
                        By ticking this box you agree to receive information about our online business and award winning product line via phone, message and email. We respect your privacy and you can opt out at any time.
                      </label>
                    </div>
                    
                    <button type="submit" className="w-full bg-charcoal text-white tracking-widest text-xs py-4 hover:bg-earth transition duration-300 mt-6 font-semibold">
                      LEARN MORE
                    </button>
                  </form>
                </div>
              ) : (
                /* Inline Success Routing Confirmation State */
                <div className="text-center py-6 animate-fade-in flex flex-col items-center justify-center">
                  <div className="mb-6 bg-teal-50 p-4 rounded-full inline-block">
                    <CheckCircle2 className="text-teal-600 w-16 h-16 animate-bounce-short" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-teal-950 mb-2">You're All Set!</h3>
                  <p className="text-xs font-bold tracking-[0.2em] text-earth mb-6 uppercase">Radiant Self Worth</p>
                  
                  <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-stone/30 mb-8 text-left text-sm text-slate-600 space-y-2">
                    <p className="font-medium text-slate-800">What happens next?</p>
                    <p>1. Your secure email draft window has loaded automatically.</p>
                    <p>2. Review and hit <span className="font-semibold text-teal-950">"Send"</span> in your email client app to securely forward your verification lead data to our team.</p>
                  </div>

                  <button 
                    onClick={handleResetForm}
                    className="group flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-charcoal hover:text-earth transition-colors duration-300 uppercase"
                  >
                    Go Back to Form
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
