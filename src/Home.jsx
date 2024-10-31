import { Education } from "./components/Education";
import { HeroSection } from "./components/HeroSection";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Navbar } from "./components/Navbar";
// import { About } from "./components/About";
import { OtherWorks } from "./components/OtherWorks";
import { Contact } from "./components/Contact";

function Home() {
  return (
    <div className="px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-60">
      <Navbar />
      <HeroSection />
      <Work />
      <div id="about" className="grid gap-10 py-20 lg:grid-cols-2 md:px-6">
        <Experience />
        <Education />
      </div>
      {/* <About /> */}
      <OtherWorks />
      <Contact />
    </div>
  );
}

export default Home;
