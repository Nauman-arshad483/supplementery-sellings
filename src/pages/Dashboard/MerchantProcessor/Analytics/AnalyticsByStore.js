import { useNavigate } from "react-router-dom";
import Search from "../../../Shared/Search";

const AnalyticsByStore = () => {
  const tableData = [
    {
      id: 1,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
    {
      id: 2,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
    {
      id: 3,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
    {
      id: 4,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
    {
      id: 5,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
    {
      id: 6,
      storeName: "Store name",
      storeOwner: "James Hendrix",
      created: "21 Aug 2021",
    },
  ];
  return (
    <div className="">
      <div className="md:flex justify-end items-center px-5 py-5 bg-white">
        <div className="md:w-2/5 w-full">
          <Search />
        </div>
      </div>
      <AnalyticsStoreTable tableData={tableData} />
    </div>
  );
};

export default AnalyticsByStore;

const AnalyticsStoreTable = ({ tableData }) => {
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Store Name", "Store Owner", "Created", "Action"].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[500px] overflow-y-auto">
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
  const navigate = useNavigate();
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Store Name</p>
        <p>
          {" "}
          <img
            src="/Icons/store.png"
            alt=""
            className="w-4 inline-block mr-2"
          />{" "}
          {data.storeName}
        </p>
        <p className="font-bold">Store Owner</p>
        <p> {data.storeOwner}</p>
        <p className="font-bold">Created </p>
        <p>{data.created}</p>
        <p>Action</p>
        <label
          className="cursor-pointer"
          onClick={() => navigate("store-analytics")}
        >
          <span className="inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
            view analytics
          </span>
        </label>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">
        <img src="/Icons/store.png" alt="" className="w-6 inline-block mr-2" />{" "}
        {data.storeName}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.storeOwner}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        {data.created}
      </td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        <label
          onClick={() => navigate("store-analytics")}
          className="cursor-pointer"
        >
          <span className="inline-block px-5 text-blue-500 border-blue-500 border rounded-full">
            view analytics
          </span>
        </label>
      </td>
    </tr>
  );
};
