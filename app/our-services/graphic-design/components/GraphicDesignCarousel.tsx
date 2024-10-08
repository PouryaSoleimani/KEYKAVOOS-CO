import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
const imageStyle = { width: '448px', height: '264px', borderRadius: '30px', border: '1px solid #FFFFFF33', };


const GraphicDesignCarousel: React.FunctionComponent = () => {
    return (
        <div className="relative flex h-auto bg-transparent mt-20">
            <div className="w-screen relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        width: "100%",
                        type: "loop",
                        autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 },
                        arrows: false,
                        pagination: false,
                        fixedWidth: '445px',
                        gap: '12px',
                        height: '10rem',
                        wheel: true,
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_1.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_2.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_3.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_4.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_5.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_6.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_7.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_8.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_9.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_10.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_11.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_12.avif' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_13.jpg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_14.jpg' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/GRAPHIC__DESIGN/_15.png' alt='WEB__APPLICATION__BG' width={350} height={300} className='WEB__APP__PIC rounded-3xl' style={imageStyle} />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default GraphicDesignCarousel