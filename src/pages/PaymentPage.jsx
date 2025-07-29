// src/pages/PaymentPage.jsx
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const PaymentPage = () => {
  const { theatreId, movieId } = useParams()
  const location = useLocation()
  const selectedSeats = location.state?.selectedSeats || []

  const seatCount = selectedSeats.length
  const amountPerSeat = 100 // Change as needed
  const totalAmount = seatCount * amountPerSeat

  return (
    <div className="p-6 min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Payment Page</h1>

      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Selected Seats:</h2>
        <p className="text-lg text-gray-800">{selectedSeats.join(', ') || 'No seats selected'}</p>
        <h2 className="text-xl font-semibold mt-4">Total Amount:</h2>
        <p className="text-2xl text-green-600 font-bold">₹{totalAmount}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 items-start">
        {/* QR Code Section */}
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scan & Pay (UPI)</h2>
          <img src="/MeenaQR.jpg" alt="QR Code" className="w-64 h-64 mb-4 rounded" />
          <p className="font-medium text-lg">Amount: ₹{totalAmount}</p>
          <p className="text-sm text-gray-600">UPI ID: meena@upi</p>
          <p className="text-sm text-gray-500">Note: Amount is pre-filled when scanned</p>
        </div>

        {/* Alternative Payments */}
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Other Payment Options</h2>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Pay with Credit Card
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Pay with Debit Card
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Pay via Net Banking
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
