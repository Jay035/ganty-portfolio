import { works } from "./data";

export function Work() {
  return (
    <section id="work" className="pt-24 lg:pt-40 mb-20">
      <h2 className="text-4xl md:text-5xl lg:text-6xl">
        MY WORK
      </h2>
      <div className="mt-5 grid gap-10 lg:grid-cols-2">
        {works?.map((work, index) => (
          <div className="" key={index}>
            <div className="bg-white/50 w-full h-32 mb-4"></div>
            <a href={work.URL} className="text-2xl lg:text-3xl font-medium">
              {work?.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
