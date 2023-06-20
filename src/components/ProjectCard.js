import React from "react";

const ProjectCard = ({ name, imgSrc, technologies, url, index }) => {
  console.log(`translate-y-[${index * 3}rem]`);

  return (
    <div className={`text-white mx-auto relative hover:scale-110 duration-300`}>
      <img className="w-[360px] rounded-lg" src={imgSrc} alt="p1" />
      <div className="duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black w-full h-full">
        <p className="text-lg">{name}</p>
        <p className="text-[10px]">({technologies.join(", ")})</p>
        <a href={url}>
          <button className="border-2 px-4 mt-2 bg-blue-900">Demo</button>
        </a>
      </div>
      <div className="p-2 text-center">{name}</div>
    </div>
  );
};

export default ProjectCard;
