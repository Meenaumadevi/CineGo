import { PlayCircleIcon } from "lucide-react";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const TrailerSection = () => {
  const dummyTrailers = [
    {
      title: "Leo Trailer",
      videourl: "https://www.youtube.com/watch?v=Po3jStA673E",
      image: "https://img.youtube.com/vi/Po3jStA673E/maxresdefault.jpg"
    },
    {
      title: "Jailer Trailer",
      videourl: "https://www.youtube.com/watch?v=Y5BeWdODPqo",
      image: "https://img.youtube.com/vi/Y5BeWdODPqo/maxresdefault.jpg"
    },
    {
      title: "Vikram Trailer",
      videourl: "https://www.youtube.com/watch?v=OKBMCL-frPU",
      image: "https://img.youtube.com/vi/OKBMCL-frPU/maxresdefault.jpg"
    },
    {
      title: "Master Trailer",
      videourl: "https://www.youtube.com/watch?v=UTiXQcrLlv4",
      image: "https://img.youtube.com/vi/UTiXQcrLlv4/maxresdefault.jpg"
    }
  ];

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 flex justify-center">
        <ReactPlayer
          url={currentTrailer.videourl}
          controls={true}
          playing={true}
          width="960px"
          height="540px"
        />
      </div>

      <div className="group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-5xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:opacity-90 hover:-translate-y-1 transition-transform duration-300"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-10 h-10 text-white transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
