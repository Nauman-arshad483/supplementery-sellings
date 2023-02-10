import React, { useState } from "react";
import sendIcon from "../../../icons/send_icon.png";
import unknownAvatar from "../../../icons/unknown_avatar.png";

const DesignerMessage = () => {
  const chatData = [
    {
      id: 1,
      name: "Jhon Lastname ",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 1,
      time: 1,
      status: "online",
      isTyping: false,
    },
    {
      id: 2,
      name: "Doe Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "online",
      isTyping: false,
    },
    {
      id: 3,
      name: "Eric Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 1,
      time: 0,
      status: "online",
      isTyping: true,
    },
    {
      id: 4,
      name: "Rira Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "offline",
      isTyping: true,
    },
    {
      id: 5,
      name: "Mak Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 2,
      time: 1,
      status: "offline",
      isTyping: false,
    },
    {
      id: 6,
      name: "James Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "offline",
      isTyping: false,
    },
    {
      id: 7,
      name: "Quicker Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "offline",
      isTyping: false,
    },
    {
      id: 8,
      name: "Adam Lastname",
      title: "Graphics Designer",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "offline",
      isTyping: false,
    },
  ];

  const chatWith = ["Chat with Fullfilment Center", "Chat with Admin"];

  const [selectedClient, setSelectedClient] = useState(chatData[0]);
  const [selectedRole, setSelectedRole] = useState("Graphics Designer");

  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Messages
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5">
        <div className="w-full p-3 bg-white rounded-tl-3xl">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Chat</h1>
            <button className="px-9 py-2 rounded-md bg-gray-400 text-white uppercase">
              New
            </button>
          </div>
          <div className="border mt-4"></div>
          <div>
            {chatData.map((chat, i) => (
              <div
                onClick={() => setSelectedClient(chat)}
                key={chat.id + "chat"}
                className={`flex justify-stat items-center gap-x-5 my-2 border-b py-3 px-2 cursor-pointer ${
                  chat.name === selectedClient.name && "bg-gray-300 "
                }`}
              >
                <div className="relative">
                  <img width={40} src={unknownAvatar} alt="" />
                  {chat.status === "online" && (
                    <span className="w-2 h-2 inline-block bg-primary rounded-full md:absolute md:bottom-0 bottom-5 right-0 md:-mt-2"></span>
                  )}
                </div>
                <div>
                  <h1 className="text-md font-semibold mb-1">
                    {chat.name}, {chat.title.split(" ")[1]}
                  </h1>
                  <p className="text-sm">
                    {chat.isTyping ? "Typing..." : chat.message}
                  </p>
                </div>
                <div className="flex justify-end">
                  {chat.unread > 0 && (
                    <span className="px-2.5 rounded-full bg-gray-600 text-gray-300">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:col-span-2 bg-gray-100 p-5 text-slate-500 relative ">
          <h1 className="text-xl ml-5">
            {selectedClient.name},{" "}
            <span className="font-bold"> {selectedClient.title}</span>
            {selectedClient.status === "online" && (
              <span className="ml-2 inline-block h-3 w-3 rounded-full bg-primary "></span>
            )}
          </h1>
          <div className="border-b-2 mt-5"></div>
          <div className="md:absolute bottom-0 left-0 w-full p-5">
            <p className="text-center text-gray-500 my-10">Today, 1:34PM</p>

            <div className=" flex items-center justify-start my-5 gap-5">
              <p className="md:w-1/2 w-full px-4 py-4 text-sm bg-white md:rounded-full rounded-xl order-2">
                Hello, you declined one of my labels but I can't clearly see
                your revision notes
              </p>
              <img className="order-1" width={60} src={unknownAvatar} alt="" />
            </div>
            <div className=" flex items-center justify-end my-5 text-white gap-5">
              <p className="md:w-1/2 w-full px-4 py-4 text-sm bg-primary md:rounded-full rounded-xl ">
                Hello Mijat! I am sorry to hear that. I will try to attach the
                file here. Maybe it will be better quality.
              </p>
              <img width={60} src={unknownAvatar} alt="" />
            </div>
            <form className="w-full -pb-5">
              <div className="flex bg-white md:mx-10 mx-1 py-3 px-3">
                <input
                  className="w-full py-5 px-3 ml-5"
                  type="text"
                  placeholder="Type your message..."
                />
                <label className="p-5" htmlFor="dropzone-file">
                  {fileIcon}
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
                <label
                  className=" flex items-center justify-center"
                  htmlFor="send-text"
                >
                  <img className="m-0 p-0" width={50} src={sendIcon} alt="" />
                  <input id="send-text" type="submit" className="hidden" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {chatWith.map((role, i) => (
          <button
            key={i + "button"}
            onClick={() => setSelectedRole(role)}
            className={`py-4 rounded-xl text-center bg-white text-gray-500 ${
              selectedRole === role ? "bg-gray-500 text-gray-200" : "bg-white"
            }`}
          >
            Chat with {role}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DesignerMessage;

const fileIcon = (
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
      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
    />
  </svg>
);
