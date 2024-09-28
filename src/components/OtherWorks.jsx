export function OtherWorks() {
  return (
    <section className="my-20 px-4 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl md:text-4xl text-center bai-jamjuree-medium">
        Explore My Portfolio
      </h2>
      <div className="mt-6 grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <div className=" w-full mb-4">
            <img src="../../public/r-programming.jpeg" alt="r-programming" />
          </div>
          <a
            href="https://github.com/Ganty5/Starbuck-Coffee-Store-Analysis-using-R-programming"
            className="text-2xl underline "
          >
            R Programming
          </a>
        </div>
        <div className="text-center">
          <div className="w-full mb-4">
            <img src="../../public/power bi.jpeg" alt="power bi" />
          </div>
          <a
            href="https://www.novypro.com/profile_projects/chidinmaukandu?Popup=memberProject&Data=1712568802661x979060435138858400"
            className="text-2xl underline "
          >
            Power BI
          </a>
        </div>
        <div className="text-center">
          <div className="bg-black/50 w-full h-32 mb-4"></div>
          <a href="" className="text-2xl underline ">
            SQL
          </a>
        </div>
      </div>
    </section>
  );
}
