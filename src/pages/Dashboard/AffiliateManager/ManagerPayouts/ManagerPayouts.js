import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ManagerPayouts = () => {
  const navigate = useNavigate();
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Payouts Overview
      </h1>
      <div className="p-5 bg-[#ECF2F7]">
        <div className="md:flex justify-end gap-5">
          <button className="text-[#2F87D0] md:my-0 my-3">
            <img
              className="inline mr-2"
              width={20}
              src="/Icons/payouts/singleGear.png"
              alt=""
            />
            Configure Paypal payouts
          </button>
          <button
            onClick={() => navigate("/affiliate-manager/payouts/view-all")}
            className=" text-white px-7 py-3 bg-[#2F87D0]"
          >
            <img
              className="inline mr-2"
              width={20}
              src="/Icons/payouts/searchDoc.png"
              alt=""
            />{" "}
            View payouts
          </button>
        </div>
        <p className="px-3 pb-3 md:pt-0 p-3">
          monetary{" "}
          <Link
            to="/affiliate-manager/payouts/non-monetary"
            className="text-[#2F87D0]"
          >
            non-monetary
          </Link>
        </p>
        <div className="md:flex justify-end gap-5 bg-white p-5 ">
          <div className="md:w-2/5 w-full">
            <h1 className="font-bold">February 2021</h1>
            <p className="text-fuchsia-500 my-3">To be paid in 22 days</p>
            <p>
              Payout terms: <span className="font-bold">Monthly / Net-30</span>
            </p>
          </div>
          <div className="md:w-3/5 w-full md:flex items-center justify-center gap-10 md:mt-0 mt-3">
            <h1 className="font-bold">Nothing paid yet</h1>
            <div className="md:my-0 my-3">
              <h1 className="font-bold text-2xl">$106</h1>
              <p>Total unpaid</p>
            </div>
            <div className="border-r-2 h-full border-gray-500"></div>
            <div>
              <h1 className="font-bold text-2xl">$106</h1>
              <p>Unpaid payouts</p>
            </div>
          </div>
        </div>
      </div>
      <p className="ml-5 mt-3">
        Payouts are generated only if the unpaid balance of the promoter is
        higher than the minimum payout amount set on the campaign.{" "}
      </p>
      <p className="ml-5">
        If not, the amount is carried over to the next payout cycle (next month
        for monthly payout terms).
        <span className="text-[#2F87D0] cursor-pointer"> click here </span> to
        learn more.
      </p>
    </div>
  );
};

export default ManagerPayouts;
