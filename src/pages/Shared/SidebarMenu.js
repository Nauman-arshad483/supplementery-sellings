import React, { useId } from "react";
import { NavLink } from "react-router-dom";
import helpSupport from "../../icons/help_support.png";
import helpSupportWhite from "../../icons/help_support_white.png";
import logo from "../../icons/logo.png";
import logout from "../../icons/logout.png";
import myProfile from "../../icons/my_profile.png";
import myProfileWhite from "../../icons/my_profile_white.png";

const SidebarMenu = ({ isSidebarOpen, setIsSidebarOpen, menuLinks, title }) => {
  const otherLinks = [
    {
      id: 1,
      name: "Help and Support",
      to: "help-and-support",
      iconWhite: helpSupportWhite,
      iconBlack: helpSupport,
    },
    {
      id: 2,
      name: "My Profile / Setting",
      to: "my-profile",
      iconWhite: myProfileWhite,
      iconBlack: myProfile,
    },
    {
      id: 3,
      name: "Logout",
      to: "/login",
      iconWhite: helpSupportWhite,
      iconBlack: logout,
    },
  ];
  const id1 = useId();
  const id2 = useId();
  return (
    <div
      className={`md:px-7 pl-2 pr-3 py-5 bg-white w-80 md:static absolute z-10 shadow-2xl ${
        isSidebarOpen ? "top-0 left-0" : " top-0 -left-80"
      } duration-500`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-500 ml-auto md:hidden"
        >
          {xMark}
        </button>
      </div>
      <img className="md:block md:w-56 " src={logo} alt="" />
      <div className="h-screen md:pt-5 md:translate-y-0 translate-y-0">
        <div className="">
          <h1 className=" md:block text-lg  pb-3 text-gray-500 font-semibold">
            {title}
          </h1>
          <div className="border-b-2 md:w-4/5 w-16 md:ml-8 ml-2"></div>
          <ul className="mt-3 text-sm">
            {menuLinks.map((link) => (
              <li key={link.id + id1}>
                <NavLink
                  to={link.to}
                  className={(p) =>
                    `flex justify-start items-center p-4 ${
                      p.isActive &&
                      "rounded-2xl bg-primary mt-0 md:translate-x-12 "
                    } `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <img
                        width={18}
                        src={isActive ? link.iconWhite : link.iconBlack}
                        alt=""
                      />
                      <span
                        className={` md:block ml-3 ${
                          isActive ? "text-white" : "text-gray-500"
                        } `}
                      >
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <h1 className="md:block text-xl px-5 pb-3 text-gray-500 font-semibold mt-10">
            Other
          </h1>
          <div className="border-b-2 md:w-4/5 w-16 md:ml-8 ml-2"></div>
          <ul className=" pt-5 text-sm">
            {otherLinks.map((link) => (
              <li key={link.id + id2}>
                <NavLink
                  to={link.to}
                  className={(p) =>
                    `flex justify-start items-center p-4 ${
                      p.isActive &&
                      "rounded-2xl bg-primary mt-0 md:translate-x-14 "
                    } `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <img
                        width={18}
                        src={isActive ? link.iconWhite : link.iconBlack}
                        alt=""
                      />
                      <span
                        className={` md:block ml-3 ${
                          isActive ? "text-white" : "text-gray-500"
                        } `}
                      >
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;

const xMark = (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
