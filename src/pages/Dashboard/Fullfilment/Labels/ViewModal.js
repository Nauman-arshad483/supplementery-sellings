import React from "react";
import work1 from "../../../../icons/work1.PNG";

const ViewModal = () => {
  const actionButtons = [
    {
      id: 1,
      btnName: "Approved design",
      color: "bg-primary",
      modalId: "approvedModal",
    },
    {
      id: 2,
      btnName: "Disapproved design",
      color: "bg-red-700",
      modalId: "disapprovedModal",
    },
    {
      id: 3,
      btnName: "Download label",
      color: "bg-gray-700",
      modalId: "download",
    },
    {
      id: 4,
      btnName: "Upload revisioned label",
      color: "bg-gray-700",
      modalId: "uploadModal",
    },
  ];
  const handleCloseViewModal = () => {
    document.getElementById("viewModal").click();
  };
  return (
    <div className="absolute">
      <input type="checkbox" id="viewModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-5xl md:max-h-screen max-h-[500px] overflow-y-auto relative bg-white p-5">
          <label
            htmlFor="viewModal"
            className="btn btn-sm bg-white text-black hover:text-white btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={work1} alt="" />
          <div className="grid md:grid-cols-4 grid-cols-2 md:text-lg text-xs gap-5 my-5 ">
            {actionButtons.map((btn) => (
              <label
                key={btn.id}
                onClick={handleCloseViewModal}
                htmlFor={btn.modalId}
                className={`py-3 px-2 text-center rounded-md text-gray-200 ${btn.color} cursor-pointer`}
              >
                {btn.btnName}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
