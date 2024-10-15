"use client";
import React from "react";
import RolePermission from "./role-permission";
import PositionPermission from "./position-permission";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import BackButton from "../../../../../../components/ADMIN__PANEL__COMPONENTS/BackButton";

function ChangeRole() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#4866cf]">تغییر و مدیریت دسترسی ها</h1>
        <BackButton />
      </div>
      <RolePermission />
      <PositionPermission />
    </div>
  );
}

export default ChangeRole;
