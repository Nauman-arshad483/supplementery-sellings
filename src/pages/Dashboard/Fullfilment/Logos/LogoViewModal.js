import React from "react";
import logWork1 from "../../../../icons/logo_work1.PNG";
import SingleLogoRow from "./SingleLogoRow";

const ViewModal = () => {
  const logos = [
    {
      id: 1,
      fileImg: logWork1,
      fileName: "#1 File Name",
      fileSize: "354",
    },
    {
      id: 2,
      fileImg: logWork1,
      fileName: "#1 File Name",
      fileSize: "354",
    },
    {
      id: 3,
      fileImg: logWork1,
      fileName: "#1 File Name",
      fileSize: "354",
    },
    {
      id: 4,
      fileImg: logWork1,
      fileName: "#1 File Name",
      fileSize: "354",
    },
  ];
  const handleCloseViewModal = () => {
    document.getElementById("viewModal").click();
  };
  return (
    <div className="absolute">
      <input type="checkbox" id="viewModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-4xl md:max-h-full max-h-[500px] overflow-y-auto relative bg-white p-5 ">
          <label
            htmlFor="viewModal"
            className="btn btn-sm bg-white text-black hover:text-white btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="md:px-10 px-5">
            <h1 className="text-secondary text-xl font-bold py-5 mb-5 border-b">
              Company Name
            </h1>
            <h1 className="text-secondary mb-1 font-bold">Formats</h1>
            <p className=" md:block hidden  text-accent mb-5">
              The designer needs to deliver vector files (Ai, EPS, PDF) in CMYK
              and RGB color modes, and image files (JPEG, PNG)
            </p>
            {logos.map((logo) => (
              <SingleLogoRow
                key={logo.id + "logos"}
                logo={logo}
                handleCloseViewModal={handleCloseViewModal}
              />
            ))}
            <h1 className="text-secondary mb-1 font-bold mt-10">Sizes</h1>
            <p className="md:block hidden text-accent mb-5">
              The designer needs to deliver profile pics with logo in the right
              sizes for different platforms that can be clearly visible
            </p>
            <SingleLogoRow
              logo={logos[0]}
              handleCloseViewModal={handleCloseViewModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
