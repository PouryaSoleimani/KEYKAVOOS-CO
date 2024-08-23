import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./nav.module.css";
import Skeleton from "react-loading-skeleton";
type NavMobileProps = {
  localToken: any;
  userProfile: any;
  active: boolean;
  showOne: boolean;
  showTwo: boolean;
  showThree: boolean;
  showFour: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOne: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setShowThree: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFour: React.Dispatch<React.SetStateAction<boolean>>;
};
const NavMobile = ({
  localToken,
  userProfile,
  active,
  setActive,
  setShowFour,
  setShowOne,
  setShowThree,
  setShowTwo,
  showOne,
  showFour,
  showThree,
  showTwo,
}: NavMobileProps) => {
  return (
    <div className="lg:hidden">
      <Image
        src={active ? "/cross.jpg" : "/bar.svg"}
        width={active ? 25 : 40}
        height={active ? 25 : 40}
        alt="info"
        onClick={() => (
          setActive(!active),
          setShowOne(false),
          setShowTwo(false),
          setShowThree(false),
          setShowFour(false)
        )}
        className={`z-20 relative ${active ? "-top-1" : "top-0"}`}
      />
      <ul
        className={`w-full flex flex-col justify-center items-end list-none border-b-[10px] border-b-indigo-500 ${
          active
            ? "absolute top-0 left-0 w-full p-4 bg-white z-10 rounded-xl"
            : "hidden"
        }`}
      >
        <li className={style.list}>
          {showOne && (
            <ul className="list-none left-64 bg-white rounded-2xl border-b-8 border-b-[#4866CF] text-right flex flex-col z-10 absolute top-12 gap-4 w-[30%] px-4 py-3">
              <Link href="/weblog/back-end ">
                <li className="text-sm font-semibold">بک اند</li>
              </Link>
              <Link href="/weblog/front-end">
                <li className="text-sm font-semibold">فرانت اند</li>
              </Link>
              <Link href="/weblog/accounting">
                <li className="text-sm font-semibold">حسابداری</li>
              </Link>
              <Link href="/weblog/digital-marketing">
                <li className="text-xs rounded-b-lg font-semibold whitespace-nowrap px-1">
                  دیجیتال مارکتینگ
                </li>
              </Link>
            </ul>
          )}
          <button className="bg-[#4866CF] p-2 rounded-lg text-white relative -left-7">
            <Link
              href={
                !localToken
                  ? "/authorization"
                  : userProfile.UserType === "Admin" ||
                    userProfile.UserType === "GeneralAdmin"
                  ? "/panel/main-admin/profile"
                  : userProfile.UserType === "User"
                  ? "/panel"
                  : userProfile.UserType === "Employer"
                  ? "/panel/employer-panel"
                  : ""
              }
            >
              {!localToken && "ثبت نام / ورود"}
              {!userProfile?.FirstName &&
                !userProfile?.LastName &&
                localToken && <Skeleton width={100} baseColor="#4866CF" />}
              {userProfile?.FirstName &&
                userProfile?.LastName &&
                localToken &&
                `${userProfile.FirstName} ${userProfile.LastName}`}
            </Link>
          </button>
          <span>
            <Image
              src="/arrow.png"
              width={22}
              height={22}
              alt="arrow"
              className={`${showOne ? "rotate-90" : "rotate-180"}`}
              onClick={() => (
                setShowOne(!showOne),
                setShowTwo(false),
                setShowThree(false),
                setShowFour(false)
              )}
            />
          </span>
          <span
            className="font-bold text-lg"
            onClick={() => (
              setShowOne(!showOne),
              setShowTwo(false),
              setShowThree(false),
              setShowFour(false)
            )}
          >
            وبلاگ
          </span>
        </li>
        <li className={style.list}>
          {showTwo && (
            <ul className="list-none absolute rounded-2xl border-b-8 left-0 px-4 gap-3 w-full bg-white border-b-[#4866CF] text-right flex flex-col top-20 z-10 py-3">
              <Link href="/certificates">
                <li className="text-sm font-semibold">مجوزها</li>
              </Link>
              <Link href="/contact-us">
                <li className="text-sm font-semibold">تماس با ما</li>
              </Link>
            </ul>
          )}
          <span>
            <Image
              src="/arrow.png"
              width={22}
              height={22}
              alt="arrow"
              onClick={() => (
                setShowTwo(!showTwo),
                setShowOne(false),
                setShowThree(false),
                setShowFour(false)
              )}
              className={`${showTwo ? "rotate-90" : "rotate-180"}`}
            />
          </span>
          <span
            className="text-lg font-bold"
            onClick={() => (
              setShowTwo(!showTwo),
              setShowOne(false),
              setShowThree(false),
              setShowFour(false)
            )}
          >
            درباره ما
          </span>
        </li>
        <li className={style.list}>
          <Link href="/services" className="text-lg font-bold">
            خدمات ما
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
