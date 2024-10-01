import Image from 'next/image'
import React from 'react'
interface props { title: string, desc: string, imageSrc: string }

const WebAppCategoryBox: React.FC<props> = ({ title, desc, imageSrc }) => {
    return (
        <div className='w-[80%] h-[30rem] mx-10 p-6 rounded-3xl border border-zinc-400 bg-transparent shadow-lg shadow-zinc-300 backdrop-blur-[2px] flex flex-col lg:flex-row items-center justify-between text-3xl px-6' dir='rtl'>
            <div id='RIGHT' className='flex flex-col items-start justify-start gap-6'>
                <h3 className='font-extrabold text-3xl '>{title}</h3>
                <p className='text-zinc-500 font-extralight text-start text-md tracking-tighter leading-9'>{desc}</p>
            </div>
            <div id="LEFT">
                <Image src={imageSrc.toString()} alt='pic' width={600} height={600} className='rounded-3xl' />
            </div>

        </div>
    )
}

export default WebAppCategoryBox