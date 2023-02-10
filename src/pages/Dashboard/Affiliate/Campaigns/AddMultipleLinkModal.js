import React from "react";

const AddMultipleLinkModal = () => {
  return (
    <div>
      <input
        type="checkbox"
        id="addMultipleLinkModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="lg:w-[600px] w-full bg-white rounded-sm">
          <div className="flex justify-between border-b-2 relative">
            <h1 className="py-5 px-5 font-semibold text-secondary">
              Manage campaign links
            </h1>
            <label
              htmlFor="addMultipleLinkModal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-gray-400 border-gray-400"
            >
              ✕
            </label>
          </div>

          <div className="px-5 pb-5">
            <button className="px-5 py-2 bg-primary rounded-full my-7 text-white font-semibold">
              Add Link
            </button>
            <div className="modal-action">
              <label
                htmlFor="addMultipleLinkModal"
                className="cursor-pointer px-5 py-2 border-2 bg-white rounded-md"
              >
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMultipleLinkModal;
