"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, setLocalStorageToken, } from "@/redux/features/user/userSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FaChevronDown, FaUser } from "react-icons/fa";
import NavMobile from "./nav-mobile";

const Nav = () => {
  // const { data, status } = useSession();
  const [active, setActive] = useState(false);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [activeColorChange, setActiveColorChange] = useState(false);
  const [navlocaltoken, setnavlocaltoken] = useState(null);
  const dispatch = useDispatch();
  const { FirstName, userProfile, role, status, token, localToken } = useSelector((state: any) => state.userData);

  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setScrollTop(true) : setScrollTop(false);
      window.scrollY > 60 ? setActiveColorChange(true) : setActiveColorChange(false);
    });
  }, [scrollTop]);

  useEffect(() => { console.log("SCROLL TOP"); }, [scrollTop])

  useEffect(() => {
      const locTok = JSON.parse(
        window.sessionStorage.getItem("token") as string
      );
      setnavlocaltoken(locTok);
  }, [dispatch]);

  useEffect(() => {
      dispatch(setLocalStorageToken(navlocaltoken));
      dispatch<any>(fetchUserProfile());
  }, [dispatch, navlocaltoken]);

  const routing = () => {
    if (localToken === null) {
      return "/authorization";
    } else {
      if (role === "Admin") {
        return "/panel/admin/view-users";
      } else {
        return "/panel/user/dashboard";
      }
    }
  };
  const route = routing();
  //^ RETURN
  return (
    <div
      className={`w-full font-thin mx-auto duration-500 top-0 z-[999] font-YekanBakh transition-all sticky mb-3 rounded-xl lg:${activeColorChange && "shadow-md bg-transparent backdrop-blur-[10px] rounded-2xl"} ${scrollTop ? "absolute top-3 w-11/12 rounded-full shadow-md shadow-zinc-400 " : ""}`}
      onMouseLeave={() => (setShowOne(false), setShowTwo(false), setShowThree(false), setShowFour(false))}
    >
      <div className="flex justify-between items-center bg-transparent shadow-md backdrop-blur-[10px] mx-auto px-[10%] h-[5rem] md:h-[5rem] font-thin">
        {/* Mobile */}
        <NavMobile
          active={active}
          setActive={setActive}
          setShowOne={setShowOne}
          setShowTwo={setShowTwo}
          setShowThree={setShowThree}
          setShowFour={setShowFour}
          localToken={token}
          userProfile={userProfile}
          showOne={showOne}
          showTwo={showTwo}
          showThree={showThree}
          showFour={showFour}
        />
        {/* Large Screen */}

        {status === "loading" ? (
          <SkeletonTheme width={140} >
            <Skeleton count={1} className="p-2" baseColor="#4866CF" />
          </SkeletonTheme>
        ) : (
          <Link href={route} className="flex justify-center items-center space-x-2">
            <button className="lg:inline-block hidden bg-gradient-to-r from-blue-500 via-[#4866CF] to-blue-800 px-6 py-3 rounded-2xl text-base text-zinc-100 tracking-tight hover:scale-110 duration-300">
              {!localToken && "ثبت نام / ورود"}
              {localToken && (<p className="flex justify-between items-center"> {FirstName} {userProfile.surname}  <FaUser className="ml-3" /> </p>)}
              {!FirstName && localToken && (
                <Skeleton width={100} baseColor="#4866CF" className="flex justify-center space-x-2 items-center" />
              )}
            </button>
          </Link>
        )}

        <div className="lg:flex gap-6 hidden">
          <ul className="z-10 lg:flex justify-center items-center gap-10 hidden pr-6 text-zinc-200">
            <li className="bg-blue-950 backdrop-blur-md px-6 py-3 rounded-2xl text-white hover:scale-110 duration-300">
              <button>دانلود کاتالوگ</button>
            </li>
            {/* services */}
            <div className="flex flex-col" onMouseEnter={() => (setShowTwo(true), setShowOne(false), setShowThree(false), setShowFour(false))}>
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <FaChevronDown className="text-sm text-zinc-500 translate-y-1" />
                </span>
                <li onMouseEnter={() => setShowTwo(true)} className="font-semibold text-[14px] text-zinc-700 hover:text-[#4866CF]" >
                  خدمات ما
                </li>
              </div>

              {showTwo && (
                <div>
                  <ul className="lg:top-[55px] text-right z-10 absolute flex flex-col gap-6 bg-white backdrop-blur-sm mt-2 px-4 py-5 border-b-[#4866CF] border-b-8 rounded-2xl text-2xl text-zinc-700 -translate-x-5 list-none navUL" onMouseEnter={() => setShowTwo(true)}  >
                    <Link href="/our-services/web-application">
                      <p className="pt-1 text-sm hover:text-[#4866CF] duration-300">طراحی وب اپلیکیشن</p>
                    </Link>
                    <Link href="/our-services/website">
                      <p className="pt-1 text-sm hover:text-[#4866CF] duration-300">طراحی سایت</p>
                    </Link>
                    <Link href="/our-services/hardwares">
                      <p className="text-sm hover:text-[#4866CF] duration-300">نامین قطعات کامپیوتری</p>
                    </Link>
                    <Link href="/our-services/graphic-design">
                      <p className="pb-2 text-sm hover:text-[#4866CF] duration-300">طراحی گرافیک</p>
                    </Link>
                    <Link href="/our-services/government-learning">
                      <p className="pb-2 text-sm hover:text-[#4866CF] duration-300">آموزش کارکنان دولت</p>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            {/* weblog */}
            <div className="flex flex-col justify-center items-end" onMouseEnter={() => (setShowFour(true), setShowOne(false), setShowTwo(false), setShowThree(false))}  >
              <div className="flex gap-2 hover:text-[#4866CF] cursor-pointer">
                <span>
                  {/* <FaChevronDown className="text-sm text-zinc-500 translate-y-1" /> */}
                </span>
                <Link href="/blog" className={`font-semibold text-[14px] text-zinc-700 hover:text-blue-800`}>وبلاگ</Link>
              </div>

              {showFour && (
                <React.Fragment>
                  {/* <ul className="lg:top-[55px] text-right z-10 absolute flex flex-col gap-6 bg-white backdrop-blur-[15px] mt-2 px-4 py-5 border-b-[#4866CF] border-b-8 rounded-2xl text-2xl text-zinc-700 translate-x-8 list-none navUL" onMouseLeave={() => setShowFour(false)}  >
                    <Link href="/weblog/back-end ">
                      <li className="pt-1 text-sm hover:text-[#4866CF] duration-300">بک اند</li>
                    </Link>
                    <Link href="/weblog/front-end">
                      <li className="text-sm hover:text-[#4866CF] duration-300">فرانت اند</li>
                    </Link>
                    <Link href="/weblog/accounting">
                      <li className="text-sm hover:text-[#4866CF] duration-300">حسابداری</li>
                    </Link>
                    <Link href="/weblog/digital-marketing">
                      <li className="pb-2 rounded-b-lg text-sm hover:text-[#4866CF] duration-300">
                        دیجیتال مارکتینگ
                      </li>
                    </Link>
                  </ul> */}
                </React.Fragment>
              )}
            </div>
            {/* about */}
            <li
              className="flex flex-col"
              onMouseEnter={() => (
                setShowThree(true),
                setShowOne(false),
                setShowTwo(false),
                setShowFour(false)
              )}
            >
              <div className="flex gap-2 hover:text-[#4866CF] cursor-default">
                <span>
                  <FaChevronDown className="text-sm text-zinc-500 translate-y-1" />
                </span>
                <span className="font-semibold text-[14px] text-zinc-700 hover:text-blue-800 cursor-pointer">درباره ما</span>
              </div>
              {showThree && (
                <React.Fragment>
                  <ul className="lg:top-[55px] text-right z-10 absolute flex flex-col gap-6 bg-white backdrop-blur-[15px] mt-2 px-4 py-5 border-b-[#4866CF] border-b-8 rounded-2xl text-2xl text-zinc-700 list-none navUL"
                    onMouseLeave={() => setShowThree(false)}  >
                    <Link href="/certificates">
                      <p className="pt-2 text-sm hover:text-[#4866CF] duration-300">مجوزها</p>
                    </Link>
                    <Link href="/contact-us">
                      <p className="text-sm hover:text-[#4866CF] duration-300">تماس با ما</p>
                    </Link>
                  </ul>
                </React.Fragment>
              )}
            </li>
          </ul>
          <Link href="/">
            <Image src="/logo.svg" alt="kz-logo" width={130} height={44.74} quality={100} priority />
          </Link>
        </div>

        <Link href="/" className="lg:hidden">
          <Image src="/logo.svg" alt="kz-logo" width={130} height={44.74} quality={100} priority />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
