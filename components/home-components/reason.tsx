import React from "react";
import SectionHeader from "./section-header";
import ReasonCard from "./reason-card";
import { ReasonData } from "@/lib/data";

function Reason() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        mainTitle="چرا کیکاووس زمان را انتخاب کنیم؟"
        subTitle="دلایل انتخاب کیکاووس زمان چه چیزهایی است؟"
        width="24%"
      />
      <div className="lg:flex lg:flex-row-reverse lg:justify-between grid grid-cols-2 gap-5 lg:gap-0">
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
