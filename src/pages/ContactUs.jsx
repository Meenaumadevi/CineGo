import React from 'react'

const ContactUs = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>

      <p className="mb-6 text-center">
        We'd love to hear from you! Whether you have a question, feedback, or require assistance, our team is here to help.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
          <p>Email: <a href="mailto:support@filmshot.com" className="text-blue-400 underline">support@filmshot.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Working Hours: 9 AM – 9 PM IST (Mon–Sat)</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Office Address</h2>
          <p>FilmShot Pvt. Ltd.</p>
          <p>Level 5, Tech Park Towers</p>
          <p>Bangalore, Karnataka - 560103</p>
        </div>
      </div>

      <div className="mt-10 bg-gray-800 p-6 rounded shadow-md text-white">
        <h2 className="text-xl font-semibold mb-4">Submit a Query</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-300"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-300 h-32"
            required
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
