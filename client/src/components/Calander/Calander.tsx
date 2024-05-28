import Image from "next/image";
import React from "react";

type CalanderProps = {};

function Calander({}: CalanderProps) {
  return (
    <div className="h-full w-auto select-none z-0 text-gray-400 bg-dark-layer-1 flex flex-col items-center justify-center p-3 px-5 rounded-xl relative shadow hover:shadow-gray-500 transition-all">
      <span className="w-full font-sans font-semibold">Day 21</span>
      <div className="absolute -top-28 right-0">
        <Image src="/calander.png" width={130} height={130} alt="image" className="pointer-events-none"/>
      </div>
      <div className="h-full w-full flex flex-col gap-3 pt-2">
        <span className="w-full grid grid-cols-7 items-center justify-between gap-5 px-3 text-xs">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </span>
        <div className="w-full h-auto grid grid-cols-7 items-center justify-between gap-5 px-3 text-xs">
            {[...Array(30)].map((e,idx)=><span key={idx}>{idx+1}</span>)}
        </div>
      </div>
    </div>
  );
}

export default Calander;
