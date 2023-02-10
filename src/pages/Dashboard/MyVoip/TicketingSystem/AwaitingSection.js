import React from "react";
import Search from "../../../Shared/Search";

const AwaitingSection = () => {
  const tableData = [
    {
      id: 1,
      ticketId: "00000000",
      subject: "Subject of the ticket",
      status: "NEW",
      received: "28 Jun 2021",
    },
    {
      id: 2,
      ticketId: "00000000",
      subject: "Subject of the ticket",
      status: "NEW",
      received: "28 Jun 2021",
    },
    {
      id: 3,
      ticketId: "00000000",
      subject: "Subject of the ticket",
      status: "NEW",
      received: "28 Jun 2021",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between items-start w-full bg-white px-5 pt-10">
        <div className="flex gap-2 text-accent">
          <p>Tickets awaiting for your response</p>
        </div>
        <div className="md:w-2/5 w-full">
          <Search />
        </div>
      </div>
      <AwaitingTable tableData={tableData} />
      <p className="p-5 bg-white text-accent">Total {tableData.length}</p>
    </div>
  );
};

const AwaitingTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Ticket #", "Subject", "Status", "Received", "Action"].map(
                (th) => (
                  <th key={th} className="border-0 pl-3">
                    {th}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="block max-h-[500px] overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow key={data.id + "hew"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Ticket #</p>
        <p>{data.ticketId}</p>
        <p className="font-bold">Subject</p>
        <p>{data.subject}</p>
        <p className="font-bold">Status</p>
        <p
          className={` ${
            data.status === "completed" ? "text-primary" : "text-gray-400"
          }`}
        >
          {data.status}
        </p>
        <p className="font-bold">Received</p>
        <p>{data.received}</p>
        <p>Action</p>
        <p className="">
          <label className="cursor-pointer text-center inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
            read
          </label>
        </p>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.ticketId}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.subject}
      </td>

      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.status === "completed" ? "text-primary" : "text-gray-400"
        }`}
      >
        {data.status}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.received}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label className="cursor-pointer text-center inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
          read
        </label>
      </td>
    </tr>
  );
};

export default AwaitingSection;
