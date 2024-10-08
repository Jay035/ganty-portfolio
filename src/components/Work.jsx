import { works } from "./data";

export function Work() {
  return (
    <section id="work" className="pt-24 lg:pt-40 mb-20 px-4 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl md:text-4xl text-center bai-jamjuree-medium">
        My Works
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works?.map((work, index) => (
          <div className="text-center" key={index}>
            <div className="bg-black/50 w-full h-32 mb-4"></div>
            <a href={work.URL} className="text-2xl underline ">
              {work?.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
