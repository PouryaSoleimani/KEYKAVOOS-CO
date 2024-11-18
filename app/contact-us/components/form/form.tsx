"use client";
import Image from "next/image";
import React, { useState } from "react";
import FormInput from "./form-inputs";
import FormTextarea from "./form-textarea";
import FormText from "./form-text";
import axios from "axios";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

type Inputs = { fullName: string, phoneNumber: number, messageText: string }

//* COMPONENT =============================================================================================================================================================

const Form = () => {
  const [message, setMessage] = useState({ name: "", phone: "", text: "" });
  const [disable, setDisable] = useState(true);
  // YUP
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    phoneNumber: yup.number().required(),
    messageText: yup.string().required(),
  }).required();

  // FORM HAMDLER
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({ resolver: yupResolver(schema), });
  // * SUBMIT HANDLER
  const onSubmit = (data: any) => {
    console.log(data); reset()
  }

  return (
    <div className="grid grid-cols-1 w-full mx-auto lg:w-[80%] my-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto justify-between lg:gap-[8%] w-full">
        <div className="flex flex-col w-full items-center lg:gap-[5%] gap-[3%]">
          <FormText />
          <form className="flex flex-col h-full lg:w-full lg:gap-[10%] w-[75%] mx-auto gap-4" id="contact-us" onSubmit={handleSubmit(onSubmit)} >
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[5%] gap-3">

              <label className="input input-bordered flex items-center gap-2">
                <FaUser className="w-4 h-4 opacity-70" />
                <input type="text" className="grow relative" placeholder="نام و نام خانوادگی" {...register('fullName')} />
                {errors.fullName && <p className="whitespace-nowrap z-10 absolute translate-y-10 translate-x-4 text-xs tracking-tight bg-red-400/20 px-2 py-0.5 rounded-md text-red-900 w-fit">نام و نام خانوادگی خود را وارد کنید</p>}
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <FaPhone className="w-4 h-4 opacity-70" />
                <input type="text" className="grow" placeholder="شماره تماس" {...register('phoneNumber')} />
                {errors.fullName && <p className="whitespace-nowrap z-10 absolute translate-y-10 translate-x-4 text-xs tracking-tight bg-red-400/20 px-2 py-0.5 rounded-md text-red-900 w-fit">شماره تلفن وارد شده صحیح نمی باشد</p>}
              </label>
            </div>

            <textarea className="textarea textarea-bordered resize-none h-64 relative placeholder:text-xl font-extralight" {...register('messageText')} placeholder=" پیام شما" />
            {errors.fullName && <p className="whitespace-nowrap z-10 absolute translate-y-[275px] text-xs tracking-tight bg-red-400/20 px-2 py-0.5 rounded-md text-red-900 w-fit">لطفا متن پیام خود را وارد کنید</p>}

            <button type="submit" className="btn btn-primary bg-gradient-to-tr from-blue-800 via-[#4866CF] to-blue-900 text-xl font-bold tracking-tighter">ارسال فرم</button>
          </form>

        </div>

        <div className="hidden lg:block">
          <Image src="/contactus/agent.png" width={700} height={700} alt="agent" />
        </div>
      </div>
    </div>
  );
};

export default Form;
