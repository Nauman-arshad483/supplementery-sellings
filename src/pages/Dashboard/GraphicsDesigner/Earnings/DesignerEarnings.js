import React from "react";
import { numberWithCommasDecimal } from "../../../../utilities/utilities";

const DesignerEarnings = () => {
  const tableData = [
    {
      id: 1,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 2,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 3,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 4,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 5,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 6,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 7,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 8,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
    {
      id: 9,
      description: "Request Name",
      amount: "$100.00",
      date: "06.01.2020 7:30PM",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        My Earnings
      </h1>
      <EarningAnalytics />
      <button className="px-7 py-3 bg-accent text-white ml-5 rounded-md md:mt-10 mt-5">
        Request payment
      </button>
      <h1 className="mx-5 bg-primary p-5 font-bold  text-white mt-10">
        Earnings History
      </h1>
      <div className="bg-white mx-5">
        <div className="md:flex flex-col justify-end items-start px-5 pt-5">
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
        <EarningTable tableData={tableData} />
      </div>
    </div>
  );
};

export default DesignerEarnings;

const EarningAnalytics = () => {
  const cardsData = [
    {
      id: 1,
      title: "Your Earnings Balance",
      text: numberWithCommasDecimal(15.01),
      bg: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "This Month Earnings",
      text: numberWithCommasDecimal(2105.01),
      bg: "bg-white",
      textColor: "",
    },
    {
      id: 3,
      title: "Past Month Earnings",
      text: numberWithCommasDecimal(1800.01),
      bg: "bg-white",
      textColor: "",
    },
    {
      id: 4,
      title: "Lifetime Earnings",
      text: numberWithCommasDecimal(5321.01),
      bg: "bg-white",
      textColor: "",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 p-5 ">
        {cardsData.map((card) => (
          <div key={card.id + "card"} className={`${card.bg} p-5 rounded-lg`}>
            <h1
              className={`text-base ${
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
      <p className="text-red-500 mt-2 pl-5">
        Your earnings balance is below $25.00 which is the minimum to request a
        payout.
      </p>
    </div>
  );
};

const EarningTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["#", "Description", "Amount", "Date"].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[500px] overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow key={data.id + "hew"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">#</p>
        <p>{data.id}</p>
        <p className="font-bold">Description</p>
        <p>{data.description}</p>
        <p>Amount</p>
        <p>{data.amount}</p>
        <p>Date</p>
        <p>{data.date}</p>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">{data.id}</td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.description}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        {data.amount}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">{data.date}</td>
    </tr>
  );
};
