import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contactinfobox bg-neutral-700 md:w-[355px] w-full p-4 md:p-7 text-gray-300">
      <h4 className="md:leading-8 mb-5 text-xl leading-6">
        Feel free to get in touch with me.i am always open to discussing new
        projects ,ideas or opportunties to be a part of your vision.
      </h4>
      <div className="contactoption flex item-center mt-[15px] ">
        <FaPhoneAlt className={"text-yellow-500 text-base"} />
        <span className="text text-white ml-[15px]">+91 6398302762</span>
      </div>
      <div className="contactoption flex item-center mt-[15px] ">
        <MdEmail className={"text-yellow-500 text-xl"} />
        <span className="text text-white ml-[15px]">
          niteshsinghbisht6398@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
