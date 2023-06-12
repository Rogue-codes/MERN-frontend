/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

interface Userprops{
  name: string;
  email: string;
  password: string;
}

interface Authprops {
  type: string;
  user: Userprops
  setUser: React.Dispatch<React.SetStateAction<Userprops>>
  register: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}
export default function Auth({ type, user, setUser,register }: Authprops) {

  return (
    <div>
      <h2 className="text-center text-[#6368D9] mt-12 text-2xl font-bold">{type}</h2>

      <>
        {type === "Login" ? (
          <form action="" className="w-[90%] mx-auto mt-6">
            <div>
              <label htmlFor="" className="text-xs text-[#6368D9]">
                Email
              </label>
              <input
                type="email"
                className="w-full text-[#6368D9] pl-2 h-12 rounded-lg bg-transparent focus:outline-none border border-black"
                required
              />
            </div>

            <div className="mt-6">
              <label htmlFor="" className="text-xs text-[#6368D9]">
                Password
              </label>
              <input
                type="password"
                className="w-full text-[#6368D9] pl-2 h-12 rounded-lg bg-transparent focus:outline-none border border-black"
                required
              />
            </div>

            <button className="w-full h-12 rounded-lg border mt-6 bg-[#6368D9] text-white">
              Login
            </button>
          </form>
        ) : (
          <form action="" className="w-[90%] mx-auto mt-6" onSubmit={register}>
            <div>
              <label htmlFor="" className="text-xs text-[#6368D9]">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e)=>setUser({...user, name: e.target.value})}
                className="w-full text-[#6368D9] pl-2 h-12 rounded-lg bg-transparent focus:outline-none border border-[#6368D9]"
                required
              />
            </div>

            <div className="mt-6">
              <label htmlFor="" className="text-xs text-[#6368D9]">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                className="w-full text-[#6368D9] pl-2 h-12 rounded-lg bg-transparent focus:outline-none border border-[#6368D9]"
                required
              />
            </div>

            <div className="mt-6">
              <label htmlFor="" className="text-xs text-[#6368D9]">
                Password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                className="w-full text-[#6368D9] pl-2 h-12 rounded-lg bg-transparent focus:outline-none border border-[#6368D9]"
                required
              />
            </div>

            <button className="w-full h-12 rounded-lg border mt-6 bg-[#6368D9] text-white">
              {type}
            </button>
          </form>
        )}
      </>
      {type === "Login" ? (
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span>
            <Link href="/register">register here</Link>
          </span>
        </p>
      ): (
        <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span className="text-[#6368D9]">
          <Link href="/login">Login here</Link>
        </span>
      </p>
      )}
    </div>
  );
}
