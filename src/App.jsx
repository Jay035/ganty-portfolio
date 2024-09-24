import { Education } from "./components/Education";
import { HeroSection } from "./components/HeroSection";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Work />
      <div className="grid gap-10 mb-10 lg:grid-cols-2">
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default App;
