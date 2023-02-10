import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../../icons/avatar.png";

const AffiliateProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        My Profile and setting
      </h1>
      <h1 className="text-xl text-secondary font-bold my-10">
        {" "}
        <img
          className="inline-block mr-2"
          width={15}
          src="/Icons/profile2.png"
          alt=""
        />{" "}
        USER
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
                Company Name:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Name and Lastname:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Email:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="email"
                placeholder=""
                name=""
                id=""
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Phone
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name=""
                id=""
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
          <h1 className="font-bold text-lg text-gray-500 mb-10">Email</h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                {
                  id: 1,
                  label: "Email:",
                  value: "stevdesign.eu@gmail.com",
                  type: "email",
                  additionalInfo: "",
                },
                {
                  id: 2,
                  label: "'Reply-to' Email",
                  value: "",
                  type: "email",
                  additionalInfo:
                    "All emails sent to promoters will have  this email as Reply-To email. If you want different emails per campaign, please contact us.",
                },
                {
                  id: 3,
                  label: "'From' (sender) name",
                  value: "",
                  type: "text",
                  additionalInfo:
                    "Sender name for the emails sent to promoters.",
                },
              ].map((input) => (
                <React.Fragment key={input.id}>
                  <label className="text-gray-500 font-bold" htmlFor="">
                    {input.label}
                  </label>
                  <div className="col-span-2">
                    <input
                      className="text-gray-500 p-2 w-full "
                      type={input.type}
                      value={input.value}
                      name=""
                      id=""
                    />
                    <p className="text-accent mt-2">{input.additionalInfo}</p>
                  </div>
                </React.Fragment>
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
      <div>
        <h1 className="text-xl text-secondary font-bold my-10">
          {" "}
          <img
            className="inline-block mr-2"
            width={18}
            src="/Icons/gear2.png"
            alt=""
          />{" "}
          LINKS AND CURRENCY
        </h1>
        <div className="md:ml-10 ml-0 my-20 w-full md:w-3/5">
          <form>
            {[
              {
                id: 1,
                label: "Product/Website name",
                value: "",
                type: "text",
                additionalInfo: "",
              },
              {
                id: 2,
                label: "Website url",
                value: "",
                type: "text",
                additionalInfo: "",
              },
              {
                id: 3,
                label: "FirstPromoter Subdomain",
                value: "",
                type: "text",
                additionalInfo: "",
              },
              {
                id: 4,
                label:
                  "Your website sub-domain for the affiliate/referral program",
                value: "",
                type: "text",
                additionalInfo: "",
              },
              {
                id: 5,
                label: "Currency",
                value: "",
                type: "text",
                additionalInfo: "",
              },
            ].map((input) => (
              <React.Fragment key={input.id}>
                <label className="text-gray-500 font-bold" htmlFor="">
                  {input.label}
                </label>
                <div className="mt-2">
                  <input
                    className="border border-gray-500 text-gray-500 p-2 w-full "
                    type={input.type}
                    value={input.value}
                    name=""
                    id=""
                  />
                  <p className="text-accent mt-2">{input.additionalInfo}</p>
                </div>
              </React.Fragment>
            ))}
          </form>
        </div>
        <h1 className="text-xl text-secondary font-bold my-10">
          {" "}
          <img
            className="inline-block mr-2"
            width={18}
            src="/Icons/threegear2.png"
            alt=""
          />{" "}
          NTEGRATIONS
        </h1>
        <div className="md:ml-10 ml-0 my-20 w-full md:w-3/5">
          <form>
            {[
              {
                id: 1,
                label: "Account Id",
                value: "",
                type: "text",
                additionalInfo: "",
              },
              {
                id: 2,
                label: "API key",
                value: "",
                type: "text",
                additionalInfo: "",
              },
            ].map((input) => (
              <React.Fragment key={input.id}>
                <label className="text-gray-500 font-bold" htmlFor="">
                  {input.label}
                </label>
                <div className="mt-2">
                  <input
                    className="border border-gray-500 text-gray-500 p-2 w-full "
                    type={input.type}
                    value={input.value}
                    name=""
                    id=""
                  />
                  <p className="text-accent mt-2">{input.additionalInfo}</p>
                </div>
              </React.Fragment>
            ))}
            <button
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
              onClick={() => navigate("setup-instructions")}
            >
              Setup Instructions and Testing
            </button>
            <button
              onClick={() => navigate("view-integrations")}
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 ml-5 cursor-pointer"
            >
              View Integrations
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProfile;
