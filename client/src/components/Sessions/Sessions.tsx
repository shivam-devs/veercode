import React from "react";

type SessionsProps = {};

function Sessions({}: SessionsProps) {
  return (
    <div className="h-full w-[70%] text-gray-400 bg-dark-layer-1 flex flex-col items-center justify-center p-3 px-5 rounded-xl relative">
      <div className="w-full flex items-center justify-between">
        <span className="w-[20%]">Session</span>
        <span className=" w-[50%] p-2 cursor-pointer text-gray-200 rounded-md bg-gray-500">
          Vssut
        </span>
      </div>
      <div className="flex gap-2 w-full justify-between">
        <div className="border-gray-400 h-28 w-28 border-2 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-white">214</span>
        </div>
        <div className="w-auto flex flex-col gap-2">
          <div className="flex gap-3 justify-between items-center p-2"><span className="font-bold text-dark-green-s">Easy</span><span className="text-xs">28/795</span></div>
          <div className="flex gap-3 justify-between items-center p-2"><span className="font-bold text-dark-yellow">Medium</span><span className="text-xs">120/1657</span></div>
          <div className="flex gap-3 justify-between items-center p-2"><span className="font-bold text-dark-pink">Hard</span><span className="text-xs">22/704</span></div>
        </div>
      </div>
    </div>
  );
}

export default Sessions;
