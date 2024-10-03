import React from 'react'
import { FaCircle } from 'react-icons/fa6'
interface props { imageSrc: string, title: string, content: string }


const BlogCard: React.FC<props> = ({ imageSrc, title, content }) => {

    console.log(imageSrc, title, content)
    return (
        <div>
            <div className="w-72 card backdrop-blur-[2px] bg-zinc-800/10 shadow-lg shadow-zinc-300 hover:scale-110 duration-500 cursor-pointer gap-y-4 " dir='rtl'>
                <figure>
                    <img src={imageSrc} alt="Pic" />
                </figure>
                <div className="card-body gap-y-4">
                    <p className='text-xs text-blue-600 flex flex-row justify-start items-center gap-x-1 w-fit'>
                        <FaCircle className='p-[2px]' />
                        دسته بندی مطلب
                    </p>
                    <h2 className="card-title">{title}</h2>
                    <p className='text-zinc-600'>{content}</p>
                    <div className="justify-end card-actions ">
                        <button className="btn bg-[#4866CF] font-extralight hover:bg-blue-800 text-white text-lg text-start w-full rounded-xl duration-300" dir='rtl'>بیشتر ...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard