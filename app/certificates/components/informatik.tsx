import Image from "next/image";
import React from "react";
import styles from "../certificates.module.css";
import FinanceCert from "./finance-cert";
import CertHeader from "./cert-header";
const { container } = styles;

const Informatik = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <CertHeader />
        <Image src="/certificates/1.svg" alt="انفورماتیک" width={400} height={300} className="px-[8%] lg:p-0 animate animate__animated animate__flash animate__slow rounded-xl" />
      </div>
    </div>
  );
};

export default Informatik;
