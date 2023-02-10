import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import arrowDown from "../../icons/arrow_down.png";
import avatar from "../../icons/avatar.png";
import logo from "../../icons/logo.png";
import msg from "../../icons/msg.png";
import notificationIcon from "../../icons/notification_icon.png";

const Header = ({ menuButton, notifications, messages }) => {
  const notificationDiv = useRef();
  const [showNotification, setShowNotification] =
    useClickOutside(notificationDiv);

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex justify-end ">
      <div className="absolute top-0 left-0 bg-white p-2 ">
        <img className="hidden" width={140} src={logo} alt="" />
        {menuButton && menuButton}
      </div>
      {location.pathname.includes("/graphic-designer") && (
        <h1 className="text-accent bg-white p-5 left-[25%] top-4 absolute hidden md:block text-md z-20">
          Level: Senior Graphic Designer
        </h1>
      )}
      <div className="w-full h-24 bg-white flex justify-end ">
        <div className="flex items-center md:ml-0 ml-[11rem]">
          {notifications && (
            <div
              ref={notificationDiv}
              className=" pr-5 mr-5 h-full flex justify-center items-center p-5 relative"
              onClick={() => setShowNotification(!showNotification)}
            >
              <p className="text-sm md:text-md hidden md:block">
                Notifications
              </p>
              <div className="indicator">
                <span className="indicator-item badge bg-red-500 text-white border-none">
                  {notifications.length}
                </span>
                <img
                  className="ml-2"
                  width={15}
                  src={notificationIcon}
                  alt=""
                />
              </div>
              {showNotification && (
                <div className="absolute top-16 md:right-0 -right-40 bg-white px-7 shadow-2xl md:w-80 w-60 z-10 md:text-md text-sm cursor-pointer">
                  <h1 className="text-gray-600 md:text-xl text-lg font-bold pt-3">
                    All notifications
                  </h1>
                  {notifications.map((n, i) => (
                    <div key={i} className="border-b mt-3 border-gray-500">
                      <h1 className="text-gray-500 py-1">{n.title}</h1>
                      <p className="text-gray-400 py-1">{n.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {messages && (
            <div
              className="pr-5 mr-5 h-full flex justify-center items-center p-5 cursor-pointer"
              onClick={() => navigate("chat")}
            >
              <p className="text-sm md:text-md hidden md:block">Message</p>
              <div className="indicator">
                <span className="indicator-item badge bg-red-500 text-white border-none">
                  {messages}
                </span>
                <img className="ml-2" width={20} src={msg} alt="" />
              </div>
            </div>
          )}
          <div className="w-full md:flex justify-center items-center p-3 md:mr-5 mr-1 border-l-2 pl-7">
            <div className="avatar mr-4 ">
              <div className="md:w-14 w-8 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-1">
                <img src={avatar} alt="" />
              </div>
            </div>
            <div className="flex">
              <p className="text-xs md:text-lg md:block hidden">
                Hello, <span className="font-bold">Mijat Stevovic</span>
              </p>
              <div className="md:ml-3 ml-2 mt-3">
                <img width={15} src={arrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
