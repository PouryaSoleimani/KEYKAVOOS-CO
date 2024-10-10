"use client"
//^ FRONT-END LEARNING CAROUSEL ========================================================================================================================================= 
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '140px', height: '140px', borderRadius: '30px', border: '1px solid #FFFFFF33', };

function GovernmentLearningCarousel() {
    return (
        <div className="relative flex h-full bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{ type: "loop", autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 }, arrows: false, pagination: false, fixedWidth: '235px', gap: '2px', }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Image src='/Technology/html.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/css.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/bootstrap.png' alt='WEB__APPLICATION__BG' width={300} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/tailwind-css-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/js.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/typescript-programming-language-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/react-js-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/redux-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/Technology/nextjs-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default GovernmentLearningCarousel;