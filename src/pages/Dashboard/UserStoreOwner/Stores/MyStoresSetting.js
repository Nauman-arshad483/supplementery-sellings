import React, { useId } from "react";

const MyStoresSetting = () => {
  const autoFullFillInputs = [
    { id: 1, name: "Aliexpress Shipping Method", type: "number" },
    { id: 2, name: "Automatically Mark as Ordered", type: "radio" },
    { id: 3, name: "Automatically Fulfill", type: "number" },
    { id: 4, name: "Send Shipping Confirmation", type: "number" },
    { id: 5, name: "Only when Tracking Number is valid", type: "radio" },
  ];
  const othersInput = [
    {
      id: 1,
      name: "Save Supplier Order ID as standard Order Notes",
      type: "radio",
    },
    {
      id: 2,
      name: "Save Supplier Order ID as Additional Details",
      type: "radio",
    },
    { id: 3, name: "Save Supplier Order ID as Order Tag", type: "radio" },
    { id: 4, name: "Tags - Order Placed", type: "text" },
    { id: 5, name: "Tags - Tracking Number Added", type: "text" },
    {
      id: 6,
      name: "Send Custom Line Attributes along with the note to the seller",
      type: "radio",
    },
    { id: 7, name: "Enable Order Risk Levels", type: "radio" },
    {
      id: 8,
      name: "Enable notification(s) for delayed Tracking Number syncing",
      type: "radio",
    },
  ];
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  return (
    <div className="bg-white md:py-10 md:pl-10 p-5 text-accent">
      <h1 className="font-bold">Product Import</h1>
      <div className="text-sm md:ml-20 ml-0">
        <div className="md:w-4/5 w-full md:flex justify-between mt-5 md:space-y-0 space-y-3">
          {["Price Markup", "Price Cents Value"].map((data) => (
            <div>
              <label htmlFor="" className="mr-5 my-2 inline-block">
                {data}
              </label>
              <input
                className="w-24 py-1 px-2 border border-accent"
                type="text"
              />
            </div>
          ))}
        </div>
        <div className=" mt-5 text-sm">
          <label htmlFor="" className="mr-5">
            Enable Compare At Override
          </label>
          <input type="checkbox" className="toggle" />
        </div>
        <div className="md:w-4/5 w-full md:flex justify-between mt-5 md:space-y-0 space-y-3">
          {["Default Weight Unit", "Fixed Weight"].map((data, i) => (
            <div>
              <label htmlFor="" className="mr-5 my-2 inline-block">
                {data}
              </label>
              <input
                className="w-24 py-1 px-2 border border-accent"
                type="text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-2 mt-10 mb-5"></div>
      <div className="text-sm md:ml-20 ml-0">
        <InputDiv data={"Default Product Description"} />
      </div>
      <div className="border-b-2 mt-5 mb-5"></div>
      <div className="md:w-[90%] w-full font-bold text-sm md:ml-20 ml-0">
        {[
          "Make Products Visible",
          "Sync Product Inventory when importing products",
          "Sync Product Inventory when changing Suppliers",
          "Update Product Vendor when Default Supplier is changed",
          "Randomize images file names when importing products",
        ].map((data, i) => (
          <div key={id2 + i} className="grid grid-cols-2 gap-5">
            <label className="inline-block mt-5" htmlFor="">
              {data}
            </label>
            <input type="checkbox" className="toggle self-end" />
          </div>
        ))}
      </div>
      <h1 className="font-bold mt-10">Auto Fulfill</h1>
      <div className="text-sm md:ml-20 ml-0 mt-5">
        <InputDiv data={"Order Phone Number"} />
        <div className="md:ml-20 ml-0">
          {[
            "Override customer's phone number",
            "Use the Customer's Phone Number if present",
          ].map((data, i) => (
            <label key={id3 + i} className="flex items-center my-2" htmlFor="">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-sm radio-accent mr-2"
              />
              <span className="inline-block ">{data}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="text-sm md:ml-20 ml-0 mt-5">
        <div className="flex gap-5 mt-3">
          <label htmlFor="" className="mr-5">
            Custom Note To The Supplier
          </label>
          <input
            className="w-full py-1 px-2 border border-accent"
            type="text"
          />
        </div>
        <div className="md:w-4/5 w-full mt-10 text-sm md:ml-20 ml-0">
          {autoFullFillInputs.map((data) => (
            <InputsWithRadio key={id1 + "fill"} data={data} />
          ))}
        </div>
      </div>
      <h1 className="font-bold my-10">Aliexpress</h1>
      <div className="md:w-4/5 w-full text-sm md:ml-20 ml-0">
        {[
          "Fix Aliexpress Address Province Selection issues",
          "Fic Aliexpress Adress City Selection issues",
        ].map((data, i) => (
          <RadioInputs key={id2 + i + "r"} data={data} />
        ))}
      </div>
      <h1 className="font-bold my-10">Other</h1>
      <div className="md:w-4/5 w-full text-sm md:ml-20 ml-0">
        {othersInput.map((data) => (
          <InputsWithRadio key={id1 + "others"} data={data} />
        ))}
      </div>
      <h1 className="font-bold my-10">Private Label Ordering</h1>

      <div className="md:ml-20 ml-0 md:w-4/5 w-full md:flex gap-10">
        <p>Default Shipping Option</p>
        <div className="flex gap-10">
          <label className=" flex items-center gap-3" htmlFor="">
            <input type="radio" name="shipping" className="radio radio-sm" />
            Standard
          </label>
          <label className="flex items-center gap-3 " htmlFor="">
            <input type="radio" name="shipping" className="radio radio-sm" />
            Expedited
          </label>
        </div>
      </div>
      <div>
        <button className="px-7 py-2 bg-primary ml-10 mt-20 text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default MyStoresSetting;

const InputDiv = ({ data }) => {
  return (
    <div>
      <label htmlFor="" className="mr-5 my-2 inline-block">
        {data}
      </label>
      <input className="py-1 px-2 border border-accent" type="text" />
    </div>
  );
};

const RadioInputs = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-5 my-3">
      <label className="inline-block mt-5 md:mb-0 mb-2" htmlFor="">
        {data}
      </label>
      <input type="checkbox" className="toggle self-end" />
    </div>
  );
};

const InputsWithRadio = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-5 my-3">
      <label className="inline-block mt-5" htmlFor="">
        {data.name}
      </label>
      {data.type === "radio" ? (
        <input type="checkbox" className="toggle self-end" />
      ) : (
        <input className="py-0.5 px-2 border border-accent" type={data.type} />
      )}
    </div>
  );
};
