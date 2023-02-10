import React, { useId, useState } from "react";
import Search from "../../../Shared/Search";

const TrainingLibrary = () => {
  const analyticsSection = [
    { id: 1, btnName: "Video tutorials", component: <VideoTutorials /> },
    { id: 2, btnName: "PDFs", component: <PDFs /> },
  ];
  const [selectedBtn, setSelectedBtn] = useState(analyticsSection[0]);
  const id = useId();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 lg:text-2xl mb-10 text-xl font-bold text-accent uppercase">
        TRAINING LIBRARY
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 pt-5 pb-10">
        <div className="flex flex-wrap gap-1 font-semibold">
          {analyticsSection.map((btn) => (
            <button
              key={btn.id + id}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                selectedBtn.id === btn.id
                  ? "py-5 border-primary bg-white"
                  : "mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
        <div className="md:p-5 bg-white">{selectedBtn.component}</div>
      </div>
    </div>
  );
};

export default TrainingLibrary;

const VideoTutorials = () => {
  const videos = [
    {
      id: 1,
      title: "Title Of The Video Tutorial Here",
    },
    {
      id: 2,
      title: "Title Of The Video Tutorial Here",
    },
    {
      id: 3,
      title: "Title Of The Video Tutorial Here",
    },
    {
      id: 4,
      title: "Title Of The Video Tutorial Here",
    },
    {
      id: 5,
      title: "Title Of The Video Tutorial Here",
    },
    {
      id: 6,
      title: "Title Of The Video Tutorial Here",
    },
  ];
  const id = useId();
  return (
    <div className="text-accent">
      <div className="flex flex-wrap justify-end items-start w-full bg-white px-5 pt-10 pb-5">
        <div className="md:w-2/5 w-full">
          <Search />
        </div>
      </div>
      <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-10 max-h-[600px] overflow-y-auto scrollbar">
        {videos.map((video) => (
          <div key={id + video.id}>
            <div className="aspect-video bg-black flex justify-center items-center">
              <img className="w-full" src="/Icons/video.png" alt="" />
            </div>
            <p className="mt-3">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const PDFs = () => {
  const videos = [
    {
      id: 1,
      title: "Title Of The Document",
    },
    {
      id: 2,
      title: "Title Of The Document",
    },
    {
      id: 3,
      title: "Title Of The Document",
    },
    {
      id: 4,
      title: "Title Of The Document",
    },
    {
      id: 5,
      title: "Title Of The Document",
    },
    {
      id: 6,
      title: "Title Of The Document",
    },
  ];
  const id = useId();
  return (
    <div className="text-accent">
      <div className="flex flex-wrap justify-end items-start w-full bg-white px-5 pt-10 pb-5">
        <div className="md:w-2/5 w-full">
          <Search />
        </div>
      </div>
      <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-10 max-h-[600px] overflow-y-auto scrollbar">
        {videos.map((video) => (
          <div key={id + video.id}>
            <img className="mx-auto w-32" src="/Icons/pdf.png" alt="" />
            <p className="mt-3 text-center">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
