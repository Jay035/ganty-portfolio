import { Education } from "./components/Education";
import { HeroSection } from "./components/HeroSection";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Navbar } from "./components/Navbar";
import { OtherWorks } from "./components/OtherWorks";
import { Contact } from "./components/Contact";
import { useRef } from "react";

function Home() {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-60">
      <Navbar workRef={workRef} aboutRef={aboutRef} contactRef={contactRef} />
      <HeroSection />
      <Work workRef={workRef} />
      <div id="about" ref={aboutRef} className="grid gap-10 py-20 lg:grid-cols-2 lg:px-6">
        <Experience />
        <Education />
      </div>
      <OtherWorks />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default Home;
