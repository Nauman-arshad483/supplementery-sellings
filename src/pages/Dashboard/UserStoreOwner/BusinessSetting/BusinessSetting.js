import React, { useState } from "react";
import SaveSuccessModal from "./SaveSuccessModal";

const BusinessSetting = () => {
  const [inputFile, setInputFile] = useState("");
  console.log(inputFile);
  return (
    <div className="text-accent">
      <SaveSuccessModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        BUSINESS SETTINGS
      </h1>
      <div className="bg-blue-50 md:p-5 p-0">
        <div className="md:p-10 p-5 bg-white">
          <h1 className="font-bold mb-5">My Business setting</h1>

          <p className="mb-3 mt-5 font-bold text-sm">
            NOTE: Please upload vector file logo (PDF, EPS or Ai) that is no
            larger than 000MB
          </p>
          <div className="flex gap-5 items-start my-5">
            <label htmlFor="" className="text-sm">
              Upload your own logo{" "}
            </label>
            <div>
              <input
                value={inputFile}
                onChange={(e) => setInputFile(e.target.value)}
                className="mx-2 border-0 file:bg-white file:outline-0 file:text-accent file:px-5 file:py-1 file:rounded-xl file:border file:border-accent text-gray-400"
                type="file"
                name=""
                id="inputFile"
              />

              {inputFile && (
                <p className="md:ml-20 mt-3">
                  {inputFile && "My Logo.Ai"}
                  <label htmlFor="inputFile" className="mx-5">
                    change
                  </label>
                  <span
                    onClick={() => setInputFile("")}
                    className="cursor-pointer"
                  >
                    X
                  </span>
                </p>
              )}
            </div>
          </div>

          <p className="font-bold my-3 italic md:text-base text-sm">
            No Logo? Do not worry, when you go to the design studio you can
            request logo design there!
          </p>
          <form className="md:w-4/5 w-full mt-10" action="">
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                {
                  id: 1,
                  label: "Name:",
                  type: "text",
                  name: "name",
                },
                {
                  id: 2,
                  label: "Street Address",
                  type: "text",
                  name: "address",
                },
                {
                  id: 3,
                  label: "City:",
                  type: "text",
                  name: "city",
                },
                {
                  id: 4,
                  label: "State:",
                  type: "text",
                  name: "state",
                },
                {
                  id: 5,
                  label: "Zip/Postal Code:",
                  type: "text",
                  name: "zip",
                },
                {
                  id: 6,
                  label: "Country:",
                  type: "text",
                  name: "country",
                },
              ].map((data) => (
                <>
                  <label className="text-accent font-bold" htmlFor="">
                    {data.label}
                  </label>
                  <input
                    className="text-gray-500 p-2 w-full col-span-2 border border-accent"
                    type={data.type}
                    placeholder=""
                    name={data.name}
                    id=""
                  />
                </>
              ))}
            </div>
            <label
              htmlFor="saveSuccessModal"
              className="inline-block bg-slate-500 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              type="submit"
            >
              Save{" "}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetting;
