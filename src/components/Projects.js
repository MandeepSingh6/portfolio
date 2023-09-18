import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div name="projects" className="bg-[#1a2852] min-h-screen pt-[2.4rem]">
      <div className="w-[90%] mx-auto">
        <div>
          <h2 className="text-white text-center text-4xl mb-8">PROJECTS</h2>
        </div>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              name={project.name}
              technologies={project.technologies}
              imgSrc={project.imgSrc}
              url={project.src}
              description={project.description || ""}
            />
          ))}
        </div>
        <div className="pl-2 md:p-0 mt-12">
          <h2 className="text-3xl text-white mb-4">More Projects...</h2>
          <select
            onChange={(e) => e.target.value && window.open(e.target.value)}
            className="w-1/2 rounded py-1 text-lg"
          >
            <option value="">Select a project to open</option>
            <option value="https://currencyconverter-mandeep.netlify.app">
              Currency Converter
            </option>
            <option value="https://task-manager-seven-mu.vercel.app/">
              Task Manager
            </option>
            <option value="https://netflix-mandeep.netlify.app">
              Netflix Clone
            </option>
            <option value="https://tenzies-mandeep.netlify.app/">
              Tenzies
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Projects;
