import { works } from "./data";

export function Work() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl text-center">My Works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {works?.map((work, index) => (
          <div className="text-center" key={index}>
            <a href={work.githubURL} className="text-2xl underline ">
              {work?.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
