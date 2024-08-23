import React from "react";
import styles from "../certificates.module.css";
const CertHeader = () => {
  return (
    <p className={`flex lg:flex-row flex-col justify-center items-center lg:text-[48px] font-bold pb-[3%]`}>
      مجوز های شرکت بین المللی
      <span className="text-[#4866CF]"> کیکاووس زمان </span>
    </p>
  );
};

export default CertHeader;
