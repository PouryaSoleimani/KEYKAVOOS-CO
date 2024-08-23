import React from "react";
import company from "../../public/Intro/company.svg";
import agreement from "../../public/Intro/agreement.svg";
import IntroStatisticsAtom from "./intro-statistics-atom";

function IntroStatistics() {
  return (
    <div
      className="flex flex-row items-center gap-5 justify-center text-[#68707A] mt-[3%]"
      dir="rtl"
    >
      <IntroStatisticsAtom amount={68000} imgSrc={company} jobDone="شرکت همکار" />
      <IntroStatisticsAtom
        amount={12000}
        imgSrc={agreement}
        jobDone="سایت طراحی شده"
      />
    </div>
  );
}

export default IntroStatistics;
