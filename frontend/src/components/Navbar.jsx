import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import  DropdownIcon from '../assets/angle-dropdown.svg?react'

const Navbar = () => {
  const navigateToRoute = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

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

      <div className="flex items-center">
        {
          token 
          ? <div className="flex items-center gap-1 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={`https://placehold.co/40x40`} alt="" />
              <DropdownIcon className="w-6 h-5"/>
              <div className="absolute top-0 right-0 pt-14 text-base z-20 text-gray-600 font-medium hidden group-hover:block">
                <div className="mt-5 min-w-48 rounded bg-stone-100 p-2 flex flex-col gap-4">
                    <p onClick= {() => navigateToRoute('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick= {() => navigateToRoute('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                    <p onClick = {()=> {setToken(false)}} className="hover:text-black cursor-pointer" >Logout</p>
                </div>
              </div>
          </div>
          : <button onClick={() => {navigateToRoute('/login'); setToken(true)}} className="bg-blue-400 rounded-full p-3 text-white font-bold cursor-pointer md:block">Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar