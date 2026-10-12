import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoSvg from '../assets/radiant-self-worth.svg';

export const Footer: React.FC = () => {
    return (
        <footer id= "contact" className = "w-full bg-white font-sans text-[18px] text-radiant" >
    {/* Upper Section: Logo & Heading */ }
        < div className = "flex flex-col items-center pb-4 px-4 text-center" >
        {/* Centered SVG Logo */ }
            < img
    src = { logoSvg }
    alt = "Radiant Self Worth Logo"
    className = "h-72 w-auto object-contain"
        />
        </div>

        {/* Upper Section: Contact Information */ }
            < div className = "brightness-60 font-serif text-[36px] font-base tracking-[0.1em] text-radiant -mt-18 mb-12" > Contact Melissa </div>
                < div className = "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-2 px-4 pt-8 pb-24 border-b border-gray-100" >

                {/* Email link */ }
                    < a
    href = "mailto:radiantselfworth@gmail.com"
    className = "flex items-center gap-2 brightness-50 hover:opacity-80 transition-opacity tracking-wide"
        >
        <Mail size={ 18 } strokeWidth = { 1.5} className = "" />
            <span className="hover:underline transition-all" > radiantselfworth@gmail.com</span>
                </a>

    {/* Phone Link */ }
    <a 
          href="tel:847-208-0978"
    className = "flex items-center gap-2 brightness-50 text-radiant hover:opacity-80 transition-opacity tracking-wide"
        >
        <Phone size={ 18 } strokeWidth = { 1.5} className = "" />
            <span className="hover:underline transition-all" > 847 - 208 -0978 </span>
                </a>

    {/* Website Link */ }
    <a 
          href="https://radiantselfworth.com"
    target = "_blank"
    rel = "noopener noreferrer"
    className = "flex items-center gap-2 brightness-50 hover:opacity-80 transition-opacity tracking-wide"
        >
        <MapPin size={ 18 } strokeWidth = { 1.5} className = "" />
            <span className="hover:underline transition-all" > www.radiantselfworth.com </span>
                </a>

                </div>

    {/* Bottom Section: Copyright & Policy */ }
    <div className="border-t border-[#a88d52]/[20%] flex flex-col items-center justify-center gap-[0px] pt-2 mx-[256px] text-[#4a5568]/75 tracking-wide text-[12px] font-light" >
        <a href="/privacy-policy" className = "hover:underline transition-all" >
            Privacy Policy
                </a>
                < div className = "text-[10px] font-thin text-[#4a5568]/75 pt-0" >© 2026 Radiant Self Worth, LLC </div>
                    </div>
                    </footer>
  );
};