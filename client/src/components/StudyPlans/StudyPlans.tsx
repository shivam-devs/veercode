import Image from "next/image";
import React from "react";

type Props = {};
type studyplan = {
    img:string,
    text1:string,
    text2:string
}
function StudyPlans({}: Props) {
    const studyPlans:studyplan[] = [
        {
            img:"studyplan1.png",
            text1:"Top Interview 150",
            text2:"Must-do List for Interview Prep"
        },
        {
            img:"studyplan2.png",
            text1:"LeetCode 75",
            text2:"Ace Coding Interview with 75 Qs"

        },
        {
            img:"studyplan3.png",
            text1:"SQL 50",
            text2:"Crack SQL Interview in 50 Qs"
        },
        {
            img:"studyplan4.png",
            text1:"Introduction to Pandas",
            text2:"Learn Basic Pandas in 15 Qs"         
        },
        {
            img:"studyplan5.png",
            text1:"30 Days of JavaScript",
            text2:"Learn JS Basics with 30 Qs"          
        },
        {
            img:"studyplan6.png",
            text1:"Amazon Spring",
            text2:"Practice Amazon 25 Recently "
        },
    ]
  return (
    <div className="flex flex-col gap-1 p-3 md:pl-24 pl-10 w-full">
      <div className="flex justify-between p-1 items-center mb-2">
        <span className="text-gray-300 font-medium text-2xl">Study Plan</span>
        <span className=" text-blue-500 cursor-pointer">See all</span>
      </div>
      <div className="grid grid-cols-3 w-full gap-3">
      {studyPlans.map((e,idx)=>
        <div className="flex gap-3 items-center p-3 bg-gray-800 cursor-pointer rounded-md py-5">
        <Image src={`/${e.img}`} width={50} height={50} alt='Image' key={idx} className='rounded-md cursor-pointer' />
        <div className="flex flex-col p-1 gap-2 text-white">
        <span className="font-sans">{e.text1}</span>
        <span className="font-thin font-serif text-xs">{e.text2}</span>
        </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default StudyPlans;
