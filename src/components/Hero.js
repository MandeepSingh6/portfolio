import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
function Hero() {
  return (
    <div name="hero" className="bg-[#1a2852] w-full h-screen">
      <div className="h-full max-w-[700px] mx-auto flex flex-col justify-center px-8 leading-10">
        <p className="text-blue-300">Hi, my name is</p>
        <h1 className="text-white text-4xl pb-1">Mandeep Singh</h1>
        <h2 className="text-gray-400 text-2xl">
          I'm a Software Developer dedicated to turning ideas into code-driven
          realities.
        </h2>
        <div className="text-white mt-2 ">
          <Link to="projects" smooth={true} duration={500}>
            <button className="hover:bg-white hover:text-blue-400 border-2 w-[12rem] px-3 flex justify-between items-center duration-300">
              View my Projects
              <HiArrowNarrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
