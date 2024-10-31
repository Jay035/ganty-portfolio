import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";

export function HeroSection() {
  useGSAP(() => {
    const heroText = new SplitType(".hero_text", { types: "words" });

    gsap.from(".hero_img", {
      y: 24,
      opacity: 0,
      duration: 1,
      stagger: { amount: 1 },
      ease: "expo.in",
    });

    gsap.from([heroText.words, ".hero_text"], {
      y: 24,
      duration: 2,
      // stagger: { amount: 1 },
    });
  }, []);

  return (
    <section className="mt-24 lg:mt-32 grid lg:grid-cols-2 gap-10 lg:gap-16 justify-between">
      <div className="hero_img h-32 w-32 md:h-44 md:w-44 lg:w-full lg:h-fit max-w-[423px] lg:ml-auto lg:order-2">
        <img className="" src="/dp.png" alt="profile pic" />
      </div>

      <div className="">
        <h1 className="text-5xl englebert-regular hero_text uppercase md:text-6xl lg:text-[90px] my-4 -tracking-[0.02em]">
          Hi, I&apos;m Chidinma
        </h1>
        <h2 className="text-3xl font-medium hero_text overflow-hidden mb-8 lg:text-5xl text-[#CDD8C6] flex gap-1 items-center -tracking-[0.03em]">
          A DATA ANALYST{" "}
          <img className="w-[45px] h-[45px] hero_img" src="/Frame.svg" alt="" />
        </h2>
        <p className="text-lg md:text-2xl hero_text onest-regular">
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
