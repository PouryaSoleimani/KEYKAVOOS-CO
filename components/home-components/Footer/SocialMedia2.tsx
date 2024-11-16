import Link from 'next/link'
import React from 'react'
import { GrInstagram } from "react-icons/gr";

const SocialMedia2 = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-6">

                <Link href="/" className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-tr from-orange-500 via-pink-800 to-violet-900 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" >
                    <GrInstagram className='w-8 h-8' />
                    <span className="absolute opacity-0 font-extralight group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:translate-y-12 duration-700">
                        اینستاگرام
                    </span>
                </Link>
            </div>

        </div>
    )
}

export default SocialMedia2