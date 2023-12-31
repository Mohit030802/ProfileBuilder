import React, { useEffect, useState } from "react";
import img from '../assets/pp.png'
const initialState={
  img:{img},
  firstname:'',
  lastname:'',
  registration:'',
  phoneNo:'',
  langKnow:'',
  techStack:'',
  aboutme:'',
  aquote:'',
  emailAdd:'',
  linkedIn:'',
  githubId:'',
  collegeName:'',
  gradYear:'',
  degree:'',
  cgpa:'',
  experienceOrg:'',
  role:'',
  expFrom:'',
  expTo:'',
  exp:'',
  
}
const ResumeForm = ({onAdd,editableProfile}) => {
  const [profile,setProfile]=useState(initialState);
  
  function handleSubmit(e){
    onAdd(profile)
    e.preventDefault();
    setProfile(initialState)
    // console.log(profile)
  }
  function handleChange(e){
    // console.log(e.target.name,e.target.value);
    setProfile({...profile,[e.target.name]:e.target.value})
    console.log(profile)
  }
  
  useEffect(()=>{
    if(editableProfile){

      setProfile(editableProfile);
    }
  },[editableProfile])

  return (
    <div className="">
      <div className="flex bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] mx-auto">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t  mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                 Time to make Best profile
                </h6>
                
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Personal Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="firstname"
                        value={profile.firstname}
                        className="border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Last Name
                      </label>
                      <input
                      onChange={handleChange}
                      name="lastname"
                      value={profile.lastname}
                        type="text"
                        className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Domain
                        </label>
                        <input
                         onChange={handleChange}
                         name="domain"
                         value={profile.domain}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Registraion Number
                        </label>
                        <input
                         onChange={handleChange}
                         name="registration"
                         value={profile.registration}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Phone Number
                        </label>
                        <input
                         onChange={handleChange}
                         name="phoneNo"
                         value={profile.phoneNo}
                          type="Number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3 ">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Upload Image
                        </label>
                        <input
                        
                         name="img"
                         
                          type="file"
                          
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-2">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Languages
                        </label>
                        <input
                        onChange={handleChange}
                        name="langKnow"
                        value={profile.langKnow}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Technical Skills
                        </label>
                        <input
                         onChange={handleChange}
                         name="techStack"
                         value={profile.techStack}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        About me
                      </label>
                      <textarea
                      onChange={handleChange}
                      name="aboutme"
                      value={profile.aboutme}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        
                      >
                        {" "}
                      </textarea>
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        A Quote
                      </label>
                      <textarea
                      onChange={handleChange}
                      name="aquote"
                      value={profile.aquote}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="2"
                        
                      >
                        {" "}
                      </textarea>
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email address
                    </label>
                    <input
                     onChange={handleChange}
                     name="emailAdd"
                     value={profile.emailAdd}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-2">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          LinkedIn
                        </label>
                        <input
                        onChange={handleChange}
                        name="linkedIn"
                        value={profile.linkedIn}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Github
                        </label>
                        <input
                         onChange={handleChange}
                         name="githubId"
                         value={profile.githubId}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Education
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Institution Name
                        </label>
                        <input
                         onChange={handleChange}
                         name="collegeName"
                         value={profile.collegeName}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Gradution year
                        </label>
                        <input
                        onChange={handleChange}
                        name="gradYear"
                        value={profile.gradYear}
                          type="Number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Degree
                        </label>
                        <input
                        onChange={handleChange}
                        name="degree"
                        value={profile.degree}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          CGPA
                        </label>
                        <input
                        onChange={handleChange}
                        value={profile.cgpa}
                        name="cgpa"
                          type="Number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Experience
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Organization Name
                        </label>
                        <input
                         onChange={handleChange}
                         name="experienceOrg"
                         value={profile.experienceOrg}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Job Role
                        </label>
                        <input
                        onChange={handleChange}
                        value={profile.role}
                        name="role"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="flex space-x-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          From
                        </label>
                        <input
                        onChange={handleChange}
                        name="expFrom"
                        value={profile.expFrom}
                          type="date"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          To
                        </label>
                        <input
                         onChange={handleChange}
                         name="expTo"
                         value={profile.expTo}
                          type="date"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4 mt-2">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Share Your Work Experience
                        </label>
                        <textarea
                        onChange={handleChange}
                        name="exp"
                        value={profile.exp}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows="4"
                        >
                          {" "}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                <button
                onClick={handleSubmit}
                  className=" bg-[#392d69] text-white active:bg-[#b57bee] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button" 
                >
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
