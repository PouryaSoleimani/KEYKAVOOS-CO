"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const FormSlider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={800}
        className="h-full w-full"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, type: "bullets" }}
      >
        <SwiperSlide>
          <img src="/regSlider/1.svg" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/regSlider/2.svg" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/regSlider/3.svg" alt="slider1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FormSlider;
