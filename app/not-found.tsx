/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import 'animate.css';

//^ COMPONENT 
const NotFound = () => {

  return (
    <section className="bg-white w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 animate__animated animate__flash animate__slower" dir="rtl">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="space-y-4">
                <h1 className="my-2 text-gray-800 font-bold text-4xl tracking-tighter"> متاسفانه صفحه ی مورد نظر شما یافت نشد ....</h1>
                <p className="my-2 text-gray-600 ">لطفا از درست بودن آدرس وارد شده اطمینان حاصل فرمایید</p>
                <br />
                <Link
                  href='/'
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#4866CF] text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  بازگشت به خانه
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
