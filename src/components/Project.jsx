import React, { useState } from "react";
import Section from "../components/Section";
import Filters from "./Filter";
import ShowCase from "./ShowCase";

const ProjectData = [
  {
    id: 1,
    name: "Moviex",
    tags: ["Mobile-app", "Web-app"],
    media: {
      thumbnail: "src/images/portfolio/thumb-1.jpg",
    },
  },
  {
    id: 2,
    name: "E-Commerce",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: "src/images/portfolio/thumb-2.jpg" },
  },
  {
    id: 3,
    name: "To-do App",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: "src/images/portfolio/thumb-3.jpg" },
  },
  {
    id: 4,
    name: "Calculator",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: "src/images/portfolio/thumb-4.jpg" },
  },
  {
    id: 5,
    name: "Table Creater",
    tags: ["Mobile-app", "Web-app"],
    media: { thumbnail: "src/images/portfolio/thumb-5.jpg" },
  },
  {
    id: 6,
    name: "Website Clone",
    tags: ["Web-page"],
    media: { thumbnail: "src/images/portfolio/thumb-6.jpg" },
  },
  {
    id: 7,
    name: "Tribute Page",
    tags: ["Web-page"],
    media: { thumbnail: "src/images/portfolio/thumb-7.jpg" },
  },
  {
    id: 8,
    name: "Flex Box",
    tags: ["Web-page"],
    media: { thumbnail: "src/images/portfolio/thumb-8.jpg" },
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
