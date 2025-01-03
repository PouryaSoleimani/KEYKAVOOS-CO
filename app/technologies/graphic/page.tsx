// ^ GRAPHIC TECHNOLOGY PAGE =====================================================================================================================================================
import GovernmentLearningCarousel4 from '@/components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel4'
import Footer from '@/components/home-components/Footer/Footer'
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
            <video src="/GRAPHIC__DESIGN/1.mp4" loop autoPlay height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl' />
            <div className='flex flex-col items-center justify-center gap-16 pb-32  h-auto' data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-2xl">تکنولوژی ها و ابزار های مورد استفاده در طراحی گرافیک</h2>
                <GovernmentLearningCarousel4 />
            </div>
            <div className='w-[90%] mx-auto border rounded-xl backdrop-blur-md p-4 my-10'>
                
            </div>
            <Footer />
        </div>
    )
}

export default GraphicPage