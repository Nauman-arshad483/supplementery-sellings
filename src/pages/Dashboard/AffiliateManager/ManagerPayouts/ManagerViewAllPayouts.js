import React, { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../hooks/useClickOutside";
import payPalLogo from "../../../../icons/PayPal.svg.png";
import Search from "../../../Shared/Search";

const ManagerViewAllPayouts = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 1 });
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Payouts Overview
      </h1>

      <div className="bg-[#ECF2F7] md:flex lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="md:w-4/5 w-full">
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex gap-1 font-semibold">
              {[{ id: 1, btnName: "Pending" }].map((btn) => (
                <button
                  key={btn.id + "eth"}
                  onClick={() => setSelectedBtn2(btn)}
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
          <div className="md:flex justify-end px-5 bg-white py-5">
            <Search />
          </div>
          <div className=" px-5 pb-5 bg-white">
            {selectedBtn2.id === 1 && <AllPayoutsTable />}
          </div>
        </div>
        <div className="md:w-1/5 flex flex-col items-start">
          <button className="px-7 py-3 bg-primary text-white rounded-md md:my-2 my-5">
            Pay payouts
          </button>
          <button
            className={`w-full font-semibold md:px-5 px-3 text-gray-500 border-l-4 md:text-md text-sm ${
              true
                ? "py-5 border-primary bg-white"
                : "mt-2 border-gray-50 bg-gray-50"
            }`}
          >
            All payout methods
          </button>
          <div
            className={`w-full md:px-5 px-3 text-gray-500 border-l-4 md:text-md text-sm ${
              false
                ? " border-primary bg-white"
                : "py-5 border-gray-50 bg-gray-100"
            }`}
          >
            <img width={140} src={payPalLogo} alt="" />
            <div className="flex justify-between pt-3">
              <h1 className="text-xl font-bold ">$106.80</h1>
              <p>1 payout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerViewAllPayouts;

const AllPayoutsTable = ({ mobileView }) => {
  const tableData = [
    {
      id: 1,
      promoter: "Name",
      campaign: "Marketing Mentors Affiliate",
      amount: "106.80",
      payoutMethod: "paypal",
      due: "in 22 days",
    },
  ];

  const optionRef = useRef();
  const [showOptions, setShowOptions] = useClickOutside(optionRef);

  return (
    <>
      <div className="md:hidden block">
        {tableData.map((td) => (
          <div className="grid grid-cols-2 gap-5" key={td.id}>
            <p>Promoter</p>
            <p>{td.promoter}</p>
            <p>Campaign</p>
            <p>
              <span className={`inline-block h-3 w-3 mr-2 bg-blue-500`}></span>{" "}
              {td.campaign}
            </p>
            <p> Amount</p>
            <p>{td.amount}</p>
            <p> Payout Method</p>
            <p>{td.payoutMethod}</p>
            <p> Due</p>
            <p className={`py-3 text-fuchsia-500`}>{td.due}</p>
            <p> </p>
            <p>
              <span className="px-3 py-1 cursor-pointer border border-primary rounded-full capitalize ">
                pay
              </span>
            </p>
            <p> </p>
            <p ref={optionRef} className={`py-3 relative`}>
              <OptionsDetails
                showOptions={showOptions}
                setShowOptions={setShowOptions}
                data={td}
              />
            </p>
          </div>
        ))}
      </div>
      <div className="md:block hidden bg-white pb-10">
        <table className="table w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 ">
              {[
                "Promoter",
                "Campaign",
                "Amount",
                "Payout Method",
                "Due",
                "",
                "",
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
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`pl-3 py-3`}>{td.promoter}</td>
                <td className={`py-3 `}>
                  <span
                    className={`inline-block h-3 w-3 mr-2 bg-blue-500`}
                  ></span>{" "}
                  {td.campaign}
                </td>
                <td className={`py-3`}>${td.amount}</td>
                <td className={`py-3 `}>
                  <img width={60} src={payPalLogo} alt="" />
                </td>
                <td className={`py-3 text-fuchsia-500`}>{td.due}</td>
                <td className={`py-3 `}>
                  <span className="px-3 py-1 cursor-pointer border border-primary rounded-full capitalize ">
                    pay
                  </span>
                </td>
                <td ref={optionRef} className={`py-3 relative`}>
                  <OptionsDetails
                    showOptions={showOptions}
                    setShowOptions={setShowOptions}
                    data={td}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
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
            btnName: "Edit",
            to: "/affiliate-manager/payouts/view-all/edit",
          },
          {
            id: 2,
            btnName: "Delete",
            to: "/affiliate-manager/payouts/view-all",
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
