// ^ NEW ORDER FORM COMPONENT ==============================================================================================================================
import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaPhone } from 'react-icons/fa6';

type Inputs = { name: string, email: string, phonenumber: number | string, textarea?: string | number }


const OrderNew = () => {
    const schema = yup
        .object()
        .shape({ name: yup.string().required(), email: yup.string().email().required(), phonenumber: yup.string().max(11).required(), textarea: yup.string() })
        .required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data)  ; reset}
    return (
        <div className='TECH-CARD w-[88%] h-[28rem] bg-zinc-100/30 backdrop-blur-sm mx-auto my-6 rounded-xl  shadow-md shadow-zinc-400 border border-zinc-300'>
            <label className="text-[#4866CF] flex justify-center sm:text-[36px] text-[30px] my-4 tracking-tighter "> فرم ثبت درخواست مشاوره </label>
            <form className='flex flex-col space-y-6 my-6' onSubmit={handleSubmit(onSubmit)}>
                <div id="FORM___TOP" className='flex items-center justify-center gap-x-2 px-12' dir='rtl'>

                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <FaUser className='text-zinc-500 w-4 h-4 -translate-y-0.5' />
                        <input type="text" className="grow placeholder:text-lg placeholder:tracking-tighter" placeholder="نام و نام خانوادگی" dir='rtl' {...register('name', { required: true })} />
                        {errors.name && <p className='text-red-900 absolute top-36 left-[78%] tracking-tighter text-sm'>نام و نام خانوادگی خود را وارد کنید</p>}
                    </label>
                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <MdEmail className='text-zinc-500 w-5 h-5 -translate-y-0.5' />
                        <input type="email" className="grow placeholder:text-lg placeholder:tracking-tighter" placeholder="پست الکترونیکی" dir='rtl'  {...register('email', { required: true })} />
                        {errors.email && <p className='text-red-900 absolute top-36 left-[48%] tracking-tighter text-sm'>ایمیل وارد شده صحیح نمی باشد</p>}
                    </label>
                    <label className="input input-bordered flex items-center gap-2 border-2 border-slate-300 w-1/3">
                        <FaPhone className='text-zinc-500 w-5 h-5 -translate-y-0.5' />
                        <input type="tel" className="grow placeholder:text-lg placeholder:tracking-tighter relative top-0 left-0" placeholder="شماره تماس" dir='rtl' {...register('phonenumber', { required: true })} />
                        {errors.phonenumber && <p className='text-red-900 absolute top-36 left-[15.5%] tracking-tighter text-sm'>شماره تلفن وارد شده صحیح نمی باشد</p>}
                    </label>

                </div>
                <div id="FORM___BUTTOM" className='flex px-12 items-center justify-center my-4 gap-x-3' dir='rtl'>

                    <label className="form-control w-full">
                        <textarea className="textarea textarea-bordered h-44 border-2 border-slate-300 placeholder:text-lg tracking-tighter" placeholder="توضیحات تکمیلی" {...register('textarea', { required: true })}  ></textarea>
                    </label>

                </div>
                <button type="submit" className="text-white ml-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:bg-gradient-to-br duration-300 w-44 text-xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"> ثبت درخواست </button>
            </form>
        </div>
    )
}

export default OrderNew