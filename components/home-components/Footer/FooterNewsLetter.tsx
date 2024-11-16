"use client";
import app from "@/services/service";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i;


// ^ COMPONENT ===================================================================================================================================================================================
function FooterNewsLetter() {
  //^ SCHEMA
  const schema = yup
    .object()
    .shape({ name: yup.string().required(), email: yup.string().email().required(), phonenumber: yup.string().max(11).required(), textarea: yup.string() })
    .required();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState("");

  const handleEmailSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await app.post(
        "https://keykavoos.liara.run/User/signNewsClub",
        {
          email,
        }
      );
      setEmailSuccess("شما با موفقیت عضو شدید.");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    1
    const validMail = emailRegex.test(email);
    setValidEmail(validMail);
  }, [email]);

  return (
    <div className="flex flex-col gap-2 items-stretch justify-center lg:justify-start lg:gap-6">
      <p className={`${styles["footer-section-title"]} tracking-tighter font-normal pr-1`}>مشترک شوید تا آخرین اخبار را دریافت کنید.</p>
      <form className="flex gap-2 flex-col lg:flex-row" onSubmit={(e) => handleEmailSubmission(e)}  >
        <div className="w-full">
          <input
            placeholder="ایمیل خودرا وارد کنید..."
            type="email"
            value={email}
            className="bg-[#F8FAFC] text-lg placeholder:text-sm rounded-lg w-full py-2 px-3 outline-none border-none"
            aria-describedby="emailnote"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="emailnote" className={email && !validEmail ? "bg-red-300 text-red-900 text-[0.75rem] p-[0.5rem] rounded-md relative -bottom-[10px] mb-2 lg:mb-0" : "absolute -left-[9999px]"}  >
            ایمیل معتبر نیست.
          </p>
        </div>
        <button className="flex gap-1 p-2 text-white bg-[#4866CF] rounded-lg items-center whitespace-nowrap lg:w-[160px] w-[120px] lg:h-[45px] hover:bg-blue-800 duration-300">
          <span className="tracking-tighter px-1 flex items-center gap-1">مشترک شوید
            <Image width={3} height={3} alt="footer_pic" src="/white-arrow.svg" className="w-3 h-3 pl-1" />
          </span>
        </button>
      </form>
      {emailSuccess !== "" && emailSuccess && (
        <span className="bg-indigo-800 text-white text-center text-[1rem] p-[0.25rem] rounded-lg relative -bottom-[10px] mb-2 lg:mb-0">
          {emailSuccess !== "" && emailSuccess}
        </span>
      )}
      <p className="lg:text-start tracking-tight leading-7 text-zinc-100">
        ما به شما تمامی اخبار فروش ویژه و رویداد ها را اطلاع رسانی میکنیم.
      </p>
    </div>
  );
}

export default FooterNewsLetter;
