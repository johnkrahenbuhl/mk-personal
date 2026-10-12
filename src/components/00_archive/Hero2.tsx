import React, { useState } from 'react';
// Import your local asset here
import heroBg from '../assets/hero-bg.jpg'; 

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    optIn: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-[#fcfbfa] px-4 py-12 md:py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Media Player with Imported Image Asset */}
        <div className="lg:col-span-7 w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg group">
            {/* Using the imported heroBg variable here */}
            <img 
              src={heroBg} 
              alt="Woman working by the pool" 
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            
            {/* Custom Fake Video Controls overlay matching the reference */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                {/* Play Button */}
                <button className="hover:text-amber-200 transition-colors" aria-label="Play">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <span className="font-mono text-xs bg-black/40 px-1.5 py-0.5 rounded">03:01</span>
              </div>
              
              {/* Right Controls */}
              <div className="flex items-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Volume */}
                <button aria-label="Mute"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg></button>
                {/* Closed Captions */}
                <span className="border border-white text-[10px] px-1 font-bold rounded-sm scale-90">CC</span>
                {/* Settings */}
                <button aria-label="Settings"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg></button>
                {/* PIP */}
                <button aria-label="Picture in Picture"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/></svg></button>
                {/* Fullscreen */}
                <button aria-label="Fullscreen"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Form Card */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none bg-[#f3eff5]/50 border border-neutral-200/40 rounded-3xl p-8 md:p-10 shadow-sm">
          <span className="block text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">
            Explore the Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 italic font-light mb-6">
            Align your future
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-neutral-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-shadow"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="optIn"
                  checked={formData.optIn}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-700 focus:ring-neutral-500"
                />
                <span className="text-[11px] leading-relaxed text-neutral-500 group-hover:text-neutral-700 transition-colors">
                  Opt-In * <br />
                  By checking this box you agree to receive information about our online business and award winning product line via phone, message and email. <br />
                  <span className="block mt-1 italic">We respect your privacy and you can opt out at any time.</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#767167] hover:bg-[#635e55] text-white font-medium uppercase tracking-wider text-xs py-3.5 px-4 rounded-md shadow-sm transition-colors duration-200"
            >
              Connect
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}