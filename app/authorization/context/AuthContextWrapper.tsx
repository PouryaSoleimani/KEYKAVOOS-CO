"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthContextWrapper({ children }: { children: React.ReactNode }) {
  const [authSteps, setAuthSteps] = useState(1);
  return (
    <AuthContext.Provider value={{ authSteps, setAuthSteps }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
