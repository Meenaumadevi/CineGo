import React from 'react'
import { CalendarIcon, ClockIcon, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen bg-[url("/moviebg.webp")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='flex flex-col items-start justify-center gap-4 h-full px-6 md:px-16 lg:px-36 bg-black/40'>

        {/* Marvel image at top */}
        <img
          src="/marvel.jpg"
          alt="Marvel"
          className='w-[100px] md:w-[80px] object-contain mb-2'
        />

        {/* Title */}
        <h1 className='text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-3xl text-white'>
          Relax Time
        </h1>

        {/* Genres and details */}
        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | Adventure | Sci-Fi</span>

          <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4 h-4' />
            <span>2018</span>
          </div>

          <div className='flex items-center gap-1'>
            <ClockIcon className='w-4 h-4' />
            <span>2h 8m</span>
          </div>
        </div>

        {/* Description */}
        <p className='max-w-md text-gray-300'>
          Get ready for an epic cinematic adventure!<br />
          Book your tickets now and experience the thrill of Hollywood<br />
          blockbusters and Marvel legends on the big screen.
        </p>

        {/* Explore Movies Button */}
        <button
          onClick={() => navigate('/movies')}
          className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white text-sm font-medium'
        >
          Explore Movies
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  )
}

export default HeroSection
