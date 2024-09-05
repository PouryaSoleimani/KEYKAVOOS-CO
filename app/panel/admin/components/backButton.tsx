import React from 'react'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const BackButton = (href: string) => {
    return (
        <div className="flex items-center justify-end py-2" >
            <Link href={`href`} className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
                <IoArrowBack />
            </Link>
        </div >
    )
}
export default BackButton