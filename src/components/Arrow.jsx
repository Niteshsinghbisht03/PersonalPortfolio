import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const Arrow = ({ bg }) => {
  return (
    <span
      className={`text-xl w-fit rounded-3xl flex items-center justify-center  rotate-[-45deg] relative z-[1] transition-all duration-500 ${
        bg ? bg : ""
      }`}
    >
      <BsArrowRightShort />
    </span>
  );
};

export default Arrow;
