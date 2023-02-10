import React from "react";

const DeleteFileModal = () => {
  return (
    <div>
      <input type="checkbox" id="deleteFileModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-2xl bg-white md:py-20 py-5 px-5 flex flex-col justify-center items-center">
          <img
            className="w-20 inline-block"
            src="/Icons/xmark_red.png"
            alt=""
          />
          <h3 className="text-accent text-center text-lg my-5">
            Are you sure you want to delete this form?
          </h3>
          <div className="modal-action text-white">
            <label
              htmlFor="deleteFileModal"
              className="rounded-md px-9 py-2 bg-red-600 mr-5 cursor-pointer"
            >
              Delete
            </label>
            <label
              htmlFor="deleteFileModal"
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

export default DeleteFileModal;
