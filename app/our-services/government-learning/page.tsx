"use client"
// ^ OUR-SERVICES - WEB-APPLICATION PAGE ============================================================================================================================================
import Nav from '@/components/home-components/nav'
import React, { useEffect } from 'react'
import Footer from '@/components/home-components/Footer/Footer';
import GovernmentLearningCarousel from './components/GovernmentLearningCarousel';
// import WebAppCategoryBox from './components/WebAppCategoryBox';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import GovernmentLearningCarousel2 from './components/GovernmentLearningCarousel2';
import GovernmentLearningCarousel3 from './components/GovernmentLearningCarousel3';
import GovernmentLearningCarousel4 from './components/GovernmentLearningCarousel4';
import GovernmentLearningCarousel5 from './components/GovernmentLearningCarousel5';
// import CarouselGames2 from './components/WebAppCarousel2';

//^ COMPONENT
const WebApplicationServicePage: React.FC = () => {
    useEffect(() => {
        AOS.init();
        window.addEventListener('touchmove', () => { AOS.refresh() }, false)
    }, [])

    // ^ RETURN
    return (
        <div className='web-container h-screen overflow-x-hidden'>
            <Nav />
            {/* HEADER */}
            <div className='py-4 animate__animated animate__backInDown animate__slow'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>آموزش کارکنان دولت</h1>
                <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>آموزش مباحث مبتدی و حرفه ای به کارمندان و کارکنان دولت با تدریس مجرب ترین اساتید</h2>
            </div>
            <video src="/VIDEOS/GOVERNMENT__HEADER__VIDEO.mp4" loop autoPlay playsInline height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl ' />
            <div id="WEB__APPLICATION__PAGE__CONTAINER" className='w-screen h-auto' data-aos="fade-up" data-aos-duration="1000">
            </div>
            {/* CAROUSELS */}
            <div id="WEB__APPLICATION__PAGE__TITLE__CONTAINER" className='flex flex-col items-center justify-center gap-4 py-10' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-center text-xl lg:text-4xl font-bold text-[#4866CF] px-6' dir='rtl'>مباحث دوره های آموزشی</h2>
            </div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-blue-600/50 via-[#4866CF] shadow-md shadow-zinc-400 to-blue-900/50 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>ICDL آموزش</h3>
                <GovernmentLearningCarousel2 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-emerald-400/50 via-green-500 shadow-md shadow-zinc-400 to-emerald-700/50 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش برنامه نویسی فرانت اند</h3>
                <GovernmentLearningCarousel />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-red-400/80 via-red-500 shadow-md shadow-zinc-400 to-red-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش برنامه نویسی بک اند</h3>
                <GovernmentLearningCarousel3 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-yellow-400/80 via-orange-500 shadow-md shadow-zinc-400 to-red-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش طراحی رابط کاربری</h3>
                <GovernmentLearningCarousel4 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-violet-400/80 via-purple-500 shadow-md shadow-zinc-400 to-violet-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش حسابداری</h3>
                <GovernmentLearningCarousel5 />
            </div>
            <div className="divider"></div>



            {/* BOXES */}
            <div className='flex flex-col items-center justify-center gap-16 pb-6 h-auto' data-aos="fade-up" data-aos-duration="1000">
                {/* <WebAppCategoryBox imageSrc='/site-type/foroshgahi.svg' title='وب سایت فروشگاهی' desc='توضیحات' /> */}
                {/* <WebAppCategoryBox imageSrc='/site-type/gardeshgari.svg' title='وب سایت گردشگری' desc='توضیحات' /> */}
                {/* <WebAppCategoryBox imageSrc='/site-type/pezeshki.svg' title='وب سایت پزشکی' desc='توضیحات' /> */}
                {/* <WebAppCategoryBox imageSrc='/site-type/sherkati.svg' title='وب سایت شرکتی' desc='توضیحات' /> */}
            </div>
            {/* BROWSER MOCKUP */}
            <div className='w-[90%] h-fit flex items-center justify-center my-10 p-6 mx-auto' >
                <div className="mockup-browser w-full h-[90vh] bg-slate-800 border">
                    <div className="mockup-browser-toolbar flex-row-reverse items-center justify-center px-4">
                        <div className="input bg-slate-200 flex items-center justify-center pt-1">https://keykavoos.co</div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <span className='w-5 h-5 rounded-full bg-lime-500'>&nbsp;</span>
                            <span className='w-5 h-5 rounded-full bg-orange-500'>&nbsp;</span>
                            <span className='w-5 h-5 rounded-full bg-red-500'>&nbsp;</span>
                        </div>
                    </div>
                    <div className="bg-slate-600 flex flex-col items-center justify-center px-4 text-white text-lg font-extrabold h-full">
                        <video src="/VIDEOS/WEB__DESIGN__ANIMATON__7.mp4" loop autoPlay playsInline height={100} className='h-80 w-[90%] mx-auto my-10'></video>
                        وب سایت حرفه ای و اختصاصی خود را داشته باشید
                    </div>
                </div>
            </div>
            {/* STEPS */}
            <div className='py-4'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>روند طراحی و ساخت یک وب اپلیکیشن</h1>
                <h2 className='text-center font-extralight text-xl text-zinc-700 bg-zinc-300 py-2 px-16 rounded-xl w-fit mx-auto'>از طراحی تا تحویل نهایی</h2>
            </div>
            <ul className="steps mx-auto my-10 w-full">
                <li className="step step-primary">تکمیل سفارش</li>
                <li className="step step-primary">واریز پیش پرداخت</li>
                <li className="step step-primary">بررسی نیاز های پروژه</li>
                <li className="step step-primary">کدنویسی بک اند</li>
                <li className="step step-primary">ساخت دیتابیس</li>
                <li className="step step-primary">طراحی رابط کاربری</li>
                <li className="step step-primary">کدنویسی فرانت اند</li>
                <li className="step step-primary tracking-tighter">ایجاد درگاه ها و لینک ها</li>
                <li className="step step-primary">کنترل کیفی نهایی</li>
                <li className="step step-primary">تحویل وب اپلیکیشن</li>
            </ul>
            {/* PHONES */}
            {/* <CarouselGames2 /> */}
            {/* TEXT SECTION */}
            <div className='bg-transparent backdrop-blur-sm w-[90%] h-auto mx-auto mt-10 p-6 pb-16 gap-y-4 rounded-2xl border border-zinc-400 shadow-xl shadow-zinc-600 flex flex-col items-center justify-start mb-10' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-center text-xl lg:text-3xl font-bold text-[#4866CF] px-6'>تفاوت وب سایت های وردپرسی و کدنویسی</h2>
                <h3 className='text-center text-md text-zinc-700 font-bold tracking-tighter bg-zinc-300 px-4 py-2 rounded-xl'>وبسایت‌های کدنویسی و وردپرسی هر کدام مزایا و معایب خاص خود را دارند. در ادامه به برخی از تفاوت‌های کلیدی آنها اشاره می‌کنم</h3>
                <span className='text-md text-start p-2 flex flex-col items-start justify-start w-[90%] mx-auto' dir='rtl'>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>نحوه ساخت و توسعه</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'><span className='my-2'>
                            <b>کدنویسی:</b> وبسایت‌هایی که به صورت دستی کدنویسی می‌شوند، به شما این امکان را می‌دهند که هر جنبه‌ای از وبسایت را کنترل کنید. معمولاً از زبان‌های HTML، CSS، JavaScript و زبان‌های سمت سرور مانند PHP یا Python استفاده می‌شود.
                        </span>

                            <span className='my-2'>
                                <b>وردپرس:</b> وردپرس یک سیستم مدیریت محتوا (CMS) است که به شما اجازه می‌دهد با استفاده از تم‌ها و افزونه‌ها، وبسایت‌های پیچیده‌ای بسازید بدون اینکه نیاز به کدنویسی عمیق داشته باشید.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>انعطاف‌پذیری</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2'>
                                <b>کدنویسی:</b>
                                انعطاف‌پذیری بیشتری دارد زیرا می‌توانید هر ویژگی یا طراحی دلخواهی را پیاده‌سازی کنید.
                            </span>

                            <span className='my-2'>
                                <b>وردپرس:</b>
                                در حالی که بسیار منعطف است، اما محدودیت‌هایی دارد که به تم‌ها و افزونه‌های موجود بستگی دارد. اگر تم یا افزونه‌ای مطابق با نیاز شما وجود نداشته باشد، ممکن است نیاز به کدنویسی سفارشی داشته باشید.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>زمان توسعه</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2'>
                                <b>کدنویسی:</b>
                                معمولاً زمان بیشتری می‌برد، به ویژه اگر وبسایت پیچیده باشد.
                            </span>

                            <span className='my-2'>
                                <b>وردپرس:</b>
                                می‌توانید وبسایت خود را سریع‌تر راه‌اندازی کنید، به خصوص اگر از تم‌های آماده و افزونه‌ها استفاده کنید.
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>نگهداری و به‌روزرسانی</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                <b>کدنویسی:</b>
                                ممکن است نیاز به دانش فنی بیشتری برای نگهداری و به‌روزرسانی داشته باشد.
                            </span>

                            <span className='my-2 text-sm font-thin'>
                                <b>وردپرس:</b>
                                به‌روزرسانی‌ها به راحتی قابل انجام است و سیستم‌های امنیتی و به‌روزرسانی‌های خودکار وجود دارد..
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>هزینه</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                <b>کدنویسی:</b>
                                معمولاً هزینه بالاتری دارد، زیرا ممکن است نیاز به استخدام یک توسعه‌دهنده حرفه‌ای داشته باشید..
                            </span>

                            <span className='my-2 text-sm font-thin'>
                                <b>وردپرس:</b>
                                می‌تواند هزینه‌های کمتری داشته باشد، به خصوص اگر خودتان بتوانید آن را مدیریت کنید...
                            </span>
                        </span>
                    </p>

                    <div className="divider"></div>
                    <p className='mt-4'>
                        <b className='text-lg text-[#4866cf]'>سئو و بهینه‌سازی</b>
                        <span className='flex flex-col gap-y-2 items-start justify-start'>
                            <span className='my-2 text-sm font-thin'>
                                <b>کدنویسی:</b>
                                می‌توانید سئو را به دلخواه خود بهینه‌سازی کنید.
                            </span>

                            <span className='my-2 text-sm font-thin'>
                                <b>وردپرس:</b>
                                ابزارهای سئو زیادی وجود دارد که به شما در بهینه‌سازی وبسایت کمک می‌کند، اما ممکن است محدودیت‌هایی نیز داشته باشد..
                            </span>
                        </span>
                    </p>

                    <p className='mt-10 text-center p-6 bg-gradient-to-tr from-blue-200/30 via-[#4877cf30] to-blue-900/30 rounded-2xl shadow-lg shadow-zinc-400 flex flex-col items-center justify-center gap-y-2'>
                        <b className='text-4xl font-extrabold text-[#4866cf]'>نتیجه گیری</b>
                        <br />
                        <span className='text-center text-md font-extralight leading-9'>
                            انتخاب بین وبسایت‌های کدنویسی و وردپرسی به <span className='text-[#4866cf] font-bold'>نیازها و منابع</span> شما بستگی دارد. اگر به دنبال یک <span className='text-[#4866CF] font-bold'> وبسایت سفارشی </span> و پیچیده هستید و توانایی فنی لازم را دارید، کدنویسی ممکن است گزینه بهتری باشد. اما اگر به دنبال <span className='text-[#4866CF] font-bold'>راه‌حل سریع‌تر و آسان‌تر</span> هستید، وردپرس گزینه مناسبی است.
                        </span>
                    </p>

                </span>
            </div>
            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default WebApplicationServicePage