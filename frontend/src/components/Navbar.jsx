import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img className="h-20 cursor-pointer" src={logo} alt="BookMyDoctor" />
        <ul className="hidden md:flex gap-5 font-medium">
            <NavLink>
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar