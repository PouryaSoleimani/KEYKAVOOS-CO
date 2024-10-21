import React from "react";
import styles from "../certificates.module.css";
import Image from "next/image";

const { containerTwo, conatinerSix } = styles;
type FinanceCert = { middleText: string; rightText: string; logoSrc: string; altText: string; };

const FinanceCert = ({ middleText, rightText, logoSrc, altText, }: FinanceCert) => {
  return (
    <div className="w-full">
      <div className="z-50 lg:flex lg:flex-row lg:justify-around lg:items-center grid grid-cols-1 mx-auto rounded-[25px] w-[80%] 2xl:max-4xl:w-[70%] lg:h-[246px] overflow-hidden" style={{ boxShadow: "0px 31px 70px 0px rgba(0, 0, 0, 0.25)", backgroundColor: "rgba(255, 255, 255,1)", }} >
        <p className="lg:block order-3 lg:order-1 mr-[3%] px-[1%] pb-[20%] lg:pb-0 w-[90%] lg:w-[15%] font-bold text-[20px] text-center">
          {rightText}
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center order-2 text-center">
          <Image src="/certificates/vector2.png" alt="vector" width={5} height={324} className="w-[8px] h-[170px] rotate-90 lg:rotate-0" />
          <p className="px-5 lg:w-[500px] font-thin text-2xl text-justify lg:text-lg leading-10 tracking-tight">
            {middleText}
          </p>
          <Image src="/certificates/vector2.png" alt="vector" width={5} height={324} className="w-[8px] h-[170px] rotate-90 lg:rotate-0" />
        </div>
        <div className="lg:block flex justify-center order-1 lg:order-3 pt-[20%] lg:pt-0">
          <Image src={logoSrc} alt={altText} width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default FinanceCert;
