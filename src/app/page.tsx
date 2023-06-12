"use client";
import Card from "@/components/card/Card";
import Category from "@/components/categories/Category";
import CreateTask from "@/components/createTask/CreateTask";
import Nav from "@/components/nav/Nav";
import Profile from "@/components/profile/Profile";
import Image from "next/image";
import React, { useState } from "react";


export default function Home() {

  return (
    <main className="pt-5 h-[88vh] overflow-y-scroll pb-12">
      <Profile />
      <Card />
      <Category />
    </main>
  );
}
