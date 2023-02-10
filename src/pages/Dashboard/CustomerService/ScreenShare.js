import React from "react";

const ScreenShare = () => {
  return (
    <div className="aspect-video bg-gray-900 flex justify-center items-center relative  border border-pink-500">
      <img className="w-full" src="/Icons/screenshare.png" alt="" />
      <div className="absolute bottom-0 right-0 ">
        <button className="px-7 py-2 bg-primary text-white text-sm mr-3">
          Start
        </button>
        <button className="px-7 py-2 bg-red-600 text-white text-sm">
          Stop
        </button>
      </div>
    </div>
  );
};

export default ScreenShare;
