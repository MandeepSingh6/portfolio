import React from "react";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import tailwind from "../Assets/tailwind.png";
import react from "../Assets/react.png";
import SQL from "../Assets/sql.png";
function Skills() {
  return (
    <div name="skills" className="bg-[#1a2852] min-h-screen w-full flex flex-col justify-center">
      <div className="p-4">
        <h2 className="text-white text-4xl text-center">SKILLS</h2>
        <p className="text-gray-200 text-center">
          These are technologies I've worked with
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 w-[90%] mx-auto gap-20 text-gray-400 text-sm pb-4">
          <li className="shadow-2xl py-8">
            <img className="w-[60px] mx-auto" src={HTML} alt="html" />
            <p className="text-center my-2">HTML</p>
          </li>
          <li className="shadow-2xl  py-8">
            <img className="w-[60px] mx-auto" src={CSS} alt="html" />
            <p className="text-center my-2 ">CSS</p>
          </li>
          <li className="shadow-2xl py-8">
            <img className="w-[60px] mx-auto" src={JavaScript} alt="html" />
            <p className="text-center my-2">JavaScript</p>
          </li>
          <li className="shadow-2xl  py-8">
            <img className="w-[60px] mx-auto" src={react} alt="html" />
            <p className="text-center my-2">React</p>
          </li>
          <li className="shadow-2xl py-8">
            <img className="w-[60px] mx-auto" src={tailwind} alt="html" />
            <p className="text-center my-2">Tailwind</p>
          </li>
          <li className="shadow-2xl py-8">
            <img className="w-[60px] mx-auto" src={SQL} alt="html" />
            <p className="text-center my-2">SQL</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
