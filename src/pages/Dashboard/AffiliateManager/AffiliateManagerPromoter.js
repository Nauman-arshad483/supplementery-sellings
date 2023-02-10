import React, { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";
import coinIcon from "../../../icons/Affiliate/coinIcon.png";
import paidIcon from "../../../icons/Affiliate/paidIcon.png";
import Search from "../../Shared/Search";
import SummaryChart from "../Affiliate/AffiliateDashboard/SummaryChart";

const AffiliateManagerPromoter = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 1 });

  const revenueDetails = [
    { id: 1, title: "Revenue", amount: "356" },
    { id: 2, title: "Clicks", amount: "0" },
    { id: 3, title: "New Referrals", amount: "2" },
    { id: 4, title: "New Customers", amount: "2" },
    { id: 5, title: "Canceled Customers", amount: "0" },
  ];
  const cards = [
    {
      id: 1,
      title: "Total Revenue generated",
      text: "5,6541.00",
      bg: "bg-primary",
    },
    {
      id: 2,
      title: "Total Recurring Revenue",
      text: "1,5678.00",
      bg: "bg-orange-500",
    },
    {
      id: 3,
      title: "Total Paying Customers",
      text: "50",
      bg: "bg-red-500",
    },
    {
      id: 4,
      title: "Total Promotions ",
      text: "60",
      bg: "bg-blue-500",
    },
  ];
  const promotersData = [
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
  const buttons = [
    { id: 1, btnName: "Last 30 days", show: "forApproved" },
    { id: 2, btnName: "This Month", show: "pending" },
    { id: 3, btnName: "Last Month", show: "complete" },
    { id: 4, btnName: "Last 6 Month", show: "complete" },
  ];
  const [selectedBtn, setSelectedBtn] = useState(buttons[0]);
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        All Promoters
      </h1>
      <div className="bg-[#ECF2F7] p-5">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {cards.map((card) => (
            <div
              key={card.id + "card"}
              className={`${card.bg} p-3 rounded-lg text-white`}
            >
              <h1 className="text-base">{card.title}</h1>
              <p className="text-4xl font-bold my-3">
                {card.text.includes(".") ? (
                  <>
                    ${card.text.split(".")[0]}
                    <span className="text-xl">.{card.text.split(".")[1]}</span>
                  </>
                ) : (
                  card.text
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="md:flex mt-10 gap-5">
          <div className="md:w-4/5 w-full ">
            <div className="flex gap-1 font-semibold ">
              {buttons.map((btn) => (
                <button
                  key={btn.id + "button"}
                  // onClick={() => setSelectedBtn(btn)}
                  className={`py-5 px-3 text-gray-500 border-b-4  ${
                    selectedBtn.id === btn.id
                      ? " border-primary bg-white"
                      : "border-gray-50 bg-gray-50"
                  }`}
                >
                  {btn.btnName}
                </button>
              ))}
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-2 items-center lg:px-5 px-2 lg:gap-5 gap-2 bg-white">
              {revenueDetails.map((revenue) => (
                <div
                  key={revenue.id + "revenue"}
                  className="p-5 text-center text-accent"
                >
                  <h1>{revenue.title}</h1>
                  <p className="font-bold text-xl">
                    {revenue.id === 1 && "$"}
                    {revenue.amount}
                  </p>
                </div>
              ))}
            </div>
            <SummaryChart />
          </div>
          <div className="md:w-1/5 w-full lg:mt-0 mt-5">
            <h1 className="text-xl font-semibold text-gray-400 mb-3">
              Pending actions
            </h1>
            <div className="p-3 bg-white">
              {[
                { id: 1, title: "Pending promoters", count: 0 },
                { id: 2, title: "Pending rewards", count: 0 },
                { id: 1, title: "Pending payouts", count: 1 },
              ].map((pending) => (
                <div
                  key={pending.id}
                  className="text-secondary flex justify-between items-center  p-3 border-b-2"
                >
                  <h1 className="text-sm font-bold">{pending.title}</h1>
                  <p
                    className={`${
                      pending.count && "bg-primary text-white px-2 rounded-md"
                    }`}
                  >
                    {pending.count}
                  </p>
                </div>
              ))}
            </div>
            <h1 className="text-xl font-semibold text-gray-400 mb-3 mt-5">
              Owed & Paid
            </h1>
            <div className="p-3 bg-white">
              {[
                {
                  id: 1,
                  title: "Owed promoters",
                  amount: "1,347.06",
                  img: coinIcon,
                },
                {
                  id: 2,
                  title: "Paid to promoters",
                  amount: "10,546.06",
                  img: paidIcon,
                },
              ].map((paid) => (
                <div
                  key={paid.id}
                  className="text-secondary flex justify-star items-center gap-5 p-3 border-b-2"
                >
                  <div>
                    <img className="w-16" src={paid.img} alt="" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      ${paid.amount.split(".")[0]}.
                      <span className="text-xl">
                        {paid.amount.split(".")[1]}
                      </span>
                    </p>
                    <p className={`text-xs`}>{paid.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {[
              { id: 1, btnName: "Top performers" },
              { id: 2, btnName: "Newest " },
            ].map((btn) => (
              <button
                key={btn.id + "ejd"}
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
          <div className="flex gap-1 font-semibold">
            {[
              { id: 3, btnName: "Pending" },
              { id: 4, btnName: "Rejected" },
              { id: 5, btnName: "Blocked" },
              { id: 6, btnName: "Other" },
            ].map((btn) => (
              <button
                key={btn.id + "s5d"}
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
        <div className="md:flex justify-between items-center px-5 py-2 bg-white">
          <button className=" my-3 px-7 py-3 bg-primary rounded-md text-white">
            <img
              className="inline ml-2"
              width={15}
              src="/Icons/campaign/plus_btn.png"
              alt=""
            />{" "}
            New Promoter
          </button>
          <Search />
        </div>
        {selectedBtn2.id === 1 && (
          <PromotersTable promotersTableData={promotersData} />
        )}
      </div>
    </div>
  );
};

export default AffiliateManagerPromoter;

const PromotersTable = ({ promotersTableData }) => {
  return (
    <div className="md:mb-0 mb-10">
      <div className="bg-white pt-5 pb-16 pl-5 md:block hidden">
        <table className="w-full pt-5">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="border-0 pl-3">Promoter Name</th>
              <th className="border-0 pl-3">Email</th>
              <th className="border-0 pl-3">Customers </th>
              <th className="border-0 pl-3">Owed</th>
              <th className="border-0 pl-3">Paid</th>
              <th className="border-0 pl-3">Joined</th>
              <th className="border-0 pl-3"></th>
            </tr>
          </thead>
          <tbody>
            {promotersTableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {promotersTableData.map((data) => (
          <TableRow key={data.id + "promoter"} data={data} mobileVersion />
        ))}
      </div>
    </div>
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
            to: "/affiliate-manager/promoters/view-details",
          },
          {
            id: 2,
            btnName: "Edit promoter",
            to: "/affiliate-manager/promoters/edit-promoter",
          },
          {
            id: 3,
            btnName: "Delete promoter",
            to: "/affiliate-manager/promoters/view-details",
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
