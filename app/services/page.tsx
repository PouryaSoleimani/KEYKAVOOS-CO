import React from "react";
import { servicesData } from "../../lib/data";
import SectionHeader from "@/components/home-components/section-header";
import Nav from "@/components/home-components/nav";
import Footer from "@/components/home-components/Footer/Footer";
import Image from "next/image";
import options from "@/public/Plans/options.svg";
import "aos/dist/aos.css";

//^ COMPONENT
function Services() {
  return (
    <div className="grid grid-cols-1 gap-8 animate__animated animate__fadeInUp animate__slow" >
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%] mx-auto text-center">

        {servicesData.map((item) => (
          <div key={item.id} className="bg-white h-[400px] sm:max-md:h-[420px] md:max-lg:h-[300px] w-[260px] lg:w-full mx-auto shadow-md rounded-[15px] flex flex-col items-center gap-5">

            <p className="bg-[#4866CF] text-center text-white rounded-t-[15px] font-semibold w-full px-2 text-[18px] tracking-tight py-3 whitespace-nowrap text-ellipsis">
              {item.title}
            </p>

            <div className="flex flex-col gap-5 p-3" dir="rtl">
              {item.subtitles.map((item, index) => (
                <div key={index} className="flex flex-row items-start gap-x-1">
                  <Image src={options} alt="options" className="w-6 h-6" />
                  <span className="text-base leading-6 tracking-tighter text-start">{item}</span>
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
