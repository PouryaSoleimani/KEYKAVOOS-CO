import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { TiPlus } from 'react-icons/ti'
import 'animate.css';

interface Props { }

const WordPress: NextPage<Props> = ({ }) => {
    return (
        <div className='flex flex-col-reverse bg-slate-900/10 px-4 py-4 backdrop-blur-lg rounded-xl lg:flex-row justify-between items-center my-16 w-full h-full lg:h-[400px] animate__animated animate__delay-3s animate__fadeInUp animate__slow'>

            <div id="LEFT" className={`w-full bg-contain lg:bg-cover lg:w-1/2 h-full leftWordPress relative z-30`}>
                <Image src='/Technology/wordpress.svg' alt='wordpress-logo' width={150} height={150} className='wordPress3D' />
                <Image src='/3D_ICONS/PAINT__BRUSH.png' alt='paint_brush' width={100} height={100} className='wordPress3D' />
                <Image src='/3D_ICONS/AT.png' alt='at_sign' width={80} height={80} className='wordPress3D' />
                <Image src='/3D_ICONS/HEART.png' alt='heart' width={120} height={120} className='wordPress3D' />
                <Image src='/3D_ICONS/TEXT.png' alt='text' width={80} height={80} className='-rotate-12 wordPress3D' />
                <Image src='/3D_ICONS/CHART.png' alt='chart' width={100} height={100} className='wordPress3D' />
            </div>
            <div id="RIGHT" className='flex flex-col justify-start items-start space-y-8 px-6 py-16 w-full lg:w-1/2 h-full' dir='rtl'>
                <h2 className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>وب سایت وردپرسی</h2>
                <p className='text-zinc-700 tracking-tighter text-justify text-xl font-extralight'>Lorem ipadasdasdasdadadassdasdsum dolor sit amet, consectetur adipisicing elit. Eaque earum vero ab maxime eius libero, quae provident ipsa modi delectus id odit sit consequatur corporis impedit ipsam optio? Nesciunt, quod?</p>
                <button className='bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 flex p-3 rounded-md gap-x-4 border-4 bg-transparent items-center justify-between text-white hover:scale-105 duration-300 '>
                    توضیحات بیشتر
                    <TiPlus className='icon' />
                </button>
            </div>
        </div>
    )

}

export default WordPress