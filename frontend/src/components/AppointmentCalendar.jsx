import React, { useState, useEffect } from 'react'

const AppointmentCalendar = ({ selectedDate, onDateSelect, availableDates = [] }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDateState, setSelectedDateState] = useState(selectedDate || new Date())

  useEffect(() => {
    if (selectedDate) {
      setSelectedDateState(selectedDate)
      setCurrentMonth(selectedDate)
    }
  }, [selectedDate])

  // Get current month's calendar data
  const getCalendarDays = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const currentDate = new Date(startDate)
    
    while (currentDate <= lastDay || currentDate.getDay() !== 0) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Navigate to today
  const goToToday = () => {
    const today = new Date()
    setCurrentMonth(today)
    setSelectedDateState(today)
    onDateSelect(today)
  }

  // Check if date is available for booking
  const isDateAvailable = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(date)
    checkDate.setHours(0, 0, 0, 0)
    
    // Date must be today or in the future
    if (checkDate < today) return false
    
    // Check if date is in available dates array
    if (availableDates.length > 0) {
      return availableDates.some(availableDate => {
        const available = new Date(availableDate)
        available.setHours(0, 0, 0, 0)
        return available.getTime() === checkDate.getTime()
      })
    }
    
    // If no available dates specified, allow all future dates
    return true
  }

  // Check if date is today
  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  // Check if date is selected
  const isSelected = (date) => {
    return selectedDateState && date.toDateString() === selectedDateState.toDateString()
  }

  // Check if date is in current month
  const isCurrentMonth = (date) => {
    return date.getMonth() === currentMonth.getMonth()
  }

  // Handle date selection
  const handleDateClick = (date) => {
    if (isDateAvailable(date)) {
      setSelectedDateState(date)
      onDateSelect(date)
    }
  }

  const calendarDays = getCalendarDays(currentMonth)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
        </div>
        
        <button
          onClick={goToNextMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Today Button */}
      <div className="mb-4">
        <button
          onClick={goToToday}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Today
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const available = isDateAvailable(date)
          const today = isToday(date)
          const selected = isSelected(date)
          const currentMonth = isCurrentMonth(date)
          
          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={!available}
              className={`
                relative p-3 text-sm font-medium rounded-lg transition-all duration-200
                ${!currentMonth ? 'text-gray-300' : 'text-gray-900'}
                ${available ? 'hover:bg-blue-50 cursor-pointer' : 'cursor-not-allowed'}
                ${selected ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                ${today && !selected ? 'bg-blue-100 text-blue-900 border-2 border-blue-300' : ''}
                ${!available && currentMonth ? 'text-gray-400 bg-gray-50' : ''}
              `}
              aria-label={`${date.toLocaleDateString()} ${available ? 'Available' : 'Not available'}`}
            >
              <span className="relative z-10">{date.getDate()}</span>
              
              {/* Availability indicator */}
              {available && currentMonth && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                </div>
              )}
              
              {/* Today indicator */}
              {today && (
                <div className="absolute top-1 right-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCalendar 