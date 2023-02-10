import React, { useRef } from "react";

const LabelViewModal = ({ label, width }) => {
  const modalRef = useRef();
  return (
    <div className="text-accent">
      <input
        ref={modalRef}
        type="checkbox"
        id="labelViewModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle ">
        <div
          className={`w-11/12  ${
            width ? "max-w-lg" : "max-w-2xl"
          }  py-5 px-5 flex flex-col relative`}
        >
          <label
            htmlFor="labelViewModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="bg-white p-5">
            <img className="mx-auto md:w-full w-44" src={label?.img} alt="" />
          </div>

          <div className=" text-white flex justify-center gap-5 mt-5">
            <label
              className="px-9 py-1.5 bg-accent rounded-md cursor-pointer"
              htmlFor="labelViewModal"
            >
              Close
            </label>
            <label
              onClick={() => modalRef.current.click()}
              className="px-9 py-1.5 bg-primary rounded-md cursor-pointer"
              htmlFor="selectLabelTemplateModal"
            >
              Select
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelViewModal;
