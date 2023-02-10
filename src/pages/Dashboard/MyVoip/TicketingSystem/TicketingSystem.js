import React, { useId, useState } from "react";
import AwaitingSection from "./AwaitingSection";
import ResolvedSection from "./ResolvedSection";

const TicketingSystem = () => {
  const analyticsSection = [
    { id: 1, btnName: "Awaiting", component: <AwaitingSection /> },
    { id: 2, btnName: "Resolved", component: <ResolvedSection /> },
  ];
  const [selectedBtn, setSelectedBtn] = useState(analyticsSection[0]);
  const id = useId();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        TICKETS
      </h1>
      <p className="lg:ml-20 ml-10 mb-10 text-red-500">
        You have 3 NEW tickets
      </p>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 pt-5 pb-10">
        <div className="flex flex-wrap gap-1 font-semibold">
          {analyticsSection.map((btn) => (
            <button
              key={btn.id + id}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                selectedBtn.id === btn.id
                  ? "py-5 border-primary bg-white"
                  : "mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
        {selectedBtn.component}
      </div>
    </div>
  );
};

export default TicketingSystem;
