import React, { useState } from "react";
import { StyledAttribute } from "../../../GraphicsDesigner/MyClients/Brief";

const RequestDetails = () => {
  const buttons = [
    { id: 1, btnName: "Brief" },
    { id: 2, btnName: "Files" },
  ];
  const [selectedBtn2, setSelectedBtn2] = useState(buttons[0]);
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        Design Studio
      </h1>
      <p className="lg:ml-20 ml-10 mt-5 mb-10">Logo Design</p>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {buttons.map((btn) => (
              <button
                key={btn.id + "3dgs"}
                onClick={() => {
                  setSelectedBtn2(btn);
                  setSelectedFile(null);
                }}
                className={` md:px-5 px-5 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        {selectedBtn2.id === 1 ? (
          <DesignBrief />
        ) : !selectedFile ? (
          <Files setSelectedFile={setSelectedFile} />
        ) : (
          <FileDetails file={selectedFile} />
        )}
      </div>
    </div>
  );
};

export default RequestDetails;

const DesignBrief = () => {
  return (
    <div className=" p-5 text-accent bg-white">
      <div className="my-10">
        <p>Here you can find Custom Design Requests.</p>
        <div className="my-5"></div>
        {[
          "Name To Incorporate In The Logo",
          "Slogan Incorporate in The Logo",
        ].map((label, i) => (
          <div key={i} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <input
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
        ))}
        <div className="mb-5">
          <label className="w-full mb-2 inline-block" htmlFor="">
            Description Of The Organization & It's Target Audience
          </label>
          <textarea
            className="md:w-1/2 w-full border border-accent px-3 py-2"
            name=""
            id=""
            rows="4"
          ></textarea>
        </div>
        {["Niche", "Colors to Explore"].map((label, i) => (
          <div key={i} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <input
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
        ))}
      </div>
      <div className="md:w-3/5 w-full">
        <StyledAttribute />
      </div>
      <div className="mb-5 ">
        <h1>Design inspiration</h1>
        <label className="md:text-base text-xs" htmlFor="">
          upload existing designs that you like
          <input
            className="mx-2 border-0 file:bg-white file:outline-0 file:text-accent file:px-5 file:py-1 file:rounded-xl file:border file:border-accent text-gray-400"
            type="file"
            name=""
            id="inputFile"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <img className="md:w-72 w-60" src="/Icons/idea2.PNG" alt="" />
        <span className="text-2xl">X</span>
      </div>
      <button className="px-7 py-1 rounded-lg border border-accent mt-2">
        + Add more
      </button>
      <div className="flex justify-start gap-5 mt-10">
        <label className="px-9 py-2 bg-primary text-white rounded-md cursor-pointer">
          Submit Logo
        </label>
      </div>
    </div>
  );
};

const Files = ({ setSelectedFile }) => {
  return (
    <div className="p-5 bg-white text-accent">
      <p className="mt-10">
        Designer uploaded these designs so far. Check them out and leave him a
        comment on it.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {[
          { id: 1, img: "/Icons/work6.PNG", name: "V01" },
          { id: 2, img: "/Icons/work6.PNG", name: "V02" },
          { id: 3, img: "/Icons/work6.PNG", name: "V03" },
        ].map((logo) => (
          <div key={logo.id} className="p-5">
            <img
              onClick={() => setSelectedFile(logo)}
              className="md:w-full hover:shadow-2xl mx-auto cursor-pointer"
              src={logo.img}
              alt=""
            />
            <p className="mt-3">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FileDetails = ({ file }) => {
  return (
    <div className="p-5 bg-white text-accent">
      <p className="mt-10">
        Designer uploaded these designs so far. Check them out and leave him a
        comment on it.
      </p>
      <div className="md:flex justify-between md:gap-10 gap-5 mt-10">
        <div className="md:w-1/2 md:full relative">
          <img className="w-full" src={file.img} alt="" />
          <img
            className="md:w-5 w-4 absolute left-5 top-[50%] cursor-pointer"
            src="/Icons/arrow_left.png"
            alt=""
          />
          <img
            className="md:w-5 w-4 absolute right-5 top-[50%] cursor-pointer"
            src="/Icons/arrow_right.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:full md:mt-0 mt-5">
          <h1 className="mb-5 font-bold">Leave a comment to the designer</h1>
          <textarea
            className="w-full border border-accent"
            name=""
            id=""
            cols="30"
            rows="8"
          ></textarea>
          <h1 className="font-bold my-3">Or</h1>
          <button className="px-3 py-2 bg-primary text-white rounded-md">
            Chat directly with the designer
          </button>
        </div>
      </div>
    </div>
  );
};
