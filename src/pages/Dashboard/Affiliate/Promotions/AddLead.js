import React from "react";

const AddLead = () => {
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        PROMOTIONS
      </h1>
      <div className="md:w-4/5 w-full mx-auto bg-white">
        <div className="flex justify-between  border-b-2">
          <h1 className="text-xl ml-5 py-5">Edit Promoter</h1>
        </div>
        <div className="p-5">
          <form action="" className="grid grid-cols-4 gap-5">
            <label
              className="text-gray-500 font-semibold text-right self-center"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
              type="email"
              name=""
              id=""
            />
            <label
              className="text-gray-500 font-semibold text-right self-center"
              htmlFor=""
            >
              UID (optional)
            </label>
            <input
              className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
              type="text"
              name=""
              id=""
            />

            <div className="md:flex gap-3">
              <input
                className="bg-slate-400 text-white rounded-md px-9 py-3 md:mt-16 mt-10 cursor-pointer md:text-md text-sm"
                type="submit"
                value={"Save"}
              />
              <input
                className="bg-slate-500 text-white rounded-md px-9 py-3 md:mt-16 mt-5 cursor-pointer md:text-md text-xs"
                type="submit"
                value={"Save (and personalize the offer/ rewards)"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLead;
