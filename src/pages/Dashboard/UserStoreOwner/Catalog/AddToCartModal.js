import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCartModal = () => {
  const navigate = useNavigate();
  return (
    <div className="text-accent">
      <input type="checkbox" id="addToCartModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white py-5 px-5 flex flex-col relative">
          <label
            htmlFor="addToCartModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="px-5 pb-5 font-bold  border-accent text-center">
            YOU ADDED THIS PRODUCT!
          </h3>
          <h1 className="text-center px-7 py-3 border border-secondary my-10 mx-5">
            NOTE: This product has been added under “Design Studio” inside
            “Labels”
          </h1>

          <div className=" text-white md:flex justify-center mt-5">
            <label
              onClick={() => navigate("/store-owner/design-studio")}
              htmlFor="addToCartModal"
              className="text-center block rounded-md px-9 py-2 bg-gray-400 cursor-pointer mr-5 "
            >
              Visit design studio
            </label>
            <label
              htmlFor="addToCartModal"
              className="text-center md:mt-0 mt-5 block rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Continue adding products
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
