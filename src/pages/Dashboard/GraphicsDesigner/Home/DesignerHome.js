import React from "react";
import YoutubeVideos from "../../../Shared/YoutubeVideos";
import ClientsList from "./ClientsList";

const DesignerHome = () => {
  const videos = [
    { id: 1, name: "Welcome Video", bg: "bg-[#0CF2BB]" },
    { id: 2, name: "Your Dashboard", bg: "bg-[#51CE0F]" },
    { id: 3, name: "Assign Client", bg: "bg-[#0F9CEA]" },
    { id: 4, name: "Download Files", bg: "bg-[#A137D3]" },
    { id: 5, name: "Messages ", bg: "bg-[#F45B5B]" },
    { id: 6, name: "Upload Artwork", bg: "bg-[#3598DB]" },
    { id: 7, name: "Send for Approval", bg: "bg-[#51CE0F]" },
    { id: 8, name: "Help", bg: "bg-[#0CF2BB]" },
  ];

  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-14 lg:text-2xl text-xl font-semibold text-accent uppercase">
        Home
      </h1>
      <div className="md:flex gap-10">
        <div className="md:w-[70%] w-full md:mx-5 mx-0 md:mb-0 mb-5">
          <div className="flex gap-5">
            {["Dashboard Overview", "I'm Ready To Work"].map((d) => (
              <button
                key={d}
                className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold"
              >
                {d}
              </button>
            ))}
          </div>
          <YoutubeVideos videos={videos} />
        </div>
        <div className="md:w-[30%] w-full">
          <ClientsList />
        </div>
      </div>
    </div>
  );
};

export default DesignerHome;
