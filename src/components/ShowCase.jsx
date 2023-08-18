import React, { useEffect } from "react";
import Arrow from "./Arrow";
import Aos from "aos";
import "aos/dist/aos.css";
const ShowCase = ({ data, transition }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projectsshowcase flex flex-wrap px-2 md:px-0 justify-center md:justify-[normal] md:ml-[-10px] md:mr-[-10px] md:h-[570px] ">
      {data.map((project) => (
        <div
          data-aos="fade-up"
          key={project.name}
          className="showcaseitem md:w-[255px] md:h-[255px] overflow-hidden w-[120px]
           h-[130px] md:rounded-2xl rounded-md m-2 md:m-3 relative cursor-pointer transition-all hover:z-[1] hover:scale-[1.2] hover:shadow-[0_0px_0px_-0.75px_rgba(0,0,0,0.75)]"
        >
          <div className="metacontent flex w-fit flex-col items-start md:opacity-0 opacity-100 absolute  md:px-[75px] md:py-[100px] bottom-0 left-0 p-2 rounded-xl transition-all backdrop-blur-sm  md:hover:visible hover:opacity-100 ">
            <h3 className="text-black text-xl font-normal md:mb-[10px] w-32 ">
              {project.name}
            </h3>
            <div className="gotocta flex items-center ">
              <span className="text text-xs font-normal leading-5">
                Project Detail
              </span>
              <div className="arrowicon">
                <Arrow bg="bg-yellow-500" className="w-15px h-15px ml-[5px]" />
              </div>
            </div>
          </div>
          <img
            src={project.media.thumbnail}
            alt=""
            className="w-full h-full   object-cover object-center block  "
          />
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
