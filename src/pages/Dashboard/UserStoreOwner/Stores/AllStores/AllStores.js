import React, { useId, useRef } from "react";
import useClickOutside from "../../../../../hooks/useClickOutside";

import CustomTrackingURLModal from "./CustomTrackingURLModal";
import DeleteStoreModal from "./DeleteStoreModal";
import EditStoreModal from "./EditStoreModal";
import StoreCurrencyModal from "./StoreCurrencyModal";

const AllStores = () => {
  const storeList = [
    { id: 1, storeName: "Store Name" },
    { id: 2, storeName: "Store Name" },
  ];

  const id = useId();
  return (
    <div className="bg-white md:pt-10 md:pb-28 px-5 p-5">
      <CustomTrackingURLModal />
      <StoreCurrencyModal />
      <EditStoreModal />
      <DeleteStoreModal />
      {storeList.map((store, i) => (
        <SingleStore key={id + i} store={store} />
      ))}
    </div>
  );
};

export default AllStores;

const SingleStore = ({ store }) => {
  const dropdownRef = useRef();
  const [showOptions, setShowOptions] = useClickOutside(dropdownRef);
  const id = useId();
  return (
    <div className="md:flex justify-between p-2 border-b-2">
      <h1 className="text-blue-400">
        {" "}
        <img
          className="inline-block w-5 mr-2"
          src="/Icons/three_bar.png"
          alt=""
        />
        {store.storeName}
      </h1>
      <div className="md:mt-0 mt-5 flex gap-2 text-sm font-bold">
        {["Products", "Orders", "Tracking"].map((b, i) => (
          <button className="px-2 bg-gray-100 rounded-md" key={id + i}>
            {b}
          </button>
        ))}
        <button
          onClick={() => setShowOptions(!showOptions)}
          ref={dropdownRef}
          className="p-1 rounded-md border border-accent relative"
        >
          <img className="w-4" src="/Icons/gear2.png" alt="" />
          <DropdownOptions showOptions={showOptions} />
        </button>
      </div>
    </div>
  );
};

const DropdownOptions = ({ showOptions }) => {
  const btnId = useId();
  return (
    <div
      className={`absolute top-10 right-0 px-4 pt-2 text-base w-60 bg-white font-normal shadow-2xl flex flex-col z-10  ${
        showOptions ? "block" : "hidden"
      } `}
    >
      {[
        {
          id: 1,
          btnName: "View Store",
          modalId: "",
          color: "text-accent",
        },
        {
          id: 2,
          btnName: "Verify",
          modalId: "",
          color: "text-blue-500",
        },
        {
          id: 3,
          btnName: "Custom Tracking URL",
          modalId: "customTrackingURLModal",
          color: "text-blue-500",
        },
        {
          id: 4,
          btnName: "Store Currency",
          modalId: "storeCurrencyModal",
          color: "text-blue-500",
        },
        {
          id: 5,
          btnName: "Edit",
          modalId: "editStoreModal",
          color: "text-blue-500",
        },
        {
          id: 6,
          btnName: "Delete",
          modalId: "deleteStoreModal",
          color: "text-red-500",
        },
      ].map((btn) => (
        <label
          htmlFor={btn.modalId}
          key={btn.id + btnId}
          className={`text-start mb-2 text-accent ${btn.color} cursor-pointer`}
        >
          {btn.btnName}
        </label>
      ))}
    </div>
  );
};
