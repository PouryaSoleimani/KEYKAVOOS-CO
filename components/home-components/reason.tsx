import React from "react";
import SectionHeader from "./section-header";
import ReasonCard from "./reason-card";
import { ReasonData } from "@/lib/data";

function Reason() {
  return (
    <div className="flex flex-col px-3 lg:px-12" data-aos="fade-up" data-aos-duration="1500">
      <SectionHeader mainTitle="چرا کیکاووس زمان را انتخاب کنیم؟" subTitle="دلایل انتخاب کیکاووس زمان چه چیزهایی است؟" width="24%" />
      <div className="flex flex-wrap items-center justify-center pt-16 gap-6 lg:gap-16 ">
        {ReasonData.map((item) => (
          <div key={item.id}>
            <ReasonCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reason;
