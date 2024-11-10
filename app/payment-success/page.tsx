import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentSuccessPage = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center mx-auto overflow-hidden'>
            <div className='bg-green-900 w-1/2 h-1/3 backdrop-blur-md border-emerald-800 border-8 rounded-2xl flex flex-col py-4 space-y-6 items-center justify-center'>
                <Image src='/PAYMENTS/PAYMENT___SUCCESS.png' width={130} height={130} alt='payment-success'className='mx-auto' />
                <h1 className='text-3xl font-extrabold text-center text-white my-2 tracking-tighter'>پرداخت شما با موفقیت انجام شد</h1>
                <Link href="/" className='bg-green-950 text-white px-4 py-1.5 rounded-md text-lg hover:bg-green-600 duration-300'>بازگشت به صفحه اصلی</Link>
            </div>
        </div>
    )
}

export default PaymentSuccessPage