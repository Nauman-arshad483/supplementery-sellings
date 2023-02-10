import React from "react";

const ResendCredentialModal = () => {
  return (
    <div>
      <input
        type="checkbox"
        id="resendCredentialModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-20 py-5 px-5 flex flex-col justify-center items-center">
          <img className="w-20 inline-block" src="/Icons/resend.png" alt="" />
          <h3 className="text-accent text-center text-lg my-5">
            Are you sure you want to resend?
          </h3>
          <div className="modal-action text-white">
            <label
              htmlFor="resendCredentialModal"
              className="rounded-md px-9 py-2 bg-[#3278B7] mr-5 cursor-pointer"
            >
              Resend
            </label>
            <label
              htmlFor="resendCredentialModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendCredentialModal;
