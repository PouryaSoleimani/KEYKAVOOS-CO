import React from 'react'
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';


const OurServices = () => {
    return (
        <>
            <h2 id='OUR__SERVICES__SECTION' className='mt-32 mb-10 text-center font-[1000] bg-gradient-to-tr from-blue-500 via-[#4866CF] to-blue-800 bg-clip-text text-transparent text-5xl tracking-tighter animate__animated animate__fadeInUp animate__slow animate__delay-2s'> خدمات ما </h2>
            <section className='grid grid-cols-1 min-[520px]:grid-cols-2 place-items-center lg:flex justify-around items-start py-16 gap-4 px-[4vw] w-full lg:h-[500px] text-zinc-800' dir='rtl' data-aos="fade-up" data-aos-duration="1500">
                <div className="servicecard hover:scale-110 duration-300 cursor-pointer z-10 backdrop-blur-[10px] bg-white  shadow-md shadow-zinc-300 rounded-2xl border border-zinc-300">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent rounded-2xl"></div>
                    <Link href='/our-services/web-application' className="servicecard-inner z-30 backdrop-blur-sm ">طراحی<br /><br /><br />وب اپلیکیشن</Link>
                    <Image src='/3D_ICONS/AT.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4rem] left-[7.5rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-300 cursor-pointer z-10 backdrop-blur-[10px] bg-white shadow-md shadow-zinc-300 rounded-2xl border border-zinc-300">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent  rounded-2xl"></div>
                    <Link href='/our-services/website' className="servicecard-inner z-30 backdrop-blur-sm">طراحی سایت</Link>
                    <Image src='/3D_ICONS/PC.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-5rem] lg:top-[6rem] left-[-1rem] lg:left-[3rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-300 cursor-pointer z-10 backdrop-blur-[10px] bg-white shadow-md shadow-zinc-300 rounded-2xl border border-zinc-300">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent  rounded-2xl"></div>
                    <Link href="/our-services/hardwares" className="servicecard-inner z-30 backdrop-blur-sm"> تامین <br /> قطعات  <br /> کامپیوتری</Link>
                    <Image src='/3D_ICONS/SETTINGS__GOLD.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4.5rem] left-[-2rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-300 cursor-pointer z-10 backdrop-blur-[10px] bg-white shadow-md shadow-zinc-300 rounded-2xl border border-zinc-300">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent  rounded-2xl"></div>
                    <Link href='/our-services/graphic-design' className="servicecard-inner z-30 backdrop-blur-sm"> طراحی <br /> گرافیک</Link>
                    <Image src='/3D_ICONS/PAINT__BRUSH.png' alt='brush' width={170} height={170} className='wordPress3D absolute top-[-5rem] left-[6rem] lg:top-[6rem] lg:left-[-2rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-300 cursor-pointer z-10 backdrop-blur-[10px] bg-white shadow-md shadow-zinc-300 rounded-2xl border border-zinc-300">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent  rounded-2xl"></div>
                    <Link href="/our-services/government-learning" className="servicecard-inner z-30 backdrop-blur-sm"> آموزش <br /> کارکنان <br /> دولت</Link>
                    <Image src='/3D_ICONS/NOTEBOOK.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4.5rem] left-[-2rem] -z-10' />
                </div>
            </section>
        </>
    )
}

export default OurServices