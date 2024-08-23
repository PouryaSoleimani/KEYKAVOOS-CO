"use client";
import { useEffect, useState } from "react";

export const useTimer = () => {
  const [counter, setCounter] = useState(90);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) return prevCounter - 1;
        return 0;
      });
    }, 1000); // 1 second

    return () => clearTimeout(timeout);
  }, [counter]);

  return { counter, setCounter };
};
