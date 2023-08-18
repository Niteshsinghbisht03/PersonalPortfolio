import React from "react";

const Section = ({ children, id, className, title, background }) => {
  return (
    <div
      className={`md:py-24 py-12 px-2 relative flex justify-center h-full ${
        className ? className : " "
      } 
      ${background === "dark" ? "bg-black" : "bg-zinc-900"}`}
      id={id || ""}
    >
      <div className="md:w-[1200px] w-100% py-0 px-0 md:px-5 relative flex items-center flex-col overflow-hidden">
        {title && (
          <div className="w-full max-w-lg text-center text-white">
            <h2 className="md:text-5xl text-3xl font-medium">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Section;
