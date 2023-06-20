import React from "react";

const SkillCard = ({ name, imgSrc }) => {
  return (
    <div className="shadow-2xl py-8">
      <img
        className={`w-[60px] mx-auto ${
          (name === "MongoDB" || name === "Node") &&
          "scale-[170%] bg-white mt-4 mb-6 py-1 px-2 rounded-sm"
        }`}
        src={imgSrc}
        alt={name}
      />
      <p className="text-center my-2">{name}</p>
    </div>
  );
};

export default SkillCard;
