import Nav from '@/components/home-components/nav'
import React from 'react'

const AboutUsPage = () => {
    return (
        <section className='bg-[#eaeff5] web-container overflow-x-hidden h-screen'>
            <Nav />
            <div id='ABOUT__US__MAIN__CONTAINER' className='h-[50rem]'>
                <h1 className='w-full text-center mt-16 font-black bg-gradient-to-tr from-blue-400 via-[#4866CF] to-blue-900 bg-clip-text text-transparent tracking-tighter text-5xl md:text-6xl lg:text-7xl'>درباره ما</h1>
            </div>
        </section>
    )
}

export default AboutUsPage