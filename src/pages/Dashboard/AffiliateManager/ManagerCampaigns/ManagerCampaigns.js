import React, { useState } from "react";
import { Link } from "react-router-dom";
import expandIcon from "../../../../icons/Affiliate/expandIcon.png";
import tickSign from "../../../../icons/Affiliate/greenTickIcon.png";

const ManagerCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Client Referral",
      bg: "bg-blue-500",
      revenueGenerated: 0,
      referrals: 0,
      customers: 0,
      promoters: 3,
      paymentTerm: 60,
      reward: "30%",
      offer: "None",
      others: "Target reached bonus",
    },
    {
      id: 2,
      title: "Marketing Mentors Affiliate",
      bg: "bg-red-500",
      revenueGenerated: 0,
      referrals: 0,
      customers: 0,
      promoters: 3,
      paymentTerm: 30,
      reward: "40%",
      offer: "None",
      others: "None",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-semibold text-accent uppercase">
        Campaigns
      </h1>
      <div>
        {campaigns.map((campaign) => (
          <Campaign key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

const Campaign = ({ campaign }) => {
  const {
    revenueGenerated,
    referrals,
    customers,
    promoters,
    reward,
    offer,
    others,
  } = campaign;
  const revenueDetails = [
    { id: 1, title: "Revenue Generated", amount: revenueGenerated },
    { id: 2, title: "Referrals", amount: referrals },
    { id: 3, title: "Customers", amount: customers },
    { id: 4, title: "Promoters", amount: promoters },
  ];
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="p-5 bg-gray-50 my-10">
      <div className="border-b-2 pb-5 flex justify-between items-center text-secondary font-semibold">
        <h1>
          <span className={`inline-block h-3 w-3 mr-2 ${campaign.bg}`}></span>{" "}
          {campaign.title}
        </h1>
        <div className="flex justify-end lg:gap-10 gap-0">
          <h1 className="md:text-md text-sm">
            Payout terms: Monthly/Net-{campaign.paymentTerm}
          </h1>
          <div className="relative">
            <img
              onClick={() => setShowOptions(!showOptions)}
              width={30}
              src={expandIcon}
              alt=""
              className="cursor-pointer"
            />
            <div
              className={`absolute top-8 right-0 px-4 py-2 text-base w-72 bg-white font-normal shadow-2xl flex flex-col z-10 ${
                showOptions ? "block" : "hidden"
              }`}
            >
              {[
                {
                  id: 1,
                  btnName: "Edit Campaign",
                  to: "/affiliate-manager/campaigns/edit-campaigns",
                },
                {
                  id: 2,
                  btnName: "Configure promoter dashboard",
                  to: "/affiliate-manager/campaigns/",
                },
                {
                  id: 3,
                  btnName: "Advance",
                  to: "/affiliate-manager/campaigns/",
                },
              ].map((btn) => (
                <Link
                  to={btn.to}
                  key={(btn.id = "top-btn")}
                  className="text-start mb-2 text-accent"
                >
                  {btn.btnName}
                </Link>
              ))}
              <div className="border-b-2 mb-2"></div>
              {[
                {
                  id: 1,
                  btnName: "Invite promoters",
                  to: "/affiliate-manager/campaigns/invite-promoters",
                },
                {
                  id: 2,
                  btnName: "Add promoters",
                  to: "/affiliate-manager/campaigns/add-promoters",
                },
                {
                  id: 3,
                  btnName: "Move promoters",
                  to: "/affiliate-manager/campaigns/move-promoters",
                },
                {
                  id: 4,
                  btnName: "Remove promoters",
                  to: "/affiliate-manager/campaigns",
                },
              ].map((btn) => (
                <Link to={btn.to} className="text-start mb-2 text-accent">
                  {btn.btnName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 items-center lg:px-2 px-2 border-b-2">
            {revenueDetails.map((revenue) => (
              <div
                key={revenue.id + "revenue"}
                className="py-7 text-center text-accent"
              >
                <p className="font-semibold text-xl">
                  {revenue.id === 1 && "$"}
                  {revenue.amount}
                </p>
                <h1>{revenue.title}</h1>
              </div>
            ))}
          </div>
          <div className="md:flex pt-5 text-xs">
            <button className=" text-blue-500">Promoters Sign Up Link</button>
            <button className=" text-blue-500 ml-3">copy link </button>
            <p>(tip: open link in incognito for preview)</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full text-accent">
          <div className="flex justify-start lg:items-center items-start gap-5 my-5">
            <h1>Reward</h1>
            <h1 className="font-semibold md:text-md text-sm">
              <img
                className="inline-block mr-2"
                width={20}
                src={tickSign}
                alt=""
              />{" "}
              {reward} second month commission
            </h1>
          </div>
          <div className="flex justify-start items-center gap-5 my-5">
            <h1>Offer</h1>
            <h1 className="ml-3"> {offer}</h1>
          </div>
          <div className="flex justify-start items-center gap-5 my-5">
            <h1>Others</h1>
            <h1 className=" md:text-md text-sm">
              {others !== "None" ? (
                <>
                  <img
                    className="inline-block mr-2"
                    width={20}
                    src={tickSign}
                    alt=""
                  />
                  <span className="font-semibold">{others}</span>
                </>
              ) : (
                "None"
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerCampaigns;
