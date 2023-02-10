import React from "react";
import ChatBox from "./ChatBox";

const HelpAndSupport = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Main Chat
      </h1>
      <div className="md:flex gap-5 rounded-br-[6%] overflow-hidden ">
        <div className="md:w-1/2 w-full">
          <div className="bg-white p-5 flex justify-between items-start">
            <h1 className="text-xl">FAQ</h1>

            <div className="w-1/2 flex bg-white items-center border-2 border-gray-500">
              <input
                className="w-full p-1 outline-none"
                type="text"
                placeholder="Search"
              />
              {searchIcon}
            </div>
          </div>
          <p className="text-primary p-5 bg-white">
            Here you can find some of the most frequently asked questions
          </p>

          <div className="bg-white mb-3 h-[700px] overflow-y-auto scrollbar">
            {[...new Array(14)].map((a, i) => (
              <div className="px-5" key={i}>
                <div
                  tabIndex="0"
                  className={`collapse collapse-plus border-b border-base-300 bg-base-100`}
                >
                  <div className="collapse-title text-md font-medium">
                    Frequently Ask Question # {i + 1}
                  </div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero voluptatum veritatis fugiat sunt maxime, molestias
                      iure itaque consequatur quae non.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-5">
          <div className="aspect-video bg-gray-900 flex justify-center items-center relative  border border-pink-500">
            <img className="w-full" src="/Icons/blackScreen.png" alt="" />
            <div className="w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-center">
              <h1 className="md:text-2xl text-lg">Screen Share</h1>
              <p className="md:text-base text-xs">
                The left Help and Support can scroll but only that
              </p>
              <p className="md:text-base text-xs">
                window, while Screen Share and chat stay still
              </p>
            </div>
            <div className="absolute bottom-0 right-0 ">
              <button className="px-7 py-2 bg-primary text-white text-sm mr-3">
                Start
              </button>
              <button className="px-7 py-2 bg-red-600 text-white text-sm">
                Stop
              </button>
            </div>
          </div>
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
