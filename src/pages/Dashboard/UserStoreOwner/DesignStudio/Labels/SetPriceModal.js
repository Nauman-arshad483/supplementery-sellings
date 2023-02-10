import React from "react";

const SetPriceModal = () => {
  return (
    <div className="text-accent">
      <input type="checkbox" id="setPriceModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white py-10 px-5 flex flex-col relative">
          <label
            htmlFor="setPriceModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="px-5 pb-5 font-bold  border-accent text-center">
            Price
          </h3>
          <h1 className="text-center px-7 py-3 border border-secondary my-10 mx-5">
            Please select what is the retail price you will sell this product
            for on your site/store.
          </h1>

          <div className="md:my-10 md:mx-10 flex items-center gap-5">
            <select className="px-2 py-1 border border-secondary" name="" id="">
              <option value="">Currency</option>
            </select>
            <input
              className="px-2 py-1 border border-secondary"
              type="number"
              name=""
              id=""
            />
          </div>

          <div className=" text-white flex justify-end mt-5">
            <label
              htmlFor="setPriceModal"
              className="rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPriceModal;
