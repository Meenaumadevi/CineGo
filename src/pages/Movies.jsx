// src/pages/Movies.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const movieList = [
  {
    id: 1,
    name: 'Leo',
    genre: 'Action',
    image: '/leo.jpg'
  },
  {
    id: 2,
    name: 'Endgame',
    genre: 'Action/Sci-fi',
    image: '/endgame.jpg'
  },
  {
    id: 3,
    name: 'Ultimate',
    genre: 'Thriller',
    image: '/ultimate.jpg'
  },
  {
    id: 4,
    name: 'New Movie',
    genre: 'Drama',
    image: '/new.jpg'
  }
]

const Movies = () => {
  const navigate = useNavigate()

  const handleBookTicket = (movie) => {
    navigate('/theatres', { state: { movie } })
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movieList.map((movie) => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={movie.image} alt={movie.name} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
            <p className="text-gray-600">{movie.genre}</p>
            <button
              onClick={() => handleBookTicket(movie)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Book Ticket
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Movies
