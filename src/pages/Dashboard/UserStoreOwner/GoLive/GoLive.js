import React from "react";
import GoLiveModal from "./GoLiveModal";

const GoLive = () => {
  return (
    <div className="text-accent">
      <GoLiveModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        FINISH LINE
      </h1>
      <div className="bg-white px-5 py-10">
        <h1 className="font-bold text-secondary text-center text-2xl">
          Congratulations!
        </h1>
        <p className="text-center mt-5">
          Before going live, please check every step
        </p>
        <div className="flex justify-center mt-10">
          <label
            htmlFor="goLiveModal"
            className="rounded-lg px-9 py-2 bg-primary cursor-pointer text-white"
          >
            GO LIVE!
          </label>
        </div>
      </div>
    </div>
  );
};

export default GoLive;
