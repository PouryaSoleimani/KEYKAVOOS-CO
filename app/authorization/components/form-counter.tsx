"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
type CounterProps = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};
const FormCounter = ({ setCounter, counter }: CounterProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) return prevCounter - 1;
        return 0;
      });
    }, 1000); // 1 second

    return () => clearTimeout(timeout);
  }, [counter, setCounter]);
  return <div></div>;
};
export default FormCounter;
