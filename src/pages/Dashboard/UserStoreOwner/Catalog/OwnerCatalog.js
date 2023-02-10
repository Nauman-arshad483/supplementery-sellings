import React, { useState } from "react";
import AboutProductModal from "./AboutProductModal";
import AddToCartModal from "./AddToCartModal";

const OwnerCatalog = () => {
  const products = [
    {
      id: 1,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 2,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 3,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 4,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 5,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 6,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 7,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
    {
      id: 8,
      img: "/Icons/bottle.png",
      name: "African Mango Drops",
      price: 8.95,
      packaging: "Blue Boston Round Glass, Bottle w/dropper",
      dimensions: `2" x 4"`,
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <div>
      <AboutProductModal product={selectedProduct} />
      <AddToCartModal />
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        CATALOG
      </h1>
      <div className="grid md:grid-cols-4 gird-cols-2 gap-10">
        {products.map((product) => (
          <SingleProduct
            setSelectedProduct={setSelectedProduct}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default OwnerCatalog;

const SingleProduct = ({ product, setSelectedProduct }) => {
  return (
    <div className="group bg-white relative overflow-hidden">
      <div className="mb-20">
        <img className="w-42" src={product.img} alt="" />
      </div>
      <p className="bg-[#E05C7C] text-center absolute bottom-0 left-0 w-full px-3 py-2 text-white">
        {product.name}
      </p>
      <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-300 transition-all flex flex-col justify-center items-center left-0 bg-[#E05C7C] text-white p-2 text-center">
        <h1 className="md:text-2xl text-xl mb-5">{product.name}</h1>
        <p>Packaging: {product.packaging}</p>
        <p className="my-5">Dimension: {product.dimensions}</p>
        <div className="flex justify-between gap-3">
          <label
            className="cursor-pointer"
            onClick={() => setSelectedProduct(product)}
            htmlFor="aboutProductModal"
          >
            <img className="w-8" src="/Icons/search.png" alt="" />
          </label>
          <label
            className="cursor-pointer"
            onClick={() => setSelectedProduct(product)}
            htmlFor="addToCartModal"
          >
            <img className="w-8" src="/Icons/cart.png" alt="" />
          </label>
        </div>
      </div>
    </div>
  );
};
