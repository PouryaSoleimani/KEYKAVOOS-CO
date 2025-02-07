"use client"
import React, { useEffect } from "react";
import LocationIcon from "/footer/location.svg";
import PhoneIcon from "/footer/phone.svg";
import MailIcon from "/footer/mail.svg";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/home-components/Footer/SocialMedia";
import Copyright from "@/home-components/Footer/Copyright";
import SenfiLogo from "/footer/senfi.svg";
import EnamaadLogo from "/footer/enamaad.svg";
import styles from "./footer.module.css";
import FooterNewsLetter from "./FooterNewsLetter";
import { MdEmail } from "react-icons/md";
import SocialMedia2 from "./SocialMedia2";


// ^ COMPONENT
function Footer() {

  return (
    <div className="text-[#000000] pt-4 bg-slate-900/80 backdrop-blur-sm  ">
      <div className="flex flex-col lg:flex-row items-center justify-between  w-full px-4 lg:px-10 gap-5 mx-auto" dir="rtl" >
        <div className="hidden md:flex col-span-2">
          <FooterNewsLetter />
        </div>
        <Contact />
        <AuthLogos />
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;

const Contact = () => {
  return (
    <div className="flex flex-col justify-stretch gap-3 col-span-2">
      <p className={`${styles["footer-section-title"]} tracking-tighter pr-2 text-center lg:text-start`}>تماس با ما</p>
      <div className="flex flex-row items-center gap-2 mt-1">
        <Image src="/footer/location.svg" alt="location" className="w-7 h-7 ml-1 translate-x-2" width={200} height={400} />
        <p className="font-faNum text-[14px] max-w-[26rem] tracking-normal translate-x-2 text-zinc-100">
          تهران،خیابان قائم مقام فراهانی،کوچه ماگنولیا، پلاک 30 ،واحد 12
        </p>
      </div>

      <div className="flex flex-row items-center gap-2 mt-1 translate-y-1">
        <Image src="/footer/phone.svg" alt="phone" className="w-6 h-6 -rotate-12" width={200} height={400} />
        <p className="font-faNum text-[17px] tracking-widest text-zinc-100">021-91691650</p>
      </div>

      <div className="flex flex-row items-center gap-2 mt-2">
        <MdEmail className="text-white w-6 h-6" />
        <p className="text-[17px] tracking-widest text-zinc-100">info@keykavoos.co</p>
      </div>
    </div>
  );
};

const AuthLogos = () => {
  return (
    <div className="flex flex-col gap-3 col-span-2">
      <SocialMedia2 />
      <div className="flex justify-center py-2 items-center">
        <Link referrerPolicy="origin" target="_blank" href="https://tehran.irannsr.org/fa/trade_unit/2549517/swd_id/104366/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D8%A8%DB%8C%D9%86-%D8%A7%D9%84%D9%85%D9%84%D9%84%DB%8C-%DA%A9%DB%8C%DA%A9%D8%A7%D9%88%D9%88%D8%B3-%D8%B2%D9%85%D8%A7%D9%86.html">
          <Image src="/footer/senfi.svg" alt="senfi-logo" className="w-[5em]" width={200} height={200} />
        </Link>
        <Link href="https://trustseal.enamad.ir/?id=446767&Code=Y6oDWjmfcaGlRuWAK8t9YKGUq2VNkzYJ" target="_blank">
          <Image src="/footer/enamaad.svg" alt="enamaad-logo" className="w-[5em]" width={200} height={200} />
        </Link>
      </div>
    </div>
  );
};
