import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { TiPlus } from 'react-icons/ti'
import 'animate.css';

interface Props { }

const WordPress: NextPage<Props> = ({ }) => {
    return (
        <div className='flex flex-col-reverse px-4 py-16 backdrop-blur-[3px] shadow-md shadow-zinc-950 rounded-2xl lg:flex-row justify-between items-center my-16 w-full h-full lg:h-[600px] bg-transparent'>

            <div id="LEFT" className={`w-full bg-contain lg:bg-cover lg:w-1/2 h-full leftWordPress z-30`} data-aos="fade-right" data-aos-duration="1500">
                <Image src='/Technology/wordpress.svg' alt='wordpress-logo' width={120} height={120} className='wordPress3D' />
            </div>
            <div id="RIGHT" className='flex flex-col justify-start items-start space-y-4 px-6 py-2 w-full lg:w-1/2 h-full' dir='rtl' data-aos="fade-left" data-aos-duration="1500">
                <h2 className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>وب سایت وردپرسی</h2>
                <p className='text-zinc-300 tracking-tighter text-justify text-md leading-9 font-thin whitespace-pre-line'><b className='font-bold tracking-wide text-white my-3'>طراحی سایت با وردپرس مزایای زیادی دارد، از جمله:</b>
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-8'>کاربرپسند بودن : </p>
                    ایجاد و مدیریت سایت با وردپرس به راحتی انجام می‌شود و نیازی به مهارت‌های کدنویسی ندارد.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-8'>قالب‌های متنوع : </p>
                    انتخاب از میان هزاران قالب و طراحی سفارشی برای نیازهای خاص.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-8'>افزونه‌های متعدد : </p>
                     امکانات گوناگون مانند سئو، امنیت و تجزیه و تحلیل از طریق افزونه‌ها به راحتی قابل افزودن است.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-8'>پشتیبانی گسترده : </p>
                     جامعه بزرگ کاربران و توسعه‌دهندگان به راحتی به مشکلات پاسخ می‌دهند.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-8'>سئو دوستانه : </p>
                     ابزارهای قدرتمند برای بهینه‌سازی موتورهای جستجو (SEO) به راحتی در دسترس است.
                    این مزایا به شما کمک می‌کند تا وب‌سایت کارآمد و حرفه‌ای ایجاد کنید.</p>
                <button className='bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 flex px-2 py-3 rounded-lg gap-x-4 items-center justify-between text-white hover:scale-105 duration-300 '>
                    توضیحات بیشتر
                    <TiPlus className='icon' />
                </button>
            </div>
        </div>
    )

}

export default WordPress