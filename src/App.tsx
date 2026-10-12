// App.tsx file for the Meissa Krahenbuhl Personal Website Owner of Radiant Self Worth LLC
import { Navbar } from "./components/Navbar4";
import About from "./components/About";
import About2 from "./components/About2";
import { Pillars } from "./components/Pillars4";
import { LearningAndFeatures4 } from "./components/LearningAndFeatures4_form.tsx";
import Testimonials from "./components/Testimonials";
import { Footer } from "./components/Footer6";

function App() {
  return (
    // Added min-w-xs (320px) to the outermost div to prevent the layout from crushing on very small screens
    <div className="antialiased selection:bg-earth selection:text-white overflow-x-hidden min-w-xs">
      {/* Navbar remains outside to span 100% of the viewport width */}
      <Navbar />

      {/* 
        max-w-7xl caps the width at 1280px for large screens.
        mx-auto centers the container, creating the sidebars shown in the design.
        px-4 sm:px-6 lg:px-8 provides scaling horizontal padding for mobile and tablets.
      */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
