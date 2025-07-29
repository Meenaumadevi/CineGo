// src/pages/TheatreMovies.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const moviesData = {
  1: [
    { name: 'Leo', image: '/leo.jpg' },
    { name: 'Jailer', image: '/jailer.jpg' },
  ],
  2: [
    { name: 'Vikram', image: '/vikram.jpg' },
    { name: 'Beast', image: '/beast.jpg' },
  ],
  3: [
    { name: 'Kaithi', image: '/kaithi.jpg' },
    { name: 'Master', image: '/master.jpg' },
  ]
}

const TheatreMovies = () => {
  const { id } = useParams()
  const movies = moviesData[id] || []

  return (
    <div className='p-6 mt-24'>
      <h1 className='text-2xl font-bold mb-6'>Movies at Theatre {id}</h1>
      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {movies.map((movie, index) => (
            <div key={index} className='p-4 border rounded-lg shadow'>
              <img src={movie.image} alt={movie.name} className='w-full h-48 object-cover rounded' />
              <h2 className='mt-2 text-lg font-semibold'>{movie.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TheatreMovies
