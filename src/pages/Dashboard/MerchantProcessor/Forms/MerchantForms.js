import React, { useState } from "react";
import Search from "../../../Shared/Search";
import AllClientStatuses from "./AllClientStatuses";
import DeleteFileModal from "./DeleteFileModal";

const MerchantForms = () => {
  const formsButton = [
    { id: 1, btnName: "All Forms", component: <AllForms /> },
    {
      id: 2,
      btnName: "All client statuses",
      component: <AllClientStatuses />,
    },
  ];
  const [selectedBtn2, setSelectedBtn2] = useState(formsButton[0]);

  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Forms
      </h1>

      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {formsButton.map((btn) => (
              <button
                key={btn.id + "3dgs"}
                onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
          <div className="flex gap-1 font-semibold">
            {[
              { id: 3, btnName: "Approved", component: <AllForms /> },
              { id: 4, btnName: "Send back", component: <AllForms /> },
              { id: 5, btnName: "Pending", component: <AllForms /> },
            ].map((btn) => (
              <button
                key={btn.id + "het"}
                // onClick={() => setSelectedBtn2(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn2.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        {selectedBtn2.component}
      </div>
    </div>
  );
};

export default MerchantForms;

const AllForms = () => {
  const tableData = [
    {
      id: 1,
      fileName: "Application Form - Completed and Signed",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 2,
      fileName: "Ad Network Letter",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 3,
      fileName: "Agreement and Link to the Terms",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 4,
      fileName: "Merchant Reserve Acknowledgement",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 5,
      fileName: "Compliance Monitoring Set-Up Form",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 6,
      fileName: "Fulfillment Agreement",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 7,
      fileName: "ID and utility bill for owners (90 days)",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 8,
      fileName: "Corporate Registration",
      dateAdded: "21 Aug 2021",
    },
    {
      id: 9,
      fileName: "Business Licenses",
      dateAdded: "21 Aug 2021",
    },
  ];
  return (
    <>
      <div className="md:flex justify-between items-center px-5 py-2 bg-white">
        <button className=" my-3 px-7 py-3 bg-primary rounded-md text-white">
          Add New +
        </button>
        <Search />
      </div>
      <FormsTable tableData={tableData} />
      <DeleteFileModal />
    </>
  );
};

const FormsTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-10">
      <div className="bg-white pt-5 pb-16 pl-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="grid grid-cols-4 text-secondary ">
              {["File Name", "Date added", "Action"].map((th) => (
                <th
                  key={th}
                  className={` ${
                    th === "File Name" && "col-span-1 md:col-span-2"
                  } border-0 pl-3`}
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[500px] scrollbar overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "promoter"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs">
        {tableData.map((data) => (
          <TableRow key={data.id + "promoter"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">File Name</p>
        <p>
          <img className="w-6 mr-3 inline-block" src="/Icons/file.png" alt="" />{" "}
          {data.fileName}
        </p>
        <p className="font-bold">Date added</p>
        <p> {data.dateAdded}</p>
        <p className="font-bold">Action </p>
        <div>
          <label className="cursor-pointer" htmlFor="deleteFileModal">
            <img
              className="w-6 inline-block"
              src="/Icons/xmark_red.png"
              alt=""
            />
          </label>
          <button className="ml-2">
            <img
              className="w-6 inline-block"
              src="/Icons/download2.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="table w-full grid grid-cols-4 text-accent ">
      <td className="col-span-2 border-b border-gray-400 pt-5 pb-4 pl-3  ">
        <img className="w-6 mr-3 inline-block" src="/Icons/file.png" alt="" />
        {data.fileName}
      </td>
      <td className=" border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.dateAdded}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label className="cursor-pointer" htmlFor="deleteFileModal">
          <img className="w-6 inline-block" src="/Icons/xmark_red.png" alt="" />
        </label>
        <label htmlFor="" className="cursor-pointer ml-2">
          <img className="w-6 inline-block" src="/Icons/download2.png" alt="" />
        </label>
      </td>
    </tr>
  );
};
