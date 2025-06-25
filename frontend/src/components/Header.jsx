import React from 'react'
import groupProfile from '../assets/group_profile.png'
import bannerDoctors from '../assets/banner_doctors.png'
import  RightArrow from '../assets/right-arrow.svg?react'


const Header = () => {
  return (
    <div className="flex md:flex-row">
        {/*------ Left Side ----- */}
        <div className="bg-blue-400 p-20">
            <p className="lg:text-4xl p-2 font-semibold lg:leading-tight text-white">Book Appointment <br/> With Trusted Doctors</p>
            <div className="flex mb-3">
                <img src={groupProfile} alt="Group Profile" className="w-12 h-12"/>
                <span className="text-white ml-1 ">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</span>
            </div>
             <a href="#speciality" className="bg-white p-2 inline-flex gap-2 rounded-full items-center mt-10 hover:scale-105 transition-all duration-300 p-4">Book appointment <RightArrow className="h-5 w-5 bg-white"/></a>
        </div>
        {/*------ Right Side ----- */}
        <div>
            <img src={bannerDoctors} alt="doctors banner"/>
        </div>
    </div>
  )
}

export default Header