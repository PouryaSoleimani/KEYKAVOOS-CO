// ^ NEW ORDER FORM COMPONENT ==============================================================================================================================
import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const OrderNew = () => {
    return (
        <div className='TECH-CARD w-[88%] h-[24rem] bg-zinc-100/30 backdrop-blur-sm mx-auto my-6 rounded-xl  shadow-md shadow-zinc-400 border border-zinc-300'>
            <label className="text-[#4866CF] flex justify-center sm:text-[36px] text-[30px] my-4 tracking-tighter "> فرم ثبت درخواست  </label>
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

                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className='font-bold tracking-tight text-lg'>انتخاب فایل پیوست</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">فرمت های قابل قبول : <span className='text-blue-900'>RAR , ZIP</span></p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default OrderNew