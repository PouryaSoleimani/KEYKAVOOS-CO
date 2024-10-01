// ^ CHANGE-POSITION-PAGE =========================================================================================================================================
"use client";
import React from "react";
import PermissionPosition from "./permission-position";
import RolePosition from "./role-position";
import BackButton from "../../../components/BackButton";


function ChangePermission() {
    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#4866cf]">تغییر و مدیریت جایگاه ها </h1>
                <BackButton />
            </div>
            <PermissionPosition />
            <RolePosition />
        </div>
    );
}

export default ChangePermission;
