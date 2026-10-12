import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer2: React.FC = () => {
  return (
    <footer className="w-full bg-white font-sans text-[18px] font-light text-[#a88d52]">
      {/* Upper Section: Contact Information */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-8 border-b border-gray-100">
        
        {/* Email link */}
        <a 
          href="mailto:radiantselfworth@gmail.com" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity tracking-wide"
        >
          <Mail size={14} strokeWidth={1.5} className="text-[#a88d52]" />
          <span className="underline underline-offset-2">radiantselfworth@gmail.com</span>
        </a>

        {/* Phone Link */}
        <a 
          href="tel:847-208-0978" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity tracking-wide"
        >
          <Phone size={14} strokeWidth={1.5} className="text-[#a88d52]" />
          <span className="underline underline-offset-2">847-208-0978</span>
        </a>

        {/* Website Link */}
        <a 
          href="https://radiantselfworth.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity tracking-wide"
        >
          <MapPin size={14} strokeWidth={1.5} className="text-[#a88d52]" />
          <span className="underline underline-offset-2">www.radiantselfworth.com</span>
        </a>

      </div>

      {/* Bottom Section: Copyright & Policy */}
      <div className="flex flex-col items-center justify-center gap-1.5 py-5 text-[#4a5568] tracking-wide text-[16px]">
        <div>© 2026 Radiant Self Worth, LLC</div>
        <a href="/privacy-policy" className="hover:underline transition-all">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};