import Image from "next/image";
import React from "react";

type TechnologyCardProps = {
  technologyInfo: {
    id: number;
    title: string;
    imgUrl: string;
    technologies: { id: number; techImgUrl: string[]; tech: string[]; }[];
  };
};

//^ COMPONENT
function TechnologyCard({ technologyInfo }: TechnologyCardProps) {
  return (
    <div className="bg-white h-[400px] md:max-lg:h-[300px] w-[260px] lg:w-full mx-auto shadow-md hover:shadow-xl rounded-[15px] flex flex-col items-center gap-3 hover:scale-105 duration-300 cursor-pointer mb-6 ">
      <div className="bg-[#4866CF] text-center text-white rounded-t-lg font-bold w-full p-2 text-[20px] tracking-tighter mb-3">
        {technologyInfo.title}
      </div>
      <Image src={technologyInfo.imgUrl} alt={technologyInfo.title} className="w-16 h-16" />
      <div
        style={{
          borderTop: "2.5px solid",
          borderImage:
            "linear-gradient(270deg,  #EAEFF6 0%, #4866CF 50%,#EAEFF6 100%) 1",
          width: "80%",
          height: "2.5px",
        }}
      ></div>
      <ul className="flex flex-col items-center w-full gap-5 py-4">
        {technologyInfo.technologies.map(
          (tech: { id: number; techImgUrl: string[]; tech: string[] }, index) => (
            <li key={tech.id} className="flex flex-row items-center gap-3 w-full px-6 py-2 text-center">
              {tech.techImgUrl.map((url, index) => (
                <Image key={index} src={url} alt={""} width={34} height={34} />
              ))}
              <span className="text-xl tracking-tighter text-zinc-900">
                {tech.tech.length > 1 ? tech.tech.join(",") : tech.tech}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default TechnologyCard;
