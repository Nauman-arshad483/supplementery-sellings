import React, { useState } from "react";

const YoutubeVideos = ({ videos }) => {
  const [selectedVIdeo, setSelectedVIdeo] = useState(videos[0]);
  return (
    <div>
      <div className="bg-gray-900 rounded-xl aspect-video my-10 flex flex-col items-center justify-center relative">
        <h1 className="md:w-3/5 w-full text-center md:text-6xl text-xl font-bold text-white mb-5">
          {selectedVIdeo.name}
        </h1>
        <img className="md:w-24 w-16" src="/Icons/youtube.png" alt="" />
        <img
          className="absolute bottom-5 right-6 md:w-28 w-16"
          src="/Icons/logo.png"
          alt=""
        />
        <img
          className="w-full absolute top-0 left-0 opacity-0"
          src="/Icons/blackScreen.png"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 text-white">
        {videos.map((video) => (
          <button
            onClick={() => setSelectedVIdeo(video)}
            key={video.id}
            className={` ${video.bg} rounded-md text-sm py-5`}
          >
            {video.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
