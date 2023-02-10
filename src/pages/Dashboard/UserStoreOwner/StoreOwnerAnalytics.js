import React, { useId } from "react";

const StoreOwnerAnalytics = () => {
  const id = useId();
  return (
    <div className="text-accent">
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        ANALYTICS
      </h1>
      <div className="p-5 bg-white">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:space-y-0 space-y-5">
          {[
            {
              id: 1,
              title: "Head Tracking Code",
              text: "Funnel wide tracking code for the head tag",
            },
            {
              id: 2,
              title: "Body Tracking Code",
              text: "Funnel wide tracking codes for the body tag",
            },
          ].map((data) => (
            <div key={data.id + id}>
              <h1 className="font-bold">{data.title}</h1>
              <textarea
                className="border border-accent my-3 w-full px-3 py-2"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <label className="rounded-lg px-9 py-2 bg-primary cursor-pointer text-white">
            Save
          </label>
        </div>
      </div>
    </div>
  );
};

export default StoreOwnerAnalytics;
