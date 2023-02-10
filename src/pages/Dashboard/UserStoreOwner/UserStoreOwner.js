import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import StoreOwnerSidebar from "../../Shared/StoreOwnerSidebar";

const UserStoreOwner = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const storeOwnerLinks = [
    {
      id: 1,
      name: "Home",
      to: "home",
      iconWhite: "/Icons/home_w.png",
      iconBlack: "/Icons/home_b.png",
    },
    {
      id: 2,
      name: "Domain",
      to: "domain",
      iconWhite: "/Icons/domain_w.png",
      iconBlack: "/Icons/domain_b.png",
    },
    {
      id: 3,
      name: "Business Setting",
      to: "business-setting",
      iconWhite: "/Icons/setting_w.png",
      iconBlack: "/Icons/setting_b.png",
    },
    {
      id: 4,
      name: "Catalog",
      to: "catalog",
      iconWhite: "/Icons/catalog_w.png",
      iconBlack: "/Icons/catalog_b.png",
    },
    {
      id: 5,
      name: "Design Studio",
      to: "design-studio",
      iconWhite: "/Icons/design_w.png",
      iconBlack: "/Icons/design_b.png",
    },
    {
      id: 5,
      name: "My Stores",
      to: "stores",
      iconWhite: "/Icons/store_w.png",
      iconBlack: "/Icons/store.png",
    },
    {
      id: 6,
      name: "Merchant",
      to: "merchant",
      iconWhite: "/Icons/merchant_w.png",
      iconBlack: "/Icons/merchant_b.png",
    },
    {
      id: 7,
      name: "My VoIP",
      to: "/voip",
      iconWhite: "/Icons/voip_w.png",
      iconBlack: "/Icons/voip_b.png",
    },
    {
      id: 8,
      name: "Analytics",
      to: "analytics",
      iconWhite: "/Icons/analytics2_w.png",
      iconBlack: "/Icons/analytics2_b.png",
    },
    {
      id: 9,
      name: "Go Live!",
      to: "go-live",
      iconWhite: "/Icons/live_w.png",
      iconBlack: "/Icons/live_b.png",
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
    <div className=" bg-gray-200 ">
      <div className=" flex relative">
        <StoreOwnerSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuLinks={storeOwnerLinks}
          title={"Customer "}
        />
        <div className=" w-full justify-end bg-gray-200">
          <Header
            notifications={notifications}
            menuButton={menuButton}
            messages={1}
          />

          <div className="md:ml-5 ml-0 md:p-10 p-5 min-h-screen">
            <div className="relative">
              {location.pathname === "/store-owner/home" && (
                <>
                  <NavigateButton left={true} to="/graphic-designer/home" />
                  <NavigateButton to="/voip/chat" />
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

export default UserStoreOwner;

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
