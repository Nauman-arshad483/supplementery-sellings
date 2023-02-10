import React from "react";

const ProductViewModal = () => {
  return (
    <div className="absolute">
      <input type="checkbox" id="productViewModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" w-11/12 max-w-4xl bg-white py-0 px-0 flex flex-col justify-center items-center">
          <div className=" relative bg-white p-5">
            <label
              htmlFor="productViewModal"
              className="btn btn-sm bg-white text-black hover:text-white btn-circle absolute right-0 -top-8"
            >
              ✕
            </label>
            <div>
              <h1 className="text-accent text-xl border-b-2 pb-5 px-5 font-bold">
                CBD Gummies
              </h1>
              <img src={"/Icons/label.PNG"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
