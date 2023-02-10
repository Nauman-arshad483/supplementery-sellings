import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../../Shared/Search";

const AllClientStatuses = () => {
  const tableData = [
    {
      id: 1,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Completed",
    },
    {
      id: 2,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Pending",
    },
    {
      id: 3,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Send Back",
    },
    {
      id: 4,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Completed",
    },
    {
      id: 5,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Pending",
    },
    {
      id: 6,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Send Back",
    },
    {
      id: 7,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Completed",
    },
    {
      id: 8,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Pending",
    },
    {
      id: 9,
      clientName: "James Hendrix",
      dateFilled: "21 Aug 2021",
      overallStatus: "Send Back",
    },
  ];
  return (
    <div className="">
      <div className="md:flex justify-end items-center px-5 py-5 bg-white">
        <Search />
      </div>
      <AllClientStatusesTable tableData={tableData} />
    </div>
  );
};

export default AllClientStatuses;

const AllClientStatusesTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Client's name", "Date Filled", "Overall Status", "Action"].map(
                (th) => (
                  <th key={th} className="border-0 pl-3">
                    {th}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="block h-[500px] scrollbar overflow-y-auto">
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
        <p className="font-bold">Client's name</p>
        <p>{data.clientName}</p>
        <p className="font-bold">Date Filled</p>
        <p> {data.dateFilled}</p>
        <p className="font-bold">Overall Status </p>
        <p
          className={` ${
            data.overallStatus === "Completed" && "text-primary"
          } ${data.overallStatus === "Send Back" && "text-red-500"} `}
        >
          {data.overallStatus}
        </p>
        <p>Action</p>

        <label
          className="cursor-pointer"
          onClick={() => navigate("client-view")}
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
        {data.clientName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.dateFilled}
      </td>
      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.overallStatus === "Completed" && "text-primary"
        } ${data.overallStatus === "Send Back" && "text-red-500"} `}
      >
        {data.overallStatus}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label
          onClick={() => navigate("client-view")}
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
