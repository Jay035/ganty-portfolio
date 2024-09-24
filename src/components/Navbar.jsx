"use client";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="mb-12 flex justify-between items-center border-b border-[#E5E7EB] tracking-tight w-full gap-x-12 py-6 px-6">
        <h1 className="">Logo</h1>

      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute top-0 bg-[#fff] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col justify-center lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <button
          className="mt-6 lg:mt-0"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          WORK
        </button>
        <button
          className="mt-3 lg:mt-0"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          ABOUT
        </button>
        <button
          className="mt-3 lg:mt-0"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          CONTACT
        </button>
      </section>

      <button className="px-4 py-2 hidden lg:flex border hover:text-white border-black w-24 rounded-sm text-lg text-black mt-8 lg:mt-0 hover:bg-black">
        Let&apos;s talk
      </button>

      {/* Hamburger (menu) icon */}
      <div
        className="z-50 w-fit flex flex-col gap-1 items-center cursor-pointer lg:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-5 h-[3px] bg-black block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] translate-y-4 w-7` : ``
          }`}
        ></span>
        <span
          className={`w-8 h-[3px] bg-black block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-5 h-[3px] bg-black block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] translate-y-[10px] w-7` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}