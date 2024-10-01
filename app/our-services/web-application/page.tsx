// ^ OUR-SERVICES - WEB-APPLICATION PAGE ============================================================================================================================================
import Nav from '@/components/home-components/nav'
import React from 'react'
import 'animate.css';
import Footer from '@/components/home-components/Footer/Footer';
import Image from 'next/image';
import CarouselGames from './components/WebAppCarousel';
import WebAppCategoryBox from './components/WebAppCategoryBox';

//^ COMPONENT
const WebApplicationServicePage = () => {
    return (
        <div className='web-container h-screen overflow-x-hidden'>
            <Nav />
            <div className='py-4'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-4xl py-4 text-transparent'>طراحی وب اپلیکیشن</h1>
            </div>
            <div id="WEB__APPLICATION__PAGE__CONTAINER" className='w-screen h-auto '>
                <CarouselGames />
            </div>
            <div id="WEB__APPLICATION__PAGE__TITLE__CONTAINER" className='flex flex-col items-center justify-center gap-4 py-10'>
                <h2 className='text-center text-2xl font-bold text-[#4866CF] px-6' dir='rtl'>انواع وب اپلیکیشن ها بر اساس سبک </h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-10 pb-10'>
                <WebAppCategoryBox imageSrc='/site-type/foroshgahi.svg' title='وب سایت فروشگاهی' desc='توضیحات'  />
                <WebAppCategoryBox imageSrc='/site-type/gardeshgari.svg' title='وب سایت گردشگری' desc='توضیحات'/>
                <WebAppCategoryBox imageSrc='/site-type/pezeshki.svg' title='وب سایت پزشکی' desc='توضیحات'/>
                <WebAppCategoryBox imageSrc='/site-type/sherkati.svg' title='وب سایت شرکتی' desc='توضیحات'/>
            </div>
            <Footer />
        </div>
    )
}

export default WebApplicationServicePage