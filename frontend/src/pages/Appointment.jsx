import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const { docId } = useParams()
    const { doctors } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)

    //by defining useCallback function I mean the function won't change unless the dependecy array doctors and docId changes
    const fetchDocInfo = useCallback(() => {
        const matchedDoctor = doctors.find((doctor) => doctor._id === docId)
        setDocInfo(matchedDoctor)
    }, [doctors, docId]);

    useEffect(() => {
        fetchDocInfo()
    }, [fetchDocInfo])

    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])

    useEffect(() => {
        console.log(docSlots)
    }, [docSlots])

    const getAvailableSlots = async () => {
        setDocSlots([])
        //getting current date
        let today = new Date()
        for(let i = 0; i < 7; i++) {
            //getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            //setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21,0,0,0)
            // setting hours
            if(today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1: 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = [];

            while(currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
                //add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                //Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    return docInfo && (
        <div>
            <div className="flex gap-5">
                {/*------ Left Side ---- */}
                <div>
                    <img className="md:w-60 md:h-60" src={docInfo.image} alt={docInfo.name}/>
                </div>

                {/* ----- Right Side ---- */}
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-2xl">{docInfo.name}</p>
                    <div className="text-gray-600">
                        <div className="flex">
                            <p>{docInfo.degree} -</p> 
                            <p>{docInfo.speciality}</p>
                            <p>{docInfo.experience}</p>
                        </div>
                        <p className="font-semibold">Appointment Fee: ${docInfo.fees}</p>
                    </div>
                    <div className="mt-10">
                        <p className="font-medium">About</p>
                        <p className="text-gray-600">{docInfo.about}</p>
                    </div>
                </div>
            </div>
            {/*----- Booking Slots ------ */}
            <div className="mt-10 font-medium text-gray-700">
                 <p>Booking Slot</p>
                 <div className="flex gap-3 mt-4 overflow-x-scroll w-full items-center">
                    {
                        docSlots.length && docSlots.map((item, index)=> (
                            <div onClick={() => setSlotIndex(index)} key={index} className={`rounded-full text-white p-3 ${index === slotIndex ? 'bg-blue-400':'bg-gray-400'} hover:cursor-pointer`}>
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))
                    }
                 </div>
            </div>
        </div>
    )
}

export default Appointment