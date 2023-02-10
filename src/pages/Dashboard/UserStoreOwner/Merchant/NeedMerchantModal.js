import React from "react";

const NeedMerchantModal = () => {
  return (
    <div>
      <input type="checkbox" id="needMerchantModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-20 py-5 px-5 flex flex-col justify-center items-center">
          <img className="w-20 inline-block" src="/Icons/info.png" alt="" />
          <h3 className="text-accent text-center text-lg my-5">
            A merchant account has already beed assigned to you. Please check
            email in the next 24hrs for details
          </h3>
          <div className="modal-action text-white">
            <label
              htmlFor="needMerchantModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedMerchantModal;
