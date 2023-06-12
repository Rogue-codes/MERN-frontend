'use client';
import Auth from '@/components/authcomponent/Auth'
import { UserContext } from '@/context/UserAuth';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

export default function Page() {

  const userContext = useContext(UserContext);
  const { user, login, logout } = userContext || {};

  const [regUser, setRegUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  
  const router = useRouter()

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/user/auth/create`, regUser);
      toast.success('Registered successfully');

      const newUser = {
        id: res.data._id,
        email: res.data.email,
        name: res.data.name,
      };

      if (login) {
        login(newUser);
      }
      router.push('/')
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };
  return (
    <div>
        <Auth  user={regUser} setUser={setRegUser} register={register} type="Login"/>
    </div>
  )
}
