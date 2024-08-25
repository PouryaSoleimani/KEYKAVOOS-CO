import Image from "next/image";
import React from "react";
import options from "../../public/Plans/options.svg";
import Link from "next/link";
type PlanCardProps = {
  data: CardInfo;
};
type CardInfo = {
  id: number;
  type: string;
  title: string;
  planInfo: string[];
  price: string;
  imgSrc: string;
  route: string;
};
function PlanCard({ data }: PlanCardProps) {
  return (
    <div className="bg-white w-[250px] md:max-lg:w-[260px] rounded-xl p-[3%] relative shadow hover:scale-105 duration-300 cursor-pointer">
      <div className="bg-[#4866CF] w-[80%] mx-auto text-center text-[18px] font-semibold text-white rounded-b-2xl absolute z-10 -translate-x-1/2 left-1/2 -top-[0.04rem] p-2">
        {data.type}
      </div>
      <div className="border border-[#4866CF] rounded-xl">
        <div className="p-[3%] mt-[18%] flex flex-col gap-5">
          <p className="text-center text-[#68707A] font-semibold">{data.title}</p>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image src={data.imgSrc} alt="news" />
            <div>
              {data.planInfo.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-1">
                  <span className="text-[13px] text-[#68707A] leading-8">{item}</span>
                  <Image src={options} alt="options" className="w-6 h-6" />
                </div>
              ))}
            </div>
            <div className="border border-[#4866CF] rounded-xl overflow-hidden p-[3%] w-full">
              <div className="text-[#4866CF] flex items-center flex-row-reverse justify-between">
                <span className="text-[14px]">:شروع قیمت از</span>
                <span className="text-[48px] font-faNum font-bold">{data.price}</span>
                <p className="text-[12px] flex flex-col text-center ml-4 ">
                  <span>میلیون</span>
                  <span>تومان</span>
                </p>
              </div>
              <Link href={`${data.route}`}>
                <button className="text-white bg-[#4866CF] flex justify-center w-full rounded-lg py-[3%] hover:bg-blue-800 duration-300 ">
                  توضیحات بیشتر
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
