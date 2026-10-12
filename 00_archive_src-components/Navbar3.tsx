import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Programs", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 py-3 ${scrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col items-start group text-left">
          {/* Eyebrow Text */}
          <span className="brightness-50 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest text-radiant mb-0.5 transition-colors group-hover:text-teal-500 text-left">
            Radiant Self Worth
          </span>
          {/* Main Text */}
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-teal-900 leading-none text-left">
            Melissa Krahenbuhl
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-medium hover:text-amber-500 transition-colors text-slate-600"
            >
              {link}
            </a>
          ))}
          <a
            href="https://calendly.com/radiantselfworth/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-teal-900 hover:text-teal-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-t-gray-100 border-b border-b-gray-200 shadow-lg shadow-slate-900/10 transition-all duration-300 origin-top overflow-hidden rounded-b-2xl ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-600 font-medium text-lg w-full text-center py-2 hover:text-teal-700 hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://calendly.com/radiantselfworth/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 mt-4 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800"
            onClick={() => setIsOpen(false)}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};
