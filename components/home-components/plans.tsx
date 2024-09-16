import React from "react";
import PlanCard from "./plan-card";
import SectionHeader from "./section-header";
import { PlanData } from "@/lib/data";
import 'animate.css';
import styles from './plans.module.css'

//^ COMPONENT
function Plans() {
  return (

    <div className={`relative flex flex-col animate__animated animate__delay-3s animate__fadeInUp animate__slow px-8 py-16 ${styles.plansContainer} `} id="PLANS__CONTAINER" >
      <SectionHeader mainTitle="جدول خدمات طراحی سایت" subTitle="کدام طرح مناسب کسب و کار شماست؟" width="28%" />
      <div className={`flex sm:flex-row-reverse flex-col sm:max-lg:flex-wrap sm:justify-evenly items-center gap-5 lg:gap-0 mt-10`}>
        {PlanData.map((item) => (
          <div key={item.id}   >
            <PlanCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
