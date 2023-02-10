import React from "react";
import tickIcon from "../../../../icons/tick_icon.png";

const ApprovedModal = () => {
  const graphicsDesigner = "MijatStevovic";
  const client = "James Hendix";
  return (
    <div>
      <input type="checkbox" id="approvedModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-3xl md:max-h-screen max-h-[500px] overflow-y-auto relative bg-white md:px-52 py-10">
          <label
            htmlFor="approvedModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-gray-400 text-center mb-10 p-5">
            <h1 className="text-gray-500 text-3xl mb-10">Approved!</h1>
            <p>You have just approved the label design</p>
            <p>
              from grphic designer{" "}
              <span className="text-primary">{graphicsDesigner}</span>
            </p>
            <p>
              which was a client <span className="text-primary">{client}</span>
            </p>
          </div>
          <div className="flex justify-center">
            <img className="w-36" src={tickIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedModal;
