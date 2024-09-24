export function HeroSection() {
  return (
    <section className="mt-24 mb-32 flex flex-col md:flex-row gap-2 justify-center md:justify-between px-4 md:px-32">
      <div className="rounded-2xl h-44 w-44 md:w-64 md:h-64 md:order-2">
        <img className="rounded-2xl md:rounded-full" src="/ganty.jpeg" alt="profile pic" />
      </div>

      <div className="">
        <h1 className="text-4xl uppercase md:text-6xl font-medium my-4 font-otterco-medium">
        Hi, I&apos;m Chidinma
        </h1>
        <p className="text-2xl md:text-4xl">A DATA ANALYST <i className="ri-line-chart-line text-[#e94732]"></i></p>
        <div className="">
          <button className="p-4 bg-black w-32 rounded-xl text-lg text-white mt-8">Let&apos;s talk</button>
        </div>
      </div>
    </section>
  );
}
