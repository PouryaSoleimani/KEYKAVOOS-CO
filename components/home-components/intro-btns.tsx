"use client";
import { getTokenFromLocal } from "@/redux/features/user/userSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function IntroBtns() {
  const { localToken, role } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenFromLocal());
  }, []);

  const routeModifier = () => {
    if (localToken) {
      if (role === "User") {
        return "/panel/user/submit-order";
      } else {
        return "/";
      }
    } else {
      return "/authorization";
    }
  };
  const routeForBtn = routeModifier();

  return (
    <div className="flex md:justify-end justify-center w-full gap-3">
      <Link href={routeForBtn} className="bg-gradient-to-r from-blue-500 via-[#4866CF] to-blue-800 flex justify-center items-center text-white h-[50px] w-[155px] rounded-2xl hover:scale-110 duration-300"  >
        ثبت سفارش
      </Link>
    </div>
  );
}

export default IntroBtns;
