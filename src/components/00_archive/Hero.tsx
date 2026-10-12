import heroBg from '../assets/hero-bg.jpg'; 

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-charcoal/50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            Designed to <em className="italic text-stone-300">redefine</em> <br/> your time
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-lg text-stone-100">
            For those ready to create a more intentional, spacious and financially aligned way of living while building something of their own online.
          </p>
        </div>

        <div className="bg-sand p-8 md:p-12 shadow-2xl max-w-md mx-auto md:ml-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-xs font-bold tracking-[0.15em] text-earth mb-2">EXPLORE THE OPPORTUNITY</h2>
            <h3 className="font-serif text-3xl">Align your future</h3>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="First Name" className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" required />
            <input type="text" placeholder="Last Name" className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" required />
            <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white border border-stone focus:outline-none focus:border-earth transition-colors" required />
            
            <div className="flex items-start gap-3 mt-6">
              <input type="checkbox" id="consent" className="mt-1 accent-earth" required />
              <label htmlFor="consent" className="text-[10px] leading-tight text-gray-500">
                By ticking this box you agree to receive information about our online business and award winning product line via phone, message and email. We respect your privacy and you can opt out at any time.
              </label>
            </div>
            
            <button type="submit" className="w-full bg-charcoal text-white tracking-widest text-xs py-4 hover:bg-earth transition duration-300 mt-6">
              LEARN MORE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}