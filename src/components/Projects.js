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
      </div>
    </div>
  );
}

export default Projects;
