"use client";

import { Dispatch, SetStateAction } from "react";

type BtnProps = {
  text: string;
  setExpand: Dispatch<SetStateAction<boolean>>;
  expand: boolean;
};
const InfoBtn = ({ text, setExpand , expand }: BtnProps) => {
  return (
    <div className="flex justify-center items-center mt-16">
      <button
        className="w-[150px] h-[50px] py-3 px-5 rounded-lg bg-[#4866CF] text-white font-bold text-[20px]"
        style={{ boxShadow: "0px 4px 9px 8px rgba(255, 255, 255, 0.25) inset" }}
        onClick={() => setExpand(!expand)}
      >
        {text}
      </button>
    </div>
  );
};
export default InfoBtn;
