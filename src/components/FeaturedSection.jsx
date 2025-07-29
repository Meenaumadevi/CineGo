import React from "react";
import { Link } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";

const featuredMovies = [
  {
    id: 1,
    title: "Civil War",
    genre: "Action",
    year: 2024,
    rating: 4.5,
    image: "/civil.jpg",
  },
  {
    id: 2,
    title: "Avengers Endgame",
    genre: "Sci-Fi",
    year: 2019,
    rating: 5,
    image: "/endgame.jpeg",
  },
  {
    id: 3,
    title: "Ultimate Hero",
    genre: "Adventure",
    year: 2023,
    rating: 4.2,
    image: "/ultimate.jpg",
  },
  {
    id: 4,
    title: "New World",
    genre: "Fantasy",
    year: 2025,
    rating: 4.7,
    image: "/new.jpg",
  },
];

const FeaturedSection = () => {
  return (
    <div className="relative w-full bg-[#0F1117] text-white px-8 py-16 overflow-hidden">
      <BlurCircle top="10%" left="0" />
      <BlurCircle bottom="10%" right="0" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#FF9900]">Movies</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Discover top-rated movies handpicked just for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/movies">
            <button className="px-5 py-2 text-sm rounded-full bg-[#FF9900] text-white hover:bg-[#e88f00] transition">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
