import React from "react";
import SectionHeader from "./section-header";
import TechnologyCard from "./technology-card";
import { TechnologyData } from "@/lib/data";

function Technology() {
  return (
    <div className="flex flex-col mt-8" data-aos="fade-up" data-aos-duration="1500">
      <SectionHeader mainTitle="تکنولوژی های طراحی و راه اندازی سایت در کیکاووس" subTitle="کدام طرح مناسب کسب و کار شماست؟" width="20%" />
      <div className="grid grid-cols-1 gap-5 md:max-lg:grid-cols-2 md:max-lg:gap-20 lg:grid-cols-3 lg:gap-x-32">
        {TechnologyData.map((item) => (
          <TechnologyCard key={item.id} technologyInfo={item} />
        ))}
      </div>
    </div>
  );
}

export default Technology;
