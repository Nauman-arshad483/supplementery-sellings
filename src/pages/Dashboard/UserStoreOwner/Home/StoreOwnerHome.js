import React from "react";
import YoutubeVideos from "../../../Shared/YoutubeVideos";

const StoreOwnerHome = () => {
  const videos = [
    { id: 1, name: "Domain", bg: "bg-[#0CF2BB]" },
    { id: 2, name: "My Profile/Settings", bg: "bg-[#51CE0F]" },
    { id: 3, name: "Catalog", bg: "bg-[#0F9CEA]" },
    { id: 4, name: "Design Studio", bg: "bg-[#A137D3]" },
    { id: 5, name: "My Stores", bg: "bg-[#F45B5B]" },
    { id: 6, name: "Merchant", bg: "bg-[#3598DB]" },
    { id: 7, name: "My VoIP", bg: "bg-[#51CE0F]" },
    { id: 8, name: "Go Live!", bg: "bg-[#0CF2BB]" },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        System OverView
      </h1>
      <div className="lg:w-4/5 w-full md:mx-auto mt-10 px-2">
        <YoutubeVideos videos={videos} />
      </div>
    </div>
  );
};

export default StoreOwnerHome;
