import React from "react";
import tower from "../../public/Intro/tower.svg";
import support from "../../public/Intro/support.svg";
import Image from "next/image";
import IntroBtns from "./intro-btns";
import 'animate.css';


// ^ COMPONENT
function Intro() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 text-right relative px-[4vw] animate__animated animate__fadeInUp animate__slow animate__delay-1s" >
      <div className="flex justify-center lg:justify-normal relative">
        <div style={{ backgroundColor: "#0b0c0c", borderRadius: "100%", }} className="lg:w-[430px] lg:h-[430px] max-w-[430px] w-[300px] h-[285px] absolute top-[1rem] lg:left-0 lg:translate-x-0"></div>
        <div
          style={{ background: "radial-gradient(circle at bottom,#1c1d1d 0%,#0000)", borderRadius: "50% 50% 50% 50%", overflow: "hidden", display: "flex", justifyContent: "center", zIndex: "10", }}
          className="lg:w-[420px] lg:max-w-[450px] lg:h-[450px] w-[300px] h-[300px]"
        >
          <Image src={tower} alt="tower" className="z-20 animate__animated animate__fadeInUp animate__slow animate__delay-2s " />

          {/*     پشتیبانی یکساله     */}
          {/* <div className="bg-[#FFFFFF] lg:w-[100px] lg:h-[100px] w-[90px] h-[90px] lg:rounded-full absolute lg:left-0 -left-5 top-14 flex flex-col items-center py-3 gap-1 shadow z-30 rounded-xl">
            <Image src={support} alt="support" width={25} height={25} className="bg-[#C9D6E9DE] p-[3%]" />
            <p className="lg:text-[12px] text-[#4C6487] text-sm text-center">
              پشتیبانی یک ساله
            </p>
            <p className="lg:text-[10px] text-[#4C6487] text-center hidden lg:inline">
              یک سال در کنارتان هستیم
            </p>
          </div> */}

          <div className="w-[30px] h-[30px] absolute left-12 bg-[#000000] rounded-full hidden lg:block"></div>
          <div className="w-[28px] h-[28px] absolute left-[28rem] top-12 bg-[#4866CF] rounded-full hidden lg:block"></div>
          <div className="w-[22px] h-[22px] absolute bottom-5 left-2 bg-[#383a3d] rounded-full hidden lg:block"></div>
          <div className="w-[8px] h-[8px] absolute bottom-11 right-80 bg-[#1e1e1f] rounded-full hidden lg:block"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end gap-5">
        <div className="flex items-center justify-center text-center md:text-right md:text-[30px] text-[#eaeaeb] text-[35px] 6xl:max-7xl:text-[43px] 7xl:text-[40px] 8xl:text-[45px] 5xl:max-6xl:text-[43px] 2xl:max-3xl:text-[38px] 3xl:max-5xl:text-[35px] 3xl:max-5xl:max-w-md lg:max-2xl:text-[45px] lg:max-2lg:text-[34px] 2lg:max-xl:text-[38px] xl:max-2xl:text-[44px] leading-snug font-YekanBakh">
          <div className="tracking-tighter">
            شرکت بین المللی <span className="font-extrabold text-[#4866CF]">کیکاووس زمان</span> <br /> {" "}
            تجربه ای متفاوت در<br /> دنیای دیجیتال
          </div>
        </div>
        <p className="text-zinc-400 md:max-w-[35rem] text-[16px] text-justify leading-9" dir="rtl"   >
          شرکت بین المللی کیکاووس زمان با تکیه بر دانش فنی وتخصصی بابهترین روش
          هااز متخصصان برای توسعه ی نرم افزار های نوآورانه استفاده می کند و به
          ارائه خدمات با کیفیت در زمینه های برنامه نویسی، بازرگانی وتولید قطعات
          کامپیوتر مطابق بااستانداردهای بین الملی می پردازد.
        </p>
        <IntroBtns />
      </div>
    </div>
  );
}

export default Intro;
