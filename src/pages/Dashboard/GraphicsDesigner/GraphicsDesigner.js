import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import dashboardBlack from "../../../icons/Affiliate/dashboard_black.png";
import dashboardWhite from "../../../icons/Affiliate/dashboard_white.png";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import SidebarMenu from "../../Shared/SidebarMenu";

const GraphicsDesigner = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const graphicsLinks = [
    {
      id: 1,
      name: "Home",
      to: "home",
      iconWhite: dashboardWhite,
      iconBlack: dashboardBlack,
    },
    {
      id: 2,
      name: "My Clients",
      to: "clients",
      iconWhite: "/Icons/clients_w.png",
      iconBlack: "/Icons/clients_b.png",
    },
    {
      id: 3,
      name: "My Earnings",
      to: "earnings",
      iconWhite: "/Icons/earning_w.png",
      iconBlack: "/Icons/earning_b.png",
    },
  ];

  const menuButton = (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="p-5 md:hidden"
    >
      {menuIcon}
    </button>
  );
  const location = useLocation();
  return (
    <div className="h-screen bg-gray-200 ">
      <div className="flex relative">
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuLinks={graphicsLinks}
          title={"Designer Dashboard"}
        />
        <div className="w-full justify-end bg-gray-200">
          <Header messages={1} menuButton={menuButton} />

          <div className="md:ml-5 ml-0 md:p-10 p-5 min-h-screen">
            <div className="relative">
              {location.pathname === "/graphic-designer/home" && (
                <>
                  <NavigateButton left={true} to="/merchant-processor/forms" />
                  <NavigateButton to="/store-owner/home" />
                </>
              )}
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesigner;

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);
