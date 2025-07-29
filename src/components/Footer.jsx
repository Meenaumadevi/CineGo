import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-6">
      <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
        <Link to="/faqs" className="hover:text-white">FAQs</Link>
        <Link to="/contact" className="hover:text-white">Contact Us</Link>
        <Link to="/cancellation-policy" className="hover:text-white">Cancellation Policy</Link>
        <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} FilmShot. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
