
import React from "react";
import styles from "./not-found.module.css";
import Link from "next/link";
const { notFoundBackground } = styles;

const NotFound = () => {
  return (
    // <div className={`${notFoundBackground} w-full`}>
    //   <div className="flex flex-col justify-center items-center h-[58vh] w-[50vh] mx-auto">
    //     <p className="text-white font-faNum lg:text-[30vh] font-extrabold tracking-tighter text-[27vh]" style={{ textShadow: "-1px 4px 2px #4866CF" }}>
    //       404
    //     </p>
    //     <Link href="/" className="text-[5vh] text-center font-bold font-YekanBakh bg-[#EC6A00] text-white rounded-full py-3 w-full">
    //       <button>
    //         برگشت به خانه
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16" dir="rtl">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="space-y-4">
              <h1 className="my-2 text-gray-800 font-bold text-3xl tracking-tighter"> متاسفانه صفحه ی مورد نظر شما یافت نشد ....</h1>
              <p className="my-2 text-gray-600 ">لطفا از درست بودن آدرس وارد شده اطمینان حاصل فرمایید</p>
              <br />
              <Link href='/' className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#4866CF] text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">بازگشت به خانه
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
  );
};

export default NotFound;
