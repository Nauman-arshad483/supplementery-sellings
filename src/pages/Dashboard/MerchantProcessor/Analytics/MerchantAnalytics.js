import React, { useState } from "react";
import { numberWithCommasDecimal } from "../../../../utilities/utilities";
import AnalyticsByClient from "./AnalyticsByClient";
import AnalyticsByStore from "./AnalyticsByStore";
import AnalyticsCards from "./AnalyticsCards";

const MerchantAnalytics = () => {
  const formsButton = [{ id: 1, btnName: "All", component: <AllAnalytics /> }];
  const [selectedBtn2, setSelectedBtn2] = useState(formsButton[0]);

  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Analytics
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {formsButton.map((btn) => (
              <button
                key={btn.id + "3dgs"}
                onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
          <div className="flex gap-1 font-semibold">
            {[
              { id: 3, btnName: "By Store", component: <AnalyticsByStore /> },
              { id: 4, btnName: "By Client", component: <AnalyticsByClient /> },
            ].map((btn) => (
              <button
                key={btn.id + "gdsjks"}
                onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        {selectedBtn2.component}
      </div>
    </div>
  );
};

export default MerchantAnalytics;

const AllAnalytics = () => {
  const cards = [
    {
      id: 1,
      title: "Revenue",
      text: numberWithCommasDecimal(20410.51),
      bg: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Sales",
      text: "54",
      bg: "bg-gray-300",
      textColor: "",
    },
    {
      id: 3,
      title: "Transactions",
      text: "42",
      bg: "bg-gray-300",
      textColor: "",
    },
    {
      id: 4,
      title: "Chargebacks",
      text: 1,
      bg: "bg-gray-300",
      textColor: "",
    },
  ];
  return <AnalyticsCards cardsData={cards} />;
};
