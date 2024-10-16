//^ BLOG PAGE - SWIPER COMPONENT ==========================================================================================================================
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import AutoPlay from "swiper"
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
SwiperCore.use([Autoplay]);

// ^ COMPONENT
const BlogSwiper = () => {
    return (
        <Swiper spaceBetween={0} slidesPerView={1} loop={true} grabCursor={true} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} className='shadow-lg shadow-zinc-800 h-[35rem] rounded-2xl'>
            <SwiperSlide className='w-full'><Image alt='BLOG__PIC' width={500} height={300} src="/BLOG/BLOG_1.bmp" className='w-full h-full' /></SwiperSlide>
            <SwiperSlide className='w-full'><Image alt='BLOG__PIC' width={500} height={300} src="/BLOG/BLOG_2.bmp" className='w-full h-full' /></SwiperSlide>
            <SwiperSlide className='w-full'><Image alt='BLOG__PIC' width={500} height={300} src="/BLOG/BLOG_3.bmp" className='w-full h-full' /></SwiperSlide>
            <SwiperSlide className='w-full'><Image alt='BLOG__PIC' width={500} height={300} src="/BLOG/BLOG_4.bmp" className='w-full h-full' /></SwiperSlide>
        </Swiper>
    )
}

export default BlogSwiper