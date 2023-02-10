import React, { useId, useState } from "react";

const VoipAnalytics = () => {
  const analyticsSection = [
    { id: 1, btnName: "My VoIP", component: <MyVoIPAnalytics /> },
    { id: 2, btnName: "Sales", component: <SalesAnalytics /> },
  ];
  const [selectedBtn, setSelectedBtn] = useState(analyticsSection[0]);
  const id = useId();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        ANALYTICS
      </h1>
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

      <div className="bg-[#ECF2F7] lg:px-5 p-0 pt-5 pb-10">
        {selectedBtn.component}
      </div>
    </div>
  );
};

export default VoipAnalytics;

const MyVoIPAnalytics = () => {
  const sections = [
    { id: 1, btnName: "Total", component: <MyVoIPAnalytics /> },
    { id: 2, btnName: "This month", component: "" },
  ];
  const [selectedBtn, setSelectedBtn] = useState({ id: 1 });
  const id = useId();
  const cards = [
    {
      id: 1,
      title: "Revenue",
      text: "0.00",
      bg: "bg-red-500",
      color: "text-white",
    },
    {
      id: 2,
      title: "Number of users",
      text: "0",
      bg: "bg-gray-300",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-1 font-semibold">
        {sections.map((btn) => (
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
      <div className="bg-white px-5 pt-10 pb-20">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {cards.map((card) => (
            <div
              key={card.id + "card"}
              className={`${card.bg} p-3 rounded-lg `}
            >
              <h1
                className={`text-base ${
                  card.color ? card.color : "text-gray-600"
                }`}
              >
                {card.title}
              </h1>
              <p className={`text-4xl font-bold my-3 ${card.color}`}>
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
      </div>
    </div>
  );
};

const SalesAnalytics = () => {
  const sections = [
    { id: 1, btnName: "Total", component: "" },
    { id: 2, btnName: "Realtime", component: "" },
    { id: 3, btnName: "Monthly", component: "" },
    { id: 4, btnName: "Quarterly", component: "" },
    { id: 5, btnName: "Annually", component: "" },
  ];
  const [selectedBtn, setSelectedBtn] = useState({ id: 1 });
  const id = useId();
  const cards = [
    {
      id: 1,
      title: "Revenue",
      text: "0.00",
      bg: "bg-red-500",
      color: "text-white",
    },
    {
      id: 2,
      title: "Number of users",
      text: "0",
      bg: "bg-gray-300",
      color: "",
    },
    {
      id: 3,
      title: "Number of Stores",
      text: "0",
      bg: "bg-gray-300",
      color: "",
    },
    {
      id: 4,
      title: "Products",
      text: "0",
      bg: "bg-gray-300",
      color: "",
    },
  ];
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-1 font-semibold">
        <div className="flex flex-wrap gap-1 font-semibold">
          {sections.slice(0, 1).map((btn) => (
            <button
              key={btn.id + id}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm py-5 ${
                selectedBtn.id === btn.id
                  ? " border-primary bg-white"
                  : " border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 font-semibold">
          {sections.slice(1).map((btn) => (
            <button
              key={btn.id + id}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                selectedBtn.id === btn.id
                  ? "py-5 border-primary bg-white"
                  : "py-5 mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white px-5 pt-10 pb-20">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {cards.map((card) => (
            <div
              key={card.id + "card"}
              className={`${card.bg} p-3 rounded-lg `}
            >
              <h1
                className={`text-base ${
                  card.color ? card.color : "text-gray-600"
                }`}
              >
                {card.title}
              </h1>
              <p className={`text-4xl font-bold my-3 ${card.color}`}>
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
      </div>
    </div>
  );
};
