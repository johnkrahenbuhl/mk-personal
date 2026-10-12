import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Programs', 'Testimonials', 'Contact'];

  return (
    <nav className={`fixed inset-x-0 z-50 transition-all duration-300 bg-white shadow-md py-4`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl font-bold tracking-wide text-teal-900`}>
          Radiant Self Worth
        </a>

        {/* Desktop Nav */}
<div className="hidden md:flex space-x-8 items-center">
  {navLinks.map((link) => (
    <a 
      key={link} 
      href={`#${link.toLowerCase()}`} 
      className={`text-sm uppercase tracking-wider font-medium hover:text-amber-500 transition-colors text-slate-600`}
    >
      {link}
    </a>
  ))}
  {/* Updated the href to your Calendly link and added attributes to open in a new tab */}
  <a 
    href="https://calendly.com/radiantselfworth/new-meeting-1" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`px-6 py-2 rounded-full font-medium transition-all bg-teal-900 text-white hover:bg-teal-800`}
  >
    Get Started
  </a>
</div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={scrolled ? 'text-teal-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-teal-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-slate-600 font-medium text-lg w-full text-center py-2 hover:text-teal-700"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};