// pages/Theatres.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const theatreList = [
  {
    id: 1,
    name: 'PVR Cinemas',
    movies: ['Leo', 'Endgame', 'Ultimate'],
  },
  {
    id: 2,
    name: 'INOX Theatre',
    movies: ['Jailer', 'Beast'],
  },
];

const Theatres = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Available Theatres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theatreList.map((theatre) => (
          <div
            key={theatre.id}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer hover:bg-gray-700"
            onClick={() => navigate(`/theatre/${theatre.id}`, { state: theatre })}
          >
            <h3 className="text-xl font-semibold">{theatre.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theatres;
