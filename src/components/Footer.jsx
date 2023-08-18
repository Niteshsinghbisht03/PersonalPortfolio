import React from "react";
import Section from "./Section";
import Logo from "../images/logo.png";
import SocialIcon from "../components/SocialIcon";
import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { ScrollToSection } from "../components/ScrollToSection";
const Footer = () => {
  const footermenuitem =
    "md:text-lg text-xs font-normal leading-4 md:leading-5 text-white md:my-0 md:mx-[12.5px] hover:opacity-50 cursor-pointer my-0 mx-1";
  return (
    <Section background="dark" className="pb-0">
      <div className="footercontentwrapper flex flex-col items-center md:w-full overflow-hidden ">
        {/* <div className="footerlogo md:w-[150px] w-[120px]">
          <img src={Logo} alt="Site Logo" className="block w-full" />
        </div> */}
        <ul className="footermenuitems m-0 p-0 list-none flex items-center mt-[30px] ">
          <li
            className={footermenuitem}
            onClick={() => ScrollToSection("about")}
          >
            About
          </li>
          <li
            className={footermenuitem}
            onClick={() => ScrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className={footermenuitem}
            onClick={() => ScrollToSection("Recent-Projects")}
          >
            Projects
          </li>
          <li
            className={footermenuitem}
            onClick={() => ScrollToSection("blogs")}
          >
            Education
          </li>
          <li
            className={footermenuitem}
            onClick={() => ScrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
        <div className="socialicon flex items-center mt-4 scale-75 md:scale-100 md:mt-7 ">
          <SocialIcon
            color="#0a66c2"
            link="https://www.linkdin.com"
            icon={<FaLinkedinIn />}
          />
          <SocialIcon
            color="#0d2636"
            link="https://www.github.com"
            icon={<FaGithub />}
          />
          <SocialIcon
            color="#0a66c2"
            link="https://www.facebook.com"
            icon={<FaFacebook />}
          />
          <SocialIcon
            color="#E84c88"
            link="https://www.instagram.com"
            icon={<FaInstagram />}
          />

          <SocialIcon
            color="#0a66c2"
            link="https://www.telegram.com"
            icon={<FaTelegram />}
          />
        </div>
        <div className="bottombar w-full  h-12 mt-6 md:h-20 border-t border-solid border-[rbga(255,255,255,0.2)] text-center flex items-center justify-center md:mt-[75px]">
          <div className="copyrighttext text-[#777777] text-xs md:text-lg font-normal leading-6">
            Copyright 2023 @Nitesh Singh Bisht | All Right Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
