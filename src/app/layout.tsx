'use client';
import Nav from "@/components/nav/Nav";
import "./globals.css";
import React, { useState } from "react";
import CreateTask from "@/components/createTask/CreateTask";
import API_FETCHER from "@/ApiFetcher/ApiFetcher";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

interface Forminterface{
   title :string, 
   description :string, 
   isCompleted :boolean, 
   startDate? :string, 
   endDate :string, 
   startTime :string, 
   endTime :string, 
   category :string

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createTask, setCreateTask] = useState<boolean>(false);
  const [formData,setFormData] = useState<Forminterface>({
    title:"", 
    description:"", 
    isCompleted:false, 
    startDate:"", 
    endDate:"", 
    startTime:"", 
    endTime:"", 
    category:""
  })

  console.log(formData)
  const addTask = async () =>{
    try{
      const res = await API_FETCHER.post("/add-todo",{
        formData
      })
    }catch(error){
      console.log(error)
    }

  }

  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        {children}
        <Nav setCreateTask={setCreateTask}/>
        {createTask && <CreateTask setFormData={setFormData} formData={formData} setCreateTask={setCreateTask} />}
      </body>
    </html>
  );
}
