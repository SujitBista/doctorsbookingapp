import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        {/* <img src={} alt="" /> */}
        <ul>
            <NavLink>
                <li>HOME</li>
                <hr />
                <li>ALL DOCTORS</li>
                <hr />
                <li>ABOUT</li>
                <hr />
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