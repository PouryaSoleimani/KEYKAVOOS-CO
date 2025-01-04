//! PAYMENT FAILURE PAGE ==================================================================================================================================
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentFailurePage = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center mx-auto overflow-hidden'>
            <div className='bg-red-900 w-1/2  backdrop-blur-md border-red-800 border-8 rounded-2xl flex flex-col py-10 space-y-3 items-center justify-center'>
                <Image src='/PAYMENTS/THUMB__DOWN.png' width={130} height={130} alt='payment-success' className='mx-auto' />
                <h1 className='text-3xl font-extrabold text-center text-white my-1 tracking-tighter'>متاسفانه پرداخت شما با خطا مواجه شد</h1>
                <h2 className='text-lg font-extrabold text-center text-white'>لطفا مجددا تلاش فرمایید</h2>
                <Link href="/" className='bg-red-950 text-white px-4 py-1.5 rounded-md text-lg hover:bg-red-600 duration-300'>بازگشت به صفحه اصلی</Link>
            </div>
        </div>
    )
}

export default PaymentFailurePage