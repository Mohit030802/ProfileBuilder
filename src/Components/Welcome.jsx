import React from "react";
import resume from "../assets/resume.jpg";
import resume2 from "../assets/img2.jpeg";
import tery from "../assets/try.jpeg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] ">
      <div className="w-full h-full">
        <div className="h-[100vh] ">
          <div class="grid grid-cols-3 gap-4 p-5">


            <div class="flex h-[90vh] justify-center items-center   text-4xl text-white font-bold text-center p-10"><span className="drop-shadow-lg shadow-black text-9xl">The Resume Maker</span></div>


            <div class="  text-lg font-bold text-center p-10 rounded-lg col-span-2 ">
              <img className="flex rounded-md shadow-xl " src={resume} alt="" />
            </div>



          </div>
        </div>

        <div class="container mx-auto px-5 py-2 lg:px-32  lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={resume} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={resume2} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={resume} />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={resume2} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={resume} />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <Link to={'/Resume'}>
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center hover:opacity-75"
                    src={tery} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
