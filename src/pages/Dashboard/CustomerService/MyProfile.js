import React from "react";
import avatar from "../../../icons/avatar.png";
import paypalLogo from "../../../icons/PayPal.svg.png";

const MyProfile = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        My Profile and setting
      </h1>
      <div className="mt-10 ">
        <h1 className="font-bold text-md text-gray-500 pb-10">Avatar</h1>
        <div className="md:flex justify-start items-center gap-10">
          <div className="avatar mr-4">
            <div className="md:w-36 w-32 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-1">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div>
            <p className="mb-10 w-full md:w-3/5 text-gray-500">
              Your avatar is one of the defining parts of your profile. It'll
              help designers or clients establish an impression of you.
            </p>
            <label
              className="bg-primary text-white rounded-xl px-7 py-3 "
              htmlFor="avatar"
            >
              <span>Upload Photo</span>
              <input className="hidden" type="file" name="" id="avatar" />
            </label>
          </div>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">
            Personal Information
          </h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                Full Name:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder="Mijat Stevovic "
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Phone Number:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder="+123 456 789 "
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Address:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder="California, USA"
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Time Zone
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder="USA +03:00 "
                name=""
                id=""
              />
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              type="submit"
              value={"Edit"}
            />
          </form>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">Email</h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                Email:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2 "
                type="email"
                placeholder="mijatstevovic@gmail.com"
                name=""
                id=""
              />
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              type="submit"
              value={"Edit"}
            />
          </form>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">
            Change My Password
          </h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                Current Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                New Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Confirm Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name=""
                id=""
              />
            </div>
            <input
              className="bg-gray-300 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              type="submit"
              value={"Save"}
            />
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 ml-5 cursor-pointer"
              type="submit"
              value={"Cancel"}
            />
          </form>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">
            Setup a payment method
          </h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                <img width={200} src={paypalLogo} alt="" />
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <input
              className="bg-gray-300 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              type="submit"
              value={"Save"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
