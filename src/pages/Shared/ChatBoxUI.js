import React, { useEffect, useRef } from "react";
import sendIcon from "../../icons/send_icon.png";
import unknownAvatar from "../../icons/unknown_avatar.png";

const ChatBoxUI = ({ messages }) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      block: "end",
    });
  }, [messages]);

  return (
    <div>
      <div className="relative h-[700px] overflow-y-auto">
        <div className="absolute bottom-16 left-0 w-full p-5 overflow-y-auto h-[700px]">
          <div className="mt-[400px]"></div>
          {messages?.map((msg) => (
            <>
              <p className="text-center text-gray-500 ">{msg.time}</p>
              <SingleMessage msg={msg.message} left={msg.isUser} />
            </>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="absolute bottom-0 right-0 w-full -pb-5">
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
  );
};

export default ChatBoxUI;

export const SingleMessage = ({ left, msg }) => {
  if (left) {
    return (
      <div className=" flex items-center justify-start my-5 gap-5">
        <div className="md:w-1/2 w-full px-3 py-2 text-sm bg-white md:rounded-xl rounded-xl order-2">
          {msg}
        </div>
        <img className="order-1" width={60} src={unknownAvatar} alt="" />
      </div>
    );
  }
  return (
    <div className=" flex items-center justify-end my-5 text-white gap-5">
      <div className=" px-3 py-2 text-sm bg-primary md:rounded-xl rounded-lg ">
        {msg}
      </div>
      <img width={60} src={unknownAvatar} alt="" />
    </div>
  );
};

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
