import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const MyAppointments = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')
  const [loading, setLoading] = useState(false)

  // Mock appointment data
  const [appointments] = useState([
    {
      id: 1,
      doctorName: 'Dr. Richard James',
      doctorImage: 'https://placehold.co/60x60/blue/white?text=RJ',
      speciality: 'General Physician',
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'upcoming',
      fees: 50,
      address: '17th Cross, Richmond Circle, Ring Road, London'
    },
    {
      id: 2,
      doctorName: 'Dr. Emily Larson',
      doctorImage: 'https://placehold.co/60x60/pink/white?text=EL',
      speciality: 'Gynecologist',
      date: '2024-01-10',
      time: '2:00 PM',
      status: 'completed',
      fees: 60,
      address: '27th Cross, Richmond Circle, Ring Road, London'
    },
    {
      id: 3,
      doctorName: 'Dr. Sarah Patel',
      doctorImage: 'https://placehold.co/60x60/green/white?text=SP',
      speciality: 'Dermatologist',
      date: '2024-01-20',
      time: '11:00 AM',
      status: 'upcoming',
      fees: 30,
      address: '27th Cross, Richmond Circle, Ring Road, London'
    },
    {
      id: 4,
      doctorName: 'Dr. Michael Chen',
      doctorImage: 'https://placehold.co/60x60/orange/white?text=MC',
      speciality: 'Neurologist',
      date: '2024-01-05',
      time: '3:30 PM',
      status: 'cancelled',
      fees: 80,
      address: '15th Cross, Medical Center, Ring Road, London'
    }
  ])

  const filteredAppointments = appointments.filter(appointment => appointment.status === activeTab)

  const handleCancelAppointment = async (appointmentId) => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Appointment cancelled successfully!')
      setLoading(false)
    }, 1000)
  }

  const handleReschedule = (appointmentId) => {
    // Navigate to appointment booking page with doctor info
    navigate(`/my-appointments/${appointmentId}`)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming'
      case 'completed':
        return 'Completed'
      case 'cancelled':
        return 'Cancelled'
      default:
        return status
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">My Appointments</h1>
          <p className="text-blue-100 mt-1">Manage your upcoming and past appointments</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'upcoming', label: 'Upcoming', count: appointments.filter(a => a.status === 'upcoming').length },
              { key: 'completed', label: 'Completed', count: appointments.filter(a => a.status === 'completed').length },
              { key: 'cancelled', label: 'Cancelled', count: appointments.filter(a => a.status === 'cancelled').length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs font-medium">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Appointments List */}
        <div className="p-6">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments</h3>
              <p className="mt-1 text-sm text-gray-500">
                {activeTab === 'upcoming' 
                  ? "You don't have any upcoming appointments."
                  : `You don't have any ${activeTab} appointments.`
                }
              </p>
              {activeTab === 'upcoming' && (
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/doctors')}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Book an Appointment
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <img
                        src={appointment.doctorImage}
                        alt={appointment.doctorName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{appointment.doctorName}</h3>
                        <p className="text-sm text-gray-600">{appointment.speciality}</p>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(appointment.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {appointment.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {appointment.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {getStatusText(appointment.status)}
                      </span>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">${appointment.fees}</p>
                        <p className="text-sm text-gray-600">Consultation Fee</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {appointment.status === 'upcoming' && (
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleReschedule(appointment.id)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Reschedule
                      </button>
                      <button
                        onClick={() => handleCancelAppointment(appointment.id)}
                        disabled={loading}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyAppointments