export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10" id="connect">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-3xl mb-2">Brooke Davies</h2>
            <p className="text-stone-300 tracking-[0.2em] text-xs mb-8">THE POSTCARD LIFE</p>
            <p className="text-sm font-light text-stone-400 max-w-sm leading-relaxed">
              Through a modern online business model, mentorship, education and personal growth, I've created a way of living that offers greater flexibility, purpose and freedom.
            </p>
          </div>
          <div className="md:text-right space-y-2 text-sm font-light text-stone-300">
            <p>AUSTRALIA</p>
            <p>PH: +61 4 0002 2493</p>
            <p>WHATSAPP: +61 4 0002 2493</p>
            <p className="pt-2">
              EMAIL: <a href="mailto:INFO@BROOKEDAVIES.COM" className="hover:text-earth transition-colors">INFO@BROOKEDAVIES.COM</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-stone-400">
          <p>COPYRIGHT © 2018–2026 BROOKEDAVIES.COM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition">EARNINGS DISCLAIMER</a>
            <a href="#" className="hover:text-white transition">TERMS & CONDITIONS</a>
            <a href="#" className="hover:text-white transition">ABOUT US</a>
          </div>
        </div>
        <p className="text-center text-[10px] text-stone-500 mt-8 max-w-3xl mx-auto leading-relaxed">
          It takes dedication and commitment to create success as a business owner. Statements of income displayed on this site are true and correct, however they do not guarantee your own success.
        </p>
      </div>
    </footer>
  );
}