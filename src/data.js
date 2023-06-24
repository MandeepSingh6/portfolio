import BingeBase from "./Assets/bingebase.jpg";
import youtube from "./Assets/youtube-.jpg";
import animalkingdompark from "./Assets/animalkingdompark.jpg";

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
    name: "Youtube Clone",
    imgSrc: youtube,
    technologies: ["React", "Tailwind", "Redux", "React Router"],
    src: "https://mandeep-youtube.vercel.app/",
    description: `In this project I recreated the popular video-sharing platform,
      YouTube. Using React and Tailwind, I have built a dynamic and
      interactive user interface that closely resembles original YouTube
      website. I have integrated various APIs, such as YouTube Data API to
      fetch real-time data and populate the application.
      By creating this clone, I aimed to demonstrate my proficieny in
      React, Tailwind and API integration as well as my ability to replicate
      complex web applications.`,
  },
  {
    id: 2,
    name: "BingeBase",
    imgSrc: BingeBase,
    technologies: ["React", "Tailwind", "Redux", "React Router"],
    src: "https://binge-base.vercel.app/",
    description: `This is a user-friendly movies and shows explorer. Here users can search their favorite movies and shows to get information about them, and can also add them to a watchlist. I have integrated the popular Movie Database(TMDb) API to fetch the movies and shows data into the application. `,
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
    description: `This is a MERN application designed to provide an interactive platform for users to explore the animal park. The application allows the users to book tickets for park visits. Application provides list of upcoming events at park, so that users can plan their visits accordingly. Application also offers comprehensive view of the park's diverse animal species, providing information and details about each animal to educate and entertain visitors. Additionally, users can browse through a captivating gallery of images showcasing the park's animals and can also make donations to help vulnerable animals. On administrative side, the park’s administrators can efficiently manage tickets, add or update upcoming events, add or remove animals from database, can update the gallery and can also manage the donations.
    `,
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
