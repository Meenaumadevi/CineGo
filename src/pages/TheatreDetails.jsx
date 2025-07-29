import React from 'react'
import { useParams, Link } from 'react-router-dom'

const theatreMovies = {
  1: [
    { id: 101, name: 'Leo' },
    { id: 102, name: 'Jailer' }
  ],
  2: [
    { id: 103, name: 'Vikram' },
    { id: 104, name: 'Kaithi' }
  ],
  3: [
    { id: 105, name: 'Beast' },
    { id: 106, name: 'Master' }
  ]
}

const TheatreDetails = () => {
  const { theatreId } = useParams()
  const movies = theatreMovies[theatreId] || []

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Movies Running in Theatre</h2>
      {movies.length === 0 ? (
        <p>No movies available in this theatre.</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className="mb-4">
              <div className="text-xl font-semibold">{movie.name}</div>
              <Link
                to={`/book-ticket/${theatreId}/${movie.id}`}
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book Ticket
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TheatreDetails
