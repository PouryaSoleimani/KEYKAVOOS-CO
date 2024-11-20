"use client"
import React from 'react'
import { blogsData } from '@/lib/data'
import { ImInsertTemplate } from 'react-icons/im'
import { useParams } from 'next/navigation'
import BackButton from '@/components/ADMIN__PANEL__COMPONENTS/BackButton'

type SingleBlogType = { id: number; title: string; content: string; imgSrc: string; category: string; author: string; publishDate: string; readingTime: string; }



const SingleBlogPage = () => {
    const PARAMS = useParams()
    const ID = PARAMS.blogID
    console.log(ID)
    const SingleBlogArray = blogsData.filter((item) => String(item.id) == ID)
    const SingleBlog: SingleBlogType = SingleBlogArray[0]
    console.log("SINGLE BLOG", SingleBlog)
    return (
        <section className='bg-[#eaeff5] web-container overflow-x-hidden flex flex-col pt-4 space-y-3' dir='rtl'>
            <div className='lg:pl-[5%]'>
                <BackButton />
            </div>
            <div id='SINGLE__BLOG__MAIN__CONTAINER' className='w-full h-screen flex items-start justify-center'>
                <div id="SINGLE___BLOG___CONTAINER" className='w-[90%] h-[90%] bg-white/30 backdrop-blur-lg rounded-xl shadow-lg shadow-zinc-500 border border-zinc-300 flex flex-col items-center justify-start space-y-4 p-5'>
                    <h1 className='text-center text-4xl font-black text-[#4866CF]'>{SingleBlog.title}</h1>
                    <div className='w-full py-2 px-6 flex flex-col lg:flex-row items-center justify-center lg:gap-x-20'>
                        <span className='bg-blue-300/50 px-2 py-1 rounded-md text-blue-800 text-sm'>{SingleBlog.category}</span>
                        <span className='text-sm bg-red-400/30 px-3 py-1 rounded-md tracking-tight text-red-900'>{SingleBlog.author}</span>
                        <span className='text-sm bg-green-400/30 px-3 py-1 rounded-md tracking-tight text-green-900'>{SingleBlog.publishDate}</span>
                        <span className='text-sm bg-zinc-400/30 px-3 py-1 rounded-md tracking-tight text-zinc-900'>{SingleBlog.readingTime}</span>
                    </div>
                    <p className='bg-zinc-200 w-full h-full px-4 py-2 rounded-lg tracking-tighter font-extralight text-zinc-800' dir='rtl'>{SingleBlog.content}</p>
                </div>
            </div>
        </section>
    )
}

export default SingleBlogPage