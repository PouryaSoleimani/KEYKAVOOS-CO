"use client"
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '290px', height: '264px', borderRadius: '30px', border: '1px solid #FFFFFF33', };

function GovernmentLearningCarousel() {
    return (
        <div className="relative flex h-full bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 },
                        arrows: false, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: '445px', // Fixed width for each slide
                        gap: '12px', // Gap between slides
                    }}
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
                        <Image src='/public/Technology/redux-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/8.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/9.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/10.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/11.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/12.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/SERVICES/WEB__APPLICATION/13.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default GovernmentLearningCarousel;