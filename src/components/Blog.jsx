import React, { useEffect } from "react";
import Section from "../components/Section";
import { FaGraduationCap } from "react-icons/fa";

import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";
import man from "../images/man.png";

const Blog = () => {
  const leftContainer = "left-0";
  const rightContainer = "left-[50%]";
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section id="blogs" title="Education" background="dark">
      <div class="bg-black text-white ">
        <div class="container mx-auto flex flex-col items-center justify-center md:flex-row my-12 md:my-24">
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden  px-0 h-full">
                <div
                  class="border-2-2 border-solid border-yellow-500 absolute h-full border right-[50%]"
                  // style="; border: 2px solid #FFC100; border-radius: 1%;"
                ></div>
                <div
                  class="border-2-2 border-solid border-yellow-500 absolute h-full border left-[50%]"
                  // style="; border: 2px solid #FFC100; border-radius: 1%;"
                ></div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-6/12"></div>

                  <div
                    data-aos="fade-up"
                    class="order-1 w-5/12 py-4 text-right"
                  >
                    <p class="mb-2 text-base text-yellow-300">March 2019</p>

                    <h4 class="mb-0 font-bold text-lg md:text-2xl">
                      High School
                    </h4>
                    <p class="mb-3 text-sm text-yellow-300 ">
                      Rudrapur,Uttarakhand
                    </p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Completed High School From Shri Guru Nanak H/S Public
                      School with 78%.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-6/12"></div>
                  <div
                    data-aos="fade-up"
                    class="order-1  w-[45%]  py-4 text-left"
                  >
                    <p class="mb-2 text-base text-yellow-300">
                      August 2019 - July 2022
                    </p>
                    <h4 class="mb-0 font-bold text-lg md:text-2xl">Diploma</h4>
                    <p class="mb-3 text-sm text-yellow-300 ">
                      Kashipur,Uttarakhand
                    </p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Completed 3 year Diploma in Computer Science and
                      Engineering From Government Polytechnic Kashipur with 76%.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div
                    data-aos="fade-up"
                    class="order-1 w-5/12 px-1 py-4 text-right"
                  >
                    <p class="mb-2 text-base text-yellow-300">April 2022</p>
                    <h4 class="mb-0 font-bold text-lg md:text-2xl">
                      Intermidiate
                    </h4>
                    <p class="mb-3 text-sm text-yellow-300 ">
                      Rudrapur,Uttarakhand
                    </p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Completed Intermidiate From National Institute Of Open
                      Schooling with 62%.
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-4/12"></div>

                  <div data-aos="fade-up" class="order-1  w-[47%]  py-4">
                    <p class="mb-2 text-base text-yellow-300">
                      August 2023 - Present
                    </p>
                    <h4 class="mb-0 font-bold  text-lg md:text-2xl text-left">
                      B-Tech(L-Entry)
                    </h4>
                    <p class="mb-3 text-sm text-yellow-300 ">
                      Gopeshwar,Uttarakhand.
                    </p>

                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pursuing Graduation in Computer Science and Engineering
                      From Institute of Technology ,Gopeshwar
                    </p>
                  </div>
                </div>
              </div>
              <img class="mx-auto -mt-32 md:-mt-36 " src={man} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
