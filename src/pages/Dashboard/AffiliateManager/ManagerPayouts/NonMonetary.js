import React from "react";

const NonMonetary = () => {
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Payouts Overview
      </h1>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="/Icons/payouts/db.png" alt="" />
        <h1 className="my-2 lg:text-2xl text-xl font-bold text-accent uppercase">
          Fulfilments
        </h1>
        <p className="md:w-1/2 w-full text-center">
          This is the place where you'll be able to view and fulfil your
          non-monetary rewards.
        </p>
      </div>
    </div>
  );
};

export default NonMonetary;
