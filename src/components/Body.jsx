import React from "react";
import autoAnimate from "@formkit/auto-animate"
import { useEffect, useRef } from "react";

const Body = ({ chat }) => {
  const aiStyling =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";
  const parent = useRef(null);
  const bottomRef = useRef(null);


  //for scrolling to bottom
  useEffect(() =>{
    bottomRef.current?.scrollIntoView({behavior: "smooth"})
  }, [chat])
  
  //only for auto animation
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent])
  
    return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words
          border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
            message.sender === "ai" && aiStyling
          }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>

      {/* ai response
    <div className={`border-[#999999] break-words
      border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
    <pre className='whitespaces-pre-wrap ${aiStyling}
    `}>
      <pre>
      <span>
        Yes, I can help you with anything
      </span>
    </pre>
  </div> */}
    </div>
  );
};

export default Body;
