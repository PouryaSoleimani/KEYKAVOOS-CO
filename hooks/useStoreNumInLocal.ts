import { useEffect } from "react";

export const useStoreNumInLocal = (PhoneNumber: string) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("PhoneNumber", PhoneNumber);
    }
  }, [PhoneNumber]);
};
