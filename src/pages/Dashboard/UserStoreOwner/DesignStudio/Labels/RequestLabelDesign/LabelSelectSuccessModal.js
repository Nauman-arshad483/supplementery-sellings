import React from "react";
import { useNavigate } from "react-router-dom";

const LabelSelectSuccessModal = ({ next }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="checkbox"
        id="labelSelectSuccessModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="w-11/12 max-w-2xl bg-white md:py-10 py-5 md:px-5 px-2 flex flex-col relative">
          <label
            htmlFor="labelSelectSuccessModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-secondary text-2xl font-bold my-5">
            Success!
          </h3>
          <img
            className="mx-auto w-20 inline-block mb-5"
            src="/Icons/tick5.png"
            alt=""
          />
          <h3 className="text-accent text-center text-lg mb-10">
            Your requested custom designed logo! Our professional designers will
            get back to you as soon as your logo is finished!
          </h3>

          <div className=" text-white flex justify-center gap-5 mt-10">
            <label
              onClick={() => navigate("/store-owner/home")}
              htmlFor="labelSelectSuccessModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Home
            </label>
            <label
              htmlFor="labelSelectSuccessModal"
              onClick={() =>
                navigate(
                  next ? next : "/store-owner/design-studio/website-templates"
                )
              }
              className="rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Next
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelSelectSuccessModal;
