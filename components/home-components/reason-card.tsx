"use client";
import Image from "next/image";
import React, { useState } from "react";

type ReasonCardProps = { data: ReasonInfo; };
type ReasonInfo = { id: number; reasonTitle: string; reasonText: string; imgSrc: string; hoveredImgSrc: string; };

function ReasonCard({ data }: ReasonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => { setIsHovered(true); };

  const handleMouseLeave = () => { setIsHovered(false); };
  
  //^ RETURN
  return (
    <div className="flex flex-col items-center gap-2 justify-around bg-transparent shadow-md shadow-zinc-700 backdrop-blur-[1px] px-2 py-6 rounded-lg lg:h-[220px] text-center duration-500 cursor-pointer hover:scale-105"
      style={{ backgroundColor: isHovered ? "#4866CF" : "white", color: isHovered ? "white" : "black", }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <p className="font-semibold text-[22px] tracking-tighter" style={{ color: isHovered ? "white" : "#4866CF" }}  >
        {data.reasonTitle}
      </p>
      <Image src={isHovered ? data.hoveredImgSrc : data.imgSrc} alt={data.reasonTitle} />
      <p className="mt-6 text-[16px] text-center leading-6 tracking-tight" style={{ color: isHovered ? "white" : "black" }}  >
        {data.reasonText}
      </p>
    </div>
  );
}

export default ReasonCard;
