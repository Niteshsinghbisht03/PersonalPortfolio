import React, { useState } from "react";
import Section from "../components/Section";
import Filters from "./Filter";
import ShowCase from "./ShowCase";

import Pic1 from "../images/portfolio/thumb-1.jpg";
import Pic2 from "../images/portfolio/thumb-2.jpg";
import Pic3 from "../images/portfolio/thumb-3.jpg";
import Pic4 from "../images/portfolio/thumb-4.jpg";
import Pic5 from "../images/portfolio/thumb-5.jpg";
import Pic6 from "../images/portfolio/thumb-6.jpg";
import Pic7 from "../images/portfolio/thumb-7.jpg";
import Pic8 from "../images/portfolio/thumb-8.jpg";
const ProjectData = [
  {
    id: 1,
    name: "Moviex",
    tags: ["Mobile-app", "Web-app"],
    media: {
      thumbnail: Pic1,
    },
  },
  {
    id: 2,
    name: "E-Commerce",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: Pic7 },
  },
  {
    id: 3,
    name: "To-do App",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: Pic2 },
  },
  {
    id: 4,
    name: "Calculator",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: Pic3 },
  },
  {
    id: 5,
    name: "Table Creater",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: Pic4 },
  },
  {
    id: 6,
    name: "Website Clone",
    tags: ["Web-page"],
    media: { thumbnail: Pic5 },
  },
  {
    id: 7,
    name: "Tribute Page",
    tags: ["Web-page"],
    media: { thumbnail: Pic6 },
  },
  {
    id: 8,
    name: "Flex Box",
    tags: ["Web-page"],
    media: { thumbnail: Pic8 },
  },
];
const Project = () => {
  const [projects, setProjects] = useState(ProjectData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTimeout(() => {
      if (tag != "All") {
        const filteredProjects = ProjectData.filter((f) =>
          f.tags.includes(tag)
        );

        setProjects(filteredProjects);
      } else {
        setProjects(ProjectData);
      }
    }, 200);
  };
  return (
    <Section id="Recent-Projects" title="Recent Projects" background="light">
      <div className="portfolio-content-wrapper flex flex-col w-full ">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <ShowCase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Project;
