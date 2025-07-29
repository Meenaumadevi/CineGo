// pages/BookingPage.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const seatsArray = Array.from({ length: 20 }, (_, i) => `Seat-${i + 1}`);

const BookingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handlePayment = () => {
    if (selectedSeat) {
      navigate('/payment', { state: { ...state, seat: selectedSeat } });
    } else {
      alert('Please select a seat');
    }
  };

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Booking for {state.movie} at {state.theatreName}
      </h2>
      <h3 className="mb-2 text-lg">Select a Seat:</h3>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {seatsArray.map((seat) => (
          <button
            key={seat}
            onClick={() => setSelectedSeat(seat)}
            className={`p-3 rounded ${selectedSeat === seat ? 'bg-green-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {seat}
          </button>
        ))}
      </div>
      <button
        onClick={handlePayment}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookingPage;
