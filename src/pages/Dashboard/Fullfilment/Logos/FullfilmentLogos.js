import React, { useState } from "react";
import ApprovedModal from "./ApprovedModal";
import DisapprovedModal from "./DisapprovedModal";
import LogoViewModal from "./LogoViewModal";

const FullfilmentLogos = () => {
  const allLogos = [
    {
      id: 1,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "complete",
    },
    {
      id: 2,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "pending",
    },
    {
      id: 3,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "complete",
    },
    {
      id: 4,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "pending",
    },
    {
      id: 5,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "complete",
    },
    {
      id: 6,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "pending",
    },
    {
      id: 7,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "complete",
    },
    {
      id: 8,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "pending",
    },
    {
      id: 9,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "complete",
    },
    {
      id: 10,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "pending",
    },
    {
      id: 11,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "forApproved",
    },
    {
      id: 12,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "forApproved",
    },
    {
      id: 13,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "forApproved",
    },
    {
      id: 14,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "forApproved",
    },
    {
      id: 15,
      product: "Brain Booster",
      graphicsDesigner: "Mijat Stevovic",
      client: "James Hendrix",
      receivedData: "10 May 2021",
      status: "forApproved",
    },
  ];
  const filterButton = [
    { id: 1, btnName: "For Approval", show: "forApproved" },
    { id: 2, btnName: "Send back", show: "pending" },
    { id: 3, btnName: "Approved", show: "complete" },
  ];
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [selectedLabels, setSelectedLabels] = useState(allLogos.slice(0, 5));
  const handleLabelShow = (btn) => {
    if (btn.show === "all") {
      setSelectedLabels(allLogos.slice(0, 5));
    } else {
      setSelectedLabels(allLogos.filter((l) => l.status === btn.show));
    }
    setSelectedBtn(btn.show);
  };
  const totalLabels = 5;

  return (
    <div>
      <ApprovedModal />
      <LogoViewModal />
      <DisapprovedModal />

      <div className="md:mb-10 mb-0 md:ml-20 ml-5">
        <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
          LOGOS
        </h1>
        <p className="text-red-500">
          You have 5 logos waiting for your approval!
        </p>
      </div>
      <div className="bg-[#ECF2F7] mt-2 m-0 -mx-5 md:p-10 p-5">
        <div className="flex justify-between">
          <div className="flex gap-2 font-semibold">
            {filterButton.map((btn) => (
              <button
                // onClick={() => handleLabelShow(btn)}
                key={btn.id + "button"}
                className={`py-5 px-3 bg-white text-gray-500 border-b-4  ${
                  selectedBtn === btn.show ? " border-primary" : "border-white"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleLabelShow({ show: "all" })}
            className={`ml-2 py-5 px-5 bg-white text-gray-500 font-semibold border-b-4 ${
              selectedBtn === "all" ? " border-primary" : "border-white"
            }`}
          >
            All
          </button>
        </div>
        <div className="bg-white p-5 md:flex justify-between items-start">
          <h1 className="text-sm text-gray-400">Here are all logos</h1>
          <div className="md:w-1/2 w-full md:mt-0 mt-3 flex bg-white items-center border border-gray-500">
            <input
              className="w-full p-1 outline-none"
              type="text"
              placeholder="Search"
            />
            {searchIcon}
          </div>
        </div>
        {/* mobile table view */}
        <div className="bg-white p-5 md:hidden block">
          {selectedLabels.map((label) => (
            <div
              key={label.id}
              className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5"
            >
              <p className="font-bold">Product</p>
              <p> {label.product}</p>
              <p className="font-bold">Graphics Designer</p>
              <p> {label.graphicsDesigner}</p>
              <p className="font-bold">Client</p>
              <p> {label.client}</p>
              <p className="font-bold">Received</p>
              <p> {label.receivedData}</p>
              <p className="font-bold">Status</p>
              <p>{label.status === "complete" ? completeIcon : label.status}</p>
              <p className="font-bold">Action</p>
              <p>
                <label
                  htmlFor="viewModal"
                  className="px-2 text-blue-500 border border-blue-500 rounded-full cursor-pointer"
                >
                  view
                </label>
              </p>
            </div>
          ))}
          <p className="mt-10 ml-5 text-gray-400">Total {totalLabels}</p>
        </div>

        <div className="bg-white p-5 md:block hidden">
          <table className="w-full ">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="border-0 pl-3">Product</th>
                <th className="border-0 pl-3">Graphics Designer</th>
                <th className="border-0 pl-3">Client</th>
                <th className="border-0 pl-3">Received</th>
                {selectedBtn !== "forApproved" && (
                  <th className="border-0 pl-3">Status</th>
                )}
                <th className="border-0 pl-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedLabels.map((label) => (
                <tr key={label.id} className="">
                  <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                    {label.product}
                  </td>
                  <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                    {label.graphicsDesigner}
                  </td>
                  <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                    {label.client}
                  </td>
                  <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                    {label.receivedData}
                  </td>
                  {selectedBtn !== "forApproved" && (
                    <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                      {label.status === "complete"
                        ? completeIcon
                        : label.status}
                    </td>
                  )}
                  <td className="border-b border-gray-400 pt-5 pb-2 pl-3 text-gray-400">
                    <label
                      htmlFor="viewModal"
                      className="px-2 text-blue-500 border border-blue-500 rounded-full cursor-pointer"
                    >
                      view
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
            <p className="mt-10 ml-5 text-gray-400">Total {totalLabels}</p>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullfilmentLogos;

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

const completeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-primary"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
