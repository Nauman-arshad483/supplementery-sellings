import React from "react";

const CustomTrackingURLModal = () => {
  return (
    <div className="text-accent">
      <input
        type="checkbox"
        id="customTrackingURLModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white px-5 flex flex-col relative">
          <label
            htmlFor="customTrackingURLModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="py-5  border-b-2 font-semibold text-secondary">
            Custom Tracking URL
          </h1>
          <div className="md:py-10 py-5 md:px-5 px-0">
            <label htmlFor="">Enter your custom tracking URL:</label>
            <input
              className="border border-accent py-2 px-3 w-full mt-1"
              type="text"
            />
          </div>
          <p className="md:pl-5 pl-0">
            Examples:{" "}
            <span className="text-blue-500">
              Aftership, 17Track, Cainiao, USPS
            </span>
          </p>
          <p className="md:pl-5 pl-0 pt-5 pb-10">
            Keep the input field empty to use the default tracking url
          </p>

          <div className="flex justify-between border-t-2 py-3 px-5">
            <label
              htmlFor="customTrackingURLModal"
              className="px-5 py-2 bg-accent text-white rounded-lg cursor-pointer"
            >
              Cancel
            </label>
            <label
              htmlFor="customTrackingURLModal"
              className="px-5 py-2 bg-primary text-white ml-3 rounded-lg cursor-pointer"
            >
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTrackingURLModal;
