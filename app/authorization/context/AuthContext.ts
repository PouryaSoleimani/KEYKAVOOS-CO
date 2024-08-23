"use client";

import { createContext } from "react";

interface AuthContextTypes {
  authSteps: number;
  setAuthSteps: React.Dispatch<React.SetStateAction<number>>;
}

export const AuthContext = createContext<AuthContextTypes>({
  authSteps: 1,
  setAuthSteps: () => {},
});
