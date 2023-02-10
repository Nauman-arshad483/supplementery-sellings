import React, { useId } from "react";
import NeedMerchantModal from "./NeedMerchantModal";

const Merchant = () => {
  const sections = [{ id: 1, btnName: "Settings", route: "" }];
  const id = useId();
  return (
    <div className="text-accent">
      <NeedMerchantModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        MERCHANT
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {sections.map((btn) => (
              <button
                key={btn.id + id}
                className={` md:px-5 px-3 text-gray-500 border-b-4 border-primary md:text-md text-sm py-5 bg-white
                  `}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white md:p-10 p-5">
          <h1 className="font-bold">I Need Merchant</h1>
          <label
            htmlFor="needMerchantModal"
            className="inline-block px-9 py-2 bg-primary text-white rounded-md mt-5 cursor-pointer"
          >
            I Need Merchant
          </label>
          <div className="border-b-2 my-10"></div>
          <h1 className="font-bold">I Need Merchant</h1>
          <div className="md:w-1/2 w-full py-5 text-accent bg-white">
            {[
              { id: 1, label: "USERNAME", type: "text" },
              { id: 2, label: "PASSWORD", type: "text" },
            ].map((d) => (
              <div key={d} className="w-full my-3">
                <label className="w-full mb-2 inline-block" htmlFor="">
                  {d.label}
                </label>
                <input
                  className="w-full bg-gray-200 py-1.5 px-3"
                  type={d.type}
                  name=""
                  id=""
                />
              </div>
            ))}
            {[
              { id: 1, label: "API KEY", type: "text", placeholder: "" },
              { id: 2, label: "AUTH KEY", type: "text", placeholder: "Hide" },
            ].map((d) => (
              <div key={d} className="w-full my-3">
                <label className="w-full mb-2 inline-block" htmlFor="">
                  {d.label}
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-gray-200 py-1.5 px-3"
                    type={d.type}
                    placeholder={d.placeholder}
                    name=""
                    id=""
                  />
                  <img
                    className="w-5 absolute top-2 right-2 cursor-pointer"
                    src="/Icons/copytoclipboard.png"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start">
            <label
              htmlFor="viewCredentialModal"
              className="rounded-lg px-9 py-2 bg-gray-400 cursor-pointer text-white"
            >
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
