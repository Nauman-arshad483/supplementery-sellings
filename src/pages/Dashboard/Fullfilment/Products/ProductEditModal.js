import React from "react";

const ProductEditModal = () => {
  return (
    <div className="absolute">
      <input type="checkbox" id="productEditModal" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-3xl md:max-h-screen max-h-[600px] overflow-y-auto md:p-10 p-5 md:m-24 m-0 bg-white relative">
          <label
            htmlFor="productEditModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-gray-500 border-b-2 pb-5 font-bold">
            Edit Product
          </h1>
          <form>
            <div className="flex items-center justify-start my-10">
              <h1 className="text-gray-400 mr-3">Name of the product:</h1>
              <input
                className="w-3/5 border border-gray-400 text-gray-400"
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
            <div className="flex justify-between">
              <label
                htmlFor="productEditModal"
                className="px-7 py-2 text-white bg-gray-400 rounded-lg md:mt-0 mt-5 text-left cursor-pointer"
              >
                Cancel
              </label>
              <label
                htmlFor="productEditModal"
                className="px-7 py-2 text-white bg-primary rounded-lg md:mt-0 mt-5 text-left cursor-pointer"
                type="submit"
                value="Save"
              >
                Save
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEditModal;
