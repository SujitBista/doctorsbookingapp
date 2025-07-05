import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality }= useParams();
  const { doctors } = useContext(AppContext);
  let filteredDoctors;
  if(speciality) {
        filteredDoctors = doctors.filter((doctor) => doctor.speciality === speciality)
  } else {
         filteredDoctors = doctors;
  }

  return (
    <>
        <div>Doctors</div>
        <div className="w-full grid grid-cols-auto">
            {filteredDoctors.map((doctor, index) => doctor.avilable && (
                    <div key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500">
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
    </>
  )
}

export default Doctors