import React, { useState } from "react";
import DomainCompletedModal from "./DomainCompletedModal";
import DomainConnectModal from "./DomainConnectModal";
import DomainSuccessModal from "./DomainSuccessModal";

const Domain = () => {
  const [domain, setDomain] = useState("");
  return (
    <div className="text-accent">
      <DomainConnectModal />
      <DomainSuccessModal />
      <DomainCompletedModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Choose a Domain
      </h1>
      <div className="md:w-4/5 mx-auto w-full p-5 bg-white pb-10">
        <h1 className="py-3 border-b border-accent text-xl font-bold mb-5">
          Get a Domain Name
        </h1>
        <div className="md:w-4/5 w-full md:mt-10 mt-3 flex bg-white items-center border border-gray-400 ">
          <input
            onChange={(e) => setDomain(e.target.value)}
            placeholder="For test type available"
            className="w-full py-2 px-3 outline-none"
            type="text"
          />
          <div className=" bg-primary py-2 px-3 text-white flex cursor-pointer ">
            {searchIcon} <p className="inline-block ">Search</p>
          </div>
        </div>
        {domain !== "available" && domain !== "" && (
          <p className="text-red-500 font-bold mt-5 md:text-base text-sm">
            <span className="text-xl mr-2">X</span> The domain you searched is
            not available
          </p>
        )}
        {domain === "available" && (
          <div className="text-primary mt-5 font-bold md:text-base text-sm">
            <img
              src="/Icons/promoter/tick3.PNG"
              alt=""
              className="inline-block w-6 mr-2"
            />
            The domain you searched is available!{" "}
            <label
              htmlFor="domainSuccessModal"
              className="ml-2 inline-block md:mt-0 mt-3 text-white bg-primary px-5 py-1.5 cursor-pointer"
            >
              Get it!
            </label>
          </div>
        )}
      </div>

      <div className="md:w-4/5 mx-auto w-full p-5 bg-white mt-10 pb-10">
        <h1 className="py-3 border-b border-accent text-xl font-bold mb-5">
          Connect a Domain You Already Own
        </h1>

        <div className="md:w-4/5 w-full md:mt-10 mt-3 flex bg-white items-center border border-gray-400">
          <input className="w-full py-2 px-3 outline-none" type="text" />
          <div className=" bg-primary py-2 px-3 text-white flex cursor-pointer">
            <label
              htmlFor="domainConnectModal"
              className="inline-block cursor-pointer"
            >
              Connect
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white mr-2 inline-block "
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
