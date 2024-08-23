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

  return (
    <div
      className="bg-white lg:w-[200px] lg:h-[200px] rounded-2xl flex flex-col items-center text-center gap-2 p-[5%] shadow cursor-pointer"
      style={{
        backgroundColor: isHovered ? "#4866CF" : "white",
        color: isHovered ? "white" : "black",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className="text-[20px] font-semibold"
        style={{ color: isHovered ? "white" : "#4866CF" }}
      >
        {data.reasonTitle}
      </p>
      <Image src={isHovered ? data.hoveredImgSrc : data.imgSrc} alt={data.reasonTitle} />
      <p
        className="text-[16px] leading-6"
        style={{ color: isHovered ? "white" : "black" }}
      >
        {data.reasonText}
      </p>
    </div>
  );
}

export default ReasonCard;
