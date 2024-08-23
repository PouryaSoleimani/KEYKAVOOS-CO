"use client";
import React from "react";
import { SiteTypeOptions } from "@/lib/data";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Info() {
  const pathname = usePathname();
  return (
    <div>
      {SiteTypeOptions.map(
        (item) =>
          pathname.includes(item.route) && (
            <div key={item.id} className="flex flex-col gap-5 lg:gap-8 lg:flex-row justify-between w-full">
              <div className="text-right max-w-xl flex flex-col justify-around">
                <p className="text-[#4866CF] font-bold text-[20px]">
                  ویژگی های یک سایت برای یک {item.type} چیست؟
                </p>
                <p className="font-semibold lg:text-[20px] text-[14px] text-justify">{item.desc}</p>
              </div>
              <Image src={item.imgUrl} alt={item.type} />
            </div>
          )
      )}
    </div>
  );
}

export default Info;
