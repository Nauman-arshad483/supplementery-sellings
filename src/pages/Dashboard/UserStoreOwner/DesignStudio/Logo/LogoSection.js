import React, { useState } from "react";
import { StyledAttribute } from "../../../GraphicsDesigner/MyClients/Brief";
import SubmitSuccessModal from "./SubmitSuccessModal";

const LogoSection = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="p-5 ">
      <SubmitSuccessModal />
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <StepThree setStep={setStep} />}
    </div>
  );
};

export default LogoSection;

const StepOne = ({ setStep }) => {
  return (
    <div className="md:flex items-center gap-10 text-accent">
      <div className="md:p-10 p-0">
        <h1 className="font-bold">Request Custom mode logo</h1>
        <p className="text-sm">
          To start with custom made logo, please click the button
        </p>
      </div>
      <button
        onClick={() => setStep(2)}
        className="px-4 py-2 bg-purple-600 text-white rounded-md md:mt-0 mt-3"
      >
        Start logo request
      </button>
    </div>
  );
};

const StepTwo = ({ setStep }) => {
  return (
    <div className="md:p-5 p-0">
      <button
        onClick={() => setStep(1)}
        className="px-5 py-2 bg-accent text-white rounded-md "
      >
        Back
      </button>
      <div className="my-10">
        <h1 className="text-secondary text-3xl font-bold">$000,00</h1>
        <p>
          This prices gives you 2 initial designs and up to 3 revisions of the
          design you choose.
        </p>
      </div>
      <div className="md:flex justify-between gap-5">
        <label htmlFor="">
          <input type="checkbox" name="" id="" /> I understand that by checking
          this box I will charged $000,00 for the design of the logo that I
          requested
        </label>
        <button
          onClick={() => setStep(3)}
          className="px-9 py-1 bg-purple-600 text-white rounded-md md:mt-0 mt-3"
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
          htmlFor="submitSuccessModal"
          className="px-9 py-2 bg-primary text-white rounded-md cursor-pointer"
        >
          Submit Request
        </label>
      </div>
    </div>
  );
};
