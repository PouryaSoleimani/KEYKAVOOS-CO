"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarpicbg from "../../public/Panel/sidebarpicbg.svg";
import Logo from "@/app/authorization/components/logo";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type PanelSidebarProps = {
  status: string;
  sideOptions: SideOptionsProps[];
};
type SideOptionsProps = {
  text: string;
  imgSrc: string;
  address: string;
  path: string | string[];
};

const PanelSidebar = ({ sideOptions, status }: PanelSidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="w-[260px] font-YekanBakh py-6 border-l-[0.3px] relative h-full">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Image src={sidebarpicbg} alt="sidebarbg" height={605} />
        <div className="absolute top-40 flex flex-col gap-10 pr-2 w-full">
          {sideOptions.map((item) => (
            <Link
              href={item.address}
              key={item.text}
              className="flex flex-row items-center gap-7 whitespace-nowrap"
            >
              <Image src={item.imgSrc} alt={item.text} width={30} height={30} />
              <p
                className={`text-[23px] font-extrabold w-full ${
                  item?.address === pathname || item.path.includes(pathname)
                    ? "text-[#4866CF] border-l-4 border-l-[#4866CF]"
                    : " text-[#68707A]"
                }`}
              >
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
