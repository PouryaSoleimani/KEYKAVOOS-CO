"use client"
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '190px', height: '190px', borderRadius: '30px', border: '1px solid #FFFFFF33', };

function GovernmentLearningCarousel2() {
    return (
        <div className="relative flex h-full bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{ type: "loop", autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 }, arrows: false, pagination: false, fixedWidth: '265px', gap: '4px', }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/microsoft-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/microsoft-word-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/microsoft-excel-icon.svg' alt='WEB__APPLICATION__BG' width={300} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/microsoft-powerpoint-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/microsoft-outlook-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/office-365-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/google-drive-color-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/ICDL__ICONS/windows-10-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default GovernmentLearningCarousel2;