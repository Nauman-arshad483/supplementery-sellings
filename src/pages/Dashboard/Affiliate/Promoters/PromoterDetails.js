import React, { useState } from "react";
import Search from "../../../Shared/Search";

const PromoterDetails = () => {
  const promoterInfo = [
    { id: 1, title: "Joined", value: "29 Dec 2020 23:43", icon: "calendar" },
    { id: 2, title: "Company", value: "", icon: "company" },
    { id: 3, title: "Phone Number", value: "", icon: "phone" },
    { id: 4, title: "Website", value: "", icon: "website" },
    { id: 5, title: "Country", value: "", icon: "country" },
    { id: 6, title: "Other details", value: "", icon: "other" },
  ];
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        Promoters
      </h1>
      <div className="bg-[#F7FAFC] md:flex gap-3 p-5 border-b-2">
        <div className="md:flex gap-10 md:w-1/2 w-full ">
          <div className="flex flex-col gap-5 items-center">
            <img className="w-32" src="/Icons/promoter/unknown.PNG" alt="" />
            <button className="flex justify-center items-center text-blue-500">
              <img width={15} src="/Icons/promoter/profile.PNG" alt="" /> Edit
              profile
            </button>
          </div>
          <div className="space-y-3 md:mt-0 mt-5">
            <h1 className="font-semibold text-secondary text-2xl">
              Angela{" "}
              <img
                className="inline-block w-8"
                src="/Icons/promoter/redirect.PNG"
                alt=""
              />{" "}
            </h1>
            <p className="text-blue-500">
              <img
                className="inline-block w-6"
                src="/Icons/promoter/email.PNG"
                alt=""
              />{" "}
              alealaogata@yahoo.com
            </p>
            <p>
              <img
                className="inline-block w-6"
                src="/Icons/promoter/paypal.PNG"
                alt=""
              />{" "}
              Email:
              <span className="mx-2 text-blue-500">alealaogata@yahoo.com</span>
              <img
                className="inline-block w-4"
                src="/Icons/promoter/tick3.PNG"
                alt=""
              />{" "}
            </p>
            <div className="flex items-center gap-5 cursor-pointer">
              {["facebook", "twitter", "youtube", "linkedin", "instagram"].map(
                (img) => (
                  <img
                    key={img}
                    className="inline-block w-6"
                    src={`/Icons/promoter/${img}.PNG`}
                    alt=""
                  />
                )
              )}
              <div className="border-l-2 pl-2 flex justify-center items-center gap-3">
                <img
                  className="inline-block w-6"
                  src={`/Icons/promoter/note.PNG`}
                  alt=""
                />
                <p className="text-blue-500 text-sm">Add note</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full grid md:grid-cols-3 grid-cols-2 gap-5 md:mt-0 mt-5">
          {promoterInfo.map((data) => (
            <div key={data.id}>
              <div className="flex items-center gap-3">
                <img
                  className="inline-block w-6"
                  src={`/Icons/promoter/${data.icon}.PNG`}
                  alt=""
                />
                <p className=" text-secondary">{data.title}</p>
              </div>
              <p>{data.value ? data.value : "Not set"}</p>
            </div>
          ))}
        </div>
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
};

export default PromoterDetails;

const Section2 = () => {
  const revenueDetails = [
    { id: 1, title: "Revenue ", amount: 178, infoBtn: false },
    { id: 2, title: "Clicked", amount: 0, infoBtn: false },
    { id: 3, title: "New Referrals", amount: 1, infoBtn: true },
    { id: 4, title: "New Customers", amount: 1, infoBtn: false },
    { id: 4, title: "Cancelled Customers", amount: 0, infoBtn: true },
  ];
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 2 });
  return (
    <div className="bg-[#ECF2F7] p-5 text-accent">
      <div className="md:flex justify-between items-start">
        <div className="md:w-1/2 w-full">
          <h1 className="">
            <span className="mr-2">Filter</span>
            <span className="bg-cyan-500 h-2 w-2 mr-1 inline-block rounded-full"></span>
            <span className="font-semibold text-secondary">
              Marketing Mentors Affiliate
            </span>
          </h1>
        </div>
        <div className="md:w-1/2 w-full flex justify-end">
          <div className="flex border bg-gray-100 py-2 px-3 text-accent ">
            <img
              className="opacity-60 w-6 inline mr-2"
              src="/Icons/promoter/calendar2.PNG"
              alt=""
            />
            <select className="bg-gray-100 md:text-base text-xs md:block hidden">
              <option className="" value="">
                Show more reward types (target bonuses and multiple tiers)
              </option>
            </select>
            <select className="bg-gray-100 md:text-m text-xs md:hidden block">
              <option className="md:hidden block" value="">
                Show more reward ...
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 items-center lg:px-2 px-0 ">
        {revenueDetails.map((revenue) => (
          <div
            key={revenue.id + "revenue"}
            className="md:py-7 py-3 text-center text-accent"
          >
            <h1>
              {" "}
              {revenue.infoBtn && (
                <span className="bg-cyan-500 text-white font-bold rounded-full px-1.5 text-xs cursor-pointer inline-block mr-1">
                  i
                </span>
              )}
              {revenue.title}
            </h1>
            <p className="font-semibold text-xl">
              {revenue.id === 1 && "$"}
              {revenue.amount}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex gap-1 font-semibold">
          {[
            { id: 1, btnName: "All campaign", icon: "" },
            { id: 2, btnName: "Marketing Mentor Affiliate", icon: blueCircle },
            {
              id: 3,
              btnName: "Add Campaign",
              icon: <span className="text-primary text-2xl mr-1">+</span>,
            },
          ].map((btn) => (
            <button
              key={btn.id + "glw"}
              onClick={() => setSelectedBtn2(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm py-5 ${
                selectedBtn2.id === btn.id
                  ? " border-primary bg-white"
                  : "mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.icon}
              {btn.btnName}
            </button>
          ))}
        </div>
        <div className="md:flex justify-between bg-white p-5">
          {[
            {
              id: 1,
              title: "Reward summary",
              pending: 0,
              denied: 0,
              approved: 3,
              totalUnpaid: 106.8,
            },
            {
              id: 2,
              title: "Payout summary",
              pending: 1,
              denied: 0,
              completed: 3,
              totalPaid: "nothing",
            },
          ].map((data) => (
            <div key={data.id} className="md:w-1/2 w-full">
              <h1 className="text-lg text-secondary font-semibold border-b-2 py-2">
                {data.title}
              </h1>
              <div className="flex justify-between items-center py-3">
                <div className="w-1/2 grid grid-cols-2 gap-5">
                  <p>Pending</p>{" "}
                  <p
                    className={
                      data.id === 2 && "badge badge-primary text-white rounded"
                    }
                  >
                    {data.pending}
                  </p>
                  <p>Overdue</p> <p>{data.denied}</p>
                  {data.approved && (
                    <>
                      <p>Approved</p>{" "}
                      <p className="badge badge-primary text-white rounded">
                        {data.approved}
                      </p>
                    </>
                  )}
                  {data.completed && (
                    <>
                      <p>Completed</p> <p>{data.completed}</p>
                    </>
                  )}
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                  {data.totalUnpaid && (
                    <>
                      <p>Total Unpaid {infoBtn}</p>{" "}
                      <p className="text-xl font-semibold text-secondary">
                        ${data.totalUnpaid}
                      </p>
                    </>
                  )}
                  {data.totalPaid && (
                    <>
                      <p>Paid</p>{" "}
                      <p className="text-xl font-semibold text-secondary">
                        {data.totalPaid}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const blueCircle = (
  <span className="bg-cyan-500 h-2 w-2 mr-1 inline-block rounded-full"></span>
);
const infoBtn = (
  <span className="bg-cyan-500 text-white font-bold rounded-full px-1.5 text-xs cursor-pointer inline-block mr-1">
    i
  </span>
);

const Section3 = () => {
  const [referralLink, setReferralLink] = useState(
    "https://www.roserrevenue.com?fpr=angela28/"
  );
  return (
    <div className="bg-[#ecf2f7] p-5 mt-5">
      <div className="bg-white ">
        <div className="md:flex justify-between ">
          <div className="md:w-1/2 w-full">
            <h1 className="text-lg text-secondary font-semibold border-b-2 py-3 px-5">
              Reward{" "}
              <button className="ml-2 text-xs px-3 py-1 bg-primary rounded-full text-white">
                Customize
              </button>
            </h1>
            <div className="mt-5 mb-5 p-5">
              <h1>40% recurring commission (per sale - all plans)</h1>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-lg text-secondary font-semibold border-b-2 py-3 px-5">
              Offer
              <button className="ml-2 text-xs px-3 py-1 bg-primary rounded-full text-white">
                Customize
              </button>
            </h1>
            <div className="mt-5 mb-5 p-5">
              <h1>None</h1>
            </div>
          </div>
        </div>
        <h1 className="text-lg text-secondary font-semibold border-b-2 py-2 px-5">
          Referral Link
        </h1>
        <div className="p-5">
          <div className="border border-gray-300 bg-gray-100 text-accent md:flex">
            <p className="md:w-[8%] w-full text-blue-500 bg-white p-3 md:text-[15px] sm:text-xs">
              Customize{" "}
            </p>
            <input
              className="bg-gray-100 w-full px-3 p-2 md:text-[15px] text-xs"
              type="text"
              value={referralLink}
              onChange={(e) => setReferralLink(e.target.value)}
              name=""
              id=""
            />
            <p className="md:w-[8%] w-full text-blue-500 bg-white p-3 cursor-pointer md:text-[15px] text-xs">
              copy link
            </p>
          </div>
        </div>
      </div>
      <Section4 />
    </div>
  );
};

const newBadge = (
  <span className="ml-1 badge badge-primary text-white text-xs">new</span>
);

const Section4 = () => {
  const buttonsLeft = [
    { id: 1, btnName: "Rewards", icon: "", component: <PromoterComponent /> },
    { id: 2, btnName: "Leads", icon: "", component: <LeadsComponent /> },
    {
      id: 3,
      btnName: "Customers",
      icon: "",
      component: <CustomersComponent />,
    },
    { id: 4, btnName: "Payouts", icon: "", component: <PayoutComponent /> },
    {
      id: 5,
      btnName: "Payment methods",
      icon: newBadge,
      component: <PaymentMethodComponent />,
    },
    {
      id: 6,
      btnName: "Sub-affiliates",
      icon: "",
      component: <SubAffiliateComponent />,
    },
  ];

  const [selectedBtn, setSelectedBtn] = useState(buttonsLeft[0]);

  return (
    <div className="mt-5">
      <div className="md:flex justify-between ">
        <div className="flex flex-wrap gap-1 font-semibold ">
          {buttonsLeft.map((btn) => (
            <button
              key={btn.id + "tks"}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-[12px] text-xs ${
                selectedBtn.id === btn.id
                  ? "py-5 border-primary bg-white"
                  : "py-5 mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
              {btn.icon}
            </button>
          ))}
        </div>
        <div className="flex gap-1 font-semibold">
          {[
            {
              id: 7,
              btnName: "Referrer URLs",
              icon: "",
              component: <ReferrerURLs />,
            },
            {
              id: 8,
              btnName: "Top URLs",
              icon: "",
              component: <ReferrerURLs />,
            },
          ].map((btn) => (
            <button
              key={btn.id + "8je"}
              onClick={() => setSelectedBtn(btn)}
              className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-[12px] text-sm ${
                selectedBtn.id === btn.id
                  ? "py-5 border-primary bg-white"
                  : "py-5 mt-2 border-gray-50 bg-gray-50"
              }`}
            >
              {btn.btnName}
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 bg-white">{selectedBtn.component}</div>
    </div>
  );
};

const PromoterComponent = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 9 });
  return (
    <>
      <div className="md:flex justify-between items-start mb-5">
        <div className="border">
          {[
            { id: 9, btnName: "All" },
            { id: 10, btnName: "Pending" },
            { id: 11, btnName: "Approved" },
            { id: 12, btnName: "Denied" },
          ].map((btn) => (
            <button
              key={btn.id + "e5h"}
              onClick={() => setSelectedBtn2(btn)}
              className={`px-3 text-gray-500 border-t-2 border-r-2 lg:text-md text-2xs ${
                selectedBtn2.id === btn.id
                  ? "py-2 border-t-gray-500 bg-gray-200"
                  : "py-2 border-t-gray-50 border-r-gray-200 bg-gray-50 "
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
            Add reward manually
          </button>
          <button>
            <img width={45} src="/Icons/promoter/download.PNG" alt="" />
          </button>
        </div>
      </div>
      <PromoterRewardTable />
    </>
  );
};

const PromoterRewardTable = () => {
  const tableData = [
    {
      id: 1,
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },

    {
      id: 2,
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 3,
      amount: "35.60",
      conversionValue: "89",
      createdAt: "10 Feb 2021, 17:27",
      eventId: "2",
      fromCustomer: "mkchick200@yahoo.com",
      campaign: "Marketing Mentors Affiliate",
    },
  ];

  return (
    <>
      <div className=" overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 text-xs">
              {[
                "",
                "Amount",
                "Conversion Value",
                "Created at",
                "Event Id",
                "From Customer",
                "Campaign",
                "Action",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs">
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`pl-3 py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img className="w-6" src="/Icons/promoter/tick2.PNG" alt="" />
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  ${td.amount}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  ${td.conversionValue}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.createdAt}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.eventId}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.fromCustomer}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {blueCircle} {td.campaign}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <button className="btn border-0 btn-xs bg-red-500 text-white rounded capitalize">
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">Total Items: {tableData.length}</p>
      </div>
    </>
  );
};

const LeadsComponent = () => {
  const tableData = [];
  return (
    <div>
      <div className="md:flex justify-between items-start mb-5 ">
        <div className="flex justify-end items-center">
          <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
            Add leads manually
          </button>
          <button>
            <img width={45} src="/Icons/promoter/download.PNG" alt="" />
          </button>
        </div>
        <div className="flex justify-end items-center">
          <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
            Add reward manually
          </button>
        </div>
      </div>
      <div className="md:text-base text-sm overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 ">
              {["State", "Email", "UID", "Campaign ", "Created"].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.amount}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.email}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.uid}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.campaign}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.created}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">Total Items: {tableData.length}</p>
      </div>
    </div>
  );
};

const CustomersComponent = () => {
  const tableData = [
    {
      id: 1,
      state: "active",
      email: "mkchick2000@yahoo.com",
      uid: "18",
      customerSince: "10 Feb 2021",
      plan: "price_1Hr3wdggdlgjHglsGhg",
      campaign: "Marketing Mentors Affiliate",
    },

    {
      id: 2,
      state: "active",
      email: "mkchick2000@yahoo.com",
      uid: "18",
      customerSince: "10 Feb 2021",
      plan: "price_1Hr3wdggdlgjHglsGhg",
      campaign: "Marketing Mentors Affiliate",
    },
    {
      id: 3,
      state: "active",
      email: "mkchick2000@yahoo.com",
      uid: "18",
      customerSince: "10 Feb 2021",
      plan: "price_1Hr3wdggdlgjHglsGhg",
      campaign: "Marketing Mentors Affiliate",
    },
  ];
  return (
    <>
      <div className="">
        <button>
          <img width={45} src="/Icons/promoter/download.PNG" alt="" />
        </button>
      </div>
      <div className=" overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              {[
                "State",
                "Email",
                "UID",
                "Customer since ",
                "Plan",
                "Campaign",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent text-sm">
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <span className="badge badge-primary text-white rounded">
                    {td.state}
                  </span>
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.email}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.uid}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.plan}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.customerSince}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {blueCircle} {td.campaign}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">Total Items: {tableData.length}</p>
      </div>
    </>
  );
};

const PayoutComponent = () => {
  const [selectedBtn2, setSelectedBtn2] = useState({ id: 9 });
  const tableData = [
    {
      id: 1,
      status: "pending",
      due: "in 20 days",
      amount: "71.20",
      rewardName: "",
      campaign: "Marketing Mentors Affiliate",
      paidAt: "March 09, 2021",
    },

    {
      id: 2,
      status: "pending",
      due: "in 20 days",
      amount: "71.20",
      rewardName: "",
      campaign: "Marketing Mentors Affiliate",
      paidAt: "March 09, 2021",
    },
    {
      id: 3,
      status: "pending",
      due: "in 20 days",
      amount: "71.20",
      rewardName: "",
      campaign: "Marketing Mentors Affiliate",
      paidAt: "March 09, 2021",
    },
  ];
  return (
    <>
      <div className="md:flex justify-between items-start mb-5">
        <div className="border">
          {[
            { id: 9, btnName: "All" },
            { id: 10, btnName: "Pending" },
            { id: 11, btnName: "Completed" },
          ].map((btn) => (
            <button
              key={btn.id + "345sdgs"}
              onClick={() => setSelectedBtn2(btn)}
              className={`px-3 text-gray-500 border-t-2 border-r-2 lg:text-md text-2xs ${
                selectedBtn2.id === btn.id
                  ? "py-2 border-t-gray-500 bg-gray-200"
                  : "py-2 border-t-gray-50 border-r-gray-200 bg-gray-50 "
              }`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
            Portal payout
          </button>
        </div>
      </div>
      <div className=" overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 ">
              {[
                "Status",
                "Due",
                "Amount",
                "Reward Name",
                "Campaign",
                "Paid at",
                "",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`pl-3 py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <span className="badge badge-primary text-white rounded">
                    {td.status}
                  </span>
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.due}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  ${td.amount}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.rewardName}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {blueCircle} {td.campaign}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.paidAt}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <span className="text-2xl text-blue-500 font-bold">...</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <p className="text-accent mt-5">Total Items: {tableData.length}</p>
          <div>
            <h1>
              Page{" "}
              <span className="badge badge-primary badge-lg text-white rounded">
                1
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const PaymentMethodComponent = () => {
  const tableData = [
    {
      id: 1,
      status: "ready",
      added: "29 Dec 2020",
      paymentMethod: "Paypal",
      preview: "alealaogata@yahoo.com",
      selectedOn: "Marketing Mentors Affiliate",
    },
  ];
  return (
    <div>
      <div className="md:flex justify-between items-start mb-5 ">
        <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
          <span className="font-bold mr-1">+</span> Add payment method
        </button>
      </div>
      <h1 className="mb-3 text-sm">
        The selected payment for campaign {blueCircle} Marketing Mentors
        Affiliate is{" "}
        <img
          className="inline-block mr-1"
          width={20}
          src="/Icons/promoter/paypal.PNG"
          alt=""
        />
        Paypal{" "}
      </h1>
      <div className=" overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className="text-left text-gray-500 ">
              {[
                "Status",
                "Added",
                "Payout Method",
                "Preview ",
                "Selected on",
                "",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent text-sm">
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/tick3.PNG"
                    alt=""
                  />
                  {td.status}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.added}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/paypal.PNG"
                    alt=""
                  />
                  {td.paymentMethod}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  Email: {td.preview}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {blueCircle}
                  {td.selectedOn}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/tick4.PNG"
                    alt=""
                  />
                  Selected
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SubAffiliateComponent = () => {
  const [referralLink, setReferralLink] = useState(
    "https://www.roserrevenue.com?fpr=angela28/"
  );
  const tableData = [];
  return (
    <div>
      <div className="border border-gray-300 bg-gray-100 text-accent md:flex mb-5">
        <p className=" bg-white p-3 md:text-[15px] sm:text-xs">
          Promoter recruitment link ({" "}
          <span className="text-blue-500 cursor-pointer">copy link</span> )
        </p>
        <input
          className="bg-gray-100 w-3/5 px-3 p-3 md:text-[15px] text-xs"
          type="text"
          value={referralLink}
          onChange={(e) => setReferralLink(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className="md:flex justify-between items-start mb-5 ">
        <button className=" bg-primary py-2.5 mr-2 px-7 rounded text-white text-xs md:mt-0 mt-5 ">
          <span className="font-bold mr-1">+</span> Add payment method
        </button>
        <Search />
      </div>

      <div className=" overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 ">
              {[
                "Promoter Name",
                "Email",
                "Customers",
                "Owed ",
                "Paid",
                "Revenue",
                "Joined",
              ].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white  capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/tick3.PNG"
                    alt=""
                  />
                  {td.status}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.added}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/paypal.PNG"
                    alt=""
                  />
                  {td.paymentMethod}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  Email: {td.preview}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {blueCircle}
                  {td.selectedOn}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  <img
                    className="inline-block mr-1"
                    width={20}
                    src="/Icons/promoter/tick4.PNG"
                    alt=""
                  />
                  Selected
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">Total Items: {tableData.length}</p>
      </div>
    </div>
  );
};
const ReferrerURLs = () => {
  const tableData = [];
  return (
    <div>
      <div className=" overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 ">
              {["Referrer", "Clicks", "Signups", "Customers ", ""].map((tr) => (
                <th
                  key={tr}
                  className="border-b-2 pb-5 pl-3 bg-white text-[12px] capitalize"
                >
                  {tr}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((td) => (
              <tr key={td.id} className="text-accent">
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.referrer}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.clicks}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  {td.signups}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}>
                  Email: {td.customers}
                </td>
                <td className={`py-3 ${td.id % 2 !== 0 && "bg-gray-100"}`}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-accent mt-5">
          {" "}
          <span className="font-semibold">Note:</span> This is just an
          approximation, the values shown on this table might be lower than real
          values recorded.
        </p>
      </div>
    </div>
  );
};
