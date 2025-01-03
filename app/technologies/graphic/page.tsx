// ^ GRAPHIC TECHNOLOGY PAGE =====================================================================================================================================================
import Nav from '@/components/home-components/nav'
import React from 'react'

const GraphicPage = () => {
    return (
        <div className='web-container h-auto overflow-x-hidden'>
            <Nav />
            {/* HEADER */}
            <div className='py-4 animate__animated animate__backInDown animate__slow'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>طراحی گرافیک</h1>
                <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از پیشرفته ترین ابزار و ترند ترین سبک های روز</h2>
            </div>
        </div>
    )
}

export default GraphicPage