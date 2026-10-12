export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:px-12 flex justify-between items-center">
      <div className="text-sm font-semibold tracking-[0.2em] text-white drop-shadow-md">
        MELISSA KRAHENBUHL <span className="opacity-70 px-2">|</span> <span className="text-radiant"> RADIANT SELF WORTH </span>
      </div>
      <a 
        href="https://calendly.com/radiantselfworth/new-meeting-1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white text-xs tracking-widest border border-white/40 px-6 py-2 hover:bg-white hover:text-charcoal transition duration-300"
      >
        CONNECT
      </a>
    </header>
  );
}