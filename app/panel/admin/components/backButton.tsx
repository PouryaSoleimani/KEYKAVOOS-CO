import React from 'react'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const backButton: React.FC<string> = (href: string) => {
    return (
        <div className="flex items-center justify-end" >
            <Link href={href} className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
                <IoArrowBack />
            </Link>
        </div >
    )
}

export default backButton
