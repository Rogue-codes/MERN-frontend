"use client";

import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

interface Navprops{
  setCreateTask:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Nav({setCreateTask}:Navprops) {
  const [active, setActive] = useState("home");

  const handleActive = (text: string) => {
    setActive(text);
  };

  const handleCreateTask = () =>{
    setCreateTask(true)
  }

  return (
    <div className="w-full bg-white backdrop-blur-[30px] fixed left-0 bottom-0 z-30 flex px-8 py-2 justify-between items-center">
      <div
        className={`${
          active === "home" ? "opacity-100" : "opacity-50"
        } w-8 text-[#6368D9] h-8 flex justify-center items-center`}
        onClick={() => handleActive("home")}
      >
        <HiOutlineHome size={30} />
      </div>

      <div
        className={`${
          active === "calendar" ? "opacity-100" : "opacity-50"
        } w-8 text-[#6368D9] h-8 flex justify-center items-center`}
        onClick={() => handleActive("calendar")}
      >
        <GoCalendar size={30} />
      </div>

      <div className="flex text-[#6368D9] mb-6 shadow-[(0px_4px_4px_rgba(0,0,0,0.25)] rounded-full justify-center items-center" onClick={handleCreateTask}>
        <BsFillPlusCircleFill
          size={50}
          className="shadow-[(0px_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>

      <div
        className={`${
          active === "notification" ? "opacity-100" : "opacity-50"
        } w-8 text-[#6368D9] h-8 flex justify-center items-center`}
        onClick={() => handleActive("notification")}
      >
        <RiNotification4Line size={30} />
      </div>

      <div
        className={`${
          active === "profile" ? "opacity-100" : "opacity-50"
        } w-8 text-[#6368D9] h-8 flex justify-center items-center`}
        onClick={() => handleActive("profile")}
      >
        <CgProfile size={30} />
      </div>
    </div>
  );
}
