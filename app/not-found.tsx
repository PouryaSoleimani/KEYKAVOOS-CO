import React from "react";
import styles from "./not-found.module.css";
import Link from "next/link";
const { notFoundBackground } = styles;

const NotFound = () => {
  return (
    <div className={`${notFoundBackground} w-full`}>
      <div className="flex flex-col justify-center items-center h-[58vh] w-[50vh] mx-auto">
        <p
          className="text-white font-normal font-faNum lg:text-[27vh] text-[27vh]"
          style={{ textShadow: "-15px 14px 2px #79A4FF" }}
        >
          404
        </p>
        <Link href="/" className="text-[5vh] text-center font-bold font-YekanBakh bg-[#EC6A00] text-white rounded-full py-3 w-full">
          <button>
            برگشت به خانه
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
