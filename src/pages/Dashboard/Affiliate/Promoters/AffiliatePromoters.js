import React, { useState } from "react";
import PromotersTable from "../../../Shared/PromotersTable";
import Search from "../../../Shared/Search";

const AffiliatePromoters = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 1 });
  const promotersData = [
    {
      id: 1,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 2,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 3,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
    {
      id: 4,
      promoterName: "Name Lastname",
      email: "promoteremail@gmail.com",
      customers: "0",
      owed: "19",
      Paid: "",
      joined: "29 Dec 2020",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Promoters
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {[
              { id: 1, btnName: "Top performers" },
              { id: 2, btnName: "Newest " },
            ].map((btn) => (
              <button
                key={btn.id + "345sdgs"}
                // onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
          <div className="flex gap-1 font-semibold">
            {[
              { id: 3, btnName: "Pending" },
              { id: 4, btnName: "Rejected" },
              { id: 5, btnName: "Blocked" },
              { id: 6, btnName: "Other" },
            ].map((btn) => (
              <button
                key={btn.id + "gdsjks"}
                // onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        <div className="md:flex justify-between items-center px-5 py-2 bg-white">
          <button className=" my-3 px-7 py-3 bg-primary rounded-md text-white">
            <img
              className="inline ml-2"
              width={15}
              src="/Icons/campaign/plus_btn.png"
              alt=""
            />{" "}
            New Promoter
          </button>
          <Search />
        </div>
        {selectedBtn2.id === 1 && (
          <PromotersTable promotersTableData={promotersData} />
        )}
      </div>
    </div>
  );
};

export default AffiliatePromoters;
