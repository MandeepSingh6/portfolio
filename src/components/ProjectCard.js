import React from "react";

const ProjectCard = ({
  name,
  imgSrc,
  technologies,
  url,
  index,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:border-2 p-2 rounded-xl">
      <div className={`text-white relative duration-300`}>
        <img
          className="min-w-[380px] max-w-[380px] rounded-lg "
          src={imgSrc}
          alt="p1"
        />
        <div className="min-w-[380px] max-w-[380px] rounded-lg duration-300 absolute left-0 top-0 opacity-0 hover:opacity-90 flex flex-col items-center justify-center bg-black h-full">
          <a target="_blank" href={url} className="text-center">
            <button className="border-2 px-4 mt-2 bg-blue-900">Demo</button>
            <p>{technologies.join(", ")}</p>
          </a>
        </div>
      </div>
      <div className="text-white">
        <span className="font-extrabold text-xl">
          {name}{" "}
          <a className="text-blue-400" href={url} target="_blank">
            (visit)
          </a>
        </span>
        <br />
        <p className="text-justify font-light text-md">
          {description.split("For Admin").join("\r\n ADMIN")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
