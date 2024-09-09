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
      window.scrollY > 60 ? setActiveColorChange(true) : setActiveColorChange(false);
      window.scrollY > 200 ? setScrollTop(true) : setScrollTop(false);
    });
  });
  useEffect(() => { console.log("SCROLL TOP"); }, [scrollTop])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locTok = JSON.parse(
        window.sessionStorage.getItem("token") as string
      );
      setnavlocaltoken(locTok);
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(setLocalStorageToken(navlocaltoken));
      dispatch<any>(fetchUserProfile());
    }
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
      className={`w-full font-thin mx-auto duration-500 top-0 z-[999] font-YekanBakh transition-all sticky mb-3 rounded-xl lg:${activeColorChange && "shadow-md bg-transparent backdrop-blur-[7px] rounded-2xl"} ${scrollTop ? "absolute top-3 border-zinc-500 w-[95vw] rounded-2xl shadow-md shadow-zinc-950 " : ""}`}
      onMouseLeave={() => (
        setShowOne(false),
        setShowTwo(false),
        setShowThree(false),
        setShowFour(false)
      )}
    >
      <div className="flex justify-between items-center h-[5rem] md:h-[5rem] mx-auto shadow-md px-[10%] bg-transparent backdrop-blur-[10px]  font-thin">
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
          <Link href={route} className="flex items-center justify-center space-x-2">
            <button className="hidden lg:inline-block bg-gradient-to-r from-blue-500 via-[#4866CF] to-blue-800 rounded-2xl text-zinc-100 tracking-tight hover:scale-110 duration-300 py-3 px-6 text-base ">
              {!localToken && "ثبت نام / ورود"}
              {localToken && console.log(localToken)}
              {localToken && (<p className="flex items-center justify-between "> {FirstName} {userProfile.surname}  <FaUser className="ml-3" /> </p>)}
              {!FirstName && localToken && (
                <Skeleton width={100} baseColor="#4866CF" className="flex item-center justify-center space-x-2" />
              )}
            </button>
          </Link>
        )}

        <div className="lg:flex gap-6 hidden">
          <ul className="hidden lg:flex justify-center items-center gap-10 z-10 pr-6 text-zinc-200">
            <li className="bg-blue-950 text-white  backdrop-blur-md py-3 px-6 rounded-2xl hover:scale-110 duration-300">
              <button>دانلود کاتالوگ</button>
            </li>
            {/* services */}
            <li className="flex flex-col" onMouseEnter={() => (setShowTwo(true), setShowOne(false), setShowThree(false), setShowFour(false))}>
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <FaChevronDown className="text-white text-sm translate-y-1" />
                </span>
                <Link href={"/services"} onMouseEnter={() => setShowTwo(true)} className="font-semibold hover:text-[#4866CF] text-[14px]" >
                  خدمات ما
                </Link>
              </div>

              {showTwo && (
                <>
                  <ul className="list-none absolute bg-zinc-900/50 -translate-x-5 lg:top-[55px] backdrop-blur-[15px] rounded-2xl border-b-8 border-b-[#4866CF] px-4 text-2xl py-5 mt-2 text-right flex flex-col gap-6 z-10 " onMouseEnter={() => setShowTwo(true)}  >
                    <Link href="/in-hand">
                      <li className="text-sm pt-1 hover:text-[#4866CF] duration-300 ">طراحی سایت</li>
                    </Link>
                    <Link href="/in-hand">
                      <li className="text-sm hover:text-[#4866CF] duration-300 ">طراحی گرافیک</li>
                    </Link>
                    <Link href="/in-hand">
                      <li className="text-sm pb-2 hover:text-[#4866CF] duration-300">کد نویسی</li>
                    </Link>
                  </ul>
                </>
              )}
            </li>
            {/* weblog */}
            <li className="flex flex-col justify-center items-end" onMouseEnter={() => (setShowFour(true), setShowOne(false), setShowTwo(false), setShowThree(false))}  >
              <div className="flex gap-2 hover:text-[#4866CF] cursor-pointer">
                <span>
                  <FaChevronDown className="text-white text-sm translate-y-1" />
                </span>
                <span className={`font-semibold text-[14px]`}>وبلاگ</span>
              </div>

              {showFour && (
                <React.Fragment>
                  <ul className="list-none absolute bg-zinc-900/50 lg:top-[55px] backdrop-blur-[15px] rounded-2xl border-b-8 translate-x-8 border-b-[#4866CF] px-4 text-2xl py-5 mt-2 text-right flex flex-col gap-6 z-10" onMouseLeave={() => setShowFour(false)}  >
                    <Link href="/weblog/back-end ">
                      <li className="text-sm pt-1 hover:text-[#4866CF] duration-300">بک اند</li>
                    </Link>
                    <Link href="/weblog/front-end">
                      <li className="text-sm hover:text-[#4866CF] duration-300">فرانت اند</li>
                    </Link>
                    <Link href="/weblog/accounting">
                      <li className="text-sm hover:text-[#4866CF] duration-300">حسابداری</li>
                    </Link>
                    <Link href="/weblog/digital-marketing">
                      <li className="text-sm rounded-b-lg pb-2 hover:text-[#4866CF] duration-300">
                        دیجیتال مارکتینگ
                      </li>
                    </Link>
                  </ul>
                </React.Fragment>
              )}
            </li>
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
              <div className="flex gap-2 cursor-default hover:text-[#4866CF]">
                <span>
                  <FaChevronDown className="text-white text-sm translate-y-1" />
                </span>
                <span className="font-semibold text-[14px] cursor-pointer">درباره ما</span>
              </div>
              {showThree && (
                <React.Fragment>
                  <ul className="list-none absolute bg-zinc-900/50 lg:top-[55px] backdrop-blur-[15px] rounded-2xl border-b-8 border-b-[#4866CF] px-4 text-2xl py-5 mt-2 text-right flex flex-col gap-6 z-10"
                    onMouseLeave={() => setShowThree(false)}  >
                    <Link href="/certificates">
                      <li className="text-sm pt-2  hover:text-[#4866CF] duration-300">مجوزها</li>
                    </Link>
                    <Link href="/contact-us">
                      <li className="text-sm  hover:text-[#4866CF] duration-300">تماس با ما</li>
                    </Link>
                  </ul>
                </React.Fragment>
              )}
            </li>
          </ul>
          <Link href="/">
            <Image src="/logo.svg" alt="kz-logo" width={130} height={44.74} quality={100} />
          </Link>
        </div>

        <Link href="/" className="lg:hidden">
          <Image src="/logo.svg" alt="kz-logo" width={130} height={44.74} quality={100} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
