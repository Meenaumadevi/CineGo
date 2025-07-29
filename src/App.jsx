import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Core components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorites from './pages/Favorites'
import Theatres from './pages/Theatres'
import TheatreDetails from './pages/TheatreDetails'
import PaymentPage from './pages/PaymentPage'

// Footer-related pages
import FAQs from './pages/FAQs'
import ContactUs from './pages/ContactUs'
import CancellationPolicy from './pages/CancellationPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

// Notification
import { Toaster } from 'react-hot-toast'

const App = () => {
  const location = useLocation()
  const path = location.pathname

  const isAdminRoute = path.startsWith('/admin')
  const isFooterPage = ['/faqs', '/contact', '/cancellation-policy', '/terms'].includes(path)

  return (
    <>
      <Toaster />
      {!isAdminRoute && !isFooterPage && <Navbar />}

      <main className="min-h-screen bg-black text-white pt-20 px-4">
        <Routes>
          {/* Home and Movies */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />

          {/* Theatres and Theatre-specific movies */}
          <Route path="/theatres" element={<Theatres />} />
          <Route path="/theatre/:theatreId" element={<TheatreDetails />} />

          {/* Seat Selection & Payment Routes */}
          <Route path="/book-ticket/:theatreId/:movieId" element={<SeatLayout />} />
          <Route path="/payment/:theatreId/:movieId" element={<PaymentPage />} />

          {/* User Bookings and Favorites */}
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* Footer Links */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>

      {!isAdminRoute && !isFooterPage && <Footer />}
    </>
  )
}

export default App
