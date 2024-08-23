"use client";
import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserContextWrapper({ children }: { children: React.ReactNode }) {
  const [AllUsersData, setAllUsersData] = useState<any>([]);
  const [usersStatus, setUsersStatus] = useState<any>({
    error: "",
    loading: false,
  });
  return (
    <UserContext.Provider value={{ AllUsersData, setAllUsersData , usersStatus , setUsersStatus }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextWrapper;
