import React from 'react'
import HeroSection from '../components/HeroSection' // ✅ Correct relative path
import FeaturedSection from '../components/FeaturedSection'
import TrailerSection from '../components/TrailerSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection/>
      <TrailerSection/>
    </>
  )
}

export default Home
