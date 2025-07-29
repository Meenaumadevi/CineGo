import React from 'react'

const FAQs = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Frequently Asked Questions</h1>
      
      <div className="space-y-8 text-white">
        <div>
          <h2 className="text-xl font-semibold">1. How can I book movie tickets?</h2>
          <p className="mt-2">You can book tickets by visiting our Movies section, selecting your preferred movie, date, and showtime, then choosing your seats and completing the payment process.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">2. Can I cancel or modify my booking?</h2>
          <p className="mt-2">Yes, bookings can be canceled up to 24 hours before the showtime. Modifications such as seat changes are currently not supported after booking.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">3. What payment methods are accepted?</h2>
          <p className="mt-2">We accept all major debit/credit cards, UPI, net banking, and wallets like Paytm, PhonePe, and Google Pay.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">4. I didn’t receive a confirmation email. What should I do?</h2>
          <p className="mt-2">Please check your spam folder. If you still haven’t received confirmation, contact our support team immediately.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">5. Do I need to carry a physical ticket?</h2>
          <p className="mt-2">No, a digital ticket with a QR code is sufficient. You can show it on your mobile device at the theater entrance.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQs
