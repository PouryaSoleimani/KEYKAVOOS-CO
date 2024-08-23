"use client";
import React, { useState } from "react";
import { RoleContext } from "./RoleContext";
import { RoleType } from "../../view-users/role-management/page";

function RoleContextWrapper({ children }: { children: React.ReactNode }) {
  const [roles, setRoles] = useState<RoleType[]>([]);
  const [roleId, setRoleId] = useState("");
  const [dataLoading, setDataLoading] = useState({
    loading: false,
    error: "",
  });
  return (
    <RoleContext.Provider
      value={{
        roles,
        setRoles,
        roleId,
        setRoleId,
        dataLoading,
        setDataLoading,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export default RoleContextWrapper;
