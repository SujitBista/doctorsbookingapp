import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="py-16" id="speciality">
        <h1 className="text-4xl">Find by Speciality</h1>
        <p className="text-bold">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
        <div className="flex gap-4 pt-5 overflow-scroll w-full">
            {specialityData.map((item, index) => (
                <div key={index}>
                    <div>
                        <Link onClick={()=> {onscroll(0,0)}} className="hover:-translate-y-3 transition-all duration-500 inline-block" key={index} to={`/doctors/${item.speciality}`}>
                            <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-60 md:h-60 rounded-full" src={item.image}/>
                            <div className="ml-12 font-bold mb-2">{item.speciality}</div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu