import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigateToRoute = useNavigate();
  const { doctors } = useContext(AppContext)
  return (
    <div className="flex flex-col gap-4">
       <h1 className="text-4xl">Top Doctors To Book</h1>
       <p>Simply browse through our extensive list of trusted doctors.</p>
       <div className="flex gap-2">
         { doctors.slice(0, 2).map(doctor => doctor.avilable && (
                <div onClick={() => navigateToRoute(`/my-appointments/${doctor._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500">
                    <img className="w-60 h-60" src={ doctor.image } alt='doctors' />
                    <div className="flex gap-2 items-center text-sm text-green-500 pl-2 pt-2">
                        <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                        <p>Available</p>
                    </div>
                    <div className="pl-2 pb-2">
                        <p className="text-gray-900 font-medium text-lg">{ doctor.name }</p>
                        <p className="text-gray-600 text-sm">{ doctor.speciality}</p>
                    </div>
                </div>
            
         ))}
       </div>
       <button onClick={() => {navigateToRoute('/doctors');scrollTo(0,0)}} className="bg-blue-200 text-gray-600 px-2 py-3 rounded-full cursor-pointer">more</button>
    </div>
  )
}

export default TopDoctors