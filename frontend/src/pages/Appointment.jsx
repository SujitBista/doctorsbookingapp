import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import AppointmentCalendar from '../components/AppointmentCalendar';

const Appointment = () => {
    const { docId } = useParams()
    const { doctors } = useContext(AppContext)
    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [availableDates, setAvailableDates] = useState([])

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
        const dates = []
        
        for(let i = 0; i < 7; i++) {
            //getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)
            dates.push(new Date(currentDate))
            
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
        
        // Set available dates for calendar
        setAvailableDates(dates)
    }

    const handleDateSelect = (date) => {
        setSelectedDate(date)
        // Find the index of the selected date in the slots array
        const today = new Date()
        const diffTime = date.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        setSlotIndex(Math.max(0, diffDays))
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
            {/*----- Modern Calendar ------ */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Appointment Date</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                        <AppointmentCalendar 
                            selectedDate={selectedDate}
                            onDateSelect={handleDateSelect}
                            availableDates={availableDates}
                        />
                    </div>
                    
                    {/* Time Slots for Selected Date */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Available Times for {selectedDate.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </h3>
                        {docSlots[slotIndex] && (
                            <div className="grid grid-cols-3 gap-3">
                                {docSlots[slotIndex].map((slot, index) => (
                                    <button
                                        key={index}
                                        className="p-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm font-medium"
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment