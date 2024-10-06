import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";

export function HeroSection() {
  useGSAP(() => {
    const heroText = new SplitType(".hero_text", { types: "words" });

    gsap.from("#hero_img", {
      y: 24,
      opacity: 0,
      duration: 1,
      stagger: { amount: 1 },
      ease: "expo.in",
    });

    gsap.from([heroText.words, ".hero_text"], {
      opacity: 0,
      duration: 1,
      ease: "ease",
    });

    gsap.from([heroText.words, ".hero_text"], {
      y: 24,
      duration: 2,
      // stagger: { amount: 1 },
    });
  }, []);

  return (
    <section className="mt-24 lg:mt-32 flex flex-col lg:flex-row gap-10 justify-center md:justify-between px-4 md:px-12 lg:px-20 xl:px-32">
      <div
        id="hero_img"
        className="rounded-2xl h-44 w-44 md:w-64 md:h-64 lg:order-2"
      >
        <img className="rounded-full" src="/ganty.jpeg" alt="profile pic" />
      </div>

      <div className="">
        <h1 className="text-4xl hero_text overflow-hidden uppercase md:text-5xl lg:text-[84px] font-medium my-4 bai-jamjuree-bold">
          Hi, I&apos;m Chidinma
        </h1>
        <p className="text-2xl hero_text overflow-hidden md:text-3xl mb-12 lg:text-4xl bai-jamjuree-medium">
          A DATA ANALYST <i className="ri-line-chart-line text-[#e94732]"></i>
        </p>
        <a
          href="mailto:chidinmaukandu8@gmail.com"
          className="hero_text py-5 px-8 bg-black bai-jamjuree-medium rounded-xl text-lg text-white hover:bg-white hover:text-black hover:border hover:border-black"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
