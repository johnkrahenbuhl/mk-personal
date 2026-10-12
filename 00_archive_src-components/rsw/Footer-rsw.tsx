import { Mail } from 'lucide-react';

export const FooterRSW = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold text-white tracking-wide mb-2">Radiant Self Worth</h2>
            <p className="text-sm text-slate-500 max-w-sm">Empowering individuals worldwide to reach unprecedented levels of success and personal mastery.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <a href="mailto:radiantselfworth@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail className="w-5 h-5" /> radiantselfworth@gmail.com
            </a>
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Radiant Self Worth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};