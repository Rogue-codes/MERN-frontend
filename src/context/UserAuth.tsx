"use client";
import React, { createContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface childrenProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: childrenProps) => {
  // const [user, setUser] = useState<User | null>(
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser
    ? JSON.parse(storedUser)
    : { name: "", id: "", email: "" };

  const [user, setUser] = useState<User | null>(initialUser);
  // );

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  console.log(user);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
