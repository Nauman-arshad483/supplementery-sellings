import React from "react";
import unknownAvatar from "../../../icons/unknown_avatar.png";
import NavigateButton from "../../Shared/NavigateButton";
import ChatBox from "./ChatBox";
import ScreenShare from "./ScreenShare";

const Chat = () => {
  const roles = [
    { title: "Client", selected: true },
    { title: "Admin", selected: false },
    { title: "Graphics Designer", selected: false },
    { title: "Fulfillment Center", selected: false },
    { title: "Affiliate ", selected: false },
    { title: "Affiliate Manager", selected: false },
  ];

  return (
    <div className="relative">
      <NavigateButton left={true} to="/voip/chat" />
      <NavigateButton to="/fullfilment/chat" />
      <div className="px-3">
        <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
          Main Chat
        </h1>
        <div className="md:flex gap-5 rounded-br-[6%] overflow-hidden">
          <div className="md:w-[20%] w-full bg-white pb-10 rounded-bl-3xl">
            <h1 className="pl-3 pb-3 pt-3 border-b text-lg font-bold text-gray-500">
              All Clients
            </h1>
            <div className=" ">
              {[...new Array(19)].map((a, i) => (
                <div
                  key={i}
                  className={`flex justify-stat items-center gap-x-5 my-2 border-b mb-2 pb-1 px-2 ${
                    i === 0 && "bg-gray-300 "
                  }`}
                >
                  <div className="relative">
                    <img width={40} src={unknownAvatar} alt="" />
                    {i === 0 && (
                      <span className="w-2 h-2 inline-block bg-primary rounded-full absolute bottom-0 right-0 -mt-2"></span>
                    )}
                  </div>
                  <div>
                    <h1 className="text-xs font-semibold">Name Lastname</h1>
                    <p className="text-xs">{i === 0 ? "Typing..." : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-4/5 w-full md:mt-0 mt-5">
            <ScreenShare />
            <div className="md:flex gap-5 mt-5">
              <div className="md:w-[30%] w-full">
                {roles.map((role) => (
                  <button
                    key={role.title}
                    className={`w-full py-2 text-center border border-gray-400 my-2 rounded ${
                      role.selected ? "bg-gray-400 text-white" : ""
                    }`}
                  >
                    {role.title}
                  </button>
                ))}
              </div>
              <div className="md:w-[70%] w-full">
                <ChatBox />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5">
          You can choose who are you going to chat with (Client, Admin, Graphic
          Designer, Fullfilment Center, Affiliate or Affiliate Manager) and find
          a list of people on the left hand side.
        </p>
      </div>
    </div>
  );
};

export default Chat;
