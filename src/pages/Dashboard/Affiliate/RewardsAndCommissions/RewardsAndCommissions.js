import React, { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../hooks/useClickOutside";

const RewardsAndCommissions = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 1 });
  const tableData = [
    {
      id: 1,
      promoter: "Name",
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },

    {
      id: 2,
      promoter: "Name",
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 3,
      promoter: "Name",
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 4,
      promoter: "Name",
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        REWARDS/COMMISSIONS
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {[
              { id: 1, btnName: "All" },
              { id: 2, btnName: "Denied" },
              { id: 3, btnName: "Approved" },
              { id: 4, btnName: "Pending" },
            ].map((btn) => (
              <button
                key={btn.id + "gdsjks"}
                // onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        <div className="md:flex items-center px-5 bg-white py-5">
          <div className="flex border border-gray-700 py-2 px-3 text-accent ">
            <img
              className="opacity-60 w-6 inline mr-2"
              src="/Icons/promoter/calendar2.PNG"
              alt=""
            />
            <select className="bg-white md:text-base text-xs md:block hidden">
              <option className="" value="">
                February 7, 2021 - March 8, 2021 (Last 30 days)
              </option>
            </select>
            <select className="bg-white md:text-m text-xs md:hidden block">
              <option className="md:hidden block" value="">
                Feb 7, 2021 - Mar 8, 2021 (Last 30 days)
              </option>
            </select>
          </div>
          <button className="ml-2">
            <img width={48} src="/Icons/promoter/download.PNG" alt="" />
          </button>
        </div>
        <div className="px-5 pb-5 bg-white">
          <RewardAndCommissionTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default RewardsAndCommissions;

const RewardAndCommissionTable = ({ tableData }) => {
  return (
    <>
      <div className=" overflow-x-auto bg-white">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 text-xs">
              {[
                "Promoter",
                "Amount",
                "Conversion Value",
                "Created at",
                "Event Id",
                "From Customer",
                "Campaign",
                "Action",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs">
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td
                  className={`pl-3 py-3 ${
                    td.id % 2 !== 0 && "bg-gray-100"
                  } text-blue-500`}
                >
                  {td.promoter}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  ${td.amount}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  ${td.conversionValue}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.createdAt}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.eventId}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.fromCustomer}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.campaign}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <button className="btn border-0 btn-xs bg-red-500 text-white rounded capitalize">
                    Deny
                  </button>
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

const TableRow = ({ data, mobileVersion }) => {
  const optionRef = useRef();
  const [showOptions, setShowOptions] = useClickOutside(optionRef);

  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Promoter Name</p>
        <p> {data.promoterName}</p>
        <p className="font-bold">Email</p>
        <p> {data.email}</p>
        <p className="font-bold">Customers </p>
        <p> {data.customers}</p>
        <p className="font-bold">Owed</p>
        <p> ${data.owed}</p>
        <p className="font-bold">Paid</p>
        <p>{data.Paid}</p>
        <p className="font-bold">Joined</p>
        <p>{data.joined}</p>
        <p className="font-bold">Action</p>
        <div ref={optionRef} className="relative">
          <OptionsDetails
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            data={data}
          />
        </div>
      </div>
    );
  }

  return (
    <tr className="font-semibold">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-blue-400 ">
        {data.promoterName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.email}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.customers}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        ${data.owed}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400"></td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.joined}
      </td>
      <td
        ref={optionRef}
        className="border-b border-gray-400 text-start font-bold text-gray-400 text-2xl cursor-pointer relative"
      >
        <OptionsDetails
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          data={data}
        />
      </td>
    </tr>
  );
};

const OptionsDetails = ({ showOptions, setShowOptions, data }) => {
  const btnId = useId();
  return (
    <div>
      <span
        className="md:text-md text-xl font-bold cursor-pointer"
        onClick={() => setShowOptions((p) => (p <= 0 ? data.id : 0))}
      >
        ...
      </span>
      <div
        className={`absolute top-14 right-0 px-4 pt-2 text-base w-60 bg-white font-normal shadow-2xl flex flex-col z-10  ${
          showOptions === data.id ? "block" : "hidden"
        }`}
      >
        {[
          {
            id: 1,
            btnName: "View details",
            to: "/affiliate/promoters/view-details",
          },
          {
            id: 2,
            btnName: "Edit promoter",
            to: "/affiliate/promoters/edit-promoter",
          },
          {
            id: 3,
            btnName: "Delete promoter",
            to: "/affiliate/promoters/view-details",
          },
        ].map((btn) => (
          <Link
            to={btn.to}
            key={btn.id + btnId}
            className="text-start mb-2 text-accent"
          >
            {btn.btnName}
          </Link>
        ))}
      </div>
    </div>
  );
};
