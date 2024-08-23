"use client";
import app from "@/services/service";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i;
function FooterNewsLetter() {
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
    const validMail = emailRegex.test(email);
    setValidEmail(validMail);
  }, [email]);

  return (
    <div className="flex flex-col gap-2 items-stretch justify-center lg:justify-start lg:gap-6">
      <p className={`${styles["footer-section-title"]}`}>مشترک شوید تا آخرین اخبار را دریافت کنید.</p>
      <form
        className="flex gap-2 flex-col lg:flex-row"
        onSubmit={(e) => handleEmailSubmission(e)}
      >
        <div className="w-full">
          <input
            placeholder="ایمیل خودرا وارد کنید..."
            type="email"
            value={email}
            className="bg-[#4682B4] placeholder:text-white rounded-md w-full py-2 px-2 outline-none"
            aria-describedby="emailnote"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            id="emailnote"
            className={
              email && !validEmail
                ? "bg-black text-white text-[0.75rem] p-[0.25rem] rounded-lg relative -bottom-[10px] mb-2 lg:mb-0"
                : "absolute -left-[9999px]"
            }
          >
            ایمیل معتبر نیست.
          </p>
        </div>
        <button className="flex gap-1 p-1 text-white bg-[#4682B4] rounded-md items-center whitespace-nowrap lg:w-[160px] w-[120px] lg:h-[40px]">
          <span>مشترک شوید</span>
          <img src="/white-arrow.svg" className="w-3 h-3" />
        </button>
      </form>
      {emailSuccess !== "" && emailSuccess && (
        <span className="bg-indigo-800 text-white text-center text-[1rem] p-[0.25rem] rounded-lg relative -bottom-[10px] mb-2 lg:mb-0">
          {emailSuccess !== "" && emailSuccess}
        </span>
      )}
      <p className="lg:text-center">
        ما به شما تمامی اخبار فروش ویژه و رویداد ها را اطلاع رسانی میکنیم.
      </p>
    </div>
  );
}

export default FooterNewsLetter;
