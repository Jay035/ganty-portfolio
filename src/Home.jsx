import { Education } from "./components/Education";
import { HeroSection } from "./components/HeroSection";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { OtherWorks } from "./components/OtherWorks";
import { Contact } from "./components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Work />
      <div className="grid gap-10 my-10 lg:grid-cols-2 px-4 md:px-12 lg:px-20 xl:px-32">
        <Experience />
        <Education />
      </div>
      <About />
      <OtherWorks />
      <Contact />
    </>
  );
}

export default Home;
