import React, { useState } from "react";
import { PermissionContext } from "./PermissionContext";
import { PermissionType } from "../../view-users/permission-management/page";

function PermissionContextWrapper({ children }: { children: React.ReactNode }) {
  const [permissions, setPermissions] = useState<PermissionType[]>([]);
  const [permissionId, setPermissionId] = useState("");
  const [permissionStatus, setPermissionStatus] = useState({
    loading: false,
    error: "",
  });
  return (
    <PermissionContext.Provider
      value={{
        permissions,
        setPermissions,
        permissionId,
        setPermissionId,
        permissionStatus,
        setPermissionStatus,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
}

export default PermissionContextWrapper;
