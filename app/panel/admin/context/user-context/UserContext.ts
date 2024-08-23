import { createContext } from "react";

export interface UserContextType {
  AllUsersData: any[];
  setAllUsersData: React.Dispatch<any>;
  usersStatus: {
    error: string;
    loading: boolean;
  };
  setUsersStatus: React.Dispatch<any>
}
export const UserContext = createContext<UserContextType>({
  AllUsersData: [],
  setAllUsersData: () => {},
  usersStatus: {
    error: "",
    loading: false,
  },
  setUsersStatus:() => {}
});
