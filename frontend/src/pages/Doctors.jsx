import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality }= useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  let filteredDoctors;
  if(speciality) {
        filteredDoctors = doctors.filter((doctor) => doctor.speciality === speciality)
  } else {
         filteredDoctors = doctors;
  }

  return (
    <>
        <div>Doctors</div>
        <div className="flex gap-5">
            <div className="flex flex-col gap-4 text-sm text-gray-600">
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/General Physician')}>General Physician</p>
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/Gynecologist')}>Gynecologist</p>
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/Dermatologist')}>Dermatologist</p>
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/Pediatricians')}>Pediatricians</p>
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/Neurologist')}>Neurologist</p>
                <p className={`border border-gray-300 pl-3 py-1.5 cursor-pointer transition-all`} onClick={() => navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
            </div>
            <div className="w-full grid grid-cols-[1fr_1fr_1fr] gap-4">
                {filteredDoctors.map((doctor, index) => doctor.avilable && (
                        <div key={index} className="border bg-blue-50 border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500">
                            <img className="w-full h-100" src={ doctor.image } alt='doctors' />
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
        </div>

    </>
  )
}

export default Doctors