import React from 'react'
import { IoArrowBack, IoReload } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { GrRefresh } from 'react-icons/gr';

const BackButton = () => {
    const location = useRouter()
    const backHandler = () => { location.back() }
    const reloadHandler = () => (location.refresh())
    return (
        <div className="flex flex-row-reverse  items-center justify-between  px-2  h-fit">
            <button onClick={backHandler} className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer shadow-lg shadow-zinc-300">
                <IoArrowBack />
            </button>
            <button onClick={reloadHandler} className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer shadow-lg shadow-zinc-300 ">
                <GrRefresh />
            </button>
        </div>
    )
}
export default BackButton