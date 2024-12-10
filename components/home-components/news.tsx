"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import NewsIcon from "/public/Newsletter/bottomsvg-newsletterbg-icon.svg";


function News() {
  const [email, setEmail] = useState("");
  const submitEmail = async (email: string) => {
    try {
      const { data } = await axios.post("https://keykavoos.liara.run/Client/Newsletter", { email, });
      toast.success("ایمیل با موفقیت ثبت شد.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    } catch (error: any) {
      toast.error("خطا در ثبت ایمیل.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    }
  };
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); await submitEmail(email); };
  // ^ RETURN
  return (
    <form
      onSubmit={(e) => handleSubmission(e)}
      className="bg-gradient-to-tr from-zinc-200/50 backdrop-blur-[1px] via-blue-100/30 to-[#4866CF20] h-[400px] mt-[5%] flex flex-col justify-center items-center gap-3 px-[3%] sm:px-0 relative z-10 overflow-hidden"
    >
      <p className="text-[#334052] sm:text-[30px] font-bold py-4 max-w-lg text-center text-[30px] tracking-tighter" >
        با عضویت در خبرنامه شرکت بین المللی کیکاووس زمان از تخفیفات باخبر شوید
      </p>
      <div className="bg-[#F8FAFC] sm:w-[400px] flex flex-row rounded-2xl shadow-md shadow-zinc-400 p-0 ">
        <button className="bg-zinc-600 text-white w-[130px] m-0 py-3 rounded-l-xl hover:text-white hover:bg-[#4866CF] duration-300" type="submit"  >
          تایید ایمیل
        </button>
        <input className="outline-none w-full rounded-r-xl px-3" dir="rtl" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      </div>
      <Image src="/Newsletter/bottomsvg-newsletterbg-icon.svg" alt="bg" className="absolute -left-16 -bottom-20 -z-10 max-lg:hidden opacity-50 w-80" width={25} height={25} />
      <Image src="/Newsletter/bottomsvg-newsletterbg-icon.svg" alt="bg" className="absolute -right-16 -top-20 rotate-180 opacity-50 max-lg:hidden w-80 " width={25} height={25} />
    </form>
  );
}

export default News;
