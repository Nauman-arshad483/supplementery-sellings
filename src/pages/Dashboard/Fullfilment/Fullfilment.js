import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import chatBlack from "../../../icons/chat_black.png";
import chatWhite from "../../../icons/chat_white.png";
import labelsBlack from "../../../icons/labels_black.png";
import labelsWhite from "../../../icons/labels_white.png";
import logosIconBlack from "../../../icons/logos_icon_black.png";
import logosIconWhite from "../../../icons/logos_icon_white.png";
import productBlack from "../../../icons/products_black.png";
import productWhite from "../../../icons/products_white.png";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import SidebarMenu from "../../Shared/SidebarMenu";

const Fullfilment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  const fullfilmentLinks = [
    {
      id: 1,
      name: "Chat",
      to: "chat",
      iconWhite: chatWhite,
      iconBlack: chatBlack,
    },
    {
      id: 2,
      name: "Labels",
      to: "labels",
      iconWhite: labelsWhite,
      iconBlack: labelsBlack,
    },
    {
      id: 3,
      name: "Logos",
      to: "logos",
      iconWhite: logosIconWhite,
      iconBlack: logosIconBlack,
    },
    {
      id: 3,
      name: "Products",
      to: "products",
      iconWhite: productWhite,
      iconBlack: productBlack,
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
  return (
    <div className="h-screen bg-gray-200 ">
      <div className="flex relative">
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuLinks={fullfilmentLinks}
          title={"Fulfilment/Complaince"}
        />

        <div className="w-full justify-end bg-gray-200">
          <Header
            notifications={notifications}
            messages={3}
            menuButton={menuButton}
          />
          {/* <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-5 md:hidden"
          >
            {menuIcon}
          </button> */}

          <div className="md:ml-5 ml-0 md:p-10 px-5 py-5 relative min-h-screen">
            <div className="relative">
              {location.pathname === "/fullfilment/chat" && (
                <>
                  <NavigateButton left={true} to="/customer-service/chat" />
                  <NavigateButton to="/affiliate/dashboard" />
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

export default Fullfilment;

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
