import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const YourRequest = () => {
  const formsButton = [{ id: 1, btnName: "All Requests" }];
  const [selectedBtn2, setSelectedBtn2] = useState(formsButton[0]);

  const tableData = [
    {
      id: 1,
      requested: "Logo Design",
      date: "28 Jun 2021",
      status: "Completed",
    },
    {
      id: 2,
      requested: "Logo Design",
      date: "28 Jun 2021",
      status: "In Progress",
    },
    {
      id: 3,
      requested: "Social Media Design",
      date: "28 Jun 2021",
      status: "In Progress",
    },
  ];

  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Design Studio
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {formsButton.map((btn) => (
              <button
                key={btn.id + "3dgs"}
                onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
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
        <p className="bg-white p-5 text-accent">
          Here you can find Custom Design Requests.
        </p>
        <RequestListTable tableData={tableData} />
      </div>
    </div>
  );
};

export default YourRequest;

const RequestListTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Requested", "Date", "Status", "Action"].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[500px] overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "fjd"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs ">
        {tableData.map((data) => (
          <TableRow key={data.id + "rdg"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  const navigate = useNavigate();
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Requested</p>
        <p>{data.requested}</p>
        <p className="font-bold">Date</p>
        <p> {data.date}</p>
        <p className="font-bold">Status </p>
        <p
          className={` ${data.status === "Completed" && "text-primary"} ${
            data.status === "Send Back" && "text-red-500"
          } `}
        >
          {data.status}
        </p>
        <p>Action</p>

        <label
          onClick={() => navigate("/store-owner/design-studio/request/view")}
          className="cursor-pointer"
        >
          <span className="inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
            view
          </span>
        </label>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.requested}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.date}
      </td>
      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.status === "Completed" && "text-primary"
        } ${data.status === "Send Back" && "text-red-500"} `}
      >
        {data.status}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label
          onClick={() => navigate("/store-owner/design-studio/request/view")}
          className="cursor-pointer"
        >
          <span className="inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
            view
          </span>
        </label>
      </td>
    </tr>
  );
};
