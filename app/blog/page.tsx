"use client"
// ^ BLOG PAGE ============================================================================================================================================
import Nav from '@/components/home-components/nav'
import React, { useEffect } from 'react'
import BlogSwiper from './components/BlogSwiper'
import BlogCard from './components/BlogCard'
import Footer from '@/components/home-components/Footer/Footer'
import 'animate.css';
import AOS from 'aos'
import "aos/dist/aos.css";

//^ COMPONENT ============================================================================================================================================
const BlogPage = () => {
    // AOS
    useEffect(() => { AOS.init(); AOS.refresh(); }, []);

    // ^ RETURN
    return (
        <div className='web-container'>
            <Nav />
            <div >
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-4xl py-4 text-transparent animate__animated animate__heartBeat animate__infinite'>وبــــلاگ</h1>
            </div>
            <div id='BLOG__SWIPER__CONTAINER' className='my-6 px-10'>
                <BlogSwiper />
            </div>
            <div id='BLOG__CARDS__CONTAINER' className='flex flex-wrap justify-center items-center place-items-center gap-8 lg:grid lg:grid-cols-4 p-10 w-full space-x-6'>
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
                <BlogCard imageSrc='/BLOG/BLOG_1.bmp' title="عنوان مطلب" content="محتوای مطلب" />
            </div>
            <div id="BLOG__PAGINATION__CONTAINER" className='w-full flex items-center justify-center my-10'>
                <div className="join rounded-lg checked:bg-blue-800">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="6" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="7" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="8" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage