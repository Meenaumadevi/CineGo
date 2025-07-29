import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-white shadow'>

      {/* Logo */}
      <Link to='/' className='text-2xl font-bold text-black max-md:flex-1'>
        Filmslot
      </Link>

      {/* Navigation Links */}
      <div className={`
        ${menuOpen ? 'flex' : 'hidden'}
        max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen
        max-md:bg-black/90 max-md:text-white max-md:flex-col max-md:items-center max-md:justify-center
        md:relative md:flex md:flex-row md:gap-8 md:bg-transparent md:text-black z-50 font-medium text-lg
      `}>
        <X className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setMenuOpen(false)} />

        <Link to='/' onClick={() => { scrollTo(0, 0); setMenuOpen(false) }} className='my-2'>Home</Link>
        <Link to='/movies' onClick={() => { scrollTo(0, 0); setMenuOpen(false) }} className='my-2'>Movies</Link>
        <Link to='/theatres' onClick={() => { scrollTo(0, 0); setMenuOpen(false) }} className='my-2'>Theatres</Link>
        <Link to='/releases' onClick={() => { scrollTo(0, 0); setMenuOpen(false) }} className='my-2'>Releases</Link>
        <Link to='/favorites' onClick={() => { scrollTo(0, 0); setMenuOpen(false) }} className='my-2'>Favorites</Link>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4 md:gap-6'>
        <Search className='max-md:hidden w-5 h-5 text-black cursor-pointer' />

        {!user ? (
          <button
            onClick={openSignIn}
            className='px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 hover:bg-blue-500 transition rounded-full font-medium text-white'>
            Login
          </button>
        ) : (
          <div className='flex items-center gap-4'>
            <button
              onClick={() => navigate('/my-bookings', { state: { fromButton: true } })}
              className='px-4 py-2 bg-green-600 hover:bg-green-500 transition rounded-full text-white font-medium'>
              My Bookings
            </button>
            <UserButton />
          </div>
        )}

        <Menu className='md:hidden w-7 h-7 text-black cursor-pointer' onClick={() => setMenuOpen(true)} />
      </div>
    </div>
  )
}

export default Navbar
