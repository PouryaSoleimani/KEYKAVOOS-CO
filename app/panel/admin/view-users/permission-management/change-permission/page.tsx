"use client";
import React from "react";
import RolePermission from "./role-permission";
import PositionPermission from "./position-permission";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

function ChangePermission() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center justify-end">
        <Link href='/panel/admin/view-users/permission-management' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>
      <RolePermission />
      <PositionPermission />
    </div>
  );
}

export default ChangePermission;
