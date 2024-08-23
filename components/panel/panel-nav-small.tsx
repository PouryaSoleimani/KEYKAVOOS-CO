"use client";
import Logo from "@/app/auth/components/logo";
import { deleteToken } from "@/redux/features/user/userSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
type PanelNavSmallProps = {
  userRole: string;
};
const PanelNavSmall = ({ userRole }: PanelNavSmallProps) => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state: any) => state.userRole);
  return (
    <div className="flex flex-row justify-between items-center p-[3%]">
      <div className="text-black font-semibold text-lg">
        {userRole === "User" && (
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => dispatch(deleteToken())}
        >
          <Image src="/exit.svg" alt="exit" width={40} height={40} />
          <p>خروج</p>
        </div>
        )}
        {userRole === "student" && (
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => dispatch(deleteToken())}
          >
            <Image src="/exit.svg" alt="exit" width={40} height={40} />
            <p>خروج</p>
          </div>
        )}
        {userRole === "employer" && (
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => dispatch(deleteToken())}
          >
            <Image src="/exit.svg" alt="exit" width={40} height={40} />
            <p>خروج</p>
          </div>
        )}
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <p>
          {userProfile.FirstName} {userProfile.LastName}
        </p>
      </div>
    </div>
  );
};

export default PanelNavSmall;
