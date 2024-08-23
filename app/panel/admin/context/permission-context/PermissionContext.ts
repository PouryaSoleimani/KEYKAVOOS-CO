import { createContext } from "react";
import { PermissionType } from "../../view-users/permission-management/page";

interface PermissionContexttype {
  permissions: PermissionType[];
  setPermissions: React.Dispatch<React.SetStateAction<PermissionType[]>>;
  permissionId: string;
  setPermissionId: React.Dispatch<React.SetStateAction<string>>;
  permissionStatus: {
    loading: boolean;
    error: string;
  };
  setPermissionStatus: any;
}
export const PermissionContext = createContext<PermissionContexttype>({
  permissions: [],
  setPermissions: () => {},
  permissionId: "",
  setPermissionId: () => {},
  setPermissionStatus: () => {},
  permissionStatus: {
    error: "",
    loading: false,
  },
});
