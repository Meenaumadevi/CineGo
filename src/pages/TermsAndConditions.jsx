import React from 'react'

const TermsConditions = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Terms & Conditions</h1>

      <div className="space-y-5">
        <p>
          By using the FilmShot platform, you agree to abide by the following terms and conditions. These terms govern your access to and use of our services.
        </p>

        <h2 className="text-xl font-bold text-white">1. Booking & Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All bookings are subject to availability.</li>
          <li>Full payment must be made at the time of booking.</li>
          <li>Bookings once confirmed cannot be modified.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-4">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Users must provide accurate information during registration and booking.</li>
          <li>Any misuse or fraudulent activity may lead to account suspension.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-4">3. Liability</h2>
        <p>
          FilmShot shall not be liable for any loss or damage incurred due to delayed/cancelled shows by the cinema partner. We only act as an intermediary for ticket booking.
        </p>

        <h2 className="text-xl font-bold text-white mt-4">4. Changes to Terms</h2>
        <p>
          FilmShot reserves the right to modify these terms at any time. It is the responsibility of the user to stay informed of updates.
        </p>
      </div>
    </div>
  )
}

export default TermsConditions
