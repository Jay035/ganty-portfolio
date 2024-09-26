import { Education } from "./components/Education";
import { HeroSection } from "./components/HeroSection";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Work />
      <div className="grid gap-10 my-10 lg:grid-cols-2 px-4 md:px-32">
        <Experience />
        <Education />
      </div>
      <About />
    </>
  );
}

export default App;
