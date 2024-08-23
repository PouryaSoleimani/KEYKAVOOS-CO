"use client";
import React from "react";
import RolePermission from "./role-permission";
import PositionPermission from "./position-permission";

function ChangePermission() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <RolePermission />
      <PositionPermission />
    </div>
  );
}

export default ChangePermission;
