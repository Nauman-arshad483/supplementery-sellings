import React, { useState } from "react";

const EditPromoter = () => {
  const editSteps = [
    {
      id: 1,
      btnName: "Main",
      component: <MainStep />,
    },
    {
      id: 2,
      btnName: "Login",
      component: <LoginStep />,
    },
    {
      id: 3,
      btnName: "Details",
      component: <DetailsStep />,
    },
  ];

  const [selectedBtn, setSelectedBtn] = useState(editSteps[0]);

  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        Promoters
      </h1>
      <div className="md:w-3/5 w-full mx-auto bg-white">
        <div className="flex justify-between  border-b-2">
          <h1 className="text-xl ml-5 py-5">Edit Promoter</h1>
          <div>
            {
              <div className="flex gap-1 font-semibold">
                {editSteps.map((btn) => (
                  <button
                    key={btn.id + "dsgjks"}
                    onClick={() => setSelectedBtn(btn)}
                    className={`md:px-5 px-2 text-gray-500 border-b-4 md:text-md text-sm ${
                      selectedBtn.id === btn.id
                        ? "py-2 border-primary bg-white"
                        : "md:py-5 py-0 border-gray-100 bg-gray-100"
                    }`}
                  >
                    {btn.btnName}
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
        {selectedBtn.component}
      </div>
    </div>
  );
};

export default EditPromoter;

// flex justify-between

const saveButtons = (
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
);

const MainStep = () => {
  return (
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
          First Name
        </label>
        <input
          className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
          type="text"
          name=""
          id=""
        />
        <label
          className="text-gray-500 font-semibold text-right self-center"
          htmlFor=""
        >
          Last Name
        </label>
        <input
          className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
          type="text"
          name=""
          id=""
        />
        <label
          className="text-gray-500 font-semibold text-right mt-3"
          htmlFor=""
        >
          Customer ID
        </label>
        <div className="w-full col-span-3">
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <p className="text-sm mt-1">If the promoter is also your customers</p>
        </div>
        {saveButtons}
      </form>
    </div>
  );
};

const LoginStep = () => {
  return (
    <div className="p-5">
      <form action="" className="grid grid-cols-4 gap-5">
        <label
          className="text-gray-500 font-semibold text-right self-center"
          htmlFor=""
        >
          Change Password
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
          Re-type password
        </label>
        <input
          className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
          type="text"
          name=""
          id=""
        />
        <label
          className="text-gray-500 font-semibold text-right self-center"
          htmlFor=""
        >
          Authentication
        </label>
        <input
          className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
          type="text"
          name=""
          id=""
        />

        {saveButtons}
      </form>
    </div>
  );
};
const DetailsStep = () => {
  return (
    <div className="p-5">
      <form action="">
        <div className="grid grid-cols-4 gap-5">
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            Website
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
            Phone number
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            Company name
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            VAT ID
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            Country
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            Address
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />
          <label
            className="text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            Avatar URL
          </label>
          <input
            className="text-gray-500 bg-gray-100 rounded border-2 border-gray-300 p-2 w-full col-span-3"
            type="text"
            name=""
            id=""
          />

          <label
            className="block text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            W9 form
          </label>
          <div className="col-span-3 mb-3">
            <label
              className="bg-slate-400 text-white rounded-xl px-7 py-2 cursor-pointer"
              htmlFor="avatar"
            >
              <span>Upload Photo</span>
              <input className="hidden" type="file" name="" id="avatar" />
            </label>
          </div>

          <label
            className="block text-gray-500 font-semibold text-right self-center"
            htmlFor=""
          >
            W9 form
          </label>
          <div className="col-span-3">
            <label
              className="bg-slate-400 text-white rounded-xl px-7 py-2 cursor-pointer"
              htmlFor="avatar"
            >
              <span>Upload Photo</span>
              <input className="hidden" type="file" name="" id="avatar" />
            </label>
          </div>
        </div>
        {saveButtons}
      </form>
    </div>
  );
};
