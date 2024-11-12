import React from "react";
import SectionHeader from "./section-header";
import TechnologyCard from "./technology-card";
import { TechnologyData } from "@/lib/data";
import styles from './plans.module.css'

type techInfoType = { id: number; title: string; imgUrl: string; technologies: { id: number; techImgUrl: string[]; tech: string[]; }[]; }


function Technology() {
  return (
    <div className={`flex flex-col mt-2 lg:px-6`} data-aos="fade-up" data-aos-duration="1500">
      <SectionHeader mainTitle="تکنولوژی های طراحی و راه اندازی سایت در کیکاووس" subTitle="کدام طرح مناسب کسب و کار شماست؟" width="20%" />
      <div className="flex flex-wrap items-stretch justify-stretch px-2 py-4 mt-10 ">
        {TechnologyData.map((item: any) => (
          <TechnologyCard key={item.id} technologyInfo={item} />
        ))}
      </div>
    </div>
  );
}

export default Technology;
