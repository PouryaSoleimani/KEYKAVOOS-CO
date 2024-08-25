"use client";
import Image from "next/image";
import React, { useState } from "react";

type ReasonCardProps = {
  data: ReasonInfo;
};
type ReasonInfo = {
  id: number;
  reasonTitle: string;
  reasonText: string;
  imgSrc: string;
  hoveredImgSrc: string;
};

function ReasonCard({ data }: ReasonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //^ RETURN
  return (
    <div className="bg-white lg:w-[220px] lg:h-[220px] rounded-lg flex flex-col items-center text-center gap-2 p-[5%] shadow cursor-pointer duration-500 hover:scale-105"
      style={{ backgroundColor: isHovered ? "#4866CF" : "white", color: isHovered ? "white" : "black", }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <p className="text-[20px] font-semibold tracking-tighter" style={{ color: isHovered ? "white" : "#4866CF" }}  >
        {data.reasonTitle}
      </p>
      <Image src={isHovered ? data.hoveredImgSrc : data.imgSrc} alt={data.reasonTitle} />
      <p
        className="text-[16px] leading-6 tracking-tight mt-6 text-center"
        style={{ color: isHovered ? "white" : "black" }}
      >
        {data.reasonText}
      </p>
    </div>
  );
}

export default ReasonCard;
