import React, { useId, useState } from "react";
import Search from "../../../../Shared/Search";
import LabelUploadModal from "./LabelUploadModal";
import RequestLabelDesign from "./RequestLabelDesign/RequestLabelDesign";
import RequestLabelDesignModal from "./RequestLabelDesign/RequestLabelDesignModal";
import SendForApprovalModal from "./SendForApprovalModal";
import SetPriceModal from "./SetPriceModal";

const LabelSection = () => {
  const labelSections = [
    { id: 1, btnName: "Uploads your labels" },
    { id: 2, btnName: "Request labels design/Choose label templates" },
  ];
  const [selectedBtn2, setSelectedBtn2] = useState(labelSections[0]);
  const ids = useId();
  const handleGoNext = () => {
    setSelectedBtn2(labelSections[1]);
  };
  return (
    <div className="p-5">
      <SetPriceModal />
      <SendForApprovalModal handleGoNext={handleGoNext} />
      <LabelUploadModal />
      <RequestLabelDesignModal
        next={"/store-owner/design-studio/website-templates"}
      />
      <div className="flex gap-1 font-semibold ">
        {labelSections.map((btn) => (
          <button
            key={btn.id + ids}
            onClick={() => setSelectedBtn2(btn)}
            className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm py-5 bg-gray-50 ${
              selectedBtn2.id === btn.id
                ? " border-primary "
                : "mt-2 border-gray-50 "
            }`}
          >
            {btn.btnName}
          </button>
        ))}
      </div>
      <div className="bg-gray-50">
        {selectedBtn2.id === 1 ? <UploadYourLabels /> : <RequestLabelDesign />}
      </div>
    </div>
  );
};

export default LabelSection;

const UploadYourLabels = () => {
  const tableData = [
    {
      id: 1,
      name: "African Mango Drops",
      upload: "",
      price: "",
    },
    {
      id: 2,
      name: "African Mango Drops",
      upload: "logo.ai",
      price: "50",
    },
    {
      id: 3,
      name: "African Mango Drops",
      upload: "",
      price: "",
    },
    {
      id: 4,
      name: "African Mango Drops",
      upload: "",
      price: "",
    },
    {
      id: 5,
      name: "African Mango Drops",
      upload: "",
      price: "",
    },
  ];
  return (
    <div className="text-accent">
      <h1 className="pl-5 pt-5 p-5 font-bold">
        Note: Please make sure to upload your label in PDF format ready for
        print
      </h1>
      <div className="pl-5 md:w-1/2 w-full">
        <Search />
      </div>
      <LabelsTable tableData={tableData} />
      <label
        htmlFor="sendForApprovalModal"
        className="px-7 py-2 bg-primary m-5 rounded-md text-white cursor-pointer"
      >
        Send for approval
      </label>
    </div>
  );
};

const LabelsTable = ({ tableData }) => {
  const ids = useId();
  return (
    <div className="md:mb-0 mb-5">
      <div className=" pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5 bg-gray-50">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["#", "Name", "Action", ""].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[450px] overflow-y-auto bg-gray-50">
            {tableData.map((data) => (
              <TableRow key={data.id + ids} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow key={data.id + "hew"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">#</p>
        <p>{data.id}</p>
        <p className="font-bold">Name</p>
        <p>{data.description}</p>
        <p className="font-bold">Action</p>
        <div className="py-2">
          {data.upload ? (
            <label
              className={`px-3 py-1.5 border-2 border-blue-500 bg-blue-500 rounded-full text-white `}
            >
              Uploaded
            </label>
          ) : (
            <label
              htmlFor="labelFileUploadModal"
              className={`px-5 py-1.5 border-2 border-blue-500 rounded-full cursor-pointer text-blue-500`}
            >
              Upload
            </label>
          )}
          {data.upload && (
            <div>
              <label
                htmlFor="labelFileUploadModal"
                className="inline-block ml-2 mt-2 cursor-pointer"
              >
                change
              </label>
              <p className="ml-2 text-red-500 cursor-pointer">remove label </p>
            </div>
          )}
        </div>
        <p className="font-bold">Action</p>
        <div className="py-2">
          {data.upload ? (
            <label
              className={`px-5 py-1.5 border-2 border-pink-500 bg-pink-500 rounded-full text-white `}
            >
              Price set
            </label>
          ) : (
            <label
              htmlFor="setPriceModal"
              className={`px-5 py-1.5 border-2 border-pink-500 rounded-full cursor-pointer text-pink-500`}
            >
              Set price
            </label>
          )}
          {data.upload && (
            <div>
              <label
                htmlFor="setPriceModal"
                className="inline-block ml-2 mt-2 cursor-pointer"
              >
                change
              </label>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">{data.id}</td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">{data.name}</td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 ">
        {data.upload ? (
          <label
            className={`px-3 py-1.5 border-2 border-blue-500 bg-blue-500 rounded-full text-white `}
          >
            Uploaded
          </label>
        ) : (
          <label
            htmlFor="labelFileUploadModal"
            className={`px-5 py-1.5 border-2 border-blue-500 rounded-full cursor-pointer text-blue-500`}
          >
            Upload
          </label>
        )}
        {data.upload && (
          <div>
            <label
              htmlFor="labelFileUploadModal"
              className="inline-block ml-2 mt-2 cursor-pointer"
            >
              change
            </label>
            <p className="ml-2 text-red-500 cursor-pointer">remove label </p>
          </div>
        )}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 mx-auto">
        {data.upload ? (
          <label
            className={`px-5 py-1.5 border-2 border-pink-500 bg-pink-500 rounded-full text-white `}
          >
            Price set
          </label>
        ) : (
          <label
            htmlFor="setPriceModal"
            className={`px-5 py-1.5 border-2 border-pink-500 rounded-full cursor-pointer text-pink-500`}
          >
            Set price
          </label>
        )}
        {data.upload && (
          <div>
            <label
              htmlFor="setPriceModal"
              className="inline-block ml-2 mt-2 cursor-pointer"
            >
              change
            </label>
          </div>
        )}
      </td>
    </tr>
  );
};
