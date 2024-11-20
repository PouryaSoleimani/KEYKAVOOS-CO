import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./nav.module.css";
import Skeleton from "react-loading-skeleton";
import { CgChevronLeft } from "react-icons/cg";
type NavMobileProps = { localToken: any; userProfile: any; active: boolean; showOne: boolean; showTwo: boolean; showThree: boolean; showFour: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>>; setShowOne: React.Dispatch<React.SetStateAction<boolean>>; setShowTwo: React.Dispatch<React.SetStateAction<boolean>>; setShowThree: React.Dispatch<React.SetStateAction<boolean>>; setShowFour: React.Dispatch<React.SetStateAction<boolean>>; };

// ^  COMPONENT
const NavMobile = ({ localToken, userProfile, active, setActive, setShowFour, setShowOne, setShowThree, setShowTwo, showOne, showFour, showThree, showTwo, }: NavMobileProps) => {

  return (
    <div className="lg:hidden">
      <Image src={active ? "/cross.jpg" : "/bar.svg"} width={active ? 25 : 40} height={active ? 25 : 40} alt="info" onClick={() => (setActive(!active), setShowOne(false), setShowTwo(false), setShowThree(false), setShowFour(false))} className={`z-20 relative ${active ? "-top-1" : "top-0"}`} />
      <ul className={`w-full flex flex-col space-y-16 justify-center items-end list-none border-b-[10px] border-b-indigo-500 ${active ? "absolute top-0 left-0 w-full p-4 bg-white z-10 rounded-xl" : "hidden"}`}>
        <div className={style.list}>
          {showOne && (<Link href="/blog" className="list-none left-64 bg-white rounded-2xl border-b-8 border-b-[#4866CF] text-right flex flex-col z-10 absolute top-12 gap-4 w-[30%] px-4 py-3"></Link>)}
          {/*//! SIGN UP */}
          <Link
            className="bg-[#4866CF] p-2 rounded-lg text-white absolute left-5 bottom-5 tracking-tight px-8 py-3 hover:bg-blue-900 duration-300"
            href={!localToken ? "/authorization" : userProfile.UserType === "Admin" || userProfile.UserType === "GeneralAdmin" ? "/panel/main-admin/profile" : userProfile.UserType === "User" ? "/panel" : userProfile.UserType === "Employer" ? "/panel/employer-panel" : ""}
          >
            {!localToken && "ثبت نام / ورود"}
            {!userProfile?.FirstName && !userProfile?.LastName && localToken && <Skeleton width={100} baseColor="#4866CF" />}
            {userProfile?.FirstName && userProfile?.LastName && localToken && `${userProfile.FirstName} ${userProfile.LastName}`}
          </Link>
          {/*//^ BLOG */}
          <Link href='/blog' className="font-black text-lg hover:bg-zinc-400/50 pl-12 pr-4 text-start py-2 rounded-md translate-x-2" > وبلاگ  </Link>
        </div>
        {/*//* ABOUT-----US */}
        <div className="dropdown dropdown-left translate-x-3">
          <div tabIndex={0} role="button" className="btn text-lg">
            <CgChevronLeft className="w-8 h-8" />
            درباره ما
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg mr-4 z-[1] gap-y-5 w-32 xsm:w-64 p-2 shadow-md shadow-zinc-500 border-t-2 border-[#4866CF]">
            <Link href='/certificates' className="sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">مجوزها</Link>
            <Link href='/contact-us' className="sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">تماس با ما</Link>
            <Link href='/about-us' className="sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">درباره ما</Link>
          </ul>
        </div>
        {/*//& OUR----SERVICES */}
        <div className="dropdown dropdown-left translate-x-3">
          <div tabIndex={0} role="button" className="btn text-lg">
            <CgChevronLeft className="w-8 h-8" />
            خدمات ما
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg mr-4 z-[1] gap-y-5 w-44 xsm:w-64 translate-x-2 xsm:translate-x-0 xsm:-translate-y-0 p-2 shadow-md shadow-zinc-500 border-t-2 border-[#4866CF]">
            <Link href='/our-services/web-application' className="text-md sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">طراحی وب اپلیکیشن</Link>
            <Link href='/our-services/website' className="text-md sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">طراحی سایت</Link>
            <Link href='/our-services/hardwares' className="text-md sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">تامین قطعات کامپیوتری</Link>
            <Link href='/our-services/graphic-design' className="text-md sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">طراحی گرافیک</Link>
            <Link href='/our-services/government-learning' className="text-md sm:text-lg font-semibold text-end px-4 py-2 hover:bg-zinc-300/80 rounded-md text-zinc-700">آموزش کارکنان دولت</Link>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default NavMobile;
