import React from 'react'
interface props { imageSrc: string, title: string, content: string }


const BlogCard: React.FC<props> = ({ imageSrc, title, content }) => {

    console.log(imageSrc, title, content)
    return (
        <div>
            <div className="w-72 card backdrop-blur-[2px] bg-zinc-800/10 shadow-lg shadow-zinc-300 hover:scale-110 duration-500 cursor-pointer gap-y-4 " dir='rtl'>
                <figure>
                    <img src={imageSrc} alt="car!" />
                </figure>
                <div className="card-body gap-y-5">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                    <div className="justify-end card-actions">
                        <button className="btn bg-[#4866CF] font-extralight hover:bg-blue-800 text-white text-lg text-start w-full rounded-xl duration-300" dir='rtl'>بیشتر ...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard