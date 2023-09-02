import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import hand from "../images/hand.png";
import CallToAction from "./CallToAction";
import intropic from "../images/intopic.png";
import { ScrollToSection } from "./ScrollToSection";
const IntroContent = () => {
  return (
    <div className="flex items-center justify-between  grow md:pt-0 md:items-center ">
      <div className="flex flex-col md:flex-row md:p-5 md:items-center md:justify-center">
        <div className="w-[100%] md:w-[55%]  lg:pt-[55px] xl:pt-0 xl:w-[45%] text-center">
          <h1 className="flex flex-col text-white items-center md:items-start">
            <span className="text-[24px] font-normal leading-[30px] justify-center flex md:justify-start  items-center md:text-[42px] md:font-normal md:leading-[48px] ">
              <span className="text ">Hello</span>
              <span className="ml-2 icon animate-waving-hand">
                <img src={hand} />
              </span>
              <span className="text">,I Am</span>
            </span>
            <span className="bigtext md:text-[55px] text-[35px] leading-[52px] md:font-normal font-medium md:leading-[65px]">
              Nitesh Singh Bisht
            </span>
          </h1>
          <p className="md:text-xl md:font-normal md:leading-[24px] md:p-0 md:my-6 text-xl font-normal leading-[24px] my-4 mx-0 py-0 px-4 text-white text-center md:text-left">
            A Full Stack Developer and Designer. Currently a Second year B.Tech
            Student pursuing Computer Science and engineering.I am open to
            Project collaboration and Intenship Opportunities.
          </p>
          <span className="flex justify-center md:justify-start">
            <CallToAction
              text="Contact Me"
              action={() => ScrollToSection("contact")}
            />
          </span>
        </div>
        <div className="rightcol md:w-[45%] md:grow-[unset]  hidden md:flex md:justify-center">
          <img
            src={intropic}
            alt="into-image"
            className="block w-full mb-10 xl:mb-12 xl:relative "
          />
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
