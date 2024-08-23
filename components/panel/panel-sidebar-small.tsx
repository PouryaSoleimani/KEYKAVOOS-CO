"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
type SideOptionsProps = {
  text: string;
  imgSrc: string;
  address?: string;
};
const PanelSidebarSmall = ({
  sideOptions,
}: {
  sideOptions: SideOptionsProps[];
}) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between w-full">
      <ul className="flex flex-row justify-between w-full whitespace-nowrap p-[3%] gap-3">
        {sideOptions.map((item, index) => (
          <li key={index} className="font-bold">
            <Link
              href={`${item.address}`}
              className={`text-sm md:text-lg flex flex-col justify-around items-center gap-2 ${
                item.address === pathname ? "text-black" : "text-white"
              }`}
            >
              <Image
                src={item.imgSrc}
                alt={`${item}`}
                className="md:w-[50px] md:h-[50px] w-[40px]"
              />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PanelSidebarSmall;
