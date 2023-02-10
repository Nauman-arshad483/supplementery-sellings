import React from "react";

const UploadedDesigns = ({ selectedButton, setSelectedButton }) => {
  const handleOnClick = () => {
    setSelectedButton({
      ...selectedButton,
      uploadFile: true,
      uploadedDesign: false,
    });
  };
  return (
    <div className="mb-5">
      <h1 className="my-10 text-secondary font-bold">
        Uploaded Designs in Progress
      </h1>
      <div className="flex gap-5">
        {["/Icons/work4.png", "/Icons/work4.png", "/Icons/work4.png"].map(
          (images) => (
            <div>
              <img key={images} className="w-44 " src={images} alt="" />
              <p className="mt-3">Logo V01.JPEG</p>
            </div>
          )
        )}
      </div>
      <div className="flex justify-end mt-10">
        <button
          onClick={handleOnClick}
          className="bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-9"
        >
          Upload Final Files
        </button>
      </div>
    </div>
  );
};

export default UploadedDesigns;
