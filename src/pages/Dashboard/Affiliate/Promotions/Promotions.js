import React from "react";
import PromotionsTable from "./PromotionsTable";

const Promotions = () => {
  const promotionsData = [
    {
      id: 1,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Marketing Mentors Affiliate",
      bg: "bg-blue-500",
    },
    {
      id: 2,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Marketing Mentors Affiliate",
      bg: "bg-blue-500",
    },
    {
      id: 3,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Marketing Mentors Affiliate",
      bg: "bg-blue-500",
    },
    {
      id: 4,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Marketing Mentors Affiliate",
      bg: "bg-blue-500",
    },
    {
      id: 5,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Client Referral",
      bg: "bg-red-500",
    },
    {
      id: 6,
      promoterName: "Name (name43)",
      couponCode: "",
      offer: "No",
      reward: "Yes",
      clicks: "0",
      referrals: "3",
      customers: "3",
      campaign: "Marketing Mentors Affiliate",
      bg: "bg-blue-500",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        PROMOTIONS
      </h1>
      <div className="bg-[#ecf2f7] p-5">
        <PromotionsTable promotionsData={promotionsData} />
      </div>
    </div>
  );
};

export default Promotions;
