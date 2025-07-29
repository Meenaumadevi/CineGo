import React from 'react'

const CancellationPolicy = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Cancellation Policy</h1>

      <p className="mb-4">
        At FilmShot, we understand that plans can change. Our cancellation policy is designed to be flexible and fair.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Ticket Cancellation:</strong> Tickets once booked can be cancelled up to 1 hour before the showtime for eligible movies.
        </li>
        <li>
          <strong>Refund Process:</strong> Refunds will be processed within 5–7 business days to the original payment method.
        </li>
        <li>
          <strong>Non-refundable Tickets:</strong> Special screenings and discounted tickets may be non-refundable.
        </li>
        <li>
          <strong>Modification:</strong> We do not support changing seat numbers or showtimes. Please cancel and rebook.
        </li>
      </ul>

      <p className="mt-6">
        For further assistance, contact our support team at <a href="mailto:support@filmshot.com" className="text-blue-400 underline">support@filmshot.com</a>.
      </p>
    </div>
  )
}

export default CancellationPolicy
