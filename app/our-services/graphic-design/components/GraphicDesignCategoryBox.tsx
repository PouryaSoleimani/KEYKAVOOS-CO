"use client"
// ^ WEBAPP CATEGORY BOX COMPONENT ===================================================================================================================================
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ICONS
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { IoLogoFigma } from "react-icons/io5";
import { SiCoreldraw } from "react-icons/si";
interface props { title: string, subtitle: string, desc: string, imageSrc: string }

const GraphicDesignCategoryBox: React.FC<props> = ({ title, subtitle, desc, imageSrc }) => {
    useEffect(() => { AOS.init({ offset: -100 }); AOS.refresh(); }, [])

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='w-[90%] backdrop-blur-sm h-auto lg:h-auto mx-10 p-6 gap-y-4 rounded-2xl border border-zinc-400 bg-transparent shadow-xl shadow-zinc-300 flex flex-col lg:flex-row items-center justify-between text-3xl pr-6' dir='rtl'>

            <div id='RIGHT' className='flex flex-col items-center lg:items-start justify-center lg:justify-between gap-6 w-full lg:w-1/2 h-full lg:p-4 pl-0'>
                <h3 className='font-black text-2xl lg:text-4xl text-center lg:text-start whitespace-nowrap'>{title}</h3>
                <h6 className='text-zinc-600 font-semibold tracking-wide lg:pr-2 text-xl lg:text2xl text-center lg:text-start whitespace-wrap lg:whitespace-nowrap'>{subtitle}</h6>
                <p className='text-zinc-500 font-extralight text-center lg:text-start text-[18px] lg:text-[24px] tracking-tighter leading-9'>{desc}
                </p>
                <div id="RIGHT__PRICE" className='flex items-center justify-start flex-col lg:flex-row flex-wrap w-full gap-4 lg:gap-2'>
                    <span className='btn btn-outline btn-lg w-full lg:w-auto'>
                        <FaMoneyBillWave />
                        از 20.000.000 تومان
                    </span>
                    <span className='btn btn-outline btn-lg text-lg lg:text-2xl w-full lg:w-auto flex px-2 lg:px-4'>
                        <SiAdobephotoshop />
                        <SiAdobeaftereffects />
                        <SiAdobexd />
                        <SiAdobeindesign />
                        <CgIfDesign />
                        <IoLogoFigma />
                        <SiCoreldraw />
                    </span>
                </div>
                <div id="RIGHT__BUTTONS" className='flex gap-4 flex-col lg:flex-row items-center justify-center lg:justify-start w-full'>
                    <button className='btn w-full lg:w-auto border-none btn-primary bg-gradient-to-tr from-blue-500 via-[#4866CF] to-blue-900  outline-none  text-lg font-thin tracking-tight shadow-sm shadow-zinc-400 hover:scale-110 duration-500'>مشاهده نمونه کارها</button>
                    <button className='btn w-full lg:w-auto border-none bg-gradient-to-tr from-lime-500 via-[#0dbe66] to-emerald-800  outline-none text-white text-lg font-thin tracking-tight shadow-sm shadow-zinc-400 hover:scale-110 duration-500 '>ثبت سفارش</button>
                    <button className='btn w-full lg:w-auto border-none bg-gradient-to-tr from-indigo-500 via-violet-600 to-purple-800  outline-none text-white text-lg font-thin tracking-tight shadow-sm shadow-zinc-400 hover:scale-110 duration-500 '>مشاوره آنلاین</button>
                </div>
            </div>


            <div id="LEFT" className='w-full lg:w-1/2 h-full'>
                <Image src={imageSrc.toString()} alt='pic' width={600} height={600} className='rounded-sm w-full h-full ' />
            </div>

        </div>
    )
}

export default GraphicDesignCategoryBox