"use client";
import ToastProvider from "@/toastify/ToastProvider";
import AuthContextWrapper from "./context/AuthContextWrapper";
import InfoContextWrapper from "./context/InfoContextWrapper";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { token } = useSelector((state: any) => state.userData);
  const [localToken, setLocalToken] = useState("");
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const localToken = JSON.parse(
        window.sessionStorage.getItem("token") as string
      );
      setLocalToken(localToken);
    }
  }, []);

  return !token || !localToken ? (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="sm:max-w-lg w-full">
        <InfoContextWrapper>
          <AuthContextWrapper>
            <ToastProvider>{children}</ToastProvider>
          </AuthContextWrapper>
        </InfoContextWrapper>
      </div>
    </div>
  ) : (
    (token || localToken) && <div></div>
  );
};
export default AuthLayout;
