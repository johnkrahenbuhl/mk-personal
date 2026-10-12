import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logoSvg from "../assets/radiant-self-worth.svg";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-white font-sans text-radiant">
      {/* Upper Section: Logo & Heading */}
      <div className="flex flex-col items-center pb-4 px-4 text-center">
        {/* Centered SVG Logo */}
        <img
          src={logoSvg}
          alt="Radiant Self Worth Logo"
          className="h-48 sm:h-72 w-auto object-contain"
        />
      </div>

      <div className="brightness-60 font-serif text-[28px] sm:text-[36px] font-base tracking-[0.1em] text-radiant -mt-8 sm:-mt-18 mb-8 sm:mb-12 text-center">
        Contact Melissa
      </div>

      {/* Upper Section: Contact Information */}
      {/* Changed to flex-col on mobile to prevent squishing, flex-row on md+ */}
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 pt-8 pb-16 sm:pb-24 border-b border-gray-100">
        {/* Email link */}
        <a
          href="mailto:radiantselfworth@gmail.com"
          className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[14px] sm:text-[18px] brightness-50 hover:opacity-80 transition-opacity tracking-wide"
        >
          <Mail size={18} strokeWidth={1.5} className="shrink-0" />
          <span className="hover:underline transition-all">
            radiantselfworth@gmail.com
          </span>
        </a>

        {/* Phone Link */}
        <a
          href="tel:847-208-0978"
          className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[15px] sm:text-[18px] brightness-50 text-radiant hover:opacity-80 transition-opacity tracking-wide"
        >
          <Phone size={18} strokeWidth={1.5} className="shrink-0" />
          <span className="hover:underline transition-all">847-208-0978</span>
        </a>

        {/* Website Link */}
        <a
          href="https://radiantselfworth.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[14px] sm:text-[18px] brightness-50 hover:opacity-80 transition-opacity tracking-wide"
        >
          <MapPin size={18} strokeWidth={1.5} className="shrink-0" />
          <span className="hover:underline transition-all">
            www.radiantselfworth.com
          </span>
        </a>
      </div>

      {/* Bottom Section: Copyright & Policy */}
      {/* Replaced mx-[256px] with responsive margins to fit 320px viewports safely */}
      <div className="border-t border-[#a88d52]/[20%] flex flex-col items-center justify-center gap-1 pt-4 pb-6 mx-4 sm:mx-16 lg:mx-[256px] text-[#4a5568]/75 tracking-wide text-[12px] font-light">
        <a
          href="/privacy-policy"
          className="hover:underline transition-all py-3 px-4 min-h-[44px] flex items-center justify-center"
        >
          Privacy Policy
        </a>
        <div className="text-[10px] font-thin text-[#4a5568]/75 pt-1">
          © 2026 Radiant Self Worth, LLC
        </div>
      </div>
    </footer>
  );
};
