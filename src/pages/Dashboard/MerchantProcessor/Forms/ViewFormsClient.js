import React, { useState } from "react";
import Search from "../../../Shared/Search";
import OpenFormModal from "./OpenFormModal";

const ViewFormsClient = () => {
  const tableData = [
    {
      id: 1,
      fileName: "Application Form - Completed and Signed",
      dateFilled: "21 Aug 2021",
      status: "pending",
    },
    {
      id: 2,
      fileName: "Ad Network Letter",
      dateFilled: "21 Aug 2021",
      status: "pending",
    },
    {
      id: 3,
      fileName: "Agreement and Link to the Terms",
      dateFilled: "21 Aug 2021",
      status: "pending",
    },
    {
      id: 4,
      fileName: "Merchant Reserve Acknowledgement",
      dateFilled: "21 Aug 2021",
      status: "pending",
    },
    {
      id: 5,
      fileName: "Compliance Monitoring Set-Up Form",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
    {
      id: 6,
      fileName: "Fulfillment Agreement",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
    {
      id: 7,
      fileName: "ID and utility bill for owners (90 days)",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
    {
      id: 8,
      fileName: "Corporate Registration",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
    {
      id: 9,
      fileName: "Business Licenses",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
    {
      id: 10,
      fileName: "Business Licenses",
      dateFilled: "21 Aug 2021",
      status: "completed",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Forms
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <button
            className={`md:px-5 px-3 text-gray-500 md:text-md text-sm py-5 mt-2 bg-gray-50 font-bold`}
          >
            View
          </button>
        </div>
        <div className="md:flex justify-between items-center px-5 pb-3 pt-5 bg-white">
          <div className="flex gap-2 text-accent">
            <div className="relative">
              <img width={80} src="/Icons/avatar4.png" alt="" />
              <span className="absolute bottom-1 right-4 inline-block w-3 h-3 bg-primary rounded-full"></span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-secondary">
                James Hendrix
              </h1>
              <p>client since 28 Jun 2021</p>
            </div>
          </div>
          <Search />
        </div>
        <ClientViewTable tableData={tableData} />
      </div>
    </div>
  );
};

export default ViewFormsClient;

const ClientViewTable = ({ tableData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="md:mb-0 mb-10">
      <OpenFormModal selectedFile={selectedFile} />
      <div className="bg-white pt-5 pb-16 pl-5 md:block hidden">
        <table className="w-full pt-5">
          <thead>
            <tr className="text-left text-secondary ">
              {["File Name", "Date Filled", "Status", "Action"].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <TableRow
                key={data.id + "gsgd"}
                data={data}
                setSelectedFile={setSelectedFile}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow
            key={data.id + "s95"}
            data={data}
            mobileVersion
            setSelectedFile={setSelectedFile}
          />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion, setSelectedFile }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">File Name</p>
        <p>
          <img
            className="md:w-6 w-4 mr-3 inline-block"
            src="/Icons/file.png"
            alt=""
          />{" "}
          {data.fileName}
        </p>
        <p className="font-bold">Date added</p>
        <p> {data.dateFilled}</p>
        <p className="font-bold"> Status</p>
        <p className={` ${data.status === "completed" && "text-primary"}  `}>
          {data.status}
        </p>
        <p className="font-bold">Action </p>
        <div>
          <label
            onClick={() => setSelectedFile(data)}
            className="cursor-pointer"
            htmlFor="openFormModal"
          >
            <span className="inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
              view
            </span>
          </label>
          <button className="ml-2">
            <img
              className="w-6 inline-block"
              src="/Icons/download2.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="text-accent">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        <img className="w-6 mr-3 inline-block" src="/Icons/file.png" alt="" />
        {data.fileName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.dateFilled}
      </td>
      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.status === "completed" && "text-primary"
        }`}
      >
        {data.status}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label
          onClick={() => setSelectedFile(data)}
          className="cursor-pointer inline-block px-5 text-blue-500 border-blue-500 border rounded-full"
          htmlFor="openFormModal"
        >
          view
        </label>
        <label htmlFor="" className="cursor-pointer ml-2">
          <img className="w-6 inline-block" src="/Icons/download2.png" alt="" />
        </label>
      </td>
    </tr>
  );
};
