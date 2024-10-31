export function Contact() {
  return (
    <footer
      id="contact"
      className="pt-20 pb-10 md:pb-14 lg:pb-24 md:pt-[84px] lg:pt-[224px]"
    >
      <h4 className="text-[#9E77ED] -tracking-[3%] text-lg md:text-2xl lg:text-[30px] xl:leading-[40px]">
        READY TO WORK TOGETHER?
      </h4>
      <h1 className="mt-4 mb-6 text-white text-[40px] leading-[1] md:text-5xl xl:text-[120px] -tracking-[3%]">
        Get in touch
      </h1>
      <section className="flex md:items-center flex-col sm:flex-row justify-between gap-8">
        <a
          href="mailto:chidinmaukandu8@gmail.com"
          className="bg-[#9CFF8F] text-black hover:bg-[#9CFF8F]/80 rounded-[30px] w-fit flex items-center gap-[10px] py-2 md:py-3 px-4"
        >
          Send me an email <img src="/icon.svg" alt="arrow" />
        </a>
        <div className="flex gap-4 items-center">
          <a href="https://www.linkedin.com/in/chidinma-ukandu-nwafor-01357b156/">
            <i className="ri-linkedin-fill text-2xl" alt="linkedin logo" />
          </a>
          <a href="https://github.com/Ganty5" className="">
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a href="https://wa.me/+33745451615">
            <i className="ri-whatsapp-fill text-2xl" alt="whatsapp logo" />
          </a>
        </div>
      </section>
    </footer>
  );
}
