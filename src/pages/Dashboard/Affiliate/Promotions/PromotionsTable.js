import React, { useId, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../hooks/useClickOutside";

const PromotionsTable = ({ promotionsData }) => {
  return (
    <div className="md:mb-0 mb-10">
      <div className="bg-white pt-5 pb-16 pl-2 md:block hidden">
        <table className="w-full pt-5">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              {[
                "Promoter Name (referral id)",
                "Coupon Code",
                "Offer",
                "Reward",
                "Clicks",
                "Referrals",
                "Customers",
                "Campaign",
                "",
              ].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {" "}
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {promotionsData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {promotionsData.map((data) => (
          <TableRow key={data.id + "promoter"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

export default PromotionsTable;

const TableRow = ({ data, mobileVersion }) => {
  const optionRef = useRef();
  const [showOptions, setShowOptions] = useClickOutside(optionRef);

  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Promoter Name</p>
        <p> {data.promoterName}</p>
        <p className="font-bold">Coupon Code</p>
        <p> {data.couponCode}</p>
        <p className="font-bold">Offer </p>
        <p> {data.offer}</p>
        <p className="font-bold">Clicks</p>
        <p> {data.reward}</p>
        <p className="font-bold">Referrals</p>
        <p>{data.clicks}</p>
        <p className="font-bold">Customers</p>
        <p>{data.referrals}</p>
        <p className="font-bold">Campaign</p>
        <p>
          <span
            className={`${data.bg} badge badge-xs border-0 rounded-none`}
          ></span>{" "}
          {data.campaign}
        </p>
        <p className="font-bold">Action</p>
        <div ref={optionRef} className="relative">
          <OptionsDetails
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            data={data}
          />
        </div>
      </div>
    );
  }

  return (
    <tr className="">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-blue-400 ">
        {data.promoterName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.couponCode}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.offer}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <img
          className="inline-block w-5"
          src="/Icons/promoter/tick3.PNG"
          alt=""
        />{" "}
        {data.reward}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.clicks}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.referrals}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.customers}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <span
          className={`${data.bg} badge badge-xs border-0 rounded-none`}
        ></span>{" "}
        {data.campaign}
      </td>
      <td
        ref={optionRef}
        className="border-b border-gray-400 text-start font-bold text-gray-400 text-2xl cursor-pointer relative"
      >
        <OptionsDetails
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          data={data}
        />
      </td>
    </tr>
  );
};

const OptionsDetails = ({ showOptions, setShowOptions, data }) => {
  const btnId = useId();
  return (
    <div>
      <span
        className="md:text-md text-xl font-bold text-blue-600 cursor-pointer mr-2"
        onClick={() => setShowOptions((p) => (p <= 0 ? data.id : 0))}
      >
        ...
      </span>
      <div
        className={`absolute top-14 right-0 px-4 pt-2 text-base w-60 bg-white font-normal shadow-2xl flex flex-col z-10  ${
          showOptions === data.id ? "block" : "hidden"
        }`}
      >
        {[
          {
            id: 1,
            btnName: "Edit promotion",
            to: "/affiliate/promotions/edit-promotion",
          },
          {
            id: 2,
            btnName: "Add lead",
            to: "/affiliate/promotions/add-lead",
          },
          {
            id: 3,
            btnName: "Remove",
            to: "/affiliate/promotions/",
          },
          {
            id: 4,
            btnName: "Block/ban",
            to: "/affiliate/promotions/",
          },
          {
            id: 4,
            btnName: "Change campaign",
            to: "/affiliate/promotions/",
          },
        ].map((btn) => (
          <Link
            to={btn.to}
            key={btn.id + btnId}
            className="text-start mb-2 text-accent"
          >
            {btn.btnName}
          </Link>
        ))}
      </div>
    </div>
  );
};
