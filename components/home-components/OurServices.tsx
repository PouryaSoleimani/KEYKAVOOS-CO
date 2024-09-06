import React from 'react'
import 'animate.css';


const OurServices = () => {
    return (
        <>
            <h2 className='mt-32 mb-10 text-center font-[1000] py-1 bg-gradient-to-tr from-[#4866CF] via-blue-500 to-slate-700 bg-clip-text text-transparent text-4xl tracking-tighter animate__animated animate__fadeInUp animate__slow animate__delay-2s'> خدمات ما </h2>
            <div className='grid grid-cols-2 place-items-center lg:flex justify-around items-start py-10 gap-4 bg-[#EAEFF6] w-full lg:h-[500px]' dir='rtl' data-aos="fade-up" data-aos-duration="1500">
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer">
                    <div className="servicecard-overlay"></div>
                    <div className="servicecard-inner">طراحی<br />وب اپلیکیشن</div>
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer">
                    <div className="servicecard-overlay"></div>
                    <div className="servicecard-inner">طراحی سایت</div>
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer">
                    <div className="servicecard-overlay"></div>
                    <div className="servicecard-inner">تامین<br />قطعات کامپیوتری</div>
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer">
                    <div className="servicecard-overlay"></div>
                    <div className="servicecard-inner">طراحی گرافیک</div>
                </div>
                <div className="servicecard hover:scale-110 duration-500 cursor-pointer">
                    <div className="servicecard-overlay"></div>
                    <div className="servicecard-inner">آموزش<br />کارکنان دولت</div>
                </div>
            </div>
        </>
    )
}

export default OurServices