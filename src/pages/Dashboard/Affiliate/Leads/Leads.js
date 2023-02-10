import React from "react";

const Leads = () => {
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 my-5 lg:text-2xl text-xl font-bold text-accent uppercase">
        REFERRED LEADS
      </h1>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="/Icons/promoter/leads.PNG" alt="" />
        <h1 className="my-2 lg:text-2xl text-xl font-bold text-accent uppercase">
          REFERRED LEADS
        </h1>
        <p className="md:w-1/2 w-full text-center">
          On this section you'll see all the leads referred by your promoters
          that are not paying customers (yet), including trial signups
        </p>
      </div>
    </div>
  );
};

export default Leads;
