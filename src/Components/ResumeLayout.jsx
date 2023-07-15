import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../assets/img.jpg'
import { Link } from "react-router-dom";

const ResumeLayout = ({
  profile: {
    
    firstname,
    lastname,
    registration,
    phoneNo,
    langKnow,
    techStack,
    aboutme,
    aquote,
    emailAdd,
    linkedIn,
    githubId,
    collegeName,
    gradYear,
    degree,
    cgpa,
    experienceOrg,
    role,
    expFrom,
    expTo,
    exp,
  },
}) => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#392d69] to-[#b57bee] mx-auto">
        <div className="flex justify-end items-end space-x-4 mr-8 -mb-8">
          <div className="relative flex  justify-end item-end">
            <div className=" bg-white p-2 rounded-md ">
              <ModeEditIcon />
            </div>
          </div>
          <div className="relative flex  justify-end item-end">
            <div className=" bg-white p-2 rounded-md ">
              <DeleteIcon/>
            </div>
          </div>
         
        </div>
        <div className="flex">
          <div className=" grid grid-cols-3 m-8 mt-12 h-full  bg-white rounded-lg">
            <div className="col-span-1 bg-[#052f5f] text-white rounded-l-lg">
              <div className="flex justify-center items-center ml-8 p-6 ">
                <img
                  className="w-[70%] h-[70%] rounded-[50%] shadow-md"
                  src={img}
                  alt="Image Not Found"
                />
              </div>
              <div className="flex flex-col font-serif font-semibold  justify-center items-center">
                <div className="flex flex-col space-y-3 items-center">
                  <h2 className="text-4xl">
                    {firstname} {lastname}
                  </h2>
                  <span>{registration}</span>
                  <span>{phoneNo}</span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-20 font-serif font-semibold space-y-3">
                <h1 className="text-4xl">Contact Me at</h1>
                <span>{emailAdd}</span>

                <h2>
                  <Link to={linkedIn}>LinkedIn</Link>
                </h2>

                <h2>
                  <Link to={githubId}>GitHub</Link>
                </h2>
              </div>

              <div className="flex flex-col font-serif justify-center items-center space-y-3 mb-4">
                <h1 className="flex justify-center items-center mt-20 text-4xl font-semibold">
                  A Quote
                </h1>
                <span className="text-xl">{aquote}</span>
              </div>
            </div>
            <div className="flex flex-col col-span-2 mt-8">
              <div className=" m-4">
                <h1 className="text-4xl mr-4 font-bold">Summary</h1>
                <p className="mt-2 tracking-wide">{aboutme}</p>
                <div>
                  <h1 className="text-4xl mr-4 font-bold mt-8">Education</h1>
                  <div className="mt-4 space-y-2">
                    <p>{collegeName}</p>
                    <p>
                      {degree}, Graduation Year : {gradYear}
                    </p>
                  </div>
                  <div className="mt-2">
                    {cgpa}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl mr-4 font-bold mt-8">Experience</h1>
                  <div className="mt-4 space-y-2">
                    <p>{experienceOrg}</p>
                    <p>{role}</p>
                    <div className="flex space-x-2">
                    <p><span className="font-bold">From: </span>{expFrom}</p>

                    <p><span className="font-bold">To: </span> {expTo}</p>
                    </div>
                    <p>{exp}</p>
                  </div>
                </div>
                <div className="grid grid-col-2">
                  <div className="">
                    <h1 className="text-4xl mr-4 font-bold mt-8">Languages</h1>
                    <div className="mt-4 space-y-2">
                      <p>{langKnow}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl mr-4 font-bold mt-8">
                      Technical Skills
                    </h1>
                    <div className="mt-4 space-y-2">
                      <p>{techStack}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeLayout;
