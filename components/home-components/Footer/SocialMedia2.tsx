import Link from 'next/link'
import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from 'next/image';

const SocialMedia2 = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-6 gap-4">
                {/* INSTAGRAM */}
                <Link href="/" className="group flex justify-center p-2 rounded-lg drop-shadow-xl bg-gradient-to-tr from-orange-500 via-pink-800 to-violet-900 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" >
                    <GrInstagram className='w-8 h-8' />
                    <span className="absolute opacity-0 font-extralight group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:translate-y-12 duration-700">
                        اینستاگرام
                    </span>
                </Link>
                {/* TELEGRAM */}
                <Link href="/" className="group flex justify-center p-2 rounded-lg drop-shadow-xl bg-sky-700 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" >
                    <SiTelegram className='w-8 h-8' />
                    <span className="absolute opacity-0 font-extralight group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:translate-y-12 duration-700">
                        تلگرام
                    </span>
                </Link>
                {/* WHATSAPP */}
                <Link href="/" className="group flex justify-center p-2 rounded-lg drop-shadow-xl bg-green-600 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" >
                    <IoLogoWhatsapp className='w-8 h-8' />
                    <span className="absolute opacity-0 font-extralight group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:translate-y-12 duration-700">
                        واتساپ
                    </span>
                </Link>
                {/* BALE */}
                <Link href="/" className="group flex justify-center p-2 rounded-lg drop-shadow-xl bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" >
                    <Image src="/footer/BALE___NEW___ICON.png" width={32} height={32} alt='bale__icon' />
                    <span className="absolute opacity-0 font-extralight group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:translate-y-12 duration-700">
                        بله
                    </span>
                </Link>

            </div>

        </div>
    )
}

export default SocialMedia2