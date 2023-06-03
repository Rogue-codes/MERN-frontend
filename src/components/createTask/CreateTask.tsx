import { categoryArr } from "@/utils";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface Createtaskprops {
  setCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateTask({ setCreateTask }: Createtaskprops) {
  const closeAddTask = () => {
    setCreateTask(false);
  };
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-[#F6F2FF] py-14 fixed overflow-y-scroll left-0 top-0 w-full h-[100vh] z-40"
    >
      <div
        className="text-[#6368D9] flex justify-start gap-2 pl-6"
        onClick={closeAddTask}
      >
        <IoArrowBackOutline />
        <p className="text-sm font-bold leading-[21px]">Create task</p>
      </div>

      <form action="" className="mt-8">
        <div className="w-[18rem] mx-auto">
          <label
            htmlFor=""
            className="text-sm font-medium leading-[21px] text-[#6368D9]"
          >
            Title
          </label>
          <input
            type="text"
            className="w-full border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none"
          />
        </div>

        <div className="w-[18rem] mx-auto mt-4">
          <label
            htmlFor=""
            className="text-sm font-medium leading-[21px] text-[#6368D9]"
          >
            Date
          </label>
          <input
            type="date"
            className="text-[#6368D9] w-full border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none"
          />
        </div>

        <div className="w-[18rem] flex justify-between items-center mx-auto mt-4">
          <div className="w-[48%]">
            <label
              htmlFor=""
              className="text-sm font-medium leading-[21px] text-[#6368D9]"
            >
              Start time
            </label>
            <input
              type="date"
              className="text-[#6368D9] w-full border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none"
            />
          </div>

          <div className="w-[48%]">
            <label
              htmlFor=""
              className="text-sm font-medium leading-[21px] text-[#6368D9]"
            >
              End time
            </label>
            <input
              type="date"
              className="text-[#6368D9] w-full border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none"
            />
          </div>
        </div>

        <div className="w-[18rem] mx-auto mt-4">
          <p className="text-sm font-medium leading-[21px] text-[#6368D9]">
            Category
          </p>
          <div className="flex justify-start items-center gap-1 flex-wrap">
            {categoryArr.map((item, index) => (
              <p
                key={index}
                className="border px-2 py-1 mt-1 bg-[#D1D0F9] rounded-[30px] text-[#6368D9] font-medium"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="w-[18rem] mt-4 mx-auto">
          <label
            htmlFor=""
            className="text-sm font-medium leading-[21px] text-[#6368D9]"
          >
            Description
          </label>
          <textarea className="w-full border border-[#6368D9] rounded-[20px] h-28 p-4 focus:outline-none" />
        </div>
      </form>
    </motion.div>
  );
}
