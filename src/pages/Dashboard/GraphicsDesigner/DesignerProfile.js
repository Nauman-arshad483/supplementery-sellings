import React, { useState } from "react";
import avatar from "../../../icons/avatar.png";

const DesignerProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Mijat Stevovic",
    phone: "+382 000 000 000",
    address: "1 George Washigton Bulevard, Podgorica, Montenegro",
    timeZone: "Central European Time (CET)",
    email: "stevdesign.eu@gmail.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    portfolio: "stevdesign.wixsite.com/stev",
  });
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        My Account
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
              {[
                {
                  id: 1,
                  label: "Full Name:",
                  type: "text",
                  value: userInfo.name,
                  name: "name",
                },
                {
                  id: 2,
                  label: "Phone Number:",
                  type: "text",
                  value: userInfo.phone,
                  name: "phone",
                },
                {
                  id: 3,
                  label: "Adress:",
                  type: "text",
                  value: userInfo.address,
                  name: "address",
                },
                {
                  id: 4,
                  label: "Time Zone:",
                  type: "text",
                  value: userInfo.timeZone,
                  name: "timeZone",
                },
              ].map((data) => (
                <>
                  <label className="text-gray-500 font-bold" htmlFor="">
                    {data.label}
                  </label>
                  <input
                    className="text-gray-500 p-2 w-full col-span-2"
                    type={data.type}
                    placeholder=""
                    name=""
                    id=""
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, [data.name]: e.target.value })
                    }
                    value={data.value}
                  />
                </>
              ))}
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10"
              type="submit"
              value={"Edit"}
            />
          </form>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">Email</h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                {
                  id: 1,
                  label: "Email:",
                  type: "email",
                  value: userInfo.email,
                },
              ].map((data) => (
                <>
                  <label className="text-gray-500 font-bold" htmlFor="">
                    {data.label}
                  </label>
                  <input
                    className="text-gray-500 p-2 w-full col-span-2"
                    type={data.type}
                    placeholder=""
                    name=""
                    id=""
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    value={data.value}
                  />
                </>
              ))}
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10"
              type="submit"
              value={"Edit"}
            />
          </form>
        </div>
        <div className="my-20 w-full ">
          <h1 className="font-bold text-lg text-gray-500 mb-10">About Me</h1>
          <form>
            <div className="w-full grid grid-cols-12 gap-3">
              <label className="text-gray-500 font-bold col-span-2" htmlFor="">
                Biography:
              </label>
              <textarea
                name=""
                id=""
                className="text-gray-500 p-2 w-full col-span-10"
                rows="4"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, bio: e.target.value })
                }
                value={userInfo.bio}
              ></textarea>
              <label className="text-gray-500 font-bold col-span-2" htmlFor="">
                Portfolio:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-6"
                type="text"
                placeholder=""
                name=""
                id=""
                onChange={(e) =>
                  setUserInfo({ ...userInfo, portfolio: e.target.value })
                }
                value={userInfo.portfolio}
              />
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10"
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
            <div className="flex justify-end mt-5">
              <button className="text-gray-500 ">Forgot password</button>
            </div>
            <input
              className="bg-gray-300 text-white rounded-xl px-9 py-3 mt-10"
              type="submit"
              value={"Save"}
            />
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 ml-5"
              type="submit"
              value={"Cancel"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DesignerProfile;
