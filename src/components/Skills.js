import React from "react";
import { skills } from "../data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#1a2852] min-h-screen w-full flex flex-col justify-center pt-[1rem]"
    >
      <h2 className="text-white text-4xl text-center">SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[90%] mx-auto gap-20 text-gray-400 text-sm pb-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} imgSrc={skill.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
