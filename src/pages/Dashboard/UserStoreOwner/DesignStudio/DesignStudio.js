import React, { useId } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DesignStudio = () => {
  const sections = [
    { id: 1, btnName: "Logo", route: "/store-owner/design-studio" },
    { id: 2, btnName: "Labels", route: "/store-owner/design-studio/labels" },
    {
      id: 3,
      btnName: "Website Templates",
      route: "/store-owner/design-studio/website-templates",
    },
    {
      id: 4,
      btnName: "Mockup Generator",
      route: "/store-owner/design-studio/mockup-generator",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const ids = useId();
  return (
    <div>
      <h1 className="lg:ml-20 ml-10 mt-5 mb-10 lg:text-2xl text-xl font-bold text-accent uppercase">
        DESIGN STUDIO
      </h1>
      <div className="bg-[#ECF2F7] lg:px-5 p-0 mt-5 pt-5 pb-10">
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex gap-1 font-semibold">
            {sections.map((btn) => (
              <button
                key={btn.id + ids}
                onClick={() => navigate(btn.route)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm py-5 ${
                  location.pathname === btn.route
                    ? " border-primary bg-white"
                    : "mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
          <div className="flex gap-1 font-semibold">
            {[
              {
                id: 5,
                btnName: "More",
                route: "/store-owner/design-studio/more",
              },
            ].map((btn) => (
              <button
                key={btn.id + ids}
                onClick={() => navigate(btn.route)}
                className={` md:px-5 px-3 text-gray-500 border-b-4 md:text-md text-sm py-5 ${
                  location.pathname === btn.route
                    ? " border-primary bg-white"
                    : "mt-2 border-gray-50 bg-gray-50"
                }`}
              >
                {btn.btnName}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
