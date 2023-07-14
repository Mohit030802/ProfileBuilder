import React from 'react'

const ResumeForm = () => {
  return (
    <div className=''>
      <div className='flex bg-gradient-to-b from-[#392d69] to-[#b57bee] mx-auto'>
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t  mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">
                  Your Name's Profile
                </h6>
                <button class="bg-[#392d69] text-white active:bg-[#b57bee] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                  Download
                </button>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Personal Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        First Name
                      </label>
                      <input type="text" class="border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Last Name
                      </label>
                      <input type="text" class="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-4'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Registraion Number
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Phone Number
                        </label>
                        <input type="Number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>


                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>

                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-2'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Languages
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Technical Skills
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        About me
                      </label>
                      <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> </textarea>
                    </div>
                  </div>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email address
                    </label>
                    <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-2'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          LinkedIn
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Github
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>

                </div>

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Education
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-4'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Institution Name
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Gradution year
                        </label>
                        <input type="Number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-4'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Degree
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          CGPA
                        </label>
                        <input type="Number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>

                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Experience
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-4'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Organization Name
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Job Role
                        </label>
                        <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div className='flex space-x-4'>


                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          From
                        </label>
                        <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          To
                        </label>
                        <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                    <div class="w-full lg:w-12/12 px-4 mt-2">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Share Your Work Experience
                        </label>
                        <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> </textarea>
                      </div>
                    </div>
                  </div>

                </div>


              </form>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default ResumeForm
