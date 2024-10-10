"use client"
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '140px', height: '140px', borderRadius: '30px', border: '1px solid #FFFFFF33', };

function GovernmentLearningCarousel4() {
    return (
        <div className="relative flex h-full bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{ type: "loop", autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 }, arrows: false, pagination: false, fixedWidth: '235px', gap: '2px', }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-photoshop-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-illustrator-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-premiere-pro-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-after-effects-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-xd-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/figma-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/adobe-premiere-pro-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/figma-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/UI__DESIGN__ICONS/blender-icon.svg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default GovernmentLearningCarousel4;