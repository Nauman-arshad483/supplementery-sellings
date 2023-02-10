import React from "react";

const EditStoreModal = () => {
  return (
    <div className="text-accent">
      <input type="checkbox" id="editStoreModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white px-5 flex flex-col relative">
          <label
            htmlFor="editStoreModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="py-5 border-b-2 font-semibold text-secondary">
            Edit Store
          </h1>
          <div className="md:py-10 py-5 md:px-5 px-0">
            {["Title", "Store URL", "Consumer key", "Consumer Secret"].map(
              (data) => (
                <div key={data} className="mb-5">
                  <label htmlFor="">{data}</label>
                  <input
                    className="border border-accent py-2 px-3 w-full mt-1"
                    type="text"
                  />
                </div>
              )
            )}
          </div>

          <div className="flex justify-between border-t-2 py-3 px-5">
            <label
              htmlFor="editStoreModal"
              className="px-5 py-2 bg-accent text-white rounded-lg cursor-pointer"
            >
              Cancel
            </label>
            <label
              htmlFor="editStoreModal"
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

export default EditStoreModal;
