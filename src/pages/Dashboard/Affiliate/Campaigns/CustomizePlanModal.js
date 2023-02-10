import React from "react";

const CustomizePlanModal = () => {
  const plansData = [
    {
      id: 1,
      name: "Angela and Tish",
      planId: "40% continual",
      currentReward: "30% second month commission",
    },
  ];
  return (
    <div>
      <input type="checkbox" id="customizePlanModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="lg:w-[900px] w-full bg-white rounded-sm">
          <div className="flex justify-between border-b-2 relative">
            <h1 className="py-5 px-5 font-semibold text-secondary">
              View/Set plan level rewards
            </h1>
            <label
              htmlFor="customizePlanModal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-gray-400 border-gray-400"
            >
              ✕
            </label>
          </div>
          <div className="px-5 pb-5 ">
            <div className="md:flex justify-between items-start gap-5">
              <div className="md:w-3/5 w-full text-accent mt-5">
                <p className="text-sm mb-2">
                  <span className="font-senibold text-blue-500 cursor-pointer">
                    +Click
                  </span>{" "}
                  here to add and manage plans.{" "}
                  <span className="font-senibold text-blue-500 cursor-pointer">
                    {refreshIcon} Refresh
                  </span>{" "}
                  once you are done.
                </p>
                <p className="text-sm">
                  <span className="font-bold">Note:</span> For % based
                  commissions. you don't have to add any plans, the commission
                  will be calculated as percentage of any invoice amount
                  (regardless of plan of plan)
                </p>
              </div>
              <div className="md:w-2/5 w-full mt-5">
                <div className=" md:mt-0 mt-3 flex bg-white items-center border border-gray-400">
                  <input
                    className="w-full py-2 px-3 outline-none"
                    type="text"
                    placeholder="Search"
                  />
                  {searchIcon}
                </div>
              </div>
            </div>
            <div className="mt-5 md:text-md text-sm">
              <table className="w-full ">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="border-0 pb-2 pl-2">Name</th>
                    <th className="border-0 pb-2 pl-2">Plan ID</th>
                    <th className="border-0 pb-2 pl-2">Current reward</th>
                    <th className="border-0 pb-2 pl-2"></th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  {plansData.map((plan) => (
                    <tr key={plan.id} className="">
                      <td className="border-t border-gray-300 text-gray-400 py-4 pl-2">
                        {plan.name}
                      </td>
                      <td className="border-t border-gray-300 text-gray-400">
                        {plan.planId}
                      </td>
                      <td className="border-t border-gray-300 text-gray-400">
                        {plan.currentReward}
                      </td>
                      <td className="border-t border-gray-300 text-gray-400">
                        <button className="px-5 py-2 bg-primary rounded-full md:text-md text-xs text-white">
                          Set offer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-start mt-5">
                <p className=" text-gray-400">Total Item: {plansData.length}</p>
                <div className="flex items-center gap-2">
                  <p>Pages</p>
                  <button className="px-3 py-1 bg-primary text-white rounded">
                    1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePlanModal;

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const refreshIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 inline"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);
