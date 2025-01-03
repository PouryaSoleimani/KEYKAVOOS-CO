import GovernmentLearningCarousel2 from '@/components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel2'
import GovernmentLearningCarousel3 from '@/components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel3'
import Footer from '@/components/home-components/Footer/Footer'
import Nav from '@/components/home-components/nav'
import React from 'react'

const BackendPage = () => {
  return (
    <div className='web-container h-auto overflow-x-hidden'>
      <Nav />
      {/* HEADER */}
      <div className='py-4 animate__animated animate__backInDown animate__slow'>
        <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>توسعه بک اند</h1>
        <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از به روز ترین زیان ها فریمورک مربوطه</h2>
      </div>
      <video src="/GRAPHIC__DESIGN/1.mp4" loop autoPlay height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl' />
      <div className='flex flex-col items-center justify-center gap-16 pb-32  h-auto' data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl">تکنولوژی ها و ابزار های مورد استفاده در توسعه فرانت اند</h2>
        <GovernmentLearningCarousel3 />
      </div>
      <div className='w-[90%] py-10 mx-auto  rounded-xl backdrop-blur-sm  p-4 mt-1 mb-16  text-justify bg-transparent leading-10 border-blue-800 border-4'>
        <p dir='rtl' className='whitespace-pre-wrap px-4'>
          بک‌اند (Back-End) به بخش‌هایی از توسعه وب اطلاق می‌شود که در پس‌زمینه کار می‌کنند و مسئول مدیریت داده‌ها و عملکردهای اصلی یک وب‌سایت یا اپلیکیشن هستند. این بخش از سایت‌ها به طور مستقیم قابل مشاهده برای کاربران نیست، اما عملکرد صحیح و کارآمد سایت یا اپلیکیشن به شدت به بک‌اند بستگی دارد.
          <br />
          در واقع، بک‌اند در ارتباط با فرانت‌اند قرار دارد و از طریق APIها (رابط‌های برنامه‌نویسی کاربردی) داده‌ها را به فرانت‌اند ارسال می‌کند و بر اساس درخواست‌های کاربر، داده‌های لازم را پردازش کرده و ارسال می‌نماید. فرایندهایی مانند ذخیره‌سازی داده‌ها، پردازش اطلاعات، مدیریت امنیت و ارتباطات با پایگاه داده‌ها در بک‌اند انجام می‌شود.

          بک‌اند معمولاً از سه بخش اصلی تشکیل می‌شود:
          <br />
          <br />
          1. **زبان‌های برنامه‌نویسی: برای نوشتن کدهایی که وظایف مختلف بک‌اند را انجام می‌دهند. زبان‌های پرکاربرد در این زمینه شامل **Python**، **Java**، **Ruby**، **PHP**، **Node.js** و **C#** هستند.
          <br />
          2. **پایگاه داده‌ها**: برای ذخیره‌سازی داده‌ها و اطلاعات به کار می‌روند. پایگاه‌های داده می‌توانند به صورت **SQL** مانند MySQL یا PostgreSQL و یا **NoSQL** مانند MongoDB باشند. وظیفه این بخش ذخیره‌سازی اطلاعات کاربران، تراکنش‌ها، محصولات و دیگر داده‌های مرتبط است.
          <br />
          3. **سرورها**: سرورها منابعی هستند که درخواست‌های کاربران را دریافت کرده و پردازش می‌کنند. این سرورها می‌توانند در فضای ابری (cloud) یا در داخل دیتاسنترها قرار داشته باشند. سرورهای معروفی مانند **Apache**، **Nginx** و **Node.js** برای مدیریت درخواست‌های بک‌اند استفاده می‌شوند.
          <br />
          <br />
          از دیگر مفاهیم مهم در بک‌اند می‌توان به **API (رابط‌های برنامه‌نویسی کاربردی)** اشاره کرد که اجازه می‌دهند فرانت‌اند با بک‌اند ارتباط برقرار کند و اطلاعات را از سرورها دریافت یا ارسال کند.

          بک‌اند مسئولیت پردازش و ذخیره‌سازی اطلاعات، احراز هویت کاربران، مدیریت امنیت، بهینه‌سازی عملکرد و اطمینان از کارکرد درست اپلیکیشن یا سایت را بر عهده دارد. در واقع، توسعه‌دهندگان بک‌اند با ساخت ساختارهای مقیاس‌پذیر و امن برای برنامه‌ها و وب‌سایت‌ها، عملکرد کلی و پایداری پروژه را تضمین می‌کنند.

          به طور خلاصه، بک‌اند در پشت‌صحنه عملیات‌های پیچیده و پردازش اطلاعات را انجام می‌دهد و امکان تعامل بین کاربر و سرور را فراهم می‌سازد.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default BackendPage