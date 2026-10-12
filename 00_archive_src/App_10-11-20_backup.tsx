// App.tsx file for the Meissa Krahenbuhl Personal Website Owner of Radiant Self Worth LLC
import { Navbar } from "./components/Navbar2.tsx";
import About from "./components/About.tsx";
import About2 from "./components/About2.tsx";
import { Pillars } from "./components/Pillars3.tsx";
import { LearningAndFeatures4 } from "./components/LearningAndFeatures4_form.tsx";
import Testimonials from "./components/Testimonials.tsx";
import { Footer } from "./components/Footer5.tsx";

function App() {
  return (
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden">
      <Navbar />
      <div className="2xl:w-[1920px] mx-auto">
        <About />
        <About2 />
        <Pillars />
        <LearningAndFeatures4 />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
