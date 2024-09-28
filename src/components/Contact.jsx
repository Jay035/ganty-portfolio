export function Contact() {
  return (
    <footer className="px-4 md:px-12 lg:px-20 xl:px-3">
      <h2 className="text-3xl md:text-4xl bai-jamjuree-medium text-center lg:text-left">
        Get in touch
      </h2>
      <div className="grid gap-8 mt-8">
        <div className="text-xl">
           <p className="font-medium"> Address</p>
           <address>Besançon, France </address>
        </div>

      <div className="text-3xl flex items-center gap-2">
        <a href="" className="">
          <i className="ri-github-fill"></i>
        </a>
        <a href="" className="">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="" className="">
          <i className="ri-whatsapp-fill"></i>
        </a>
      </div>
      </div>

    </footer>
  );
}
