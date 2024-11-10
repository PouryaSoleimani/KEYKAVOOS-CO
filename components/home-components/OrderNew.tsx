// ^ NEW ORDER FORM COMPONENT ==============================================================================================================================
import React from 'react'
import { FaUser } from "react-icons/fa";

const OrderNew = () => {
    return (
        <div className='TECH-CARD w-[88%] h-[20rem] bg-zinc-100/30 backdrop-blur-sm mx-auto my-6 rounded-xl  shadow-md shadow-zinc-400 border border-zinc-300'>
            <label className="text-[#4866CF] flex justify-center sm:text-[36px] text-[30px] my-4 tracking-tighter "> فرم ثبت درخواست  </label>
            <form>
                <div id='FORM___TOP' className='flex items-center justify-evenly' dir='rtl'>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text tracking-tight text-[17px] text-zinc-600">نام و نام خانوادگی</span>
                        </div>
                        <input type="text" placeholder="" className="relative input input-bordered w-full max-w-xs focus:border-blue-800 focus:outline-none placeholder:opacity-45 text-lg text-zinc-600" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text tracking-tight text-[17px] text-zinc-600">پست الکترونیکی</span>
                        </div>
                        <input type="email" placeholder="" className="relative input input-bordered w-full max-w-xs focus:border-blue-800 focus:outline-none placeholder:opacity-45 text-lg text-zinc-600" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text tracking-tight text-[17px] text-zinc-600">شماره تماس</span>
                        </div>
                        <input type="tel" placeholder="" className="relative input input-bordered w-full max-w-xs focus:border-blue-800 focus:outline-none placeholder:opacity-45 text-lg text-zinc-600" />
                    </label>

                </div>
                <div id='FORM___BUTTOM'></div>
            </form>
        </div>
    )
}

export default OrderNew