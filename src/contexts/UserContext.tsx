"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

enum E_Locale {
  EN = "en",
  VN = "vn",
}
interface UserContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const defaultUserContext: UserContextType = {
    user: {},
    setUser: (v: any) => {}, // Dummy setter function
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export const useUser = () => useContext(UserContext);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<any>({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
