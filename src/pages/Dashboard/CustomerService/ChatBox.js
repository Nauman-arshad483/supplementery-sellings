import React from "react";
import sendIcon from "../../../icons/send_icon.png";
import unknownAvatar from "../../../icons/unknown_avatar.png";

const ChatBox = () => {
  return (
    <div className="w-full bg-gray-100 px-5 pt-5 text-slate-500 relative ">
      <h1 className="text-xl ml-5">
        Name Lastname, <span className="font-bold">Client</span>
      </h1>
      <div className="border-b-2 mt-5"></div>
      <div className="h-[200px] scrollbar overflow-y-auto">
        <div className="flex items-center justify-end my-5 text-white gap-5">
          <p className="px-4 py-4 text-sm bg-primary md:rounded-full rounded-xl ">
            Hello, this is Eva, how can I help you?
          </p>
          <img width={60} src={unknownAvatar} alt="" />
        </div>
        <div className="flex items-center justify-start my-5 gap-5">
          <p className="px-4 py-4 text-sm bg-white md:rounded-full rounded-xl order-2">
            I am having trouble for downloading templates.
          </p>
          <img className="order-1" width={60} src={unknownAvatar} alt="" />
        </div>
      </div>
      <form className="w-full -pb-5">
        <div className="flex items-center bg-white md:mx-5 mx-1 py-1 px-0">
          <input
            className="w-full py-3 px-3 ml-2"
            type="text"
            placeholder="Type your message..."
          />
          <label className="p-5" htmlFor="dropzone-file">
            {fileIcon}
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
          <label
            className=" flex items-center justify-center pr-2"
            htmlFor="send-text"
          >
            <img className="m-0 p-0" width={50} src={sendIcon} alt="" />
            <input id="send-text" type="submit" className="hidden" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;

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
