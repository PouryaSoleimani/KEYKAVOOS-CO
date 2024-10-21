import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { TiPlus } from 'react-icons/ti'
import 'animate.css';

interface Props { }

const CodingWebDevelopment: NextPage<Props> = ({ }) => {
    return (
        <div className='flex bg-transparent flex-col-reverse px-7 py-3 backdrop-blur-[2px] border border-zinc-300 shadow-md shadow-zinc-400 rounded-2xl lg:flex-row justify-between items-center w-full h-full lg:h-fit'>

            <div id="LEFT" className={`w-full bg-contain lg:bg-cover lg:w-1/2 h-full leftWordPress z-30 flex flex-col lg:flex-row items-start justify-start`} data-aos="fade-right" data-aos-duration="1500">
                <Image src='/Technology/react.svg' alt='wordpress-logo' width={90} height={90} className='wordPress3D absolute top-8 lg:top-4' />
                <Image src='/Technology/next.svg' alt='wordpress-logo' width={90} height={90} className='wordPress3D absolute top-32' />
                <Image src="/WEB_DESIGN_PLANS/WORDPRESS__BG.webp" width={500} height={500} alt='wordpress' />
            </div>
            <div id="RIGHT" className='flex flex-col justify-start items-start space-y-4  py-2 w-full lg:w-1/2 h-full' dir='rtl' data-aos="fade-left" data-aos-duration="1500">
                <h2 className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>وب سایت کد نویسی</h2>
                <div className='text-zinc-600 tracking-tighter text-justify text-md leading-9 font-thin whitespace-pre-line'><b className='font-bold tracking-wide text-zinc-800 my-3'>طراحی سایت با وردپرس مزایای زیادی دارد، از جمله : </b>
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-6'> -  کاربرپسند بودن : </p>
                    ایجاد و مدیریت سایت با وردپرس به راحتی انجام می‌شود و نیازی به مهارت‌های کدنویسی ندارد.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-6'> -  قالب‌های متنوع : </p>
                    انتخاب از میان هزاران قالب و طراحی سفارشی برای نیازهای خاص.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-6'> -  افزونه‌های متعدد : </p>
                    امکانات گوناگون مانند سئو، امنیت و تجزیه و تحلیل از طریق افزونه‌ها به راحتی قابل افزودن است.
                    <br />
                    <p className='font-bold text-[#4866CF] text-xl leading-6'> -  سئو دوستانه : </p>
                    ابزارهای قدرتمند برای بهینه‌سازی موتورهای جستجو (SEO) به راحتی در دسترس است.
                    این مزایا به شما کمک می‌کند تا وب‌سایت کارآمد و حرفه‌ای ایجاد کنید. <span className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>...</span>
                    </div>
                <button className='bg-gradient-to-tr whitespace-nowrap from-[#4866CF] via-blue-700 to-slate-700 flex px-10 py-3 rounded-lg gap-x-4 items-center justify-between text-white hover:scale-105 duration-300 '>
                    توضیحات بیشتر
                    <TiPlus className='icon' />
                </button>
            </div>
        </div>
    )

}

export default CodingWebDevelopment