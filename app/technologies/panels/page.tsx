import Footer from '@/components/home-components/Footer/Footer'
import Nav from '@/components/home-components/nav'
import Image from 'next/image'
import React from 'react'

const PanelsPage = () => {
  return (
    <div className='web-container h-auto overflow-x-hidden'>
      <Nav />
      {/* HEADER */}
      <div className='py-4 animate__animated animate__backInDown animate__slow'>
        <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>ساخت و توصعه پنل های مدیریت به صورت حرفه ای </h1>
        <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از سریع ترین  ابزارها و راحت ترین حالت های استفاده برای کاربر</h2>
      </div>
      <video src="/GRAPHIC__DESIGN/1.mp4" loop autoPlay height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl' />
      <div className='flex flex-col items-center justify-center gap-16 pb-32  h-auto' data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl">تکنولوژی ها و ابزار های مورد استفاده در ساخت و توسعه دیتابیس</h2>
        <div className='flex items-center justify-around gap-10'>
          <Image src='/Technology/cpanellogo.svg' width={100} height={100} alt='image' />
          <Image src='/Technology/directadminlogo.svg' width={100} height={100} alt='image' />
          <Image src='/Technology/plesklogo.svg' width={100} height={100} alt='image' />
        </div>
      </div>
      <div className='w-[90%] py-10 mx-auto  rounded-xl backdrop-blur-sm  p-4 mt-1 mb-16  text-justify bg-transparent leading-10 border-blue-800 border-4'>
        <p dir='rtl' className='whitespace-pre-wrap px-4'>
          پنل‌های مدیریت در وب‌سایت‌ها ابزارهایی هستند که به مدیران یا وبمستران اجازه می‌دهند تا به‌راحتی محتوای سایت را مدیریت کنند، اطلاعات کاربران را نظارت کنند و عملکرد کلی سایت را کنترل نمایند. این پنل‌ها معمولاً محیط‌های کاربری گرافیکی (GUI) هستند که بدون نیاز به دانش فنی عمیق، امکان انجام فعالیت‌های مختلف مدیریتی را فراهم می‌آورند.

          پنل‌های مدیریت می‌توانند امکانات متنوعی داشته باشند، از جمله مدیریت محتوا (مانند افزودن، ویرایش یا حذف صفحات و مطالب)، مدیریت کاربران (برای مشاهده، ویرایش یا حذف حساب‌های کاربری و تعیین سطوح دسترسی)، گزارش‌گیری و آنالیز داده‌ها (برای پیگیری آمار بازدید، فروش، یا تعاملات کاربران) و تنظیمات سایت (مانند تغییر تنظیمات SEO، طراحی، و ساختار URL). این پنل‌ها اغلب به صورت سفارشی ساخته می‌شوند تا با نیازهای خاص هر وب‌سایت یا کسب‌وکار هماهنگ باشند.

          یک پنل مدیریت باید قابلیت دسترسی آسان و رابط کاربری ساده و کاربرپسند داشته باشد. در عین حال، امنیت آن نیز اهمیت زیادی دارد، به‌ویژه در مواردی که اطلاعات حساس مانند داده‌های کاربران یا اطلاعات مالی در آن ذخیره می‌شود. بنابراین، اغلب از روش‌های امنیتی مانند احراز هویت دو مرحله‌ای، مدیریت دسترسی‌ها و نظارت مداوم بر فعالیت‌ها برای محافظت از پنل‌های مدیریت استفاده می‌شود.

          از طرفی، با توجه به نیازهای متنوع هر وب‌سایت، ممکن است پنل‌های مدیریت ویژگی‌های خاصی مانند مدیریت فروشگاه آنلاین، پردازش پرداخت‌ها، ارسال ایمیل‌های تبلیغاتی و حتی ادغام با سیستم‌های خارجی (مانند CRM یا ERP) را نیز شامل شوند. به‌طور کلی، پنل‌های مدیریت بخش حیاتی هر وب‌سایت را تشکیل می‌دهند که به‌واسطه آن، مدیران می‌توانند عملکرد وب‌سایت را بهینه‌سازی کرده و تجربه کاربری بهتری فراهم کنند.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default PanelsPage