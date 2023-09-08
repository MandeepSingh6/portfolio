import BingeBase from "./Assets/bingebase.jpg";
import youtube from "./Assets/youtube-.jpg";
import animalkingdompark from "./Assets/animalkingdompark.jpg";

import HTML from "./Assets/html.svg";
import CSS from "./Assets/css.svg";
import JavaScript from "./Assets/javascript.svg";
import React from "./Assets/react.svg";
import Tailwind from "./Assets/tailwind.png";
import SQL from "./Assets/sql.png";
import Git from "./Assets/git.svg";
import MongoDB from "./Assets/mongo.png";
import Node from "./Assets/node.png";
import NextJs from "./Assets/next-js-logo.png";
import TypeScript from "./Assets/typescript.svg";

export const projects = [
  {
    id: 1,
    name: "Youtube Clone",
    imgSrc: youtube,
    technologies: ["React", "Tailwind", "Redux", "React Router"],
    src: "https://mandeep-youtube.vercel.app/",
    description: `Built YouTube clone with video playback, comments and playlists using React, Redux and integrated YouTube API. Clone closely resembles original website and real-time data is fetched using the YouTube Data API for seamless content population.`,
  },
  {
    id: 2,
    name: "BingeBase",
    imgSrc: BingeBase,
    technologies: ["React", "Tailwind", "Redux", "React Router"],
    src: "https://binge-base.vercel.app/",
    description: `Created movie/TV discovery app which allow users to search and view details of their favorite shows and movies. Also provides watchlist where users can save shows/movies. Users also get recommendations on movies and shows based on searched movie or show. TMDb API is used for data fetching.`,
  },
  {
    id: 3,
    name: "Animal Kingdom Park",
    imgSrc: animalkingdompark,
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Tailwind",
      "Mongoose",
      "Cloudinary",
      "Express",
    ],
    src: ["https://animalkingdompark-admin.onrender.com/"],
    description: `Developed full-stack MERN application with user and admin versions. Users can book tickets for visits,
    access upcoming events information, and explore a diverse range of animal species, and can also make donations to support vulnerable animals. Administrators have tools to manage tickets, events, animal data, gallery, and donations efficiently.`,
  },
];

export const skills = [
  { id: 102, name: "JavaScript", imgSrc: JavaScript },
  { id: 103, name: "React", imgSrc: React },
  { id: 104, name: "Tailwind", imgSrc: Tailwind },
  { id: 109, name: "NextJs", imgSrc: NextJs },
  { id: 109, name: "TypeScript", imgSrc: TypeScript },
  { id: 100, name: "HTML", imgSrc: HTML },
  { id: 101, name: "CSS", imgSrc: CSS },
  { id: 105, name: "SQL", imgSrc: SQL },
  { id: 106, name: "Git", imgSrc: Git },
  { id: 107, name: "MongoDB", imgSrc: MongoDB },
  { id: 108, name: "Node", imgSrc: Node },
];
