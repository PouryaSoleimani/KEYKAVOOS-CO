import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'



interface Props { }

const WordPress: NextPage<Props> = ({ }) => {
    return (
        <div className='flex justify-between items-center bg-zinc-800 shadow-md shadow-zinc-700 my-16 w-full h-[400px]'>

            <div id="LEFT" className={`flex flex-col justify-center items-center bg-red-300 w-1/2 h-full leftWordPress`}>
                <Image src='/Technology/wordpress.svg' alt='wordpress-logo' width={100} height={100} />
                <Image src='/3D_ICONS/PAINT__BRUSH.png' alt='paint_brush' width={100} height={100} />
                <Image src='/3D_ICONS/AT.png' alt='at_sign' width={100} height={100} />
                <Image src='/3D_ICONS/HEART.png' alt='heart' width={100} height={100} />
                <Image src='/3D_ICONS/TEXT.png' alt='text' width={100} height={100} />
                <Image src='/3D_ICONS/CHART.png' alt='chart' width={100} height={100} />
            </div>

            <div id="RIGHT" className='flex flex-col justify-start items-start space-y-16 bg-blue-300 px-6 py-16 w-1/2 h-full' dir='rtl'>
                <h2 className='tracking-tighter h-fit bg-gradient-to-tr from-[#4866CF] via-blue-700 to-slate-700 text-4xl font-extrabold bg-clip-text text-transparent'>وب سایت وردپرسی</h2>
                <p className='text-zinc-700 tracking-tighter text-justify text-2xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum vero ab maxime eius libero, quae provident ipsa modi delectus id odit sit consequatur corporis impedit ipsam optio? Nesciunt, quod?</p>
            </div>
        </div>
    )

}

export default WordPress