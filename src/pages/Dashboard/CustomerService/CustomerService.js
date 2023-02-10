import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import chatBlack from "../../../icons/chat_black.png";
import chatWhite from "../../../icons/chat_white.png";
import Header from "../../Shared/Header";
import SidebarMenu from "../../Shared/SidebarMenu";

const CustomerService2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const customerServiceLinks = [
    {
      id: 1,
      name: "Chat",
      to: "/customer-service/chat",
      iconWhite: chatWhite,
      iconBlack: chatBlack,
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
          menuLinks={customerServiceLinks}
          title={"Customer Service"}
        />
        <div className="w-full justify-end bg-gray-200 min-h-screen">
          <Header messages={3} menuButton={menuButton} />
          <div className="md:ml-5 ml-0 md:p-10 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService2;

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
