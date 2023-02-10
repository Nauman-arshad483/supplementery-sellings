import React, { useState } from "react";
import AddMultipleLinkModal from "../Campaigns/AddMultipleLinkModal";
import CustomizePlanModal from "../Campaigns/CustomizePlanModal";

const EditPromotion = () => {
  const steps = [
    {
      id: 1,
      title: "Main",
      icon: "/Icons/campaign/homeIcon.PNG",
      width: "40",
      component: <Main />,
    },

    {
      id: 2,
      title: "Custom Rewards",
      icon: "/Icons/campaign/rewardIcon.PNG",
      width: "40",
      component: <CustomRewards />,
    },
    {
      id: 3,
      title: "Advanced",
      icon: "/Icons/campaign/advance.PNG",
      width: "40",
      component: <Advanced />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <AddMultipleLinkModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        PROMOTIONS
      </h1>
      <div className="bg-white lg:w-4/5 w-full mx-auto lg:mt-20 mt-2">
        <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
          Edit Promotion
        </h1>
        <div className="flex justify-evenly gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className="flex flex-col items-center lg:px-10 px-2 py-5 cursor-pointer"
            >
              <img
                className={`md:w-16 w-8 ${
                  step.id < currentStep + 1 ? "opacity-100" : "opacity-40"
                }`}
                src={step.icon}
                width={60}
                alt=""
              />
              <h1 className="md:text-md text-xs font-semibold text-secondary">
                {step.title}
              </h1>
            </div>
          ))}
        </div>
        <div className={` bg-gray-200 w-full`}>
          <div
            className={`border-b-4 border-primary duration-500`}
            style={{
              width: currentStep < 3 ? currentStep * 33.33 + "%" : "100%",
            }}
          ></div>
        </div>
        {steps[currentStep - 1]?.component}
        <div className="flex justify-end bg-gray-100 border-t-2 py-3 px-5">
          <button
            disabled={currentStep > 3}
            onClick={() => setCurrentStep((p) => p + 1)}
            className="px-5 py-2 border-2 bg-gray-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPromotion;

const forCampaign = (
  <div className="md:flex justify-between items-center px-5">
    {[
      {
        id: 1,
        title: "For Campaign",
        subTitle: "Marketing Mentors Affiliate",
      },
      { id: 2, title: "By Promoter", subTitle: "Angela" },
    ].map((data) => (
      <div key={data.id} className="md:w-1/2 w-full">
        <h1 className="text-secondary">{data.title}</h1>
        <p className="text-blue-600 mt-2">{data.subTitle}</p>
      </div>
    ))}
  </div>
);

const Main = () => {
  const [referralId, setReferralId] = useState("angela28");
  return (
    <div className="py-5 text-accent">
      {forCampaign}
      <div className="mb-5 border-b pb-5"></div>
      <div className="md:flex justify-between items-start px-5">
        <div>
          <h1 className="text-secondary font-semibold">
            Offer to ther person referred by the promoter
          </h1>
          <p className=" mt-2">none</p>
        </div>
        <button className="px-5 py-1.5 bg-primary rounded-full my-7 text-white">
          Set offer
        </button>
      </div>
      <div className="px-5 grid grid-cols-3 md:gap-7 gap-3  mb-10">
        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Referral ID
        </label>
        <div className="col-span-2">
          <input
            className="p-3 bg-gray-100 w-full md:w-1/2 rounded-md border"
            type="text"
            name=""
            id=""
            onChange={(e) => setReferralId(e.target.value)}
            value={referralId}
          />
          <p className="text-sm mt-1">
            Change this value to personalize the referral link (preview below)
          </p>
        </div>
        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Referral Link
        </label>
        <div className="col-span-2">
          <input
            disabled
            className="p-3 w-full rounded-md border-b bg-white"
            type="text"
            name=""
            id=""
            value={"https://www.roserevenue.com?fpr=" + referralId}
          />
        </div>
        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Tracking Coupon Code
        </label>
        <div className="col-span-2">
          <input
            className="p-3 bg-gray-100 w-full md:w-1/2 rounded-md border"
            type="text"
            name=""
            id=""
          />
          <p className="text-sm mt-1">
            Unique coupon codes for this promotion only. Every sale made using
            this code will be tracked and attributed to{" "}
            <span className="font-semibold">Angela</span>, no referral link
            necessary.
          </p>
          <p className="text-blue-500 cursor-pointer text-sm">Learn more...</p>
        </div>
      </div>
    </div>
  );
};

const CustomRewards = () => {
  return (
    <div className="py-5 ">
      <CustomizePlanModal />
      {forCampaign}
      <div className="border-b-2 my-5"></div>

      <div className="md:flex justify-between items-start px-5">
        <div>
          <h1 className="font-semibold text-secondary mb-2">
            Reward promoter for referring sales (default - all plans){" "}
          </h1>
          <p className="text-accent">40% second month commission</p>
          <div className="mt-3">
            {" "}
            <span className="inline-block border-2 px-1 text-xs text-cyan-500 font-bold border-cyan-500 rounded-full mr-2">
              ?
            </span>
            <label
              htmlFor="customizePlanModal"
              className="text-blue-400 font-semibold cursor-pointer md:text-md text-sm"
            >
              Customize rewards by plan
            </label>
            <span className="ml-2 bg-primary text-white px-1 rounded-full">
              0
            </span>
          </div>
        </div>
        <button className="px-5 py-2 bg-primary rounded-full my-7 text-white">
          Set offer
        </button>
      </div>

      <div className="w-full flex justify-center mt-5">
        <button className="border bg-gray-100 py-2 px-3 text-accent ">
          <img
            className="opacity-60 w-6 inline-block mr-2"
            src="/Icons/campaign/settings-gears.png"
            alt=""
          />
          Show more reward types (target bonuses and multiple tiers)
        </button>
      </div>
    </div>
  );
};

const Advanced = () => {
  const [landingURL, setLandingURL] = useState("http://");
  const [isEnable, setIsEnable] = useState(false);
  return (
    <div className="py-5 text-accent">
      {forCampaign}
      <div className="mb-5 border-b pb-5"></div>
      <div className="px-5 grid grid-cols-3 md:gap-7 gap-5 mb-10">
        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Landing page URL
        </label>
        <div className="col-span-2">
          <input
            className="p-3 bg-gray-100 w-full md:w-1/2 rounded-md border"
            type="text"
            name=""
            id=""
            onChange={(e) => setLandingURL(e.target.value)}
            value={landingURL}
          />
          <p className="text-sm mt-1">
            Set a special landing page URL to be shown inside the promoter
            dashboard instead of the URL set in the campaign
          </p>
        </div>

        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Direct URL tracking
        </label>
        <div className="col-span-2 ">
          <div className="flex items-center">
            <span className="inline mr-2">
              {isEnable ? "Enable" : "Disabled"}
            </span>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  onClick={() => setIsEnable(!isEnable)}
                  type="checkbox"
                  className="toggle"
                  checked={isEnable}
                />
              </label>
            </div>
          </div>
          <p className="text-sm mt-1">
            Direct URL tracking allows you to assign all visits from the landing
            page URL(above) to this promotion, without requiring the referral
            id.
          </p>
          <p className="text-sm mt-1 text-gray-600">
            To enable this function, you need to insert a simple script inside
            the landing page body{" "}
            <button className="btn btn-xs capitalize bg-primary border-0 text-white rounded font-normal">
              Get this script
            </button>
          </p>
        </div>

        <label className="text-right mt-2 text-secondary text-lg" htmlFor="">
          Attribution model
        </label>
        <div className="col-span-2">
          <select className="p-3 bg-gray-100 w-full  rounded-md border">
            <option>Last click (default)</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-5 items-center px-5">
        <label
          className="md:w-1/2 w-full text-right mt-2 text-secondary text-lg"
          htmlFor=""
        >
          Allow promoter to submit leads manually from their dashboard
        </label>
        <div className="md:w-1/2 w-full gap-5">
          <select className="p-3 bg-gray-100 w-full  rounded-md border">
            <option>Use campaign defaults</option>
          </select>
        </div>
      </div>
    </div>
  );
};
