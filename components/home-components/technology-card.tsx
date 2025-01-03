"use client"
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Link from "next/link";

type TechnologyCardProps = { technologyInfo: { id: number; title: string; imgUrl: StaticImageData; link: string; technologies: { id: number; techImgUrl: string[]; tech: string[]; }[]; }; };
// type TechnologyCardProps = any | string;

//^ COMPONENT
function TechnologyCard({ technologyInfo }: TechnologyCardProps) {

  useEffect(() => { AOS.init(); }, [])


  return (
    <Link href={`${technologyInfo?.link?.toString()}`} className="TECH-CARD flex flex-col h-[26rem] items-center gap-3 bg-transparent shadow-md shadow-zinc-400 border border-zinc-300 hover:shadow-xl  mx-auto mb-6 rounded-3xl w-[340px] lg:w-[370px] duration-200 cursor-pointer hover:scale-105" >
      <div className="bg-[#4866CF] mb-3 p-2 rounded-t-3xl w-full font-bold text-[20px] text-center text-white tracking-tighter">
        {technologyInfo.title}
      </div>
      <Image src={technologyInfo.imgUrl && technologyInfo?.imgUrl} alt={technologyInfo?.title || "image"} className="w-16 h-16" width={150} height={150} />
      <div
        style={{ borderTop: "2.5px solid", borderImage: "linear-gradient(270deg,  #EAEFF6 0%, #4866CF 50%,#EAEFF6 100%) 1", width: "80%", height: "2.5px", }}
      ></div>
      <ul className="flex flex-col items-center gap-5 py-4 w-full overflow-auto" data-aos="zoom-in" data-aos-duration="1500">
        {technologyInfo.technologies.map(
          (tech: { id: number; techImgUrl: string[]; tech: string[] }, index: any) => (
            <li key={tech.id} className="flex flex-row items-center gap-3 px-6 py-2 w-full text-center" >
              {tech.techImgUrl.map((url: any | null, index) => (
                url && <Image key={index} src={url || null} alt="image" width={34} height={34} />
              ))}
              <span className="text-base text-zinc-900 lg:text-lg tracking-tighter whitespace-nowrap">
                {tech.tech.length > 1 ? tech.tech.join(" - ") : tech.tech}
              </span>
            </li>
          )
        )}
      </ul>
    </Link>
  );
}

export default TechnologyCard;
