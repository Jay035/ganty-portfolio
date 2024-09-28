export function Contact() {
  return (
    <footer id="contact" className="px-4 md:px-12 lg:px-20 xl:px-32 mb-10">
      <h2 className="text-4xl md:text-6xl bai-jamjuree-medium text-center">
        Get in touch
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
        <div className="">
          <p className="font-medium text-xl"> Address</p>
          <address className="text-lg">Besançon, France </address>
        </div>

        <div className="text-3xl flex items-center gap-2">
          <a href="https://github.com/Ganty5" className="">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/chidinma-ukandu-nwafor-01357b156/" className="">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://wa.me/+33745451615" className="">
            <i className="ri-whatsapp-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
