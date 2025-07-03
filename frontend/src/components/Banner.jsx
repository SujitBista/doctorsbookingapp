import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-blue-400 rounded-lg px-14 py-2 my-25 mx-1">
        { /* ------ Left side  ----- */}
        <div className="flex-1">
            <div className="md:text-5xl py-16 my-10 font-semibold text-white">
                <p>Book Appointment</p>
                <p className="mt-4">With 100+ Trusted Doctors</p>
                <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className="bg-white py-3 px-8 text-gray-600 text-sm rounded-full mt-4 cursor-pointer hover:scale-105 tranistion-all duration-300">Create Account</button>
            </div>
        </div>
        {/* ------ Right side  ----- */}
        <div className="md:w-1/2 relative">
            <img className=" absolute right-0 bottom-0 max-w-md" src={assets.rightBanner} alt=""/>
        </div>
    </div>
  )
}

export default Banner