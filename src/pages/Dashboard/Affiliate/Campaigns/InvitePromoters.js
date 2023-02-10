import React from "react";
import { useParams } from "react-router-dom";
import Search from "../../../Shared/Search";

const InvitePromoters = () => {
  const { action } = useParams();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent">
        CAMPAIGNS
      </h1>
      <div className=" bg-white w-full md:w-4/5 lg:mt-10 mt-2 md:mx-auto">
        <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
          <span className="capitalize">{action.split("-")[0]}</span> promoter to{" "}
          <span className="text-blue-600">Client Love</span>
        </h1>
        <div className="md:flex justify-between items-start gap-2 p-5 ">
          <div>
            <div className="md:flex items-center">
              <h1 className="md:mb-0 mb-2 mr-2">From campaign: </h1>
              <select className="font-semibold py-2 px-3 border" value="">
                <option name="" id="">
                  Marketing Mentors Affiliate
                </option>
              </select>
            </div>
            <div className="flex text-white mt-5">
              <button className="px-5 py-2 rounded-md bg-primary">
                {" "}
                <span className="text-primary bg-white rounded-full px-1 font-bold text-xs mr-2">
                  +
                </span>
                Select All
              </button>
              <button className="px-5 py-2 rounded-md bg-red-500 ml-3">
                <span className="text-red-500 bg-white rounded-full px-1 font-bold text-xs mr-2">
                  -
                </span>
                Select All
              </button>
            </div>
          </div>
          <div className="md:mb-0 mt-5">
            <div className="flex gap-5 text-secondary mb-3">
              <div className="border-b-2 border-blue-500">
                <h1 className="pb-3 px-3">All in campaign</h1>
              </div>
              <div className="border-b-2 border-white">
                <h1>
                  Selected{" "}
                  <span className="badge bg-blue-500 rounded-md border-none">
                    0
                  </span>
                </h1>
              </div>
            </div>
            <Search />
          </div>
        </div>
        <PromoterTable />
        <div className="flex justify-end bg-gray-100 border-t-2 py-3 px-5">
          <button className="px-5 py-2 border-2 bg-white">Previous</button>
          <button className="px-5 py-2 border-2 bg-primary text-white ml-3">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitePromoters;

const PromoterTable = () => {
  const tableData = [
    {
      id: 1,
      promoterName: "Angela",
      email: "alealaogata@yahoo.com",
      customers: "3",
      joined: "29 Dec 2020",
    },

    {
      id: 2,
      promoterName: "Angela and Rewards",
      email: "clientlove@yahoo.com",
      customers: "2",
      joined: "15 Jan 2021",
    },
    {
      id: 3,
      promoterName: "Angela",
      email: "kathleen@yahoo.com",
      customers: "0",
      joined: "29 Dec 2020",
    },
  ];

  return (
    <>
      <div className="p-5 overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 ">
              {["Promoter Name", "Email", "Customers", "Joined"].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[15px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`pl-3 py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <span className="text-white bg-primary rounded px-2.5 py-1 font-bold mr-2">
                    +
                  </span>
                  {td.promoterName}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.email}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.customers}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.joined}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">Total Items: {tableData.length}</p>
      </div>
    </>
  );
};
