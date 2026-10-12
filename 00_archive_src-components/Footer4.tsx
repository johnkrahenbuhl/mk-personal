import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
// Imported from the assets directory as requested
import logoSvg from '../assets/radiant-self-worth.svg';

export const Footer4: React.FC = () => {
    return (
        <footer id= "contact" className = "w-full bg-white font-sans text-[18px] text-radiant" >

        {/* Upper Section: Logo & Heading */ }
            < div className = "flex flex-col items-center pt-24 pb-4 px-4 text-center" >
            {/* Centered SVG Logo */ }
                < img
    src = { logoSvg }
    alt = "Radiant Self Worth Logo"
    className = "h-24 w-auto mb-6 object-contain"
        />

    {/* Adjusted vertical rhythm for the heading */ }
        < h2 className = "font-serif italic text-[48px] font-bold tracking-[0.1em] text-teal-900 m-0" >
            Contact Melissa
                </h2>
                </div>

    {/* Action Row: Contact Information */ }
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 py-8 border-b border-gray-100" >

    {/* Email link */ }
        < a
    href = "mailto:radiantselfworth@gmail.com"
    className = "flex items-center gap-2 text-radiant/50 hover:text-radiant/80 transition-colors tracking-wide"
        >
        <Mail size={ 18 } strokeWidth = { 1.5} />
            <span className="hover:underline transition-all" > radiantselfworth@gmail.com</span>
                </a>

    {/* Phone Link */ }
    <a 
          href="tel:847-208-0978"
    className = "flex items-center gap-2 text-radiant/50 hover:text-radiant/80 transition-colors tracking-wide"
        >
        <Phone size={ 18 } strokeWidth = { 1.5} />
            <span className="hover:underline transition-all" > 847 - 208 -0978 </span>
                </a>

    {/* Website Link */ }
    <a 
          href="https://radiantselfworth.com"
    target = "_blank"
    rel = "noopener noreferrer"
    className = "flex items-center gap-2 text-radiant/50 hover:text-radiant/80 transition-colors tracking-wide"
        >
        <MapPin size={ 18 } strokeWidth = { 1.5} />
            <span className="hover:underline transition-all" >://radiantselfworth.com</span>
    </a>

        </div>

    {/* Bottom Section: Copyright & Policy */ }
    <div className="border-t border-[#a88d52]/20 flex flex-col items-center justify-center gap-2 py-8 mx-auto max-w-xl text-[#4a5568]/75 tracking-wide text-[12px] font-light" >
        <a href="/privacy-policy" className = "hover:underline transition-all" >
            Privacy Policy
                </a>
                < div className = "text-[10px] font-thin text-[#4a5568]/75" >
          © 2026 Radiant Self Worth, LLC
    </div>
    </div>
    </footer>
  );
};
