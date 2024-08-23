import Image from "next/image";
import React from "react";
import FinanceCert from "./finance-cert";
import styles from "../certificates.module.css";
const { containerThree } = styles;
const FianaceAuthorizationCert = () => {
  return (
    <div>
      <div className={`flex justify-center items-center px-[5%]`}>
        <Image
          src="/certificates/2.svg"
          alt="گواهی صلاحیت سازمان بودجه"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};

export default FianaceAuthorizationCert;
