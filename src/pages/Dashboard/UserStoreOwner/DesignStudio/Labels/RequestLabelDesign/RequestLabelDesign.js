import { useState } from "react";
import { StyledAttribute } from "../../../../GraphicsDesigner/MyClients/Brief";
import LabelSelectSuccessModal from "./LabelSelectSuccessModal";
import LabelViewModal from "./LabelViewModal";
import SelectLabelTemplateModal from "./SelectLabelTemplateModal";

const RequestLabelDesign = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="p-5 ">
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <StepThree setStep={setStep} />}
    </div>
  );
};

export default RequestLabelDesign;

const StepOne = ({ setStep }) => {
  const labels = [
    {
      id: 1,
      img: "/Icons/white.png",
    },
    {
      id: 2,
      img: "/Icons/Black.png",
    },
    {
      id: 3,
      img: "/Icons/white.png",
    },
    {
      id: 4,
      img: "/Icons/Black.png",
    },
    {
      id: 5,
      img: "/Icons/white.png",
    },
    {
      id: 6,
      img: "/Icons/Black.png",
    },
  ];
  const [selectedLabel, setSelectedLabel] = useState({});
  return (
    <>
      <LabelViewModal label={selectedLabel} />
      <SelectLabelTemplateModal label={selectedLabel} />
      <LabelSelectSuccessModal />
      <h1 className=" p-5 font-bold">Choose Label Template</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5">
        {labels.map((label) => (
          <div key={label.id} className="relative">
            <img className="mb-10" src={label.img} alt="" />
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-5 text-white">
              <label
                onClick={() => setSelectedLabel(label)}
                className="px-9 py-1.5 bg-accent rounded-md cursor-pointer"
                htmlFor="labelViewModal"
              >
                View
              </label>
              <label
                onClick={() => setSelectedLabel(label)}
                htmlFor="selectLabelTemplateModal"
                className="px-9 py-1.5 bg-primary rounded-md cursor-pointer"
              >
                select
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="text-accent mt-20">
        <h1 className="font-bold mt-10 mb-2">Request Label Design</h1>
        <p className="mb-5">
          You can request custom made label design from our graphic designers
        </p>
        <label
          onClick={() => setStep(2)}
          className="px-7 py-2 bg-primary rounded-md text-white cursor-pointer"
        >
          Request Label
        </label>
      </div>
    </>
  );
};

const StepTwo = ({ setStep }) => {
  const pricing = [
    { id: 1, title: "1-5", tPrice: "00,00", bPrice: "00,00" },
    { id: 2, title: "6-20", tPrice: "00,00", bPrice: "00,00" },
    { id: 3, title: "21-50", tPrice: "00,00", bPrice: "00,00" },
    { id: 4, title: "50+", tPrice: "00,00", bPrice: "00,00" },
  ];
  return (
    <div className="md:p-5 p-0 text-accent">
      <button
        onClick={() => setStep(1)}
        className="px-5 py-2 bg-accent text-white rounded-md "
      >
        Back
      </button>
      <div className="my-10 grid grid-cols-4 gap-5">
        {pricing.map((price) => (
          <div key={price.id}>
            <h1 className="text-6xl text-center text-secondary font-bold my-5">
              {price.title}
            </h1>
            <div className="bg-white px-5 py-10 rounded-3xl shadow-xl">
              <p className="mb-2">
                1 custom made template for {price.title} of your products
              </p>
              <p className="my-3 font-bold text-4xl">${price.tPrice}</p>
              <input
                type="radio"
                name="price"
                className="radio radio-secondary"
              />
              <div className="border-b border-secondary my-3"></div>
              <p>
                {price.title} different label designs for {price.title} of your
                products
              </p>
              <p className="my-3 font-bold text-4xl">${price.bPrice}</p>
              <input
                type="radio"
                name="price"
                className="radio radio-secondary"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="space-x-5 flex flex-col items-start">
        <label htmlFor="">
          <input type="checkbox" name="" id="" /> I understand that by checking
          this box I will be charged $000,00 for the design of the label that I
          requested and will own all rights of it.
        </label>
        <button
          onClick={() => setStep(3)}
          className="px-12 py-1 bg-purple-600 text-white rounded-md md:mt-5 mt-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepThree = ({ setStep }) => {
  return (
    <div className="md:p-5 p-0 text-accent">
      <button
        onClick={() => setStep(2)}
        className="px-5 py-2 bg-accent text-white rounded-md "
      >
        Back
      </button>
      <div className="my-10">
        <h1 className="font-bold mb-2">Request Logo Design</h1>
        <p>
          To request a custom logo design, please provide these information
          listed below
        </p>
        <div className="border-b border-accent my-5"></div>
        {[
          "Name To Incorporate in The Logo",
          "Slogan Incorporate in The Logo",
        ].map((label, i) => (
          <div key={i} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <input
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
        ))}
        <div className="mb-5">
          <label className="w-full mb-2 inline-block" htmlFor="">
            Description Of The Organization & It's Target Audience
          </label>
          <textarea
            className="md:w-1/2 w-full border border-accent px-3 py-2"
            name=""
            id=""
            rows="4"
          ></textarea>
        </div>
        {["Niche", "Colors to Explore"].map((label, i) => (
          <div key={i} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <input
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
        ))}
        <span className="mx-5"> or </span>
        <button className="px-9 py-1 bg-primary text-white rounded-md">
          Color Chart to select
        </button>
      </div>
      <div className="md:w-3/5 w-full">
        <StyledAttribute />
      </div>
      <div className="mb-5">
        <label className="w-full mb-2 inline-block" htmlFor="">
          Additional information for designer
        </label>
        <textarea
          className="md:w-1/2 w-full border border-accent px-3 py-2"
          name=""
          id=""
          rows="4"
        ></textarea>
      </div>
      <div className="mb-5 ">
        <h1>Design inspiration</h1>
        <label className="md:text-base text-xs" htmlFor="">
          upload existing designs that you like
          <input
            className="mx-2 border-0 file:bg-white file:outline-0 file:text-accent file:px-5 file:py-1 file:rounded-xl file:border file:border-accent text-gray-400"
            type="file"
            name=""
            id="inputFile"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <img className="md:w-72 w-60" src="/Icons/idea2.PNG" alt="" />
        <span className="text-2xl">X</span>
      </div>
      <button className="px-7 py-1 rounded-lg border border-accent mt-2">
        + Add more
      </button>
      <div className="flex justify-start gap-5 mt-10">
        <label
          htmlFor="requestLabelDesignModal"
          className="px-9 py-2 bg-primary text-white rounded-md cursor-pointer"
        >
          Request Label Design
        </label>
      </div>
    </div>
  );
};
