import React, { useState } from "react";
import send from "../assets/send-icon.png";
import loadingIcon from "../assets/loading.gif";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src={loadingIcon} alt="Loading" className="w-8 m-auto" ></img>
      ) : (
        <>
          <textarea
            rows={1}
            className="border-0 bg-transparent outline-none w-11/12"
            value={value}
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <button className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
             onClick={handleSubmit}
           >
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
          {/* <img
            src={send}
            alt="sendIcon"
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
            width={40}
            onClick={handleSubmit}
          ></img> */}
        </>
      )}
    </div>
  );
};

export default ChatInput;
