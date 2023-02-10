import React from "react";

const SingleLogoRow = ({ logo, handleCloseViewModal }) => {
  return (
    <>
      <div className="md:flex hidden justify-between items-center gap-5 mb-5 text-accent">
        <img width={80} src={logo.fileImg} alt="" />
        <div>
          <h1 className="text-secondary">{logo.fileName}</h1>
          <p>
            5 minutes ago <span className="ml-5">{logo.fileSize}mb</span>
          </p>
        </div>
        <label
          htmlFor=""
          onClick={handleCloseViewModal}
          className="text-xs cursor-pointer px-3 py-1 bg-secondary text-gray-100 rounded-lg md:mx-16 mx-2"
        >
          Download
        </label>
        <div>
          <label
            onClick={handleCloseViewModal}
            htmlFor="approvedModal"
            className="text-xs cursor-pointer px-3 py-1 bg-primary text-gray-100 rounded-lg mr-3"
          >
            Approve
          </label>
          <label
            onClick={handleCloseViewModal}
            htmlFor="disapprovedModal"
            className="text-xs cursor-pointer px-3 py-1 bg-red-600 text-gray-100 rounded-lg"
          >
            Disapprove
          </label>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center gap-5 mb-5 text-accent">
        <div className="flex items-center w-3/5 text-sm">
          <img className="" width={80} src={logo.fileImg} alt="" />
          <div className="ml-2 flex gap-5">
            <div>
              <h1 className="text-secondary">{logo.fileName}</h1>
              <p> 5 minutes ago</p>
            </div>
            <p>{logo.fileSize} mb</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label
            htmlFor=""
            onClick={handleCloseViewModal}
            className="text-xs cursor-pointer px-3 py-1 bg-secondary text-gray-100 rounded-lg md:mx-16 mx-2"
          >
            Download
          </label>
          <label
            onClick={handleCloseViewModal}
            htmlFor="approvedModal"
            className="text-xs cursor-pointer px-3 py-1 bg-primary text-gray-100 rounded-lg mr-3"
          >
            Approve
          </label>
          <label
            onClick={handleCloseViewModal}
            htmlFor="disapprovedModal"
            className="text-xs cursor-pointer px-3 py-1 bg-red-600 text-gray-100 rounded-lg"
          >
            Disapprove
          </label>
        </div>
      </div>
    </>
  );
};

export default SingleLogoRow;
