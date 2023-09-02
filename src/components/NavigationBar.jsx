import React, { useState } from "react";
import CallToAction from "./CallToAction";
import { ScrollToSection } from "./ScrollToSection";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const NavigationBar = () => {
  const item = ["Skills", "PortFolio", "Blogs & Article"];
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    ScrollToSection(section);
  };
  return (
    <div className="flex items-center justify-end w-full mt-5 md:mt-14 ">
      <div
        className="mobilemenu relative z-[99] md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? (
          <IoMdClose className={"text-2xl text-[#fff]"} />
        ) : (
          <CgMenuRight className={"text-2xl text-[#fff]"} />
        )}
      </div>
      
      <div
        className={`fixed w-full h-full top-0 left-0 z-[9] bg-black  flex-col justify-center items-center gap-[35px] md:flex md:flex-row md:relative md:w-auto md:h-auto md:gap-[unset] md:bg-transparent ${
          mobileMenu ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => menuItemClickHandler("about")}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-xl md:font-normal md:leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-400 hover:shadow-white text-2xl font-semibold "
        >
          About
        </span>
        <span
          onClick={() => menuItemClickHandler("skills")}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold "
        >
          Skills
        </span>
        <span
          onClick={() => menuItemClickHandler("Recent-Projects")}
          className="hover:shadow-[inset_200px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold"
        >
          PortFolio
        </span>
        <span
          onClick={() => menuItemClickHandler("blogs")}
          className="hover:shadow-[inset_95px_0_0_0_white] hover:text-black transition-shadow ease-in-out text-white md:text-xl md:font-normal leading-none ml-5 p-1 shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white cursor-pointer text-2xl font-semibold mr-2"
        >
          Education
        </span>
        <CallToAction
          text="Contact Me"
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
