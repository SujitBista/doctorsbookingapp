import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import Appointment from '../../pages/Appointment'
import AppContextProvider from '../../context/AppContext'

// Helper to render the Appointment page with routing and context
const renderAppointment = (initialPath = '/my-appointments/doc1') => {
  return render(
    <AppContextProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/my-appointments/:docId" element={<Appointment />} />
        </Routes>
      </MemoryRouter>
    </AppContextProvider>
  )
}

// Utility to find a time slot button (matches something like "10:30 AM")
const findAnyTimeSlotButtons = async () => {
  // Wait for any time slot grid to render and find candidate buttons by label pattern
  const allButtons = await screen.findAllByRole('button')
  return allButtons.filter(btn => /\d{1,2}:\d{2}\s?(AM|PM)/i.test(btn.textContent || ''))
}

// Mock alerts and console
beforeEach(() => {
  vi.spyOn(window, 'alert').mockImplementation(() => {})
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('AppointmentCalendar and Time Slot Selection', () => {
  // 1. Renders a list of time slots based on props or hardcoded values.
  test('renders a list of time slots for the selected date', async () => {
    renderAppointment()

    const timeButtons = await findAnyTimeSlotButtons()
    expect(timeButtons.length).toBeGreaterThan(0)
  })

  // 2. Highlights a time slot when clicked, and stores it in state.
  test('highlights a time slot when clicked', async () => {
    renderAppointment()

    const timeButtons = await findAnyTimeSlotButtons()
    const target = timeButtons[0]
    fireEvent.click(target)

    // Selected slot should have highlight styles
    expect(target.className).toEqual(expect.stringContaining('bg-blue-500'))
    expect(target.className).toEqual(expect.stringContaining('text-white'))
  })

  // 3. Disables the "Book Appointment" button when no time slot is selected.
  test('disables Book Appointment button when no time is selected', async () => {
    renderAppointment()

    // Initially, the button indicates to select a time
    const disabledButton = await screen.findByRole('button', { name: /select a time slot to book/i })
    expect(disabledButton).toBeDisabled()
  })

  // 4. Enables the "Book Appointment" button when a time slot is selected.
  test('enables Book Appointment button after selecting a time slot', async () => {
    renderAppointment()

    const timeButtons = await findAnyTimeSlotButtons()
    fireEvent.click(timeButtons[0])

    const enabledButton = await screen.findByRole('button', { name: /book appointment/i })
    expect(enabledButton).toBeEnabled()
  })

  // 5. Clicking the button logs the selected date and time if both are selected.
  test('logs selected date and time when booking after selecting a time', async () => {
    renderAppointment()

    const timeButtons = await findAnyTimeSlotButtons()
    fireEvent.click(timeButtons[0])

    const bookButton = await screen.findByRole('button', { name: /book appointment/i })
    fireEvent.click(bookButton)

    // Expect console.log to be called with Date and Time lines
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/^Booking Appointment:/))
    expect(console.log).toHaveBeenCalledWith('Date:', expect.any(String))
    expect(console.log).toHaveBeenCalledWith('Time:', expect.any(String))
  })

  // 6. Shows an alert or error if the button is clicked without selecting a time.
  // In this UI, the button is disabled until a slot is selected, which prevents the click.
  // This test verifies the error-prevention behavior by ensuring the button is disabled and no alert is fired.
  test('prevents booking without selecting a time (button disabled, no alert)', async () => {
    renderAppointment()

    const disabledButton = await screen.findByRole('button', { name: /select a time slot to book/i })
    expect(disabledButton).toBeDisabled()

    fireEvent.click(disabledButton)
    expect(window.alert).not.toHaveBeenCalled()
  })
}) 