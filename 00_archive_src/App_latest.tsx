import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { HeroRSW } from './components/rsw/Hero-rsw';
import { Hero3RSW } from './components/rsw/Hero3-rsw';
import { Pillars } from './components/rsw/Pillars';
import { LearningAndFeatures } from './components/LearningAndFeatures';
import { TestimonialsRSW } from './components/rsw/Testimonials-rsw';
import { FooterRSW } from './components/rsw/Footer-rsw';
import About from './components/About';
import Criteria from './components/Criteria';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero3RSW />
      <div className="w-[1366px] mx-auto">
        <Pillars />
        <LearningAndFeatures />
        <TestimonialsRSW />
        <FooterRSW />    
        <About />
        <Criteria />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
