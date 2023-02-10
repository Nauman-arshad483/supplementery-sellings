import React from "react";

const DisapprovedModal = () => {
  return (
    <div>
      <input type="checkbox" id="disapprovedModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-3xl md:max-h-full max-h-[600px] overflow-y-auto relative bg-white md:px-24 md:py-10 py-5">
          <label
            htmlFor="disapprovedModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-gray-400 text-center mb-10 p-5">
            <h1 className="text-red-500 md:text-3xl text-2xl mb-5">
              You want to dissapprove the design?
            </h1>
            <p>Please provide all the details why the design has been</p>
            <p>dissapproved so our designers can make the changes</p>
            <textarea
              placeholder="Type your text here"
              name=""
              id=""
              cols="20"
              rows="7"
              className="border-2 p-3 mt-5 w-full"
            ></textarea>
            <button className="bg-primary text-white px-7 py-3 text-center mt-10 rounded-md">
              Send to the designer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisapprovedModal;
