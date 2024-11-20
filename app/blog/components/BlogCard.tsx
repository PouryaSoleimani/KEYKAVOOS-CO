import React, { MutableRefObject, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'
import { PiUserFill } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import AOS from 'aos'
import "aos/dist/aos.css";
import Link from 'next/link';
interface props { imageSrc: string, title: string, content: string, id: string | number }

//^ COMPONENT
const BlogCard: React.FC<props> = ({ imageSrc, title, content, id }) => {
    // AOS
    useEffect(() => { AOS.init(); AOS.refresh(); }, []);
    // console.log(imageSrc, title, content)

    return (
        <div >
            <div data-aos="fade-up" data-aos-duration="1500" className="BLOG__CARD w-72 card backdrop-blur-[4px] bg-zinc-800/10 shadow-lg shadow-zinc-300 hover:scale-110 duration-500 cursor-pointer gap-y-4 " dir='rtl'>
                <figure>
                    <img src={imageSrc} alt="Pic" className='hover:scale-125 overflow-hidden duration-500' />
                </figure>
                <div className="card-body gap-y-4">
                    <p className='text-xs text-blue-800 flex flex-row justify-start items-center gap-x-1 w-fit bg-blue-200/70 p-2 rounded-lg'>
                        <FaCircle className='p-[2px]' />
                        دسته بندی مطلب
                    </p>
                    <h2 className="card-title text-xl">{title}</h2>
                    <p className='text-zinc-600'>{content}</p>
                    <div className='flex items-center justify-around w-full gap-x-4'>
                        <p className='flex gap-x-1 items-center whitespace-nowrap text-xs text-orange-800'><PiUserFill />نویسنده مطلب</p>
                        <p className='flex gap-x-1 items-center whitespace-nowrap text-xs text-emerald-800'><BsCalendarDateFill />تاریخ انتشار</p>
                    </div>
                    <div className='flex items-center justify-end'>
                        <p className='flex items-center justify-start gap-x-1 text-zinc-500 text-xs w-full'>
                            <MdAccessTime />
                            زمان مطالعه : 15 دقیقه
                        </p>
                    </div>
                    <div className="justify-end card-actions ">
                        <Link href={`/blog/${id}`} className="btn bg-[#4866CF] font-extralight hover:bg-blue-800 text-white text-lg text-start w-full rounded-xl duration-300" dir='rtl'>ادامه مطلب</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard