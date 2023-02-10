import React, { useRef } from "react";

const SelectLabelTemplateModal = ({ label }) => {
  const modalRef = useRef();
  return (
    <div className="text-accent">
      <input
        ref={modalRef}
        type="checkbox"
        id="selectLabelTemplateModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-2xl py-5 px-5 flex bg-white relative">
          <label
            htmlFor="selectLabelTemplateModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="md:w-1/2 w-full bg-white p-5 order-2">
            <img className="mx-auto md:w-96 w-44" src={label?.img} alt="" />
          </div>

          <div className="md:w-1/2 w-full order-1 text-white flex flex-col justify-center gap-5 mt-5 ">
            <h1 className="font-bold text-accent">
              Are you sure you want to select this label template?
            </h1>
            <label
              className="px-9 py-1.5 bg-accent rounded-md cursor-pointer text-center text-sm"
              htmlFor="selectLabelTemplateModal"
            >
              No, take me back to templates
            </label>
            <label
              onClick={() => modalRef.current.click()}
              className="px-9 py-1.5 bg-primary rounded-md cursor-pointer text-center text-sm"
              htmlFor="labelSelectSuccessModal"
            >
              Yes! I want this label!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLabelTemplateModal;
