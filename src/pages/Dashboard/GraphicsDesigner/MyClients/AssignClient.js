import React, { useId, useState } from "react";
import { useLocation } from "react-router-dom";
import ClientsList from "../Home/ClientsList";
import {
  BrandDeckBrief,
  LabelBrief,
  LogoBrief,
  SocialMediaBrief,
} from "./Brief";
import "./MyClients.css";
import UploadedDesigns from "./UploadedDesigns";

const AssignClient = () => {
  const location = useLocation();
  const reactId = useId();
  const designsButton = [
    {
      id: 1,
      name: "Logo",
      component: <LogoBrief />,
      uploadedDesign: false,
      uploadFile: false,
    },
    {
      id: 2,
      name: "Labels",
      component: <LabelBrief />,
      uploadedDesign: false,
      uploadFile: false,
    },
    {
      id: 3,
      name: "Brand Deck",
      component: <BrandDeckBrief />,
      uploadedDesign: false,
      uploadFile: false,
    },
    {
      id: 4,
      name: "Social Media",
      component: <SocialMediaBrief />,
      uploadedDesign: false,
      uploadFile: false,
    },
  ];
  const [selectedButton, setSelectedButton] = useState({
    component: <Notice />,
  });
  console.log(selectedButton);

  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-14 lg:text-2xl text-xl font-semibold text-accent uppercase">
        My Clients
      </h1>
      <div className="md:flex gap-10">
        <div className="md:w-[70%] w-full ">
          {location?.state.assign && (
            <h1 className="text-primary text-center text-lg mb-10">
              You have been assigned with {location?.state?.client.name}!
            </h1>
          )}
          <div className="flex gap-5 mb-10">
            <select
              htmlFor="uploadFile"
              className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold text-center"
            >
              <option value=""> {location?.state?.client.name}</option>
            </select>
            <button
              onClick={() =>
                setSelectedButton({ ...selectedButton, uploadedDesign: true })
              }
              disabled={!selectedButton.id}
              className={`w-full md:w-1/2 ${
                selectedButton.uploadedDesign
                  ? "bg-primary text-white"
                  : "bg-white"
              } rounded-md py-4 md:text-base text-sm font-bold text-center`}
            >
              Uploaded Designs
            </button>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            {designsButton.map((btn) => (
              <button
                key={btn.id + reactId}
                onClick={() => setSelectedButton(btn)}
                className={`${
                  btn.name === selectedButton.name
                    ? "bg-primary text-white"
                    : "bg-white"
                }  rounded-md py-4 md:text-base text-sm font-bold text-center`}
              >
                {btn.name}
              </button>
            ))}
          </div>
          {selectedButton.uploadedDesign && (
            <UploadedDesigns
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
          )}
          {selectedButton.uploadFile && <UploadFinalFiles />}
          {!selectedButton.uploadFile &&
            !selectedButton.uploadedDesign &&
            selectedButton.component}
        </div>
        <div className="md:w-[30%] w-full">
          <ClientsList />
        </div>
      </div>
    </div>
  );
};

export default AssignClient;

const Notice = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 px-10 text-center my-10 text-xl ">
      <img className="w-20" src="/Icons/info.png" alt="" />
      <p className="my-10">
        SELECT WHAT THE CLIENT NEEDS FROM THE OPTIONS ABOVE. IF IT IS LISTED
        ABOVE, IT IS NEEDED
      </p>
      <p>
        WHEN YOU SELECT THE TASKS ABOVE, YOU WILL SEE SPECIFIC INSTRUCTIONS FROM
        THE CLIENT.
      </p>
    </div>
  );
};

const UploadFinalFiles = () => {
  const filesInfo = [
    {
      id: 1,
      img: "/Icons/work4.png",
      name: "Logo Ai format",
    },
    {
      id: 2,
      img: "/Icons/work4.png",
      name: "Logo Ai format",
    },
    {
      id: 3,
      img: "/Icons/work4.png",
      name: "Logo Ai format",
    },
    {
      id: 4,
      img: "/Icons/work4.png",
      name: "Logo Ai format",
    },
    {
      id: 5,
      img: "/Icons/work4.png",
      name: "Logo Ai format",
    },
  ];
  return (
    <div className="mb-5">
      <div className="bg-white rounded-md mt-10 md:mb-0 mb-5 py-5">
        <h1 className="text-xl my-5 mx-5 text-secondary">Final Files</h1>
        <div className="h-[500px] overflow-y-auto scrollbar">
          {filesInfo.map((file) => (
            <SingleLogo key={file.id} file={file} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start mt-10">
        <button className="bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-9">
          Let the client know files are ready
        </button>
        <p className="mt-2">
          Once you click this, client will get the notification that his final
          files are uploaded
        </p>
      </div>
    </div>
  );
};

const SingleLogo = ({ file }) => {
  return (
    <div className="flex justify-between gap-3 items-center my-5 px-5 py-2 border-b-2 mx-2">
      <div className="flex gap-5 items-center">
        <div className="w-20">
          <img className="w-full" src={file.img} alt="" />
        </div>
        <h1 className="text-sm mb-2">
          # {file.id} {file.name}
        </h1>
      </div>
      <div>
        <button className="bg-gray-200 rounded-lg px-7 py-2">Download</button>
      </div>
    </div>
  );
};
