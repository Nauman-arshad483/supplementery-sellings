import React from "react";
import ProductViewModal from "../../Fullfilment/Products/ProductViewModal";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 2, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 3, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 4, name: "African Mango Drops", price: "8.95", labelDownload: "" },
  ];

  return (
    <div>
      <ProductViewModal />
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Products Catalog
      </h1>
      <div>
        <div className="bg-white md:p-5 p-0">
          <h1 className="text-secondary text-xl font-bold pl-5 pt-5">
            View products and ingredients from labels
          </h1>
          <div className="bg-white p-5 md:flex justify-between items-start">
            <div className="md:w-1/2 w-full md:mt-0 mt-3 flex bg-white items-center border border-gray-400">
              <input
                className="w-full p-2 outline-none"
                type="text"
                placeholder="Search"
              />
              {searchIcon}
            </div>
          </div>
        </div>
        <div className="bg-white p-5 md:hidden block">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-2 border-b border-gray-400 text-gray-400 pb-4 mb-5 gap-4"
            >
              <p className="font-bold">#</p>
              <p> {product.id}</p>
              <p className="font-bold">Name</p>
              <p> {product.name}</p>
              <p className="font-bold">Price</p>
              <p> {product.price}</p>
              <p className="font-bold">Action</p>

              <label
                htmlFor="productViewModal"
                className="px-2 py-1 text-blue-500 border border-blue-500 rounded-full cursor-pointer text-xs text-center"
              >
                view ingredients
              </label>
            </div>
          ))}
        </div>
        <div className="bg-white md:p-10 p-5 md:block hidden">
          <table className="w-full ">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="border-0 pb-5 pl-3">#</th>
                <th className="border-0 pb-5 pl-3">Name</th>
                <th className="border-0 pb-5 pl-3">Price</th>
                <th className="border-0 pb-5 pl-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="">
                  <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                    {product.id}
                  </td>
                  <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                    {product.name}
                  </td>
                  <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                    {product.price}
                  </td>
                  <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                    <label
                      htmlFor="productViewModal"
                      className="px-5 py-1.5 text-blue-500 border-2 border-blue-500 rounded-full cursor-pointer"
                    >
                      view ingredients
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
