import BingeBase from "./Assets/bingebase.jpg";
import youtube from "./Assets/youtube.jpg";
import currencyConverter from "./Assets/currencyconverter.png";

import HTML from "./Assets/html.png";
import CSS from "./Assets/css.png";
import JavaScript from "./Assets/javascript.png";
import React from "./Assets/react.png";
import Tailwind from "./Assets/tailwind.png";
import SQL from "./Assets/sql.png";
import Git from "./Assets/git.svg";
import MongoDB from "./Assets/mongo.png";
import Node from "./Assets/node.png";

export const projects = [
  {
    id: 1,
    name: "BingeBase",
    imgSrc: BingeBase,
    technologies: ["React", "Tailwind"],
    src: "https://binge-base.vercel.app/",
  },
  {
    id: 2,
    name: "Youtube Clone",
    imgSrc: youtube,
    technologies: ["React", "Tailwind"],
    src: "https://mandeep-youtube.vercel.app/",
  },
  {
    id: 3,
    name: "Currency Converter",
    imgSrc: currencyConverter,
    technologies: ["JavaScript", "CSS"],
    src: "https://currencyconverter-mandeep.netlify.app/",
  },
];

export const skills = [
  { id: 100, name: "HTML", imgSrc: HTML },
  { id: 101, name: "CSS", imgSrc: CSS },
  { id: 102, name: "JavaScript", imgSrc: JavaScript },
  { id: 103, name: "React", imgSrc: React },
  { id: 104, name: "Tailwind", imgSrc: Tailwind },
  { id: 105, name: "SQL", imgSrc: SQL },
  { id: 106, name: "Git", imgSrc: Git },
  { id: 107, name: "MongoDB", imgSrc: MongoDB },
  { id: 108, name: "Node", imgSrc: Node },
];
