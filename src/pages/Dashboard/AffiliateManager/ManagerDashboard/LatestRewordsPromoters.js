import React, { useState } from "react";
import ManagerPromotersTable from "./ManagerPromotersTable";

const LatestRewordsPromoters = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 1 });

  const latestRewardsData = [
    {
      id: 1,
      promoter: "Name",
      amount: "54.50",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 18:49",
      eventId: "22",
      fromCustomer: "namekastname@gmail.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 2,
      promoter: "Name",
      amount: "54.50",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 18:49",
      eventId: "22",
      fromCustomer: "namekastname@gmail.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 3,
      promoter: "Name",
      amount: "54.50",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 18:49",
      eventId: "22",
      fromCustomer: "namekastname@gmail.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 4,
      promoter: "Name",
      amount: "54.50",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 18:49",
      eventId: "22",
      fromCustomer: "namekastname@gmail.com",
      campaign: "Marketing Mentors Affiliate",
    },
  ];
  const latestPromoters = [
    {
      id: 1,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 2,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 3,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 4,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
  ];

  return (
    <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
      <div className="md:w-4/5 w-full">
        <div className="flex gap-1 font-semibold">
          {[
            { id: 1, btnName: "Latest Rewards/Commissions " },
            { id: 2, btnName: "Latest Promoters " },
          ].map((btn) => (
            <button
              key={btn.id + "button"}
              onClick={() => setSelectedBtn2(btn)}
              className={`py-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                selectedBtn2.id === btn.id
                  ? " border-primary bg-white"
                  : "border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
      </div>
      {selectedBtn2.id === 1 && (
        <>
          <div className="bg-white py-5  md:block hidden">
            <table className="w-full mt-5 text-sm">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="border-0 pl-3">Promoter</th>
                  <th className="border-0 pl-3">Amount</th>
                  <th className="border-0 pl-3">Conversion Value</th>
                  <th className="border-0 pl-3">Created at</th>
                  <th className="border-0 pl-3">Event Id</th>
                  <th className="border-0 pl-3">From Customer</th>
                  <th className="border-0 pl-3">Campaign</th>
                  <th className="border-0 pl-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {latestRewardsData.map((data) => (
                  <tr key={data.id + "promoter"} className="font-semibold">
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-blue-400 ">
                      {data.promoter}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      ${data.amount}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      ${data.conversionValue}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      {data.createdAt}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      {data.eventId}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      {data.fromCustomer}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      {data.campaign}
                    </td>
                    <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
                      <label
                        htmlFor="viewModal"
                        className="px-3 py-2 bg-red-600 text-sm text-white border rounded-md cursor-pointer"
                      >
                        Deny
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white p-5 md:hidden block text-xs">
            {latestRewardsData.map((data) => (
              <div
                key={data.id + "lts"}
                className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5"
              >
                <p className="font-bold">Promoter</p>
                <p> {data.promoter}</p>
                <p className="font-bold">Amount</p>
                <p> {data.amount}</p>
                <p className="font-bold">Conversion Value</p>
                <p> {data.conversionValue}</p>
                <p className="font-bold">Created at</p>
                <p> {data.createdAt}</p>
                <p className="font-bold">Event Id</p>
                <p>{data.eventId}</p>
                <p className="font-bold">From Customer</p>
                <p>{data.fromCustomer}</p>
                <p className="font-bold">Campaign</p>
                <p>{data.campaign}</p>
                <p className="font-bold">Action</p>
                <p>
                  <label
                    htmlFor="viewModal"
                    className="px-2 py-1 bg-red-600 text-xs text-white border rounded-md cursor-pointer"
                  >
                    Deny
                  </label>
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="pt-10 bg-white">
        {selectedBtn2.id === 2 && (
          <ManagerPromotersTable promotersTableData={latestPromoters} />
        )}
      </div>
    </div>
  );
};

export default LatestRewordsPromoters;
