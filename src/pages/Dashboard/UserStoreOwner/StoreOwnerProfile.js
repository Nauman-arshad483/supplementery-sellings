import React, { useId, useState } from "react";

const StoreOwnerProfile = () => {
  const profileSections = [
    { id: 1, btnName: "Profile", component: <PersonalInformation /> },
    {
      id: 2,
      btnName: "Email & Password",
      component: <EmailAndPassword />,
    },
    {
      id: 3,
      btnName: "Plan & Subscriptions",
      component: <PlanAndSubscriptions />,
    },
    {
      id: 4,
      btnName: "Billing",
      component: "",
    },
    {
      id: 5,
      btnName: "Invoices",
      component: <Invoices />,
    },
    {
      id: 6,
      btnName: "Fulfillment Fees",
      component: "",
    },
    {
      id: 7,
      btnName: "Add Subuser",
      component: <AddSubUser />,
    },
  ];
  const [selectedBtn, setSelectedBtn] = useState(profileSections[0]);
  const id1 = useId();
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        MY PROFILE/SETTINGS
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex flex-wrap gap-1 font-semibold">
            {profileSections.map((btn) => (
              <button
                key={btn.id + id1}
                onClick={() => setSelectedBtn(btn)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm ${
                  selectedBtn.id === btn.id
                    ? "py-5 border-primary bg-white"
                    : "py-5 mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white md:p-10 p-5">{selectedBtn.component}</div>
      </div>
    </div>
  );
};

export default StoreOwnerProfile;

const PersonalInformation = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    country: "",
    address: "",
    timeZone: "",
  });

  return (
    <div className="md:mt-10 w-full md:w-3/5">
      <h1 className="font-bold text-lg  mb-10">Personal Information</h1>
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
              label: "Country:",
              type: "text",
              value: userInfo.country,
              name: "country",
            },
            {
              id: 3,
              label: "Address:",
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
              <label className="font-bold" htmlFor="">
                {data.label}
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2 border border-accent"
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

        <h1 className="font-bold text-lg  mb-10 mt-10">Company:</h1>
        <div className="w-full grid grid-cols-3 gap-3">
          {[
            {
              id: 1,
              label: "Name",
              type: "text",
              name: "name",
            },
            {
              id: 2,
              label: "Address:",
              type: "text",
              name: "address",
            },
            {
              id: 3,
              label: "Country:",
              type: "text",
              name: "country",
            },
          ].map((data) => (
            <>
              <label className="font-bold" htmlFor="">
                {data.label}
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2 border border-accent"
                type={data.type}
                placeholder=""
                name=""
                id=""
              />
            </>
          ))}
        </div>
        <input
          className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
          type="submit"
          value={"Save"}
        />
      </form>
    </div>
  );
};

const EmailAndPassword = () => {
  return (
    <div className="md:mt-10 w-full md:w-3/5">
      <form>
        <div className="w-full grid grid-cols-3 gap-3">
          {[
            {
              id: 1,
              label: "Current Password:",
              type: "password",
              name: "currentPassword",
            },
            {
              id: 2,
              label: "Email:",
              type: "email",
              name: "email",
            },
            {
              id: 3,
              label: "New Password:",
              type: "password",
              name: "newPassword",
            },
            {
              id: 4,
              label: "Confirm Password:",
              type: "password",
              name: "confirmPassword",
            },
          ].map((data) => (
            <>
              <label
                className={`${data.id === 2 && "mt-10"} inline-block font-bold`}
                htmlFor=""
              >
                {data.label}
              </label>
              <input
                className={`${
                  data.id === 2 && "mt-10"
                } text-gray-500 p-2 w-full col-span-2 border border-accent`}
                type={data.type}
                placeholder=""
                name=""
                id=""
              />
            </>
          ))}
        </div>
        <input
          className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 cursor-pointer"
          type="submit"
          value={"Save"}
        />
      </form>
    </div>
  );
};
const PlanAndSubscriptions = () => {
  return (
    <div className="md:mt-10 w-full md:w-3/5">
      <h1 className="font-bold mb-5">Credit Cards:</h1>
      <p>
        This account is billed to: <span className="font-bold">MasterCard</span>{" "}
        ending in 6685
      </p>
      <h1 className="mt-10 font-bold mb-5">Billing Address</h1>
      <p>
        None <br /> 3093 Woodcrest Way <br />
        30127, GA, US
      </p>
      <div className="md:flex justify-start mt-10">
        <label className="rounded-lg px-9 py-2 bg-primary cursor-pointer text-white">
          Update Credit Card
        </label>
        <label className="rounded-lg px-9 py-2 bg-red-500 cursor-pointer inline-block md:ml-5 text-white md:mt-0 mt-5">
          Delete Credit Card
        </label>
      </div>
    </div>
  );
};

const Invoices = () => {
  const tableData = [];
  return (
    <div className="md:mb-0 mb-5">
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Date", "Amount", "Status"].map((th) => (
                <th key={th} className="border-0 pl-3">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block h-[500px] overflow-y-auto">
            {tableData.map((data) => (
              <TableRow key={data.id + "fjd"} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-5 md:hidden block text-xs ">
        {tableData.map((data) => (
          <TableRow key={data.id + "rdg"} data={data} mobileVersion />
        ))}
      </div>
    </div>
  );
};

const TableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Date</p>
        <p>{data.date}</p>
        <p className="font-bold">Amount</p>
        <p>$ {data.amount}</p>
        <p className="font-bold">Status </p>
        <p
          className={` ${data.status === "Completed" && "text-primary"} ${
            data.status === "Send Back" && "text-red-500"
          } `}
        >
          {data.status}
        </p>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3  ">{data.date}</td>
      <td className="border-b border-gray-400 pt-5 pb-4 pl-3 text-gray-400">
        $ {data.amount}
      </td>
      <td
        className={`border-b border-gray-400 pt-5 pb-4 pl-3 ${
          data.status === "Completed" && "text-primary"
        } ${data.status === "Send Back" && "text-red-500"} `}
      >
        {data.status}
      </td>
    </tr>
  );
};

const AddSubUser = () => {
  const tableData = [
    // {
    //   id: 1,
    //   name: "Username",
    //   email: "user@yahoo.com",
    //   joinDate: "Completed",
    //   lastActivity: "active",
    // },
    // {
    //   id: 2,
    //   name: "Username",
    //   email: "user@yahoo.com",
    //   joinDate: "In Progress",
    //   lastActivity: "active",
    // },
    // {
    //   id: 3,
    //   name: "Username",
    //   email: "user@yahoo.com",
    //   joinDate: "In Progress",
    //   lastActivity: "active",
    // },
  ];
  return (
    <div className="md:mb-0 mb-5">
      <AddSubUserModal />
      <div className="bg-white pt-5 pb-16 px-5 md:block hidden">
        <table className="w-full pt-5">
          <thead className="table w-full table-fixed ">
            <tr className="text-left text-secondary ">
              {["Name", "Email", "Join Date", "Last Activity", "Actions"].map(
                (th) => (
                  <th key={th} className="border border-accent pl-3">
                    {th}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody
            className={`block ${
              tableData.length !== 0 && "h-[400px]"
            } overflow-y-auto`}
          >
            {tableData.map((data) => (
              <AddUserTableRow key={data.id + "fjd"} data={data} />
            ))}
            {tableData.length === 0 && (
              <p className="border-l border-r border-b border-accent p-5 text-center">
                No Pending Invitations Found.
              </p>
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-3 md:hidden block text-xs ">
        {tableData.map((data) => (
          <AddUserTableRow key={data.id + "rdg"} data={data} mobileVersion />
        ))}
        {tableData.length === 0 && (
          <p className="border border-accent p-5 text-center">
            No Pending Invitations Found.
          </p>
        )}
      </div>
      <div className="flex justify-start mt-10">
        <label
          htmlFor="addSubUserModal"
          className="rounded-lg px-9 py-2 bg-primary cursor-pointer text-white"
        >
          + Add Subuser
        </label>
      </div>
    </div>
  );
};
const AddUserTableRow = ({ data, mobileVersion }) => {
  if (mobileVersion) {
    return (
      <div className="grid grid-cols-2 gap-2 border-b border-gray-400 text-gray-400 pb-4 mb-5">
        <p className="font-bold">Name</p>
        <p>{data.name}</p>
        <p className="font-bold">Email</p>
        <p>{data.email}</p>
        <p className="font-bold">Join Date</p>
        <p>{data.joinDate}</p>
        <p className="font-bold">Last Activity</p>
        <p>{data.activity}</p>
        <p className="font-bold">Action</p>
        <p>{data.activity}</p>
      </div>
    );
  }

  return (
    <tr className="table w-full table-fixed text-accent ">
      <td className="border-l border-b border-r border-accent  pt-5 pb-4 pl-3  ">
        {data.name}
      </td>
      <td className="border-l border-b border-r border-accent  pt-5 pb-4 pl-3 text-gray-400">
        {data.email}
      </td>
      <td className="border-l border-b border-r border-accent  pt-5 pb-4 pl-3 text-gray-400">
        {data.joinDate}
      </td>
      <td className="border-l border-b border-r border-accent  pt-5 pb-4 pl-3 text-gray-400">
        {data.lastActivity}
      </td>
      <td className="border-l border-b border-r border-accent  pt-5 pb-4 pl-3 text-gray-400">
        action
      </td>
    </tr>
  );
};

const AddSubUserModal = () => {
  const id = useId();
  return (
    <div className="text-accent">
      <input type="checkbox" id="addSubUserModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="w-11/12 max-w-4xl bg-white px-5 flex flex-col relative">
          <label
            htmlFor="addSubUserModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
            Add Subuser
          </h1>
          <div className="md:py-10 py-5 md:px-5 px-0 grid md:grid-cols-3 grid-cols-1 gap-y-2 gap-x-5 md:w-3/5 w-full">
            {["First Name", "Last Name", "E-mail"].map((data) => (
              <React.Fragment key={data + id}>
                <label htmlFor="">{data}</label>
                <input
                  className="border border-accent py-1 px-3 w-full mt-1 col-span-2"
                  type="text"
                />
              </React.Fragment>
            ))}
          </div>

          <div className="pl-5 pb-5 flex gap-5">
            <p>Roles</p>
            <div>
              {["Admin", "Team Member"].map((data) => (
                <div key={data}>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="role"
                      id=""
                      className="radio radio-xs radio-accent mr-2"
                    />{" "}
                    {data}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end py-3 px-5">
            <label
              htmlFor="addSubUserModal"
              className="px-5 py-2 bg-primary text-white ml-3 rounded-lg cursor-pointer"
            >
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
