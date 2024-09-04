import Order from "@/components/home-components/order";
import Image from "next/image";
import React from "react";
import ConsultImage from "@/public/consult-image.svg";
import PhoneIcon from "@/public/Consult/phone.svg";
import TicketIcon from "@/public/Consult/ticket.svg";
import Link from "next/link";
import 'animate.css';

// ^ COMPONENT ======================================================================================================================================
function Consultation() {
  return (
    <div className="py-[3%] w-[100%] shadow mx-auto bg-white rounded-2xl px-[3%] grid grid-cols-1 gap-8 animate__animated animate__pulse" dir="ltr"  >
      <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2">
        <div>
          <Image src={ConsultImage} alt="consultation" className="w-full" />
        </div>
        <div className="text-right flex flex-col gap-5">
          <p className="text-[26px] font-semibold tracking-tighter text-zinc-900">مشاوره رایگان</p>
          <p className="leading-8 text-[15px] font-thin text-zinc-700 text-justify tracking-tighter pl-4" dir="rtl">
            وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
            می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در
            خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی
            می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن
            خودش می‌باشد و بس!
          </p>
        </div>
      </div>

      <div className="text-[#F9F9F9] flex flex-col lg:flex-row justify-between items-center gap-5" dir="rtl"  >
        <div className="bg-[#4866CF] hover:bg-blue-800 tracking-tight duration-300 p-3 cursor-pointer rounded-[12px] flex flex-row items-center justify-between lg:w-[50%] w-full">
          <p>ارتباط از طریق شماره تماس 91691650</p>
          <Image src={PhoneIcon} alt="phone-icon" width={30} />
        </div>
        <Link href="/panel/user/consultation/submit-consultation" className="bg-[#4866CF] hover:bg-blue-800 tracking-tight duration-300 p-4 cursor-pointer rounded-[12px] flex flex-row items-center justify-between lg:w-[50%] w-full" >
          <p>ثبت مشاوره از طریق تیکت</p>
          <Image src={TicketIcon} alt="phone-icon" width={30} />
        </Link>
      </div>
    </div>
  );
}

export default Consultation;
