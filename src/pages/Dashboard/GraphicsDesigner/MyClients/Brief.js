import React, { useState } from "react";
import UploadModal from "../../Fullfilment/Labels/UploadModal";

export const LogoBrief = () => {
  const details = [
    {
      id: 1,
      title: "Name To Incorporate In The Logo",
      subTitle: "Super Supplements Co.",
    },
    {
      id: 2,
      title: "Slogan To Incorporate In The Logo",
      subTitle: "None",
    },
    {
      id: 3,
      title: "Description Of The Organization & It's Target Audience",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Niche",
      subTitle: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      title: "Colors to Explore",
      subTitle: "We would like our logo to have orange color with code #CE680D",
    },
  ];

  return (
    <div className="text-accent">
      <UploadModal />
      <h1 className=" my-5 text-2xl text-black font-bold">Brief</h1>
      {details.map((data) => (
        <div key={data.id} className="mb-5">
          <h1 className="font-bold">{data.title}</h1>
          <p className="text-black">{data.subTitle}</p>
        </div>
      ))}
      <StyledAttribute />
      <div className="mb-5">
        <h1 className="font-bold mb-2">Product Inspiration</h1>
        <img className="w-36" src="/Icons/product3.PNG" alt="" />
      </div>
      <div className="flex justify-end mb-5">
        <label
          htmlFor="uploadModal"
          className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-7 cursor-pointer"
        >
          Uploads Designs
        </label>
      </div>
    </div>
  );
};

export const LabelBrief = () => {
  const details = [
    {
      id: 1,
      title: "Company Name",
      subTitle: "Super Supplements Co.",
    },
    {
      id: 2,
      title: "Product Name",
      subTitle: "NONE",
    },
    {
      id: 3,
      title: "Description of the Product",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Description of the product target audience",
      subTitle: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      title: "Colors to Explore",
      subTitle: "We would like our logo to have orange color with code #CE680D",
    },
  ];

  return (
    <div className="text-accent">
      <UploadModal />
      <h1 className=" my-5 text-2xl text-black font-bold">Brief</h1>
      {details.map((data) => (
        <div key={data.id} className="mb-5">
          <h1 className="font-bold">{data.title}</h1>
          <p className="text-black">{data.subTitle}</p>
        </div>
      ))}
      <StyledAttribute />
      <div className="mb-5">
        <h1 className="font-bold">Additional informations for designer</h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mb-5">
        <h1 className="font-bold mb-2">Product Inspiration</h1>
        <img className="w-36" src="/Icons/product3.PNG" alt="" />
      </div>
      <div className="flex justify-end mb-5">
        <label
          htmlFor="uploadModal"
          className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-7 cursor-pointer"
        >
          Uploads Designs
        </label>
      </div>
    </div>
  );
};
export const BrandDeckBrief = () => {
  const details = [
    {
      id: 1,
      title:
        "Some informations you would like the designer to know before starting your brand deck",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="text-accent">
      <UploadModal />
      <h1 className=" my-5 text-2xl text-black font-bold">Brief</h1>
      {details.map((data) => (
        <div key={data.id} className="mb-5">
          <h1 className="font-bold">{data.title}</h1>
          <p className="text-black">{data.subTitle}</p>
        </div>
      ))}
      <StyledAttribute />
      <div className="mb-5">
        <h1 className="font-bold mb-2">Product Inspiration</h1>
        <img className="w-36" src="/Icons/product3.PNG" alt="" />
      </div>
      <div className="flex justify-end mb-5">
        <label
          htmlFor="uploadModal"
          className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-7 cursor-pointer"
        >
          Uploads Designs
        </label>
      </div>
    </div>
  );
};

export const SocialMediaBrief = () => {
  const details = [
    {
      id: 1,
      title: "What Social Media Designs You Need?",
      subTitle: "Banner for FB, FB Ads",
    },
    {
      id: 2,
      title: "Text to be in the design",
      subTitle:
        "On the banner- our contact and words: ALWAYS EAT RIGHT On the Ads we will only have the image attached and our logo",
    },
    {
      id: 3,
      title: "Description of the Company",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Description of the product target audience",
      subTitle: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      title: "Colors to Explore",
      subTitle: "We would like our logo to have orange color with code #CE680D",
    },
  ];

  return (
    <div className="text-accent">
      <UploadModal />
      <h1 className=" my-5 text-2xl text-black font-bold">Brief</h1>
      {details.map((data) => (
        <div key={data.id} className="mb-5">
          <h1 className="font-bold">{data.title}</h1>
          <p className="text-black">{data.subTitle}</p>
        </div>
      ))}
      <StyledAttribute />
      <div className="mb-5">
        <h1 className="font-bold mb-2">Product Inspiration</h1>
        <img className="w-36" src="/Icons/product3.PNG" alt="" />
      </div>
      <div className="mb-5">
        <h1 className="font-bold">Additional informations for designer</h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex justify-end mb-5">
        <label
          htmlFor="uploadModal"
          className="w-full md:w-1/2 bg-white rounded-md py-4 md:text-base text-sm font-bold text-center px-7 cursor-pointer"
        >
          Uploads Designs
        </label>
      </div>
    </div>
  );
};

export const StyledAttribute = () => {
  const stylesRange = [
    {
      id: 1,
      left: "Classic",
      right: "Modern",
    },
    {
      id: 2,
      left: "Mature",
      right: "Youthful",
    },
    {
      id: 3,
      left: "Feminine",
      right: "Masculine",
    },
    {
      id: 4,
      left: "Geometric",
      right: "Organic",
    },
    {
      id: 5,
      left: "Economical",
      right: "Luxurious",
    },
  ];
  return (
    <div className="mb-5">
      <h1 className="font-bold mb-5">Style Attributes</h1>
      {stylesRange.map((range) => (
        <InputRange key={range.id} range={range} />
      ))}
    </div>
  );
};

const InputRange = ({ range }) => {
  const [percent, setPercent] = useState(80);
  return (
    <div>
      <div className="flex justify-between text-black mb-2">
        <h1>{range.left}</h1>
        <h1>{range.right}</h1>
      </div>
      <input
        id="minmax-range"
        type="range"
        min="0"
        max="100"
        onChange={(e) => setPercent(e.target.value)}
        value={percent}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer "
      ></input>
    </div>
  );
};
