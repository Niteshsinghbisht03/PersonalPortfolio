import React from "react";
import cloud from "../images/cloud.png";
import cloudSoft from "../images/cloud-soft.png";
import NavigationBar from "./NavigationBar";
import IntroContent from "./IntroContent";

const Intro = () => {
  return (
    <div
      id="about"
      className="relative flex justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div
        className="w-full h-full absolute bg-[url('src/images/vector-background.png')] bg-right bg-no-repeat bg-cover z-0 md:bg-center"
        id="parallax"
      ></div>
      <img
        src={cloud}
        alt=""
        className="absolute bottom-0 left-0 md:w-full z-[2] w-[300%]"
      />
      <img
        src={cloudSoft}
        alt=""
        className="absolute bottom-0 w-[300%] md:w-full left-0 z-[1] mix-blend-soft-light"
      />
      <div className="w-full md:w-[1200px] py-0 px-3 relative flex flex-col">
        <NavigationBar />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
