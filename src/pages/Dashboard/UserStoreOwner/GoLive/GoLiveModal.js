import React from "react";

const GoLiveModal = () => {
  return (
    <div>
      <input type="checkbox" id="goLiveModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-10 py-5 px-5 flex flex-col justify-center items-center">
          <h1 className="font-bold text-secondary text-center md:text-3xl text-xl">
            Congratulations!
          </h1>
          <p className="text-center mt-5">Here is your new website</p>
          <div className="modal-action text-white">
            <label
              htmlFor="goLiveModal"
              className="rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Home
            </label>
          </div>
          <p className="text-center mt-5">
            and please check your email for log in credentials of your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoLiveModal;
