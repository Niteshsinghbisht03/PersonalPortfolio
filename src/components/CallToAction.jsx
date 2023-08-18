import React, { useState } from "react";

import Arrow from "./Arrow";
const CallToAction = ({ text, action, icon }) => {
  const [change, setChange] = useState(false);
  const hoverchange = "bg-white";
  return (
    <div
      onMouseEnter={() => setChange(true)}
      onMouseLeave={() => setChange(false)}
      onClick={action}
      className="relative flex items-center justify-center px-2 py-0 overflow-hidden text-xl font-normal leading-none bg-white rounded-md cursor-pointer h-11 w-max text-slate-700  before:absolute before:left-0 before:w-full before:h-full before:bg-yellow-400 before:z-[0] before:translate-x-[-100%] hover:before:translate-x-[0] before:transition-all before:duration-300"
    >
      <span className="relative z-[1] transition-all duration-500">{text}</span>

      <div
        className={`w-[21px] h-[21px] relative  rounded-[41px] flex justify-center items-center my-3 text-xs ${
          change ? hoverchange : "bg-yellow-400"
        }`}
      >
        {icon ? icon : <Arrow />}
      </div>
    </div>
  );
};

export default CallToAction;
