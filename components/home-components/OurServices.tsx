import React from 'react'
import 'animate.css';
import Image from 'next/image';


const OurServices = () => {
    return (
        <>
            <h2 className='mt-32 mb-10 text-center font-[1000] py-1 bg-gradient-to-tr from-[#4866CF] via-blue-500 to-slate-700 bg-clip-text text-transparent text-4xl tracking-tighter animate__animated animate__fadeInUp animate__slow animate__delay-2s'> خدمات ما </h2>
            <div className='grid grid-cols-2 place-items-center lg:flex justify-around items-start py-16 gap-4 bg-[#EAEFF6] w-full lg:h-[500px]' dir='rtl' data-aos="fade-up" data-aos-duration="1500">
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer z-10 bg-[#d8e2e2e8] ">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent"></div>
                    <div className="servicecard-inner z-30 backdrop-blur-sm ">طراحی<br /><br /><br />وب اپلیکیشن</div>
                    <Image src='/3D_ICONS/AT.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4rem] left-[7.5rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer z-10 bg-[#d8e2e2e8] ">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent"></div>
                    <div className="servicecard-inner z-30 backdrop-blur-sm">طراحی سایت</div>
                    <Image src='/3D_ICONS/PC.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[6rem] left-[3rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer z-10 bg-[#d8e2e2e8] ">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent"></div>
                    <div className="servicecard-inner z-30 backdrop-blur-sm"> تامین <br /> قطعات  <br /> کامپیوتری</div>
                    <Image src='/3D_ICONS/SETTINGS.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4.5rem] left-[-2rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer z-10 bg-[#d8e2e2e8] ">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent"></div>
                    <div className="servicecard-inner z-30 backdrop-blur-sm"> طراحی <br /> گرافیک</div>
                    <Image src='/3D_ICONS/PAINT__BRUSH.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[4.5rem] left-[-2rem] -z-10' />
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer z-10 bg-[#d8e2e2e8] ">
                    <div className="servicecard-overlay backdrop-blur-sm z-0 bg-transparent"></div>
                    <div className="servicecard-inner z-30 backdrop-blur-sm"> آموزش <br /> کارکنان <br /> دولت</div>
                    <Image src='/3D_ICONS/NOTEBOOK.png' alt='at_sign' width={170} height={170} className='wordPress3D absolute top-[-4.5rem] left-[-2rem] -z-10' />
                </div>
            </div>
        </>
    )
}

export default OurServices