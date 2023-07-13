import React from "react";
import resume from "../assets/resume.jpg";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <div className="w-full">
        <div className="h-[100vh] bg-gradient-to-b from-[#392d69] to-[#b57bee] flex justify-center items-center">
          <div className="flex justify-center items-center text-center text-white text-6xl font-serif">
            The Resume Maker
          </div>
        </div>
        <div className="m-4 p-2">
          <div className="grid grid-cols-2">
            <div>
              <img className="rounded-md" src={resume} alt="Image Not Found" />
            </div>
            <div className="ml-8">
              <span className="font-bold text-4xl">Make your Resume here</span>
              <p className="font-serif mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                quisquam suscipit iusto. Natus voluptas laborum culpa eius alias
                dolor eligendi vel, voluptates debitis aperiam dolore. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Tempora
                corporis officiis vero porro dolorem ab, provident corrupti
                facere ex aliquid, ipsum debitis libero praesentium laboriosam
                deserunt non perspiciatis modi, fugiat qui aspernatur! Amet,
                fuga numquam delectus exercitationem optio illo mollitia
                quisquam maxime inventore id deleniti iusto animi illum,
                eligendi nam. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Perspiciatis nisi aut quis rerum ut optio! Ea,
                mollitia. Placeat voluptas suscipit aperiam accusamus aliquid
                quisquam, et quo quae, consequuntur itaque, inventore nesciunt
                eos debitis! A accusamus iste illo rerum ea voluptate inventore
                incidunt, officia possimus odit repellat autem cupiditate
                dolorum laboriosam at voluptatem architecto assumenda doloribus,
                iure pariatur! Eligendi ipsum, sapiente aliquid suscipit fugiat
                velit nesciunt tempore repellat dolore incidunt eaque aliquam
                tenetur quae praesentium voluptatum iusto ad error vero
                doloribus in! Obcaecati similique minus praesentium qui id
                voluptatibus illo assumenda nam voluptate animi illum
                voluptatem, dicta aut ullam recusandae omnis!
              </p>
               <Link to='/Resume'>
              <button className="p-4 bg-[#392d69] mt-6 rounded-md text-white hover:bg-[#b57bee]  transition duration-150 ease-linear">
                Build Your Resume
              </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
