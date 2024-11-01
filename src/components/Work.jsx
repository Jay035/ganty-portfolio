import { works } from "./data";
import PropTypes from "prop-types";

export function Work({ workRef }) {
  return (
    <section ref={workRef} id="work" className="pt-24 lg:pt-40 mb-20">
      <h2 className="text-4xl md:text-5xl lg:text-6xl">MY WORK</h2>
      <div className="mt-5 grid gap-10 lg:grid-cols-3">
        {works?.map((work, index) => (
          <div className="" key={index}>
            <img className="mb-4 w-full h-[257px] object-cover object-top" src={work.img} alt="project image" />
            <a href={work.URL} className="text-xl lg:text-3xl font-medium">
              {work?.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

Work.propTypes = {
  workRef: PropTypes.string,
};
