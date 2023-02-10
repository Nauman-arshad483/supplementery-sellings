import React, { useState } from "react";
import { StyledAttribute } from "../../../GraphicsDesigner/MyClients/Brief";
import SubmitSuccessModal from "../Logo/SubmitSuccessModal";

const MoreSection = () => {
  const [step, setStep] = useState(1);
  const [isSocialMedia, setIsSocialMedia] = useState(true);
  return (
    <div className="p-5 ">
      <SubmitSuccessModal />
      {step === 1 && (
        <StepOne setStep={setStep} setIsSocialMedia={setIsSocialMedia} />
      )}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 &&
        (isSocialMedia ? (
          <SocialMediaStepThree setStep={setStep} />
        ) : (
          <BrandDeckStepThree setStep={setStep} />
        ))}
    </div>
  );
};

export default MoreSection;

const StepOne = ({ setStep, setIsSocialMedia }) => {
  return (
    <div className=" text-accent">
      <div className="md:p-10 p-0">
        <h1 className="font-bold">
          Request more designs from our graphic designers!
        </h1>
        <p className="text-sm mt-2">
          In this section you can request Social Media designs ex.{" "}
          <span className="text-blue-500">
            Facebook Ad designs, Social Media Covers etc.
          </span>{" "}
        </p>
        <p>Also, you can request you brand quide!</p>
      </div>
      <div className="md:px-10 md:pb-5 p-0">
        <button
          onClick={() => {
            setStep(2);
            setIsSocialMedia(true);
          }}
          className=" px-4 py-2 bg-primary text-white rounded-md md:mt-0 mt-3 mr-3"
        >
          Request Social Media designs
        </button>
        <button
          onClick={() => {
            setStep(2);
            setIsSocialMedia(false);
          }}
          className=" px-4 py-2 bg-primary text-white rounded-md md:mt-0 mt-3"
        >
          Request your Brand Guide
        </button>
      </div>
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

const SocialMediaStepThree = ({ setStep }) => {
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
        <p className="mb-10">Requesting Social Media designsx</p>
        <div className="flex gap-5 flex-wrap">
          {[
            "Facebook Cover",
            "Twitter Cover",
            "YouTube Cover",
            "LinkedIn Cover",
            "Facebook Ad",
            "Instagram Ad",
            "Facebook Post",
            "Instagram Post",
            "LinkedIn Post",
            "Other",
          ].map((name) => (
            <div key={name}>
              <label htmlFor="cover">
                <input type="radio" name="cover" className="radio radio-xs" />{" "}
                {name}
              </label>
            </div>
          ))}
          <input
            className="md:w-1/2 w-full border border-accent px-3 py-2"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className=" my-5"></div>
        {[
          "Description of the Company",
          "Description of the product target audience",
        ].map((label) => (
          <div key={label} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <textarea
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              name=""
              id=""
              rows="4"
            ></textarea>
          </div>
        ))}
        {["Colors to Explore"].map((label, i) => (
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

      <button className="px-7 py-1 rounded-lg border border-accent mt-2">
        + Add more
      </button>
      <div className="flex justify-start gap-5 mt-10">
        <label className="px-9 py-2 bg-primary text-white rounded-md cursor-pointer">
          Submit Request
        </label>
      </div>
    </div>
  );
};

const BrandDeckStepThree = ({ setStep }) => {
  return (
    <div className="md:p-5 p-0 text-accent">
      <button
        onClick={() => setStep(2)}
        className="px-5 py-2 bg-accent text-white rounded-md "
      >
        Back
      </button>
      <div className="my-10">
        <h1 className="font-bold mb-2">Requesting Brand Deck design</h1>
        <p className="mb-10">Requesting Social Media designsx</p>

        <div className=" my-5"></div>
        {[
          "Some informations you would like the designer to know before starting your brand deck",
        ].map((label) => (
          <div key={label} className="mb-5">
            <label className="w-full mb-2 inline-block" htmlFor="">
              {label}
            </label>
            <textarea
              className="md:w-1/2 w-full border border-accent px-3 py-2"
              name=""
              id=""
              rows="4"
            ></textarea>
          </div>
        ))}
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

      <button className="px-7 py-1 rounded-lg border border-accent mt-2">
        + Add more
      </button>
      <div className="flex justify-start gap-5 mt-10">
        <label className="px-9 py-2 bg-primary text-white rounded-md cursor-pointer">
          Request Brand Desck
        </label>
      </div>
    </div>
  );
};
