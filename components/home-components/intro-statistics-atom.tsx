"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CountUp from "react-countup";

type IntroStatisticsAtomProps = {
  amount: number;
  jobDone: string;
  imgSrc: StaticImageData;
};
function IntroStatisticsAtom({
  amount,
  jobDone,
  imgSrc,
}: IntroStatisticsAtomProps) {
  return (
    <div className="flex flex-row text-center items-center gap-2">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-around font-semibold sm:text-[30px]">
          <CountUp
            end={amount}
            className="font-faNum"
            duration={5}
          />
        </div>
        <p className="font-normal sm:text-[16px] text-[10px]">{jobDone}</p>
      </div>
      <div className="bg-[#D0DBEC] rounded-full w-[70px] h-[70px] flex justify-center items-center">
        <Image src={imgSrc} alt={jobDone} />
      </div>
    </div>
  );
}

export default IntroStatisticsAtom;
