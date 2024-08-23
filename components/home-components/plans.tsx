import React from "react";
import PlanCard from "./plan-card";
import SectionHeader from "./section-header";
import { PlanData } from "@/lib/data";

function Plans() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        mainTitle="جدول خدمات طراحی سایت"
        subTitle="کدام طرح مناسب کسب و کار شماست؟"
        width="28%"
      />
      <div className="flex sm:flex-row-reverse sm:justify-between sm:max-lg:flex-wrap flex-col items-center lg:gap-0 gap-5">
        {PlanData.map((item) => (
          <div
            key={item.id}
            // className={`${
            //   item == PlanData[PlanData.length - 1] &&
            //   "sm:max-lg:w-full sm:max-lg:flex sm:max-lg:justify-center"
            // }`}
          >
            <PlanCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
