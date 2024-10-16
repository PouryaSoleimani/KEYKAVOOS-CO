"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarpicbg from "../../public/Panel/sidebarpicbg.svg";
import Logo from "@/app/authorization/components/logo";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
type PanelSidebarProps = { status: string; sideOptions: SideOptionsProps[]; };
type SideOptionsProps = { text: string; imgSrc: string; address: string; path: string | string[]; };


//^ COMPONENT 
const PanelSidebar = ({ sideOptions, status }: PanelSidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="w-[245px] font-YekanBakh py-6 border-l-[0.3px] relative h-full">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Image src={sidebarpicbg} alt="sidebarbg" height={660} className="overflow-hidden" />
        <div className="absolute top-32 flex flex-col gap-8 pt-[3rem] pr-2 w-full right-[8px]">
          {sideOptions.map((item) => (
            <Link href={item.address.toString()} key={item.text} className="flex flex-row items-center gap-5 whitespace-nowrap" >
              <Image src={item.imgSrc} alt={item.text} width={26} height={26} className="-translate-x-1" />
              <p className={`hover:text-blue-800 hover:scale-105 duration-300 text-[17px] px-2 tracking-tighter -translate-x-1 w-[80%] ${item?.address === pathname || item.path.includes(pathname) ? "text-[#4866CF] border-l-4 border-l-[#4866CF] bg-blue-50 px-2 py-1.5 rounded-r-md" : " text-[#68707A]"}`} >
                {status !== "success" ? (
                  <SkeletonTheme>
                    <Skeleton count={1} width={150} baseColor="#EAEFF6" />
                  </SkeletonTheme>
                ) : (
                  item.text
                )}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PanelSidebar;
