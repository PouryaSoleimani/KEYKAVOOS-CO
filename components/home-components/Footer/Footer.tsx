import React, { useEffect } from "react";
import LocationIcon from "@/public/footer/location.svg";
import PhoneIcon from "@/public/footer/phone.svg";
import MailIcon from "@/public/footer/mail.svg";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/home-components/Footer/SocialMedia";
import Copyright from "@/home-components/Footer/Copyright";
import SenfiLogo from "@/public/footer/senfi.svg";
import EnamaadLogo from "@/public/footer/enamaad.svg";
import styles from "./footer.module.css";
import FooterNewsLetter from "./FooterNewsLetter";
import { MdEmail } from "react-icons/md";


// ^ COMPONENT
function Footer() {

  return (
    <div className="text-[#000000] pt-4 bg-slate-900/80 backdrop-blur-sm  ">
      <div className="flex flex-col lg:flex-row items-center justify-between  w-full px-10 gap-5 mx-auto" dir="rtl" >
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
      <p className={`${styles["footer-section-title"]} tracking-tighter pr-2`}>تماس با ما</p>
      <div className="flex flex-row items-center gap-2 mt-1">
        <Image src={LocationIcon} alt="location" className="w-7 h-7 ml-1" />
        <p className="font-faNum text-[17px] max-w-[26rem] tracking-normal whitespace-nowrap text-zinc-100">
          تهران،خیابان قائم مقام فراهانی،کوچه ماگنولیا، پلاک 30 ،واحد 12
        </p>
      </div>

      <div className="flex flex-row items-center gap-2 mt-1">
        <Image src={PhoneIcon} alt="phone" className="w-6 h-6 -rotate-12" />
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
      <SocialMedia />
      <div className="flex justify-center py-2 items-center">
        <Link referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=422622&Code=KGdskS8BDuEuvxkxW9GT5eCCOJ3TO3sa">
          <Image src={SenfiLogo} alt="senfi-logo" className="w-[5em]" />
        </Link>
        <Link href="https://enamad.ir/" target="_blank">
          <Image src={EnamaadLogo} alt="enamaad-logo" className="w-[5em]" />
        </Link>
      </div>
    </div>
  );
};
