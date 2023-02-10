import React from "react";

const AnalyticsCards = ({ cardsData }) => {
  return (
    <div className=" bg-white pt-5">
      <div className="md:flex flex-col justify-end items-end px-5 pt-5">
        <div className="md:flex justify-between items-end gap-5">
          <div className="px-7 py-2 bg-gray-200">
            <p className="text-primary">Start Date</p>
            <p className="text-secondary text-lg font-bold  ">28 Jun 2021</p>
          </div>
          <p className="text-sm my-3">to</p>
          <div className="px-7 py-2 bg-gray-200">
            <p className="text-primary">End Date</p>
            <p className="text-secondary text-lg font-bold  ">28 July 2021</p>
          </div>
        </div>
        <p className="pt-3 text-blue-600 underline">All time</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 p-5 ">
        {cardsData.map((card) => (
          <div key={card.id + "card"} className={`${card.bg} p-5 rounded-lg`}>
            <h1
              className={`text-xl ${
                card.textColor ? "text-white" : "text-gray-500"
              }`}
            >
              {card.title}
            </h1>
            <p
              className={`text-4xl font-bold my-3 ${
                card.textColor ? "text-white" : "text-gray-600"
              }`}
            >
              {typeof card.text === "string" && card.text.includes(".") ? (
                <>
                  ${card.text?.split(".")[0]}
                  <span className="text-xl">.{card.text.split(".")[1]}</span>
                </>
              ) : (
                card.text
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnalyticsCards;
