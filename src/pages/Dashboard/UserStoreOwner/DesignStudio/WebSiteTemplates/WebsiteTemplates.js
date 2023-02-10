import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WebsiteTemplates = () => {
  return (
    <div className="p-5 ">
      <StepOne />
    </div>
  );
};

export default WebsiteTemplates;

const StepOne = () => {
  const labels = [
    {
      id: 1,
      img: "/Icons/web1.PNG",
    },
    {
      id: 2,
      img: "/Icons/web2.PNG",
    },
    {
      id: 3,
      img: "/Icons/web1.PNG",
    },
    {
      id: 4,
      img: "/Icons/web2.PNG",
    },
    {
      id: 5,
      img: "/Icons/web1.PNG",
    },
    {
      id: 6,
      img: "/Icons/web2.PNG",
    },
  ];
  const [selectedLabel, setSelectedLabel] = useState({});
  return (
    <>
      {/* <LabelViewModal label={selectedLabel} width="xl" />
      <SelectLabelTemplateModal label={selectedLabel} />
      <LabelSelectSuccessModal next={"/store-owner/design-studio/more"} /> */}
      <WebsiteTemplateSuccessModal next={"/store-owner/design-studio/more"} />
      <h1 className=" p-5 font-bold">Choose Website Template</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-5">
        {labels.map((label) => (
          <div key={label.id} className="relative">
            <img className="w-72 mx-auto mb-8" src={label.img} alt="" />
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-5 text-white">
              <label
                onClick={() => setSelectedLabel(label)}
                className="px-9 py-1.5 bg-accent rounded-md cursor-pointer"
              >
                View
              </label>
              <label
                onClick={() => setSelectedLabel(label)}
                htmlFor="websiteTemplateSuccessModal"
                className="px-9 py-1.5 bg-primary rounded-md cursor-pointer"
              >
                select
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const WebsiteTemplateSuccessModal = ({ next }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="checkbox"
        id="websiteTemplateSuccessModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="w-11/12 max-w-2xl bg-white md:py-10 py-5 md:px-5 px-2 flex flex-col relative">
          <label
            htmlFor="websiteTemplateSuccessModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-secondary text-2xl font-bold my-5">
            Success!
          </h3>
          <img
            className="mx-auto w-20 inline-block mb-5"
            src="/Icons/tick5.png"
            alt=""
          />
          <h3 className="text-accent text-center text-lg mb-10">
            You just selected your website template!
          </h3>

          <div className=" text-white flex justify-center gap-5 mt-10">
            <label
              onClick={() => navigate("/store-owner/home")}
              htmlFor="websiteTemplateSuccessModal"
              className="rounded-md px-9 py-2 bg-gray-400 cursor-pointer"
            >
              Home
            </label>
            <label
              htmlFor="websiteTemplateSuccessModal"
              onClick={() =>
                navigate(
                  next ? next : "/store-owner/design-studio/website-templates"
                )
              }
              className="rounded-md px-9 py-2 bg-primary cursor-pointer"
            >
              Next
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
