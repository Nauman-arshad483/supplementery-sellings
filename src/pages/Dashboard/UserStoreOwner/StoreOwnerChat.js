import React, { useState } from "react";
import unknownAvatar from "../../../icons/unknown_avatar.png";
import ChatBoxUI from "../../Shared/ChatBoxUI";

const StoreOwnerChat = () => {
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
      title: "Admin",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "online",
      isTyping: false,
    },
    {
      id: 3,
      name: "Eric Lastname",
      title: "Customer Service",
      message: "The beginning of the messa...",
      unread: 1,
      time: 0,
      status: "online",
      isTyping: true,
    },
    {
      id: 4,
      name: "Rira Lastname",
      title: "Merchant",
      message: "The beginning of the messa...",
      unread: 0,
      time: 1,
      status: "offline",
      isTyping: true,
    },
  ];

  const messages = [
    {
      id: 1,
      message: <img className="w-44" src="/Icons/work5.PNG" alt="" />,
      time: " Today, 1:34PM",
      isUser: false,
    },
    {
      id: 2,
      message: "Hi, I love this design. Can you just change the font of it?",
      time: "",
      isUser: false,
    },
    {
      id: 3,
      message: "Hello Client, absolutely yes!",
      time: "",
      isUser: true,
    },
  ];
  const [selectedClient, setSelectedClient] = useState(chatData[0]);

  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        Messages
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5">
        <div className="w-full p-3 bg-white rounded-tl-3xl">
          <div className="flex justify-between items-center">
            <h1 className="font-bold my-2">Chat</h1>
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
                  <h1 className="text-md font-semibold mb-1">{chat.title}</h1>
                  <p className="text-xs">{chat.message}</p>
                </div>
                <div className="flex">
                  <span className="rounded-full text-accent text-xs">
                    1 min
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:col-span-2 bg-gray-100 p-5 text-slate-500 relative ">
          <h1 className="text-xl ml-5">
            <span className="font-bold"> {selectedClient.title}</span>
            {selectedClient.status === "online" && (
              <span className="ml-2 inline-block h-3 w-3 rounded-full bg-primary "></span>
            )}
          </h1>
          <div className="border-b-2 mt-5"></div>
          <ChatBoxUI messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default StoreOwnerChat;
