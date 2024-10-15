import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const location = useRouter()
    const backHandler = () => { location.back() }
    return (
        <div className="flex items-center justify-end h-fit">
            <button onClick={backHandler} className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
                <IoArrowBack />
            </button>
        </div>
    )
}
export default BackButton