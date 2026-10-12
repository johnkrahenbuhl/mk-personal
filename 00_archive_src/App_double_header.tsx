import Header from './components/Header';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import About from './components/About';
import Criteria from './components/Criteria';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden">
      <Header />
      <Navbar />
      <Hero />
      <Hero2 />
      <About />
      <Criteria />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
