import React from "react";
import { TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { LuBook } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";
import { FiFolder } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

export default function Category() {
  const categoryArr = [
    {
      cateName: "College stuff",
      length: 27,
    },
    {
      cateName: "Study",
      length: 18,
    },
    {
      cateName: "Social life",
      length: 10,
    },
    {
      cateName: "Work",
      length: 11,
    },
    {
      cateName: "Personal project",
      length: 4,
    },
    {
      cateName: "Home",
      length: 36,
    },
  ];
  return (
    <div className="w-[95%] pl-2 mt-7 mx-auto h-64 border-2 border-dashed border-[#6368D9] text-xs rounded-[5px]">
      <p className="-mt-[.5rem] text-[#6368D9] font-bold ">Task categories</p>

      <div className="flex p-2 flex-wrap justify-between items-center">
        {categoryArr.map((item, index) => (
          <div
            key={index}
            className="w-[48%] flex justify-between px-4 items-center mt-2 rounded-[15px] bg-[#D1D0F9] h-[4.25rem]"
          >
            <div>
              <p className="text-xs font-bold text-[#6368D9]">{item.cateName}</p>
              <p className="text-xs font-normal text-[#6368D9]">{item.length} task</p>
            </div>
            <div className="text-[#6368D9]">
              {index === 0 ? (
                <TbSchool size={30} />
              ) : index === 1 ? (
                <LuBook size={30}/>
              ) : index === 2 ? (
                <TbMessageChatbot  size={30}/>
              ) : index === 3 ? (
                <MdWorkOutline size={30} />
              ) : index === 4 ? (
                <FiFolder size={30} />
              ) : (
                <HiOutlineHome size={30} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
