"use client"
// ^ OUR-SERVICES - GRAPHIC-DESIGN PAGE ============================================================================================================================================
import { NextPage, GetStaticProps } from 'next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import { useEffect } from 'react';
import Nav from '@/components/home-components/nav';
import Footer from '@/components/home-components/Footer/Footer';
import GraphicDesignCarousel from './components/GraphicDesignCarousel';
import GraphicDesignCategoryBox from './components/GraphicDesignCategoryBox';
//INTERFACE
interface Props { }



// ^ COMPONENT
const GraPhicDesignPage: NextPage<Props> = ({ }) => {
    useEffect(() => { AOS.init(); window.addEventListener('touchmove', () => { AOS.refresh() }, false) }, [])

    return (
        <div className='web-container h-auto overflow-x-hidden'>
            <Nav />
            {/* HEADER */}
            <div className='py-4 animate__animated animate__backInDown animate__slow'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>طراحی گرافیک</h1>
                <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از پیشرفته ترین ابزار و ترند ترین سبک های روز</h2>
            </div>
            <video src="/GRAPHIC__DESIGN/1.mp4" loop autoPlay height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl' />
            {/* CAROUSEL */}
            <GraphicDesignCarousel />
            {/* CATEGORIES */}
            <p className='my-10 w-[90%] mx-auto text-center p-6 bg-gradient-to-tr from-blue-200/30 via-[#4877cf30] to-blue-900/30 rounded-2xl shadow-lg shadow-zinc-400 flex flex-col items-center justify-center gap-y-2'>
                <b className='text-4xl font-extrabold text-[#4866cf]'>انواع خدمات طراحی گرافیک</b>
                <br />
                <span className='text-center text-lg font-semibold leading-9'>
                    طراحی گرافیک شامل طیف وسیعی از خدمات است که هر کدام به نیازهای خاص مشتریان پاسخ می‌دهند. در زیر به انواع خدمات طراحی گرافیک با جزئیات بیشتری پرداخته‌ایم:
                </span>
            </p>
            {/* CATEGORY BOXES */}
            <div className='flex flex-col items-center justify-center gap-16 pb-6 h-auto' data-aos="fade-up" data-aos-duration="1000">
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی لوگو' subtitle="خلق نماد و نشان برند." desc='شامل تحقیق در مورد برند، تحلیل رقبا، ایجاد چندین طرح و اصلاح آن‌ها بر اساس بازخورد مشتری. لوگو باید در تمام اندازه‌ها و زمینه‌ها قابل شناسایی باشد' />
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی بروشور و کاتالوگ' subtitle="تولید مواد چاپی برای ارائه محصولات یا خدمات" desc='شامل طراحی صفحات، انتخاب تصاویر و نوع‌خط، سازماندهی محتوا و استفاده از فضای سفید برای جلب توجه. بروشورها می‌توانند دو یا چند لتی باشند' />
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی پوستر' subtitle="خلق آثار بصری جذاب برای تبلیغ رویدادها یا محصولات" desc='تمرکز بر جلب توجه سریع، استفاده از رنگ‌های متناسب، ترکیب متن و تصویر و رعایت تعادل بصری.' />
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی بسته‌بندی' subtitle="طراحی بسته‌های محصولات" desc='شامل انتخاب مواد، شکل و رنگ بسته، در نظر گرفتن ویژگی‌های عملکردی و الزامات قانونی، همچنین ایجاد حس جذابیت و شناسایی برند' />
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی وب' subtitle="ایجاد رابط‌های کاربری برای وب‌سایت‌ها" desc='شامل طراحی UI/UX، انتخاب رنگ و نوع‌خط مناسب، ایجاد نمادها و عناصر بصری، و بهینه‌سازی برای دستگاه‌های مختلف' />
                <GraphicDesignCategoryBox imageSrc='/WEB_DESIGN_PLANS/CODING__WEBDEVELOPMENT__BG.jpg' title='طراحی اینفوگرافیک' subtitle="ترکیب اطلاعات و داده‌ها به شکل بصری" desc='شامل استفاده از نمودارها، تصاویر و متن کوتاه برای انتقال اطلاعات به شکل آسان و جذاب. اینفوگرافیک‌ها باید قابل اشتراک‌گذاری و درک سریع باشند.' />
            </div>
            <Footer />
        </div>
    )
}

export default GraPhicDesignPage