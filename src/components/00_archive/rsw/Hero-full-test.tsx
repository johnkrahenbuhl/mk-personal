import React from 'react';
// 1. Import your asset using Vite's path resolution
import backgroundImage from '../../assets/hero-bg.jpg'; 

export default function HeroSection() {
  return (
    <div 
      // 2. Set the compiled image path as an inline CSS variable
      style={{ backgroundImage: `url(${backgroundImage})` }}
      // 3. Style width, height, and background properties using Tailwind v4 utilities
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      {/* Optional: Add content over the background */}
      <div className="bg-black/40 p-8 rounded-2xl text-center backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Welcome to My Site
        </h1>
        <p className="text-lg text-slate-200 max-w-md">
          This container perfectly occupies the viewport with a fully responsive background.
        </p>
      </div>
    </div>
  );
}