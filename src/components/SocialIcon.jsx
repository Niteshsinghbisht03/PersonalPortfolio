import React from "react";

const SocialIcon = ({ icon, color, link }) => {
  return (
    <div
      className="social-icons w-11 h-11 rounded-[50%] flex items-center justify-center text-white text-lg my-0 mx-[12.5px] cursor-pointer hover:opacity-50"
      style={{ background: color }}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      {icon}
    </div>
  );
};

export default SocialIcon;
