import { useEffect } from "react";

export const useStoreNumInLocal = (PhoneNumber: string) => {
  useEffect(() => {
      window.localStorage.setItem("PhoneNumber", PhoneNumber);
  }, [PhoneNumber]);
};
