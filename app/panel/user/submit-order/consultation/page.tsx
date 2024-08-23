import Order from "@/components/home-components/order";
import Image from "next/image";
import React from "react";
import ConsultImage from "@/public/consult-image.svg";
import PhoneIcon from "@/public/Consult/phone.svg";
import TicketIcon from "@/public/Consult/ticket.svg";
import Link from "next/link";
function Consultation() {
  return (
    <div
      className="py-[3%] w-[100%] shadow mx-auto bg-white rounded-2xl px-[3%] grid grid-cols-1 gap-8"
      dir="ltr"
    >
      <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2">
        <div>
          <Image src={ConsultImage} alt="consultation" />
        </div>
        <div className="text-right flex flex-col gap-5">
          <p className="text-[25px] font-bold">مشاوره رایگان</p>
          <p className="leading-9 text-[18px] text-justify" dir="rtl">
            وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
            می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در
            خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی
            می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن
            خودش می‌باشد و بس!
          </p>
        </div>
      </div>

      <div
        className="text-[#4866CE] flex flex-col lg:flex-row justify-between items-center gap-5"
        dir="rtl"
      >
        <div className="border-[2px] border-[#4866CE] bg-[#F9F9F9] p-3 rounded-[12px] flex flex-row items-center justify-between lg:w-[50%] w-full">
          <p>ارتباط از طریق شماره تماس 91691650</p>
          <Image src={PhoneIcon} alt="phone-icon" width={30} />
        </div>
        <Link
          href="/panel/user/submit-order/consultation/submit-consultation"
          className="border-[2px] border-[#4866CE] bg-[#F9F9F9] p-3 rounded-[12px] flex flex-row items-center justify-between lg:w-[50%] w-full h-full"
        >
          <p>ثبت مشاوره از طریق تیکت</p>
          <Image src={TicketIcon} alt="phone-icon" width={30} />
        </Link>
      </div>
    </div>
  );
}

export default Consultation;
