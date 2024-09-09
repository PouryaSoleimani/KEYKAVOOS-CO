import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { TiPlus } from 'react-icons/ti'
import 'animate.css';

interface Props { }

const WordPress: NextPage<Props> = ({ }) => {
    return (
        <div className='flex flex-col-reverse px-4 py-16 backdrop-blur-[3px] shadow-md shadow-zinc-950 rounded-lg lg:flex-row justify-between items-center my-16 w-full h-full lg:h-[500px] bg-transparent'>

            <div id="LEFT" className={`w-full bg-contain lg:bg-cover lg:w-1/2 h-full leftWordPress z-30`} data-aos="fade-right" data-aos-duration="1500">
                <Image src='/Technology/wordpress.svg' alt='wordpress-logo' width={120} height={120} className='wordPress3D' />
            </div>
            <div id="RIGHT" className='flex flex-col justify-start items-start space-y-12 px-6 py-8 w-full lg:w-1/2 h-full' dir='rtl' data-aos="fade-left" data-aos-duration="1500">
                <h2 className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>وب سایت وردپرسی</h2>
                <p className='text-zinc-700 tracking-tighter text-justify text-xl font-extralight'>Lorem ipadasdasdasdadadassdasdsum dolor sit amet, consectetur adipisicing elit. Eaque earum vero ab maxime eius libero, quae provident ipsa modi delectus id odit sit consequatur corporis impedit ipsam optio? Nesciunt, quod?</p>
                <button className='bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 flex px-2 py-3 rounded-lg gap-x-4 items-center justify-between text-white hover:scale-105 duration-300 '>
                    توضیحات بیشتر
                    <TiPlus className='icon' />
                </button>
            </div>
        </div>
    )

}

export default WordPress