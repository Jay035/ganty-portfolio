"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let workId = document.getElementById("work");
  let aboutId = document.getElementById("about");
  let contactId = document.getElementById("contact");

  useGSAP(() => {
    gsap.from(["#nav"], {
      opacity: 0,
      duration: 0.8,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <nav
      id="nav"
      className="mb-12 flex justify-between items-center w-full gap-x-12 py-6"
    >
      <h1 className="">GANTY</h1>

      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute  -tracking-[0.02em] top-0 bg-black/90 lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col justify-center gap-10 lg:flex-row lg:gap-12 lg:justify-between items-center text-lg md:text-2xl`}
      >
        <button
          className="hover:border-b-2 border-[#9CFF8F]"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
            workId.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          WORK
        </button>
        <button
          className="hover:border-b-2 border-[#9CFF8F]"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
            aboutId.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          ABOUT
        </button>
        <button
          className="hover:border-b-2 border-[#9CFF8F]"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
            contactId.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          CONTACT
        </button>

        <a
          // target="_blank"
          href=""
          className={`text-xl w-fit flex items-center gap-[10px] border border-[#AFB1AD] rounded-[30px] px-4 py-3 hover:border-[#9CFF8F]`}
        >
          MY RESUME
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M4.83059 3.99435L10.5368 9.70059M10.5368 9.70059H4.83059M10.5368 9.70059V3.99435"
              stroke="#AFB1AD"
              strokeWidth="1.14125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* Hamburger (menu) icon */}
      <div
        className="z-50 w-fit flex flex-col gap-1 items-center cursor-pointer lg:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] translate-y-4 w-7` : ``
          }`}
        ></span>
        {/* <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span> */}
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] translate-y-[10px] w-7` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
