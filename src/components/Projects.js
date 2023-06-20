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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              name={project.name}
              technologies={project.technologies}
              imgSrc={project.imgSrc}
              url={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
