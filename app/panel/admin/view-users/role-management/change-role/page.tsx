"use client";
import React from "react";
import PermissionRole from "./permission-role";
import PositionRole from "./positon-role";
import BackButton from "../../../../../../components/ADMIN__PANEL__COMPONENTS/BackButton";

function ChangePermission() {
    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#4866cf]">تغییر و مدیریت نقش ها </h1>
                <BackButton />
            </div>
            <PermissionRole />
            <PositionRole />
        </div>
    );
}

export default ChangePermission;
