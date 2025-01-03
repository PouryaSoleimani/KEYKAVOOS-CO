import GovernmentLearningCarousel5 from '@/components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel3'
import Footer from '@/components/home-components/Footer/Footer'
import Nav from '@/components/home-components/nav'
import React from 'react'

const FrontendPage = () => {
  return (
    <div className='web-container h-auto overflow-x-hidden'>
      <Nav />
      {/* HEADER */}
      <div className='py-4 animate__animated animate__backInDown animate__slow'>
        <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>توسعه فرانت اند</h1>
        <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از به روز ترین زیان ها فریمورک های مربوطه</h2>
      </div>
      <video src="/GRAPHIC__DESIGN/1.mp4" loop autoPlay height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl' />
      <div className='flex flex-col items-center justify-center gap-16 pb-32  h-auto' data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl">تکنولوژی ها و ابزار های مورد استفاده در توسعه فرانت اند</h2>
        <GovernmentLearningCarousel5 />
      </div>
      <div className='w-[90%] py-10 mx-auto  rounded-xl backdrop-blur-sm  p-4 mt-1 mb-16  text-justify bg-transparent leading-10 border-blue-800 border-4'>
        <p dir='rtl' className='whitespace-pre-wrap px-4'>
          فرانت‌اند (Front-End) به بخشی از توسعه وب اطلاق می‌شود که با آنچه کاربر نهایی در وب‌سایت یا برنامه مشاهده می‌کند، ارتباط دارد. این بخش شامل طراحی و پیاده‌سازی ظاهری سایت، رابط کاربری (UI) و تجربه کاربری (UX) است. توسعه‌دهندگان فرانت‌اند مسئول ایجاد صفحات وب، دکمه‌ها، فرم‌ها، انیمیشن‌ها و تعاملات هستند که کاربر با آن‌ها درگیر می‌شود.
          <br />
          فرانت‌اند به طور کلی از سه تکنولوژی اصلی تشکیل می‌شود:
          <hr />
          1. **HTML (HyperText Markup Language)**: زبان نشانه‌گذاری است که ساختار صفحات وب را تعیین می‌کند. به عبارت دیگر، HTML محتوا و اسکلت صفحات را ایجاد می‌کند.
          <br />
          2. **CSS (Cascading Style Sheets)**: برای طراحی و آرایش صفحات وب استفاده می‌شود. CSS باعث می‌شود که صفحات وب به شکلی زیبا و جذاب نمایش داده شوند، به ویژه از لحاظ رنگ‌ها، فونت‌ها، فواصل، و چیدمان.
          <br />
          3. **JavaScript**: زبان برنامه‌نویسی است که به صفحات وب تعامل می‌بخشد. با استفاده از JavaScript، صفحات وب می‌توانند به صورت پویا به تغییرات واکنش نشان دهند، مانند بارگذاری داده‌ها بدون نیاز به بارگذاری مجدد صفحه.
          <hr />
          علاوه بر این‌ها، فریم‌ورک‌ها و کتابخانه‌های مختلفی مانند **React.js**، **Vue.js**، **Angular**، **Bootstrap**، و **SASS** برای تسهیل و تسریع در فرآیند توسعه فرانت‌اند به کار می‌روند.
          <br />
          هدف اصلی فرانت‌اند این است که تجربه کاربری راحت، سریع و جذاب ایجاد کند و همچنین تضمین کند که صفحات وب در دستگاه‌ها و مرورگرهای مختلف به درستی نمایش داده شوند. به همین دلیل، دانش در طراحی پاسخگو (Responsive Design) و دسترسی (Accessibility) برای توسعه‌دهندگان فرانت‌اند بسیار مهم است.
          <br />
          به طور خلاصه، فرانت‌اند به همه چیزهایی اشاره دارد که کاربر در مرورگر خود مشاهده می‌کند و با آن تعامل دارد، از طراحی‌های بصری گرفته تا تعاملات و انیمیشن‌های پویا.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default FrontendPage