import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { HeroRSW } from './components/rsw/Hero-rsw';
// import HeroSection from './components/rsw/Hero-full-test';
// import HeroFullRSW from './components/rsw/Hero-full-rsw';
import { Hero3RSW } from './components/rsw/Hero3-rsw';
import { Pillars } from './components/rsw/Pillars';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import About from './components/About';
import Criteria from './components/Criteria';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero3RSW />
      <div className="w-[1126px] mx-auto">
        <Pillars />
        <Hero />  
        <About />
        <Criteria />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
