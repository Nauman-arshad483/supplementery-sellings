import React from "react";

const AboutProductModal = ({ product }) => {
  return (
    <div className="text-accent">
      <input type="checkbox" id="aboutProductModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white py-5 px-5 flex flex-col relative">
          <label
            htmlFor="aboutProductModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="px-5 pb-5 font-bold mb-5 border-b-2 border-accent">
            About the product
          </h3>
          <div className="flex gap-5 mb-5">
            <p>
              {" "}
              <span className="font-bold">Name: </span> {product?.name}
            </p>
            <p>
              <span className="font-bold">Price: </span>${product?.price}
            </p>
            <p>
              <span className="font-bold">Packaging: </span>
              {product?.packaging}
            </p>
          </div>
          <img
            className="mx-auto md:w-full inline-block"
            src="/Icons/product2.png"
            alt=""
          />
          <div className=" text-white flex justify-end mt-5">
            <label
              htmlFor="aboutProductModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Download
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProductModal;
