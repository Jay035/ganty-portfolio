export function OtherWorks() {
  return (
    <section className="my-20">
      <h2 className="text-3xl md:text-4xl lg:text-6xl text-center -tracking-[0.03em]">
        Explore my Portfolio
      </h2>
      <div className="mt-11 text-2xl md:text-3xl grid gap-10 md:grid-cols-2">
        <div className="">
          <img
            className="mb-4 w-full h-[220px] object-cover"
            src="/r-programming.jpeg"
            alt="r-programming"
          />

          <a
            href="https://github.com/Ganty5/Starbuck-Coffee-Store-Analysis-using-R-programming"
            className=""
          >
            R Programming
          </a>
        </div>
        <div className="">
          <img
           className="mb-4 w-full h-[220px] object-cover"
           src="/power bi.jpeg"
            alt="power bi"
          />

          <a
            href="https://www.novypro.com/profile_projects/chidinmaukandu?Popup=memberProject&Data=1712568802661x979060435138858400"
            className=""
          >
            Power BI
          </a>
        </div>
        <div className="">
          <img
            className="mb-4 w-full h-[220px] object-cover"
            src="/python-program.jpeg"
            alt="python"
          />
          <a href="https://github.com/Ganty5?tab=repositories" className="">
            Python
          </a>
        </div>
        <div className="">
          <img
            className="mb-4 w-full h-[220px] object-cover"
            src="/sql.jpg"
            alt="sql"
          />
          <a href="https://github.com/Ganty5/SALES-ANALYSIS" className="">
            SQL
          </a>
        </div>
      </div>
    </section>
  );
}
