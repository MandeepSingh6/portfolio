import React from "react";
import currencyconverter from "../Assets/currencyconverter.png";
import netflix from "../Assets/netflix.png";
import memegenerator from "../Assets/memegenerator.png";
import gallary from "../Assets/gallary.png";

function Projects() {
  return (
    <div name="projects" className="bg-[#1a2852] min-h-screen pt-20 ">
      <div className="w-[75%] mx-auto">
        <div>
          <h2 className="text-white text-center text-4xl">PROJECTS</h2>
          <p className="text-gray-300 text-center mb-8">
            Check out some of my recent projects{" "}
          </p>
        </div>
        <div className="">
          <ul className="grid sm:grid-cols-2 gap-12 p-4 pb-12">

            <li className="text-white mx-auto relative hover:scale-110 duration-300">
              <img className="w-[360px]" src={netflix} alt="p1" />
              <div className="duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black w-full h-full">
                <p className="text-lg">Netflix Clone</p>
                <p className="text-[10px]">(Tailwind, React)</p>
                <button className="border-2 px-4 mt-2 bg-blue-900">
                  <a href="https://netflix-mandeep.netlify.app">Demo</a>
                </button>
              </div>
            </li>
            <li className="text-white mx-auto relative hover:scale-110 duration-300">
              <img className="w-[360px]" src={currencyconverter} alt="p1" />
              <div className="duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black w-full h-full ">
                <p className="text-lg">Currency Converter</p>
                <p className="text-[10px]">(CSS, JavaScript)</p>
                <button className="border-2 px-4 mt-2 bg-blue-900">
                  <a href="https://currencyconverter-mandeep.netlify.app">Demo</a>
                </button>
              </div>
            </li>

            <li className="text-white mx-auto relative hover:scale-110 duration-300">
              <img className="w-[360px]" src={memegenerator} alt="p1" />
              <div className="duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black w-full h-full">
                <p className="text-lg">Meme Generator</p>
                <p className="text-[10px]">(React)</p>
                <button className="border-2 px-4 mt-2 bg-blue-900">
                  <a href="https://memegenerator-mandeep.netlify.app">Demo</a>
                </button>
              </div>
            </li>
            <li className="text-white mx-auto relative hover:scale-110 duration-300">
              <img className="w-[360px]" src={gallary} alt="p1" />
              <div className="duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black w-full h-full">
                <p className="text-lg">Gallary</p>
                <p className="text-[10px]">(JavaScript, CSS)</p>
                <button className="border-2 px-4 mt-2 bg-blue-900">
                  <a href="https://gallary-mandeep.netlify.app">Demo</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
