import { createContext } from "react";
import { RoleType } from "../../view-users/role-management/page";

interface PermissionContexttype {
  roles: RoleType[];
  setRoles: React.Dispatch<React.SetStateAction<RoleType[]>>;
  roleId: string;
  setRoleId: React.Dispatch<React.SetStateAction<string>>;
  dataLoading: {
    loading: boolean;
    error: string;
  };
  setDataLoading: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >;
}
export const RoleContext = createContext<PermissionContexttype>({
  roles: [],
  setRoles: () => {},
  roleId: "",
  setRoleId: () => {},
  dataLoading: {
    loading: false,
    error: "",
  },
  setDataLoading: () => {},
});
