import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti";


const MessageContainer = () => {
  const noChatSelected = false;
  return (
        <div className="md:min-w-[450px] flex flex-col h-full ">
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="px-4 py-2 mb-2 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-500 to-90% ... ">
              <span className="label-text font-bold text-black">To:</span>{" "}
              <span className="text-gray-900 font-bold">Rohit Sharma</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
   
  );
};

export default MessageContainer;


 const NoChatSelected = () =>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Rohit Sharma 🫡  </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    );
};


