import { ExperienceData } from "./data";

export function Experience() {
  return (
    <section className="">
      <h2 className="text-3xl md:text-4xl text-[#9CFF8F] uppercase">
        Experience
      </h2>
      <ul className="text-[#F3F4F6] mt-4 text-lg md:text-2xl flex flex-col gap-6 ">
        {ExperienceData?.map((data, index) => (
          <li key={index} className="border-b border-[#374151] pb-6 last:border-b-0">
            {data.company}, <span className="opacity-70">{data.duration}</span>
            <span className="block pt-2">{data.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
