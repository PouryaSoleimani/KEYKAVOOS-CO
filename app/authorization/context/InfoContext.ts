import { createContext } from "react";

interface InfoContextTypes {
  savedInfo: {
    name: string;
    surname: string;
    mobile: string;
    type: string;
    password: string;
    ncode: string;
  };
  setSavedInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      surname: string;
      mobile: string;
      type: string;
      password: string;
      ncode: string;
    }>
  >;
}
export const InfoContext = createContext<InfoContextTypes>({
  savedInfo: {
    name: "",
    surname: "",
    mobile: "",
    type: "",
    password: "",
    ncode: "",
  },
  setSavedInfo: () => {},
});
