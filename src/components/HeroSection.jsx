export function HeroSection() {
  return (
    <section className="mt-24 lg:mt-32 flex flex-col lg:flex-row gap-10 justify-center md:justify-between px-4 md:px-12 lg:px-20 xl:px-32">
      <div className="rounded-2xl h-44 w-44 md:w-64 md:h-64 lg:order-2">
        <img className="rounded-full" src="/ganty.jpeg" alt="profile pic" />
      </div>

      <div className="">
        <h1 className="text-4xl uppercase md:text-5xl lg:text-[84px] font-medium my-4 bai-jamjuree-bold">
          Hi, I&apos;m Chidinma
        </h1>
        <p className="text-2xl md:text-3xl mb-12 lg:text-4xl bai-jamjuree-medium">
          A DATA ANALYST <i className="ri-line-chart-line text-[#e94732]"></i>
        </p>
        <div className="">
          <a
            href="mailto:chidinmaukandu8@gmail.com"
            className="py-5 px-8 bg-black bai-jamjuree-medium rounded-xl text-lg text-white hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
