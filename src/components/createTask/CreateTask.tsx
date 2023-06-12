"use client";
import { categoryArr } from "@/utils";
import { IoArrowBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import API_FETCHER from "@/ApiFetcher/ApiFetcher";
import { toast } from "react-toastify";
import axios from "axios";

interface Forminterface {
  title: string;
  description: string;
  isCompleted: boolean;
  startDate?: string;
  endDate: string;
  startTime: string;
  endTime: string;
  category: string;
}

interface Createtaskprops {
  setCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateTask({ setCreateTask }: Createtaskprops) {
  const [todo, setTodo] = useState<Forminterface>({
    title: "",
    description: "",
    isCompleted: false,
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    category: "",
  });
  const closeAddTask = () => {
    setCreateTask(false);
  };

  const [activeCat, setActiveCat] = useState<null | number>(null);

  const selectCat = (categoryIndex: number, categoryValue: string) => {
    setActiveCat(activeCat === categoryIndex ? null : categoryIndex);
    setTodo({ ...todo, category: categoryValue });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  console.log(todo);

  const baseURL= process.env.NEXT_PUBLIC_API_URL

  const addTask = async (e: any) => {
    e.preventDefault();
    try {
      // Make the axios request
      const res = await axios.post(`http://localhost:5000/api/v1/todo/add-todo`, {
        todo,
      });

      // Display the toast message
      toast.success(`Task created!!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-[#F6F2FF] py-4 fixed overflow-y-scroll left-0 top-0 w-full h-[100vh] z-40"
    >
      <div
        className="text-[#6368D9] flex justify-start gap-2 pl-6"
        onClick={closeAddTask}
      >
        <IoArrowBackOutline />
        <p className="text-sm font-bold leading-[21px]">Create task</p>
      </div>

      <form action="" className="mt-8" onSubmit={addTask}>
        <div className="w-[18rem] mx-auto">
          <label
            htmlFor=""
            className="text-sm font-medium leading-[21px] text-[#6368D9]"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            className="w-full border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none text-[#6368D9]"
          />
        </div>

        <div className="w-[18rem] mx-auto mt-4">
          <label
            htmlFor=""
            className="text-sm font-medium leading-[21px] text-[#6368D9] block"
          >
            Date
          </label>
          <input
            type="date"
            name="endDate"
            value={todo.endDate}
            onChange={handleChange}
            className="text-[#6368D9] !w-[18rem] border border-[#6368D9] rounded-[20px] h-9 px-4 focus:outline-none"
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
              type="time"
              name="startTime"
              value={todo.startTime}
              onChange={handleChange}
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
              type="time"
              name="endTime"
              value={todo.endTime}
              onChange={handleChange}
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
                className={`border px-2 py-1 mt-1 ${
                  activeCat === index
                    ? "text-[#D1D0F9] scale-105 bg-[#6368D9]"
                    : "bg-[#D1D0F9]  text-[#6368D9]"
                }  rounded-[30px] font-medium transition-transform`}
                onClick={() => selectCat(index, item)}
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
          <textarea
            value={todo.description}
            name="description"
            onChange={handleChange}
            className="w-full border border-[#6368D9] text-[#6368D9] rounded-[20px] h-28 p-4 focus:outline-none"
          />
        </div>

        <div className="w-[18rem] mt-4 mx-auto flex justify-center items-center gap-2">
          <div className="w-[2.43rem] text-[#6368D9] flex justify-center items-center h-[1.88rem] bg-[#D1D0F9] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[30px]">
            <RiDeleteBinLine />
          </div>
          <button className="w-[9.8rem] h-[1.88rem] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[30px] bg-[#6368D9] text-white text-xs font-medium leading-[18px]">
            Save task
          </button>
        </div>
      </form>
    </motion.div>
  );
}
