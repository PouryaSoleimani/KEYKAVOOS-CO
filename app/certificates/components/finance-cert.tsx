import React from "react";
import styles from "../certificates.module.css";
import Image from "next/image";
const { containerTwo, conatinerSix } = styles;
type FinanceCert = {
  middleText: string;
  rightText: string;
  logoSrc: string;
  altText: string;
};
const FinanceCert = ({
  middleText,
  rightText,
  logoSrc,
  altText,
}: FinanceCert) => {
  return (
    <div className="w-full">
      <div
        className="lg:flex lg:flex-row grid grid-cols-1 lg:justify-around lg:items-center 2xl:max-4xl:w-[70%] w-[80%] mx-auto rounded-[59px] lg:h-[246px] overflow-hidden z-50"
        style={{
          boxShadow: "0px 31px 70px 0px rgba(0, 0, 0, 0.25)",
          backgroundColor: "rgba(255, 255, 255,1)",
        }}
      >
        <p className="text-center font-bold text-[23px] lg:w-[15%] px-[1%] mr-[3%] order-3 lg:order-1 w-[90%] lg:block pb-[20%] lg:pb-0">
          {rightText}
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center text-center order-2">
          <Image
            src="/certificates/vector2.png"
            alt="vector"
            width={5}
            height={324}
            className="h-[170px] w-[8px] rotate-90 lg:rotate-0"
          />
          <p className="lg:w-[500px] px-5 lg:text-xl leading-10 text-2xl">
            {middleText}
          </p>
          <Image
            src="/certificates/vector2.png"
            alt="vector"
            width={5}
            height={324}
            className="h-[170px] w-[8px] rotate-90 lg:rotate-0"
          />
        </div>
        <div className="order-1 lg:order-3 flex justify-center pt-[20%] lg:pt-0 lg:block">
          <Image src={logoSrc} alt={altText} width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default FinanceCert;
