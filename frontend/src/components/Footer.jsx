import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="grid gap-14 grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm">
            {/* ----Left Section ----*/}
            <div>
                <img className="w-[50px] h-[50px] mb-5" src={assets.logo} alt="logo" /> 
                <p className="md:w-2/3 text-gray-600 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit illum quae iste beatae necessitatibus iusto quia laborum odio. Provident illo maxime beatae quod itaque nemo cum voluptates, quia rerum corporis!</p>
            </div>
            {/* ---- Center Section --- */ }
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* ---- Right Section --- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+1-443-524-6489</li>
                    <li>mydoctors@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* ----- Copy Right Section ---- */}
        <div>
            <hr />
            <p className="py-5 text-center">Copyright 2025@ Mydoctors - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer