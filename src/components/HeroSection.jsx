import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText) 

export function HeroSection() {
  useGSAP(() => {
    const heroText = new SplitType(".hero_text", { types: "words, chars" });
    const herosubText = new SplitType(".hero_subtext", { types: "words, chars" });

    gsap.from(".hero_img", {
      y: 24,
      opacity: 0,
      duration: .4,
      stagger: { amount: 1 },
      ease: "expo.in",
    });

   
    gsap.from(heroText.chars, {
      duration: 2,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });

    gsap.from(herosubText.chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });
  }, []);

  return (
    <section className="mt-24 lg:mt-32 grid xl:grid-cols-2 gap-10 lg:gap-16 justify-between">
      <div className="hero_img h-32 w-32 md:h-44 md:w-44 xl:w-full xl:h-fit max-w-[410px] xl:ml-auto xl:order-2">
        <img className="rounded-full" src="/ganty.jpeg" alt="profile pic" />
      </div>

      <div className="">
        <h1 className="text-6xl englebert-regular hero_text uppercase md:text-7xl lg:text-[90px] my-4 -tracking-[0.02em]">
          Hi, I&apos;m Chidinma
        </h1>
        <h2
          className="text-3xl font-medium hero_text overflow-hidden mb-8 lg:text-5xl text-[#CDD8C6] flex gap-1 items-center -tracking-[0.03em] space-x-2
        "
        >
          A DATA ANALYST{" "}
          <img className="w-[45px] h-[45px] hero_img" src="/Frame.svg" alt="" />
        </h2>
        <p className="text-lg md:text-2xl hero_subtext onest-regular">
          Business Intelligence Analyst with strong drive for analysis,
          management and research. I have deep passion exploring the world of
          data through the power of digital tools. With a self-driven and
          diligent work ethic, I am eager to expand my knowledge, experience and
          contribute to impactful solutions in data-driven environments.
        </p>
      </div>
    </section>
  );
}
