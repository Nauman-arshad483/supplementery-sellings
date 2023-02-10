import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import chatBlack from "../../../icons/chat_black.png";
import chatWhite from "../../../icons/chat_white.png";
import Header from "../../Shared/Header";
import NavigateButton from "../../Shared/NavigateButton";
import SidebarMenu from "../../Shared/SidebarMenu";

const MyVoip = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const graphicsLinks = [
    {
      id: 1,
      name: "Chat",
      to: "chat",
      iconWhite: chatWhite,
      iconBlack: chatBlack,
    },
    {
      id: 2,
      name: "Analytics",
      to: "analytics",
      iconWhite: "/Icons/analytics_w.png",
      iconBlack: "/Icons/analytics_b.png",
    },
    {
      id: 3,
      name: "Ticketing System",
      to: "ticketing-system",
      iconWhite: "/Icons/ticket_w.png",
      iconBlack: "/Icons/ticket_b.png",
    },
    {
      id: 4,
      name: "Training Library",
      to: "training-library",
      iconWhite: "/Icons/training_w.png",
      iconBlack: "/Icons/training_b.png",
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
  const location = useLocation();
  return (
    <div className="h-screen bg-gray-200 ">
      <div className="flex relative">
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuLinks={graphicsLinks}
          title={"My VoIP"}
        />
        <div className="w-full justify-end bg-gray-200">
          <Header
            messages={1}
            menuButton={menuButton}
            notifications={notifications}
          />
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

export default MyVoip;

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
