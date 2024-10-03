import Image from 'next/image'
import React from 'react'
interface props { title: string, desc: string, imageSrc: string }

const WebAppCategoryBox: React.FC<props> = ({ title, desc, imageSrc }) => {
    return (
        <div className='w-[80%] glass h-[30rem] mx-10 p-6 rounded-2xl border border-zinc-400 bg-transparent shadow-lg shadow-zinc-300 flex flex-col lg:flex-row items-center justify-between text-3xl px-6' dir='rtl'>

            <div id='RIGHT' className='flex flex-col items-center lg:items-start justify-center lg:justify-start gap-6 w-full lg:w-1/2 h-full lg:p-6'>
                <h3 className='font-black text-2xl lg:text-4xl text-center lg:text-start whitespace-nowrap'>{title}</h3>
                <p className='text-zinc-500 font-extralight text-center lg:text-start text-md tracking-tighter leading-9'>{desc}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis. Odit distinctio quia beatae illum illo maiores voluptatem deleniti quis ea non totam earum adipisci, labore deserunt temporibus. Placeat, officia!
                </p>
                <div id="RIGHT__BUTTONS" className='flex gap-4 flex-col lg:flex-row items-center justify-center lg:justify-start w-full'>
                    <button className='btn btn-primary bg-gradient-to-tr from-blue-500 via-[#4866CF] to-blue-900 border-none outline-none '>مشاهده نمونه کارها</button>
                    <button className='btn  bg-gradient-to-tr from-lime-500 via-[#06723c] to-emerald-900 border-none outline-none '>ثبت سفارش</button>
                </div>
            </div>

            <div id="LEFT" className='w-full lg:w-1/2 h-full'>
                <Image src={imageSrc.toString()} alt='pic' width={600} height={600} className='rounded-3xl w-full h-full' />
            </div>

        </div>
    )
}

export default WebAppCategoryBox