// SeatLayout.jsx
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SeatLayout = () => {
  const { theatreId, movieId } = useParams()
  const navigate = useNavigate()
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  const handleProceed = () => {
    if (selectedSeats.length > 0) {
      navigate(`/payment/${theatreId}/${movieId}`, {
        state: { selectedSeats }
      })
    }
  }

  return (
    <div className="p-4 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Seat Selection</h2>
      <div className="grid grid-cols-5 gap-2 my-6">
        {Array.from({ length: 25 }).map((_, i) => {
          const seatNumber = i + 1
          const isSelected = selectedSeats.includes(seatNumber)
          return (
            <button
              key={seatNumber}
              onClick={() => handleSeatClick(seatNumber)}
              className={`p-2 rounded font-semibold ${
                isSelected ? 'bg-green-500 text-white' : 'bg-gray-300 text-black hover:bg-green-400'
              }`}
            >
              Seat {seatNumber}
            </button>
          )
        })}
      </div>

      <button
        onClick={handleProceed}
        disabled={selectedSeats.length === 0}
        className={`px-6 py-2 rounded text-white ${
          selectedSeats.length === 0
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        Proceed to Pay
      </button>
    </div>
  )
}

export default SeatLayout
