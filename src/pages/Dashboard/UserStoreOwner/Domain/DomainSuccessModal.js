import React from "react";

const DomainConnectModal = () => {
  return (
    <div>
      <input type="checkbox" id="domainSuccessModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-10 py-5 px-5 flex flex-col ">
          <h3 className="text-center text-secondary text-2xl font-bold my-5">
            Success!
          </h3>
          <h3 className="text-accent text-center text-lg mb-10">
            You just connected the domain!
          </h3>
          <img
            className="mx-auto w-20 inline-block"
            src="/Icons/tick5.png"
            alt=""
          />
          <div className=" text-white flex justify-end mt-10">
            <label
              htmlFor="domainSuccessModal"
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

export default DomainConnectModal;
