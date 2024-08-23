"use client";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localRole = JSON.parse(
        window.localStorage.getItem("role") as string
      );
      setRole(localRole)
    }
  }, []);

  // return <div dir="rtl">{userType === "User" && children}</div>;
  return <div dir="rtl">{role !== "Admin" && children}</div>;
}

export default UserLayout;
