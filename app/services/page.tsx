import React from "react";
import { servicesData } from "../../lib/data";
import SectionHeader from "@/components/home-components/section-header";
import Nav from "@/components/home-components/nav";
import Footer from "@/components/home-components/Footer/Footer";
import Image from "next/image";
import options from "@/public/Plans/options.svg";

function Services() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mx-auto text-center">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="bg-white h-[400px] sm:max-md:h-[420px] md:max-lg:h-[300px] w-[260px] lg:w-full mx-auto shadow-md rounded-[15px] flex flex-col items-center gap-5"
          >
            <p className="bg-[#4866CF] text-center text-white rounded-[15px] font-semibold w-full p-2 text-[20px]">
              {item.title}
            </p>
            <div className="flex flex-col gap-5 p-5" dir="rtl">
              {item.subtitles.map((item, index) => (
                <div key={index} className="flex flex-row items-center">
                  <Image src={options} alt="options" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Services;
