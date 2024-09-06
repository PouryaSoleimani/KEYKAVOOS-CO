import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

type TechnologyCardProps = {
  technologyInfo: { id: number; title: string; imgUrl: string; technologies: { id: number; techImgUrl: string[]; tech: string[]; }[]; };
};

//^ COMPONENT
function TechnologyCard({ technologyInfo }: TechnologyCardProps) {

  useEffect(() => { AOS.init(); }, [])


  return (
    <div className="flex flex-col items-center gap-3 bg-transparent shadow-md shadow-zinc-700 hover:shadow-xl backdrop-blur-[2px] mx-auto mb-6 rounded-[15px] w-[260px] lg:w-full h-[400px] md:max-lg:h-[300px] duration-200 cursor-pointer hover:scale-105" >
      <div className="bg-[#4866CF] mb-3 p-2 rounded-t-lg w-full font-bold text-[20px] text-center text-white tracking-tighter">
        {technologyInfo.title}
      </div>
      <Image src={technologyInfo.imgUrl} alt={technologyInfo.title} className="w-16 h-16" />
      <div
        style={{ borderTop: "2.5px solid", borderImage: "linear-gradient(270deg,  #EAEFF6 0%, #4866CF 50%,#EAEFF6 100%) 1", width: "80%", height: "2.5px", }}
      ></div>
      <ul className="flex flex-col items-center gap-5 py-4 w-full" data-aos="zoom-in" data-aos-duration="1500">
        {technologyInfo.technologies.map(
          (tech: { id: number; techImgUrl: string[]; tech: string[] }, index) => (
            <li key={tech.id} className="flex flex-row items-center gap-3 px-6 py-2 w-full text-center" >
              {tech.techImgUrl.map((url, index) => (
                <Image key={index} src={url} alt={""} width={34} height={34} />
              ))}
              <span className="text-xl text-zinc-900 tracking-tighter">
                {tech.tech.length > 1 ? tech.tech.join(" - ") : tech.tech}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default TechnologyCard;
