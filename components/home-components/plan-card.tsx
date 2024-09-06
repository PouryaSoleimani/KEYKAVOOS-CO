import Image from "next/image";
import React, { useEffect } from "react";
import options from "../../public/Plans/options.svg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./plan-card.module.css"

type PlanCardProps = { data: CardInfo; };
type CardInfo = { id: number; type: string; title: string; planInfo: string[]; price: string; imgSrc: string; route: string; };

// COMPONENT
function PlanCard({ data }: PlanCardProps) {

  useEffect(() => { AOS.init(); }, [])

  return (
    <>
      <div className="relative bg-transparent shadow-lg shadow-zinc-700 backdrop-blur-[2px] p-[3%] rounded-xl w-[320px] md:max-lg:w-[260px] cursor-pointer hover:scale-105 duration-300">
        <div className="-top-[0.04rem] left-1/2 z-10 absolute bg-[#4866CF] mx-auto p-2 rounded-t-xl w-full font-semibold text-[18px] text-center text-white tracking-tighter -translate-x-1/2">
          {data.type}
        </div>
        <div className="border-[#4866CF] border rounded-xl">
          <div className="flex flex-col gap-5 mt-[18%] p-[3%]">
            <p className="text-[#68707A] text-center tracking-tighter" data-aos="zoom-in" data-aos-duration="1500" >{data.title}</p>
            <div className="flex flex-col justify-center items-center gap-3" data-aos="zoom-in" data-aos-duration="1500">
              <Image src={data.imgSrc} alt="news" />
              <div>
                {data.planInfo.map((item, index) => (
                  <div key={index} className="flex flex-row items-center gap-1">
                    <span className="text-[#68707A] text-[13px] leading-8">{item}</span>
                    <Image src={options} alt="options" className="w-6 h-6" />
                  </div>
                ))}
              </div>
              <div className="border-[#4866CF] p-[3%] border rounded-xl w-full overflow-hidden">
                <div className="flex flex-row-reverse justify-between items-center text-[#4866CF]">
                  <span className="text-[14px]">:شروع قیمت از</span>
                  <span className="font-bold font-faNum text-[48px]">{data.price}</span>
                  <p className="flex flex-col ml-4 text-[12px] text-center">
                    <span>میلیون</span>
                    <span>تومان</span>
                  </p>
                </div>
                <Link href={`${data.route}`}>
                  {/* <button className="flex justify-center bg-[#4866CF] hover:bg-blue-800 py-[3%] rounded-lg w-full text-white duration-300">
                    توضیحات بیشتر
                  </button> */}
                  <button className={styles.plansbutton}>
                    توضیحات بیشتر
                    <svg fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
                      <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanCard;
