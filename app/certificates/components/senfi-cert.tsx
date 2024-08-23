import Image from "next/image";
import React from "react";
import styles from "../certificates.module.css";
import FinanceCert from "./finance-cert";
const { containerFour, containerSix } = styles;
const SenfiCert = () => {
  return (
    <div>
      <div className={`flex justify-center items-center px-[5%]`}>
        <Image
          src="/certificates/3.svg"
          alt="گواهینامه نظام صنفی"
          width={1000}
          height={300}
        />
      </div>
        
    </div>
  );
};

export default SenfiCert;
