// ^ NEW ORDER FORM COMPONENT ==============================================================================================================================
import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const OrderNew = () => {
    return (
        <div className='TECH-CARD w-[88%] h-[26rem] bg-zinc-100/30 backdrop-blur-sm mx-auto my-6 rounded-xl  shadow-md shadow-zinc-400 border border-zinc-300'>
            <label className="text-[#4866CF] flex justify-center sm:text-[36px] text-[30px] my-4 tracking-tighter "> فرم ثبت درخواست مشاوره </label>
            <form className='flex flex-col my-6'>
                <div id="FORM___TOP" className='flex items-center justify-center gap-x-2 px-12' dir='rtl'>

                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <FaUser className='text-zinc-500 w-4 h-4 -translate-y-0.5' />
                        <input type="text" className="grow placeholder:text-lg placeholder:tracking-tighter" placeholder="نام و نام خانوادگی" dir='rtl' />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <MdEmail className='text-zinc-500 w-5 h-5 -translate-y-0.5' />
                        <input type="email" className="grow placeholder:text-lg placeholder:tracking-tighter" placeholder="پست الکترونیکی" dir='rtl' />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <MdEmail className='text-zinc-500 w-5 h-5 -translate-y-0.5' />
                        <input type="tel" className="grow placeholder:text-lg placeholder:tracking-tighter" placeholder="شماره تماس" dir='rtl' />
                    </label>

                </div>
                <div id="FORM___BUTTOM" className='flex px-12 items-center justify-center my-4 gap-x-3' dir='rtl'>

                    <label className="form-control w-full">
                        <textarea className="textarea textarea-bordered h-44 border-2 border-slate-300 placeholder:text-lg tracking-tighter" placeholder="توضیحات تکمیلی"  ></textarea>
                    </label>

                </div>
                <button type="button" className="text-white ml-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:bg-gradient-to-br duration-300 w-44 text-xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"> ثبت درخواست </button>
            </form>
        </div>
    )
}

export default OrderNew