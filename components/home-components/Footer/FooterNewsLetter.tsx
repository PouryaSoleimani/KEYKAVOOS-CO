"use client";
import app from "@/services/service";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = { email: string }

// ^ COMPONENT ===================================================================================================================================================================================
function FooterNewsLetter() {

  //^ SCHEMA
  const schema = yup
    .object()
    .shape({ email: yup.string().email().required() })
    .required();

  const notifySuccess = () => toast.success('اشتراک شما در خبرنامه با موفقیت ثبت شد');
  const notifyError = () => toast.error("خطا در ثبت اشتراک خبرنامه");

  const { register, handleSubmit, resetField, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      app.post("/member/store", data)
        .then(response => { console.log(response); reset(); resetField("email") })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-stretch justify-center lg:justify-start lg:gap-6">
        <p className={`${styles["footer-section-title"]} tracking-tighter font-normal pr-1`}>مشترک شوید تا آخرین اخبار را دریافت کنید.</p>
        <form className="flex gap-2 flex-col lg:flex-row" onSubmit={handleSubmit(onSubmit)} >
          <div className="w-full">
            <input className="bg-[#F8FAFC] text-lg placeholder:text-sm rounded-lg w-full py-2 px-3 outline-none border-none" placeholder="ایمیل خودرا وارد کنید..." type="email" {...register('email', { required: true })} aria-describedby="emailnote" />
            {errors.email && <p className='text-red-900 bg-red-200/40 font-thin px-2 py-0.5 rounded-md absolute top-36 right-[2.5%] tracking-tighter text-sm'>ایمیل وارد شده صحیح نمی باشد</p>}
          </div>
          <button type="submit" className="flex gap-1 p-2 text-white bg-[#4866CF] rounded-lg items-center whitespace-nowrap lg:w-[160px] w-[120px] lg:h-[45px] hover:bg-blue-800 duration-300">
            <span className="tracking-tighter px-1 flex items-center gap-2 leading-5">مشترک شوید
              <Image width={3} height={3} alt="footer_pic" src="/white-arrow.svg" className="w-3 h-3 pl-1 mb-0.5" />
            </span>
          </button>
        </form>
        <p className="lg:text-start tracking-tight leading-7 translate-y-4 text-zinc-100">
          ما به شما تمامی اخبار فروش ویژه و رویداد ها را اطلاع رسانی میکنیم.
        </p>
      </div>
    </>
  );
}

export default FooterNewsLetter;
