import React, { useId } from "react";

const ViewIntegrations = () => {
  const integrationsData = [
    {
      id: 1,
      title: "SMTP server",
      logo: "smtp",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 2,
      title: "Paypal Payouts API",
      logo: "paypal2",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 3,
      title: "Shopify",
      logo: "shopify",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 4,
      title: "Custom",
      logo: "tracking",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 5,
      title: "Chargebee",
      logo: "chargebee",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 6,
      title: "Recurly",
      logo: "recurly",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 7,
      title: "Braitree",
      logo: "braintree",
      info: "Use your won domain and SMTP server to send emails",
    },
    {
      id: 8,
      title: "Stripe",
      logo: "stripe",
      info: "Use your won domain and SMTP server to send emails",
    },
  ];
  const ids = useId();
  return (
    <div className="text-accent">
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        My Profile and setting
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
        {integrationsData.map((data) => (
          <SingleCard data={data} key={data.id + ids}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default ViewIntegrations;

const SingleCard = ({ data }) => {
  return (
    <div className="bg-white flex flex-col justify-between">
      <h1 className="py-5 px-5 border-b-2 font-semibold text-secondary">
        {data.title}
      </h1>
      <div className="p-5 ">
        <img className="w-full" src={`/Icons/${data.logo}.PNG`} alt="" />
        <p className="text-center">{data.info}</p>
      </div>
      <div className="flex justify-start bg-gray-100 border-t-2 py-3 px-5">
        <button className="px-5 py-2 border-2 bg-primary text-white rounded-md">
          Setup
        </button>
      </div>
    </div>
  );
};
