import Image from "next/image";
import Link from "next/link";
import React from "react";

type DashboardCardProps = {
  data: {
    id: number;
    title: string;
    link: string;
    imgUrl: string;
    width: number;
  };
};
function DashboardCard({ data }: DashboardCardProps) {
  return (
    <Link
      href={data.link}
      className="bg-[#DEE5FE] h-[150px] w-[300px] flex justify-center items-center rounded-[20px] mx-auto relative"
    >
      <p className="font-semibold text-[24px]">{data.title}</p>
      <Image
        src={data.imgUrl}
        alt={data.title}
        className={`absolute ${data.title.includes("وضعیت سفارش") ? "-top-20" : "-top-14"}`}
        width={data.width}
      />
    </Link>
  );
}

export default DashboardCard;
