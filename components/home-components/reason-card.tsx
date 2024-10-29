"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type ReasonCardProps = { data: ReasonInfo; };
type ReasonInfo = { id: number; reasonTitle: string; reasonText: string; imgSrc: StaticImageData | string; hoveredImgSrc: string; };

function ReasonCard({ data }: ReasonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => { setIsHovered(true); };

  const handleMouseLeave = () => { setIsHovered(false); };

  //^ RETURN
  return (
    <div className="TECH-CARD flex flex-col items-center gap-2 justify-around bg-transparent shadow-md shadow-zinc-400 border border-zinc-300 px-2 py-3  lg:h-[280px] lg:w-[280px] rounded-3xl text-center duration-500 cursor-pointer hover:scale-105"
      style={{ backgroundColor: isHovered ? "#4866CF" : "transparent", color: isHovered ? "white" : "black", }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <p className="font-semibold text-[22px] tracking-tighter" style={{ color: isHovered ? "white" : "#4866CF" }}  >
        {data.reasonTitle}
      </p>
      <Image src={data.imgSrc ? data.imgSrc : isHovered ? data.imgSrc : data.imgSrc} alt={data.reasonTitle} width={40} height={40} />
      <p className="mt-1 text-[16px] text-center leading-6 tracking-tight" style={{ color: isHovered ? "white" : "black" }}  >
        {data.reasonText}
      </p>
    </div>
  );
}

export default ReasonCard;
