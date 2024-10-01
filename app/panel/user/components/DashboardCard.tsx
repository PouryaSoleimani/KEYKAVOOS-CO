import Image from "next/image";
import Link from "next/link";
import React from "react";

type DashboardCardProps = { data: { id: number; title: string; link: string; imgUrl: string; width: number; }; };

function DashboardCard({ data }: DashboardCardProps) {
  return (
    <Link href={data.link.toString()} className="bg-[#DEE5FE] h-[160px] w-[320px] flex justify-center items-center rounded-[10px] mx-auto relative hover:scale-105 duration-300 hover:bg-[#4866CF] hover:text-white"  >
      <p className="text-[20px] tracking-tight">{data.title}</p>
      <Image src={data.imgUrl} alt={data.title} className={`absolute ${data.title.includes("وضعیت سفارش") ? "-top-20" : data.title.includes("وضعیت مالی") ? "-top-6" : "-top-12"}`} width={data.width} />
    </Link>
  );
}

export default DashboardCard;
