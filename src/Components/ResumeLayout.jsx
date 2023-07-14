import React from "react";
import resume from "../assets/resume.jpg";

const ResumeLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#392d69] to-[#b57bee] mx-auto">
        <div className="flex">
          <div className=" grid grid-cols-3 m-8 mt-12 h-full  bg-white rounded-lg">
            <div className="col-span-1 bg-[#052f5f] text-white rounded-l-lg">
              <div className="flex justify-center items-center ml-8 p-6">
                <img
                  className="w-[70%] h-[70%] rounded-[50%]"
                  src={resume}
                  alt=""
                />
              </div>
              <div className="flex flex-col font-serif font-semibold  justify-center items-center">
                <div className="flex flex-col space-y-3 items-center">
                  <h2 className="text-4xl">Your Name</h2>
                  <span>Your Registration Number</span>
                  <span>Your Phone Number</span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-20 font-serif font-semibold space-y-3">
                <h1 className="text-4xl">Contact Me at</h1>
                <span>Your Email</span>
                <h2>
                  LinkedIn: <span>Your LinkedIn Id</span>
                </h2>
                <h2>
                  GitHub: <span>Your GitHub Id</span>
                </h2>
              </div>

              <div className="flex flex-col font-serif justify-center items-center space-y-3 mb-4">
                <h1 className="flex justify-center items-center mt-20 text-4xl font-semibold">
                  A Quote
                </h1>
                <span className="text-xl">Life is never easy</span>
              </div>
            </div>
            <div className="flex flex-col col-span-2 mt-8">
              <div className=" m-4">
                <h1 className="text-4xl mr-4 font-bold">Summary</h1>
                <p className="mt-2 tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  temporibus, impedit sunt illum et omnis optio excepturi
                  accusantium molestiae aspernatur repellendus voluptate neque
                  at sit. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Quia libero amet aliquid vitae, recusandae dignissimos
                  sed consequatur iste nemo eveniet, expedita totam inventore
                  cum laborum.
                </p>
              <div  >

                <h1 className="text-4xl mr-4 font-bold mt-8">Education</h1>
                <div className="mt-4 space-y-2">
                <p>College Name</p>
                <p>Degree, Graduation Year(2020-2024)</p>

                </div>
              </div>
              <div  >

                <h1 className="text-4xl mr-4 font-bold mt-8">Experience</h1>
                <div className="mt-4 space-y-2">
                <p>Organization Name</p>
                    <p>Role</p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Facilis hic ipsa aliquid assumenda voluptatum provident
                      quasi placeat, asperiores necessitatibus odit voluptatibus
                      eligendi iure minus totam quod non aliquam tempora
                      laboriosam, sequi voluptates culpa. Blanditiis enim sunt
                      facilis. Praesentium illo, magni minus necessitatibus quae
                      beatae qui, inventore dolorum sint deleniti minima.
                    </p>

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
