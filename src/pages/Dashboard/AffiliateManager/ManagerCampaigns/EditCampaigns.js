import React, { useState } from "react";
import tickSign from "../../../../icons/Affiliate/greenTickIcon.png";
import AddMultipleLinkModal from "./AddMultipleLinkModal";
import CustomizePlanModal from "./CustomizePlanModal";

const EditCampaigns = () => {
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
      title: "Offer and Rewards",
      icon: "/Icons/campaign/rewardIcon.PNG",
      width: "40",
      component: <OfferAndRewards />,
    },
    {
      id: 3,
      title: "Setting",
      icon: "/Icons/campaign/setting.PNG",
      width: "40",
      component: <Settings />,
    },
    {
      id: 4,
      title: "Finish",
      icon: "/Icons/campaign/complete.PNG",
      width: "40",
      component: <Finish />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <AddMultipleLinkModal />
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent">
        Campaign
      </h1>
      <div className="bg-white lg:w-3/5 w-full mx-auto lg:mt-20 mt-2">
        <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
          Edit Campaign
        </h1>
        <div className="flex justify-evenly gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center lg:px-10 px-2 py-5 "
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
            className={`border-b-4 border-blue-500 duration-500`}
            style={{ width: currentStep < 4 ? currentStep * 25 + "%" : "100%" }}
          ></div>
        </div>
        {steps[currentStep - 1]?.component}
        <div className="flex justify-end bg-gray-100 border-t-2 py-3 px-5">
          <button
            disabled={currentStep < 2}
            onClick={() => setCurrentStep((p) => p - 1)}
            className="px-5 py-2 border-2 bg-white"
          >
            Previous
          </button>
          <button
            disabled={currentStep > 4}
            onClick={() => setCurrentStep((p) => p + 1)}
            className="px-5 py-2 border-2 bg-primary text-white ml-3"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCampaigns;

const Main = () => {
  return (
    <div className="py-10 px-5">
      <h1 className="font-semibold text-secondary mb-2">Campaign name</h1>
      <div className="relative border overflow-hidden">
        <input
          className="p-3 bg-gray-100 w-full rounded-md"
          type="text"
          name=""
          id=""
          placeholder="Client Love"
        />
        <button className=" absolute top-0 right-0 px-4 py-3 bg-white ">
          <span className="inline-block w-5 h-5 bg-pink-600 "></span>
        </button>
      </div>
      <h1 className="font-semibold text-secondary mb-2 mt-5">
        Default referral link URL
      </h1>
      <div className="relative border overflow-hidden">
        <input
          className="p-3 bg-gray-100 w-full rounded-md"
          type="text"
          name=""
          id=""
          value="http://www.roserrevenue.com"
        />
        <select className=" absolute top-0 right-0 px-4 py-3 bg-white ">
          <option>?fpr</option>
        </select>
      </div>
      <p className="text-accent mt-2 md:text-md text-sm">
        The url that promoter will share with friends/audience. By default, ther
        referral links looks like "http://www.roserrevenue.com?fpr=some_id", but
        can be modified, including the "fpr" part.
      </p>
      <div>
        <div className="mt-3">
          {" "}
          <span className="inline-block border-2 px-1 text-xs text-cyan-500 font-bold border-cyan-500 rounded-full mr-2">
            ?
          </span>
          <label
            htmlFor="addMultipleLinkModal"
            className="text-blue-400 font-semibold cursor-pointer"
          >
            Set multiple referral links
          </label>
          <span className="ml-2 bg-primary text-white px-1 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

const OfferAndRewards = () => {
  return (
    <div className="py-10 px-5">
      <CustomizePlanModal />
      <div className="md:flex justify-between items-start">
        <div>
          <h1 className="font-semibold text-secondary mb-2">
            Reward promoter for referring sales (default - all plans){" "}
          </h1>
          <p className="text-accent">30% second month commission</p>
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
        <button className="px-5 py-2 bg-blue-500 rounded-full my-7 text-white">
          Set reward
        </button>
      </div>
      <div className="border-b-2 my-5"></div>
      <div className="md:flex justify-between items-start">
        <div>
          <h1 className="font-semibold text-secondary mb-2">
            Offer to the person referred by the promoter
          </h1>
          <p className="text-accent">None</p>
        </div>
        <button className="px-5 py-2 bg-fuchsia-600 rounded-full my-7 text-white">
          Set offer
        </button>
      </div>
      <div className="w-full flex justify-center">
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

const Settings = () => {
  return (
    <div className="py-10 px-5 text-accent">
      <div>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          <span className="ml-2 inline-block text-lg font-samibold">
            Private campaign
          </span>
        </label>
        <p className="my-3">
          Private campaigns don;t have a public URL for promoters to sign up.
          Promoters will be added manually or through other campaigns
        </p>
      </div>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          <span className="ml-2 inline-block text-lg font-samibold">
            Auto approve new promoters
          </span>
        </label>
        <p className="my-3">
          Automatically approve promoters who sign up for this campaign
        </p>
      </div>
      <div className="my-5">
        <h1 className="font-semibold text-secondary text-lg mb-2">
          Current payout terms ( <span className="text-blue-500">change</span>)
        </h1>
        <p className="text-accent">
          <span className="font-semibold text-lg">Monthly/Net-60.</span> This
          month's commissions will be paid 60 days later after the month ends
        </p>
      </div>
      <div className="mt-5">
        <h1 className="font-semibold text-secondary text-lg mb-2">
          Current payment methods ({" "}
          <span className="text-blue-500">change</span>)
        </h1>
        <p className="text-accent">
          <span className="font-semibold text-lg">
            <img className="inline-block w-5" src={tickSign} alt="" /> Paypal
          </span>{" "}
          with min. payout of <span className="font-semibold text-lg">$30</span>
        </p>
      </div>
    </div>
  );
};

const Finish = () => {
  const [cookieLife, setCookieLife] = useState(30);
  return (
    <div className="py-10 px-5">
      <h1 className="font-semibold text-secondary mb-2">
        Cookie life (in days)
      </h1>
      <input
        value={cookieLife}
        onChange={(e) => setCookieLife(e.target.value)}
        className="w-32 p-3 bg-gray-100 rounded-md"
        type="number"
      />
      <h1 className="font-semibold text-secondary mb-2 mt-5">
        Short description (max 250 characters)
      </h1>
      <textarea
        className="w-full p-3 bg-gray-100 rounded-md "
        type="number"
        placeholder="Client Referral Program"
      ></textarea>
      <p className="text-accent mb-7">
        A brief description of the campaign and what promoters get by promoting
        your product. If you have multiple campaigns, this description appear on
        affiliate's dashboard.
      </p>
      <div className="w-full flex justify-center">
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
