import { useState } from "react";
import { Sparkles, BookOpen, Target } from "lucide-react";

export const LearningAndFeatures4 = () => {
  // State tracking for the lead generation fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // State tracking for submission UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Spiritual Laws of Success",
      desc: "Align with universal principles fostering inner harmony and external prosperity.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: "Life-Time Access & Support",
      desc: "Comprehensive online curriculum with instant updates and continuous guidance.",
    },
    {
      icon: <Target className="w-6 h-6 text-amber-400" />,
      title: "Supportive Community",
      desc: "Join a global network offering continuous guidance, accountability, and encouragement.",
    },
  ];

  // Dynamically update field data on user keystrokes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reset status if user starts typing again after an error
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  // Triggers when user clicks submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = {
      access_key: "b8d023f1-6227-4bd9-b27d-3587fb78fdf2",
      subject: `New Lead Inquiry: Explore Opportunity - ${formData.firstName} ${formData.lastName}`,
      from_name: "Radiant Self Worth Website",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        // Clear the form fields
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="programs" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Features */}
          <div className="lg:w-1/2">
            <div className="text-[24px] text-[#08060d] font-medium tracking-[-0.24px] leading-[28.32px] uppercase mb-3">
              YOUR FUTURE IS ON THE HORIZON
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-teal-950 mb-6 leading-tight">
              Unlock Your <span className="text-amber-500 italic">Highest</span>{" "}
              Potential
            </h3>

            <div className="mb-8">
              <p className="text-slate-600 text-lg leading-relaxed">
                Our comprehensive programs are designed to bridge the gap
                between where you are and where you want to be, blending
                practical strategy with deep internal alignment.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-teal-900 flex items-center justify-center shrink-0 shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-teal-950 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-sand p-8 md:p-12 shadow-2xl max-w-md mx-auto md:ml-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-sm text-teal-600 uppercase">Next Step</h2>
                <div className="font-serif font-bold text-4xl text-teal-900">
                  Plan Your Path
                </div>
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

                <div className="flex items-start text-left gap-3 mt-6 cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 accent-earth bg-white [color-scheme:light]"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-[10px] leading-tight text-gray-500"
                  >
                    By ticking this box you agree to receive information about
                    our online business and award winning product line via
                    phone, message and email. We respect your privacy and you
                    can opt out at any time.
                  </label>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-teal-700 bg-teal-50 border border-teal-200 text-sm p-3 rounded-md text-center mt-4">
                    Thank you! Your information has been received. We will be in touch shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-700 bg-red-50 border border-red-200 text-sm p-3 rounded-md text-center mt-4">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <div className="mt-6 pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-full tracking-widest font-medium py-4 transition duration-300 ${
                      isSubmitting
                        ? "bg-teal-700 text-teal-100 cursor-not-allowed opacity-80"
                        : "bg-teal-900 text-white hover:bg-teal-800"
                    }`}
                  >
                    {isSubmitting ? "SENDING..." : "START TODAY"}
                  </button>

                  <p className="text-xs text-slate-400 italic pt-4 balance leading-relaxed">
                    We will call you within 24 hours
                    <br className="hidden sm:inline" /> to chat about your
                    goals.
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
