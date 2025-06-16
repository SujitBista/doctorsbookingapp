import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const navLink = [
    {label: 'HOME', to: '/'},
    {label: 'ABOUT', to: '/about'},
    {label: 'ALL DOCTORS', to: '/doctors'},
    {label: 'CONTACT', to: '/contact'}
  ];

   const nav = navLink.map((item) => (
    <li>
      <NavLink to={item.to}>
        { ( { isActive} ) => (
                <>
                  {item.label}
                  { isActive && <hr className={`h-0.5 border-none bg-blue-400 w-3/5 m-auto mt-1`} /> }
                </>
            )}
      </NavLink>
    </li>
  ) 
  )
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="h-20 cursor-pointer" src={logo} alt="BookMyDoctor" />

      <ul className="hidden md:flex gap-5 font-medium">    
          { nav }
      </ul>

      <div>
        <button className="bg-blue-400 rounded-full p-3 text-white font-bold cursor-pointer">Create Account</button>
      </div>
    </div>
  )
}

export default Navbar