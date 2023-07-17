import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className='relative bg-[#0f0c29]'>


                <div className='flex justify-center items-center text-white'>


                    <ul className='flex justify-between items-center space-x-8 mt-2 font-semibold text-2xl font-serif'>
                        <li>
                            Home
                        </li>
                        <li>About</li>


                        <li className=' flex text-center mb-2'>|</li>
                        <Link to={'/Resume'}>
                        <li>Build</li>
                        </Link>


                    </ul>

                </div>


                <hr className=" w-[90%] ml-[4%]  border-b-1 border-blueGray-300" />
            </div>
        </>
    )
}

export default Navbar
