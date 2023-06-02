import Image from "next/image";
import React from "react";
import { Diary } from "../../../public/assets";

export default function Card() {
  return (
    <div>
      <p className="text-xs text-[#6368D9] ml-10 font-medium mb-4">
        Let’s check out your today’s task
      </p>
      <div className="w-[18rem] py-5 bg-[#6368D9] p-[1.125rem] rounded-[20px] mx-auto">
        <h2 className="text-[10px] text-white">62.5% completed</h2>
        <div className="w-[90%] rounded-[20px] bg-transparent h-[8px] border border-white">
          <div className="w-[60%] h-full bg-white"></div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="mt-5 text-sm text-white">
              You have 3 more tasks to do!
            </h2>

            <button className="w-20 mt-4 h-[1.4rem] rounded-[30px] text-[10px] bg-[#D1D0F9] text-[#6368D9]">
              Details
            </button>
          </div>

          <div>
            <Image src={Diary} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
