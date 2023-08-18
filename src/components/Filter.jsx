import React, { useState } from "react";

const filterdata = [
  { name: "All", id: "All" },
  { name: "Web Page", id: "Web-page" },
  { name: "Web App", id: "Web-app" },
  { name: "Mobile App", id: "Mobile-app" },
];
const Filters = ({ filterProjects }) => {
  const [active, setActive] = useState("");
  const clickhandler = (id) => {
    setActive(id);
    filterProjects(id);
  };
  return (
    <ul className="filter-menu-items m-0 p-0 flex justify-start items-center  md:justify-center w-full list-none my-[30px] mx-0 ">
      {filterdata.map((item) => {
        const activeClass = "shadow-[inset_200px_0_0_0_white] text-black";
        return (
          <li
            className={` md:text-2xl md:font-normal md:leading-7 text-base font-normal leading-5 py-[10px] px-[20px] mx-[2.5px] my-0  shadow-[inset_0_0_0_0_white] shadow-white duration-300 transition-shadow ease-in-out cursor-pointer hover:shadow-[inset_200px_0_0_0_white]  hover:text-black ${
              active === item.id ? activeClass : "text-white"
            }`}
            key={item.id}
            onClick={() => clickhandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
