"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { CertificateSlider } from "@/lib/data";
import { useState } from "react";

const CertificatesSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  return (
    <div>
      {/* Pic Swiper */}
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        loop
        speed={1500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        }}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 90,
          depth: 900,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides={true}
        preventInteractionOnTransition={true}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        className="flex justify-center items-center text-center lg:w-[80%] w-full mx-auto z-[999]"
      >
        {CertificateSlider.map((link) => (
          <SwiperSlide key={link.id}>
            <Image
              src={link.link}
              alt={link.altText}
              width={500}
              height={200}
              className={`p-${link.padding}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Text Swiper */}
      <div className={`w-full pb-[5%]`}>
        <div
          className="flex lg:flex-row flex-col justify-center items-center 2xl:max-4xl:w-[70%] w-[80%] mx-auto rounded-[59px] lg:h-[246px] overflow-hidden lg:gap-8 relative z-50 px-3"
          style={{
            boxShadow: "0px 31px 70px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(255, 255, 255,1)",
          }}
        >
          <p className="text-center font-bold text-[23px] lg:w-[160px] lg:px-3 order-last lg:order-first pb-[20%] lg:pb-0">
            گواهینامه اخذ شده از دانشگاه TQS
          </p>
          <Image
            src="/certificates/vector2.png"
            alt="vector"
            width={5}
            height={324}
            className="h-[170px] w-[8px] rotate-90 lg:rotate-0"
          />
          <div className="flex justify-center items-center text-center lg:w-[55%] lg:h-[200px] w-[90%]">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={1500}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                stopOnLastSlide: false,
              }}
              slidesPerView={1}
              centeredSlides={true}
              preventInteractionOnTransition={true}
              onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
            >
              {CertificateSlider.map((link) => (
                <SwiperSlide
                  key={link.id}
                  className="lg:leading-6 lg:text-sm lg:pt-[5%] mx-auto h-full flex justify-center items-center lg:h-[50%]"
                >
                  <p>{link.info}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Image
            src="/certificates/vector2.png"
            alt="vector"
            width={5}
            height={324}
            className="h-[170px] w-[8px] rotate-90 lg:rotate-0"
          />
          <div className="order-first lg:order-last pt-[25%] lg:pt-0">
            <Image
              src="/certificates/tqs.svg"
              alt="گواهینامه دانشگاه TQS"
              width={200}
              height={190}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertificatesSlider;
