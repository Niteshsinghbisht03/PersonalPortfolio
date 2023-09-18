import React from "react";
import { useEffect } from "react";
import Section from "./Section";
import techIcons from "../images/tech-icons.png";
import CallToAction from "./CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "react-circular-progressbar/dist/styles.css";
import MyResume from "../images/myresume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section background="dark" id="skills">
      <div className="flex items-center md:flex-row flex-col ">
        <div className="w-[75%] md:w-[40%] flex " data-aos="zoom-in">
          <img
            src={techIcons}
            alt="skills image"
            className="w-[100%] max-w-md block"
          />
        </div>
        <div className="md:w-[60%] text-center mt-6 md:mt-0 w-full md:ml-10 text-white  md:text-left">
          <h2 className="mb-[10px] md:mb-[30px] md:text-6xl text-4xl font-semibold">
            Skills
          </h2>
          <p
            data-aos="zoom-in"
            className="text-base font-normal leading-5 md:text-lg md:leading-6 mb-[15px]"
          >
            Knowledgeable in utilizing front-end frameworks such as React ,Redux
            to build interactive and dynamic user interfaces efficiently .
            Experienced in developing interactive and dynamic web interfaces
            using JavaScript, including DOM manipulation, event handling, and
            asynchronous programming.Adept at creating fluid and adaptive
            layouts that provide a seamless user experience across a range of
            devices and screen sizes.Proficient in utilizing Git for version
            control, collaborating effectively with team members, and managing
            codebase changes efficiently. Continuously staying updated with the
            latest front-end technologies and trends to deliver modern and
            innovative web experiences.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href={MyResume}
              download="Nitesh Singh Bisht Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToAction
                text="Download CV"
                icon={<AiOutlineCloudDownload />}
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skill;
