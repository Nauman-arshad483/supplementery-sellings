import React, { useState } from "react";
import coinIcon from "../../../../icons/Affiliate/coinIcon.png";
import paidIcon from "../../../../icons/Affiliate/paidIcon.png";
import LatestRewordsPromoters from "./LatestRewordsPromoters";
import SummaryChart from "./SummaryChart";

const ManagerDashboard = () => {
  const cards = [
    {
      id: 1,
      title: "Your Revenue generated",
      text: "541.00",
      bg: "bg-primary",
    },
    {
      id: 2,
      title: "Monthly Recurring Revenue",
      text: "178.00",
      bg: "bg-orange-500",
    },
    {
      id: 3,
      title: "Paying Customers",
      text: "5",
      bg: "bg-red-500",
    },
    {
      id: 4,
      title: "Promotions ",
      text: "6",
      bg: "bg-blue-500",
    },
  ];

  const buttons = [
    { id: 1, btnName: "Last 30 days", show: "forApproved" },
    { id: 2, btnName: "This Month", show: "pending" },
    { id: 3, btnName: "Last Month", show: "complete" },
    { id: 4, btnName: "Last 6 Month", show: "complete" },
  ];

  const revenueDetails = [
    { id: 1, title: "Revenue", amount: "356" },
    { id: 2, title: "Clicks", amount: "0" },
    { id: 3, title: "New Referrals", amount: "2" },
    { id: 4, title: "New Customers", amount: "2" },
    { id: 5, title: "Canceled Customers", amount: "0" },
  ];

  const [selectedBtn, setSelectedBtn] = useState(buttons[0]);

  return (
    <div>
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        Dashboard
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
                { id: 1, title: "Owed promoters", amount: 134, img: coinIcon },
                { id: 2, title: "Paid to promoters", amount: 0, img: paidIcon },
              ].map((paid) => (
                <div
                  key={paid.id}
                  className="text-secondary flex justify-star items-center gap-5 p-3 border-b-2"
                >
                  <div>
                    <img className="w-16" src={paid.img} alt="" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">${paid.amount}</p>
                    <p className={`text-xs`}>{paid.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LatestRewordsPromoters />
    </div>
  );
};

export default ManagerDashboard;
