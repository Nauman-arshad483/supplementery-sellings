import React, { useState } from "react";
import deleteIcon from "../../../../icons/delete_icon.png";
import ProductEditModal from "./ProductEditModal";
import ProductViewModal from "./ProductViewModal";

const Products = () => {
  const products = [
    { id: 1, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 2, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 3, name: "African Mango Drops", price: "8.95", labelDownload: "" },
    { id: 4, name: "African Mango Drops", price: "8.95", labelDownload: "" },
  ];
  const [isAddProduct, setIsAddProduct] = useState(false);
  return (
    <div>
      <ProductViewModal />
      <ProductEditModal />
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Products
      </h1>
      {isAddProduct && (
        <div className="md:p-10 p-5 md:m-24 m-0 bg-white">
          <h1 className="text-gray-500 border-b-2 pb-5 font-bold">Add New</h1>
          <form>
            <div className="flex items-center justify-start my-10">
              <h1 className="text-gray-400 mr-3">Name of the product:</h1>
              <input
                className="w-4/5 border border-gray-400 text-gray-400"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center justify-start mb-10">
              <h1 className="text-gray-400 mr-3">Price of the product:</h1>
              <input
                className="w-1/5 border border-gray-400 text-gray-400"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="md:flex items-center justify-start mb-10">
              <h1 className="text-gray-400 mr-3 md:mb-0 mb-3">
                Upload label template{" "}
              </h1>
              <input
                className="border border-none file:bg-gray-500 file:outline-none file:text-white file:px-9 file:py-1 file:rounded-xl file:border-none text-gray-400"
                type="file"
                name=""
                id=""
              />
            </div>
            <div className="md:flex items-center justify-start mb-10">
              <h1 className="text-gray-400 mr-3 md:mb-0 mb-3">
                Upload pdf with info about the product{" "}
              </h1>
              <input
                className=" border border-none file:bg-gray-500 file:outline-none file:text-white file:px-9 file:py-1 file:rounded-xl file:border-none text-gray-400"
                type="file"
                name=""
                id=""
              />
            </div>
            <div className="flex justify-end">
              <input
                className="px-7 py-2 text-white bg-primary rounded-lg md:mt-0 mt-5 text-left cursor-pointer"
                type="submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      )}
      {!isAddProduct && (
        <div>
          <div className="bg-white md:p-5 p-0">
            <h1 className="text-gray-500 text-xl font-bold pl-5 pt-5">
              View and Add New Products
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
              <button
                onClick={() => setIsAddProduct(true)}
                className="px-7 py-2 text-white bg-primary rounded-lg md:mt-0 mt-5"
              >
                Add new +
              </button>
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
                <p> $ {product.price}</p>
                <p className="font-bold">Label template</p>
                <p className="text-blue-400"> download</p>
                <p className="font-bold">Action</p>
                <p>
                  <label
                    htmlFor="productViewModal"
                    className="px-2 text-blue-500 border border-blue-500 rounded-full cursor-pointer"
                  >
                    view details
                  </label>
                </p>
                <p className="font-bold">Edit</p>
                <p>
                  <label
                    htmlFor="productEditModal"
                    className="px-2 text-pink-500 border border-pink-500 rounded-full cursor-pointer"
                  >
                    EDIT
                  </label>
                </p>
                <p className="font-bold">Delete</p>
                <button>
                  <img width={40} src={deleteIcon} alt="" />
                </button>
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
                  <th className="border-0 pb-5 pl-3">Label template</th>
                  <th className="border-0 pb-5 pl-3">Action</th>
                  <th className="border-0 pb-5 pl-3"></th>
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
                      $ {product.price}
                    </td>
                    <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-blue-400">
                      download
                    </td>
                    <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                      <label
                        htmlFor="productViewModal"
                        className="px-5 py-1 text-blue-500 border-2 border-blue-500 rounded-full cursor-pointer text-sm"
                      >
                        view details
                      </label>
                      <label
                        htmlFor="productEditModal"
                        className="ml-3 px-5 py-1 text-pink-500 border-2 border-pink-500 rounded-full cursor-pointer text-sm"
                      >
                        EDIT
                      </label>
                    </td>
                    <td className="border-t border-gray-400 pt-5 pb-14 pl-3 text-gray-400">
                      <button>
                        <img className="w-10" src={deleteIcon} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

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
