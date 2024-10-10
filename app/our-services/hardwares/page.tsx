"use client"
//^ HARDWARE SERVICES PAGE ============================================================================================================================================ 
import React from 'react'
import Footer from '@/components/home-components/Footer/Footer'
import Nav from '@/components/home-components/nav'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import 'animate.css';
import '@splidejs/react-splide/css';


// ^ COMPONENT
const HardWarePage: React.FunctionComponent = () => {

    // RETURN
    return (
        <div className='web-container'>
            <Nav />
            {/* HEADER TITLE */}
            <div className='py-4 animate__animated animate__backInDown animate__slow'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>تامین قطعات کامپیوتری</h1>
                <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>اسمبل تخصصی و مدرن با قیمت مناسب</h2>
            </div>
            <div className='w-fit rounded-3xl bg-white mt-0 mx-auto animate__animated animate__bounce BLOG_HEADER_TEXT'>
                <video src="/VIDEOS/HARDWARE__ASSEMBLE__1.mp4" loop autoPlay playsInline height={100} className='h-80 w-fit rounded-3xl mx-auto my-10'></video>
            </div>
            {/* CAROUSEL SECTION */}
            <Splide options={{ type: 'loop', perPage: 3, focus: 'center', gap: '2rem', pagination: false, arrows: false, autoplay: true, lazyload: true, autoScroll: { pauseOnHover: false, pauseOnFocus: false, rewind: true, speed: 1 }, }} aria-label="My Favorite Images">
                <SplideSlide>
                    <Image src="/HARDWARES/2.webp" alt="Image 1" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/3.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/4.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/5.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/6.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/7.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/8.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/9.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/10.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/11.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
                <SplideSlide>
                    <Image src="/HARDWARES/12.webp" alt="Image 2" width={500} height={500} className='rounded-3xl' />
                </SplideSlide>
            </Splide>
            {/* TEXT SECTION */}
            {/* TEXT SECTION */}
            <div className='bg-transparent backdrop-blur-sm w-[90%] h-auto mx-auto mt-10 p-6 pb-16 gap-y-4 rounded-2xl border border-zinc-400 shadow-xl shadow-zinc-600 flex flex-col items-center justify-start mb-10' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-center text-xl lg:text-3xl font-bold text-[#4866CF] px-6'>انواع سخت افزار ها و وظیفه ی هر کدام</h2>
                <h3 className='text-center text-md text-zinc-700 font-bold tracking-tighter bg-zinc-300 px-4 py-2 rounded-xl'>سخت‌افزارهای کامپیوتر به چند دسته اصلی تقسیم می‌شوند که هر کدام وظایف خاصی را انجام می‌دهند. در زیر به معرفی انواع سخت‌افزارهای اصلی پرداخته می‌شود</h3>
                <span className='text-md text-start p-2 flex flex-col items-start justify-start w-[90%] mx-auto' dir='rtl'>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>واحد پردازش مرکزی (CPU)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start my-2'>
                            مغز کامپیوتر که تمام محاسبات و پردازش‌ها را انجام می‌دهد
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>حافظه اصلی (RAM)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2'>
                                حافظه موقت که داده‌ها و برنامه‌های در حال اجرا را ذخیره می‌کند و به CPU اجازه می‌دهد سریع‌تر به اطلاعات دسترسی پیدا کند.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>حافظه ثانویه (Hard Drive / SSD)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2'>
                                برای ذخیره‌سازی دائمی داده‌ها و برنامه‌ها استفاده می‌شود. HDD‌ها به صورت مکانیکی کار می‌کنند، در حالی که SSD‌ها سریع‌تر و بدون اجزای متحرک هستند.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>مادربرد:</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                بورد اصلی که همه اجزای سخت‌افزاری را به هم متصل می‌کند و ارتباط بین آن‌ها را مدیریت می‌کند
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>کارت گرافیک (GPU)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                برای پردازش گرافیکی و رندر کردن تصاویر و ویدئوها استفاده می‌شود. مهم برای بازی‌ها و نرم‌افزارهای طراحی گرافیکی.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>منبع تغذیه (Power Supply Unit)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                انرژی مورد نیاز برای روشن کردن کامپیوتر را تأمین می‌کند
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>سیستم خنک‌کننده</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                شامل فن‌ها و خنک‌کننده‌ها برای جلوگیری از داغ شدن اجزای داخلی کامپیوتر
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>ورودی و خروجی (I/O Devices)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                شامل کیبورد، ماوس، مانیتور، چاپگر و دیگر دستگاه‌ها برای تعامل با کاربر و نمایش اطلاعات.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>کارت‌های گسترش (Expansion Cards)</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                برای افزودن قابلیت‌های بیشتر به سیستم، مانند کارت صدا یا کارت شبکه
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>دستگاه‌های ذخیره‌سازی خارجی</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                شامل هارد دیسک‌های خارجی، فلش درایوها و CD/DVD که برای انتقال و ذخیره‌سازی داده‌ها استفاده می‌شوند
                            </span>
                        </span>
                    </p>

                    <p className='mt-10 text-center p-6 bg-gradient-to-tr from-blue-200/30 via-[#4877cf30] to-blue-900/30 mx-auto rounded-2xl shadow-lg shadow-zinc-400 flex flex-col items-center justify-center gap-y-2'>
                        <span className='text-center text-md font-extralight leading-9'>
                            این سخت‌افزارها به صورت هماهنگ کار می‌کنند تا کامپیوتر بتواند وظایف مختلف را انجام دهد.
                        </span>
                    </p>

                </span>
            </div>
            <Footer />
        </div >
    )
}

export default HardWarePage 