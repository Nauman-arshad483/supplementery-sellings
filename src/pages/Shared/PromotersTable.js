import React, { useId, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

const PromotersTable = ({ promotersTableData }) => {
  return (
    <div className="md:mb-0 mb-10">
      <div className="bg-white pt-5 pb-16 md:block hidden">
        <table className="w-full pt-5 text-sm">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="border-0 pl-3">Promoter Name</th>
              <th className="border-0 pl-3">Email</th>
              <th className="border-0 pl-3">Customers </th>
              <th className="border-0 pl-3">Owed</th>
              <th className="border-0 pl-3">Paid</th>
              <th className="border-0 pl-3">Joined</th>
              <th className="border-0 pl-3"></th>
            </tr>
          </thead>
          <tbody>
            {promotersTableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {promotersTableData.map((data) => (
          <TableRow key={data.id + "promoter"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

export default PromotersTable;

const TableRow = ({ data, mobileVersion }) => {
  const optionRef = useRef();
  const [showOptions, setShowOptions] = useClickOutside(optionRef);

  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Promoter Name</p>
        <p> {data.promoterName}</p>
        <p className="font-bold">Email</p>
        <p> {data.email}</p>
        <p className="font-bold">Customers </p>
        <p> {data.customers}</p>
        <p className="font-bold">Owed</p>
        <p> ${data.owed}</p>
        <p className="font-bold">Paid</p>
        <p>{data.Paid}</p>
        <p className="font-bold">Joined</p>
        <p>{data.joined}</p>
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
    <tr className="font-semibold">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-blue-400 ">
        {data.promoterName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.email}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.customers}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        ${data.owed}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400"></td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.joined}
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
        className="md:text-md text-xl font-bold cursor-pointer"
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
            btnName: "View details",
            to: "/affiliate/promoters/view-details",
          },
          {
            id: 2,
            btnName: "Edit promoter",
            to: "/affiliate/promoters/edit-promoter",
          },
          {
            id: 3,
            btnName: "Delete promoter",
            to: "/affiliate/promoters",
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
