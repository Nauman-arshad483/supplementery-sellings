import { numberWithCommasDecimal } from "../../../../utilities/utilities";
import Search from "../../../Shared/Search";
import AnalyticsCards from "./AnalyticsCards";

const SingleStoreAnalytics = () => {
  const cards = [
    {
      id: 1,
      title: "Revenue",
      text: numberWithCommasDecimal(1456.51),
      bg: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Sales",
      text: "4",
      bg: "bg-gray-300",
      textColor: "",
    },
    {
      id: 3,
      title: "Transactions",
      text: "2",
      bg: "bg-gray-300",
      textColor: "",
    },
    {
      id: 4,
      title: "Chargebacks",
      text: "0",
      bg: "bg-gray-300",
      textColor: "",
    },
  ];
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Analytics
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <button
            className={`font-bold text-secondary md:px-5 px-3  border-b-4 border-white marker:md:text-md text-sm py-5 bg-white`}
          >
            By Store
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full bg-white px-5 pt-10">
          <div className="pl-5">
            <h1 className="text-secondary text-xl font-bold">
              Name of the Store
            </h1>
            <p className="text-sm">Name of the Store</p>
          </div>
          <div className="md:w-2/5 w-full">
            <Search />
          </div>
        </div>
        <AnalyticsCards cardsData={cards} />
      </div>
    </div>
  );
};

export default SingleStoreAnalytics;
