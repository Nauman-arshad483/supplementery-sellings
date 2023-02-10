import React from "react";

const EditPayout = () => {
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        Payouts Overview
      </h1>

      <div className="bg-white lg:w-3/5 w-full mx-auto lg:mt-20 mt-2">
        <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
          Edit Promotion
        </h1>
        <div className="py-5">
          <div className="md:flex justify-between items-center px-5 mb-5">
            {[
              {
                id: 1,
                title: "For Campaign",
                subTitle: "Marketing Mentors Affiliate",
              },
              { id: 2, title: "By Promoter", subTitle: "Angela" },
            ].map((data) => (
              <div key={data.id} className="md:w-1/2 w-full">
                <h1 className="text-secondary">{data.title}</h1>
                <p className="text-blue-600 mt-2">{data.subTitle}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 border-t-2 "></div>
          <div className="grid grid-cols-3 gap-5 my-10">
            <h1 className="text-end">Status</h1>
            <div className="flex flex-col col-span-2 gap-3">
              <label className="flex items-center gap-3" htmlFor="pending ">
                <input
                  type="radio"
                  name="status"
                  className="radio radio-primary"
                />{" "}
                pending
              </label>
              <label className="flex items-center gap-3" htmlFor="complete">
                <input
                  type="radio"
                  name="status"
                  className="radio radio-primary"
                />{" "}
                complete
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-start bg-gray-100 border-t-2 py-3 px-5">
          <button className="px-5 py-2 border-2 bg-gray-500 text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPayout;
