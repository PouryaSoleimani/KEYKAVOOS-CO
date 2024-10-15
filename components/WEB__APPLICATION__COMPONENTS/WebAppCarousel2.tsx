"use client"
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '447px', height: '264px', borderRadius: '30px', border: '1px solid #FFFFFF33', };

function CarouselGames2() {
    return (
        <div className="relative flex h-full bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop", 
                        autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 },
                        arrows: false, 
                        pagination: false, 
                        fixedWidth: '445px', 
                        gap: '12px', 
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <div className="mockup-phone border-primary">
                            <div className="camera"></div>
                            <div className="display bg-zinc-800">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/APPLICATION.png' width={200} height={500} alt='phone_bg' />
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-secondary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/WEB__SEARCH.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-warning">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/APPLICATION.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-neutral">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/ROCKET.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-indigo-800">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/SERVER.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-red-800">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/BACKEND.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-pink-500">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/FRONTEND.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-warning">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/GRAPHIC.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-lime-400">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/WEB__SEARCH.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-orange-500">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/RESPONSIVE.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-sky-500">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/PANELS.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-rose-600">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/DATABASE.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="mockup-phone border-neutral">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 bg-zinc-800">
                                    <Image src='/NEW__TECH__ICONS/BACKEND.png' width={200} height={500} alt='phone_bg' /></div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default CarouselGames2;