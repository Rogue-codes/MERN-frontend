/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { profile } from '../../../public/assets'

interface profile {
  name: string;
  email: string;
}

export default function Page() {
  const [profileDetails, setProfileDetails] = useState<profile | null>(null);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  console.log(profileDetails);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${baseURL}/user/auth/profile`);
        setProfileDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);


  return <div className="w-full h-[90vh] px-6 py-12 bg-[#F6F2FF]">
    <div className='justify-start gap-2 mb-[1.25rem] flex items-center'>
        <div className='w-11 h-11 border border-[#6368D9] rounded-full'>
            <Image src={profile} alt=''/>
        </div>

        <div>
          <p className='text-[#6368D9] text-sm font-medium'><span className='text-sm font-bold'>NAME</span></p>
          <p>Student, designer</p>
        </div>
        
    </div>

    <div className="w-full mt-10 h-36 border-2 p-4 bg-[#6368D9] rounded-2xl">
      <p className="text-white text-md">Amazing!</p>
      <h2 className="font-bold text-2xl text-white">You have completed 103 task!</h2>
      <p></p>
    </div>

    <div className="w-full bg-[#AFB5ED] mt-10 h-12 p-3 py-4 rounded-[200px]">
      <p className="text-xs text-[#6368D9]">Account information</p>
    </div>
    <div className="w-full mt-5 h-12 p-3 py-4 bg-[#AFB5ED] rounded-[200px]">
      <p className="text-xs text-[#6368D9]">Settings</p>
    </div>
    <div className="w-full mt-5 h-12 p-3 py-4 bg-[#AFB5ED] rounded-[200px]">
      <p className="text-xs text-[#6368D9]">Log out</p>
    </div>
  </div>;
}
