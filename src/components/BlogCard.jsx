import React, { useState } from "react";
import Arrow from "./Arrow";
const BlogCard = ({ user, date, image, title, description }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="blogcard flex flex-col items-start h-[538px] md:w-[calc(100%/3)] rounded-2xl overflow-hidden mr-5 cursor-pointer hover:"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="imagesection w-full h-[250px] overflow-hidden ">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover object-center block `}
        />
      </div>
      <div
        className={`contentsection flex flex-col p-7 pb-14 relative grow bg-white`}
      >
        <div className="infobar flex justify-between items-center mb-5">
          <div className="username text-lg font-medium leading-5">
            by {user}
          </div>
          <div className="posteddate text-lg font-medium leading-5">{date}</div>
        </div>
        <h3 className="text-xl ">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="readmorectan flex items-center absolute bottom-7 left-7 cursor-pointer">
          <span className="text text-lg font-medium leading-5">Read More</span>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
