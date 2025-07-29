import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#1A1C22] rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-gray-400 text-sm">
          {movie.genre} | {movie.year}
        </p>
        <p className="text-yellow-400 text-sm">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
