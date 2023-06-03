'use client';
import Nav from "@/components/nav/Nav";
import "./globals.css";
import React, { useState } from "react";
import CreateTask from "@/components/createTask/CreateTask";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createTask, setCreateTask] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        {children}
        <Nav setCreateTask={setCreateTask}/>
        {createTask && <CreateTask setCreateTask={setCreateTask} />}
      </body>
    </html>
  );
}
