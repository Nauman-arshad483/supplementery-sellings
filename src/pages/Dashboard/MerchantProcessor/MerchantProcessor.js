import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import SidebarMenu from "../../Shared/SidebarMenu";

const MerchantProcessor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const merchantLinks = [
    {
      id: 1,
      name: "Forms",
      to: "forms",
      iconWhite: "/Icons/form_w.png",
      iconBlack: "/Icons/form_b.png",
    },
    {
      id: 2,
      name: "Chat",
      to: "chat",
      iconWhite: "/Icons/chat2_w.png",
      iconBlack: "/Icons/chat2_b.png",
    },
    {
      id: 3,
      name: "Analytics",
      to: "analytics",
      iconWhite: "/Icons/analytics_w.png",
      iconBlack: "/Icons/analytics_b.png",
    },
    {
      id: 4,
      name: "Credentials",
      to: "credentials",
      iconWhite: "/Icons/credentials_w.png",
      iconBlack: "/Icons/credentials_b.png",
    },
    {
      id: 5,
      name: "Product Catalog",
      to: "product-catalog",
      iconWhite: "/Icons/product2_w.png",
      iconBlack: "/Icons/product2_b.png",
    },
  ];
  const notifications = [
    {
      id: 1,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 2,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 3,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
    },
    {
      id: 4,
      title: "Labels",
      text: "You have 1 label from Mijat Stevovic that needs to be approved",
      time: "10:30AM",
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
          menuLinks={merchantLinks}
          title={"Merchant Processor "}
        />
        <div className="w-full justify-end bg-gray-200">
          <Header
            notifications={notifications}
            menuButton={menuButton}
            messages={1}
          />

          <div className="md:ml-5 ml-0 md:p-10 p-5 min-h-screen">
            <div className="relative">
              {location.pathname === "/merchant-processor/forms" && (
                <>
                  <NavigateButton
                    left={true}
                    to="/affiliate-manager/dashboard"
                  />
                  <NavigateButton to="/graphic-designer/home" />
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

export default MerchantProcessor;

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
