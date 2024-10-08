"use client"
// ^ WEBAPP CATEGORY BOX COMPONENT ===================================================================================================================================
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPhp } from "react-icons/bi";
import { TbBrandLaravel } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface props { title: string, desc: string, imageSrc: string }

const WebAppCategoryBox: React.FC<props> = ({ title, desc, imageSrc }) => {
    useEffect(() => { AOS.init({ offset: -50 }); AOS.refresh(); }, [])

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='w-[90%] backdrop-blur-sm h-auto lg:h-auto mx-10 p-6 gap-y-4 rounded-2xl border border-zinc-400 bg-transparent shadow-xl shadow-zinc-300 flex flex-col lg:flex-row items-center justify-between text-3xl pr-6' dir='rtl'>

            <div id='RIGHT' className='flex flex-col items-center lg:items-start justify-center lg:justify-between gap-6 w-full lg:w-1/2 h-full lg:p-4 pl-0'>
                <h3 className='font-black text-2xl lg:text-4xl text-center lg:text-start whitespace-nowrap'>{title}</h3>
                <p className='text-zinc-500 font-extralight text-center lg:text-start text-[18px] lg:text-[24px] tracking-tighter leading-9'>{desc}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis. Odit distinctio quia beatae illum illo maiores voluptatem deleniti quis ea non totam earum adipisci, labore deserunt temporibus. Placeat, officia!
                </p>
                <div id="RIGHT__PRICE" className='flex items-center justify-start flex-col lg:flex-row flex-wrap w-full gap-4 lg:gap-2'>
                    <span className='btn btn-outline btn-lg w-full lg:w-auto'>
                        <FaMoneyBillWave />
                        از 20.000.000 تومان
                    </span>
                    <span className='btn btn-outline btn-lg text-lg lg:text-2xl w-full lg:w-auto flex px-2 lg:px-4'>
                        <FaWordpress />
                        <IoLogoJavascript />
                        <FaReact />
                        <RiNextjsFill />
                        <IoLogoNodejs />
                        <SiExpress />
                        <BiLogoPhp />
                        <TbBrandLaravel />
                        <BiLogoMongodb />
                        <SiMysql />
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

export default WebAppCategoryBox