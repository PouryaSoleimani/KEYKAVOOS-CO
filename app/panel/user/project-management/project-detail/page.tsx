/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// ^ PROJECT MANAGEMENT ==> ALL PROJECTS ==> PROJECTS DETAILS 
import { getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import { getOrderDetail, getProjectDetail } from "@/utils/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImBackward, ImBackward2 } from "react-icons/im";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import 'animate.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProjectDetailNav = ["مشاوره", "ثبت سفارش", "دریافت فایل Brief", "پروپوزال", "تهیه زیرساخت", "طراحی وب", "تحویل وب",];

//^ COMPONENT
function ProjectDetail() {
  const router = useRouter();
  const { token, localUserId } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<any>([]);
  const dispatch = useDispatch();
  const params = useSearchParams();
  const id = params.get("id");
  const [rejection, setRejection] = useState({ isRejected: false, rejection_reason: "", });
  const [projectDetailStatus, setProjectDetailStatus] = useState({ loading: false, error: "", });


  useEffect(() => { dispatch(getIdFromLocal()); dispatch(getTokenFromLocal()); }, []);
  useEffect(() => { getProjectDetail(token, id, setProjectDetail); }, []);

  const projectCurrentState = projectDetail.status;

  const returnStatus = (item: string) => {
    if (projectCurrentState) {
      if (item === projectCurrentState) {
        return item;
      } else {
        return "...";
      }
    } else {
      return "وضعیتی یافت نشد.";
    }
  };

  return (
    // <div className="relative">
    //   <div className="flex justify-end w-full text-xl cursor-pointer absolute -top-12" onClick={() => router.back()} >
    //     <div className="bg-white rounded-lg p-2 hover:bg-[#4866CF] hover:text-white duration-300">
    //       <IoArrowBack />
    //     </div>
    //   </div>

    //   <div className="mt-10 lg:mt-0">
    //     {projectDetail ? (
    //       <div className="flex flex-col gap-5 bg-white rounded-lg py-8 animate__animated animate__pulse">
    //         <div className="grid grid-cols-6 text-center tracking-tight">
    //           <p className="font-light py-1 text-zinc-800">ID پروژه</p>
    //           <p className="font-light py-1 text-zinc-800">عنوان  پروژه</p>
    //           <p className="font-light py-1 text-zinc-800">مالک  پروژه</p>
    //           <p className="font-light py-1 text-zinc-800">ارزش  پروژه</p>
    //           <p className="font-light py-1 text-zinc-800">اولویت  پروژه</p>
    //           <p className="font-light py-1 text-zinc-800">وضعیت  پروژه</p>
    //         </div>

    //         <div className="grid grid-cols-6 text-center py-3 bg-[#eaeff6] mx-5 rounded-[4px] "  >
    //           <p className="translate-x-4">{projectDetail.id}</p>
    //           <p>{projectDetail.title}</p>
    //           <p>{projectDetail.register_user?.name.toString()} {projectDetail.register_user?.surname.toString()} </p>
    //           <p>{projectDetail.price ? `${projectDetail.price} تومان` : "-"} </p>
    //           <p>{projectDetail.priority === "high" ? "زیاد" : projectDetail.priority === "low" ? "کم" : "-"}</p>
    //           <p className="-translate-x-4">{projectDetail.status == "processing" ? <p className="text-blue-600">در حال بررسی</p> : projectDetail.status == "verified" ? <p className="text-emerald-600">تایید شده</p> : projectDetail.status == "notVerified" ? <p className="text-red-600">رد شده</p> : "..."}</p>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className="flex flex-col gap-5 bg-white rounded-lg py-8">
    //         <div className="flex items-center justify-center text-center py-3 bg-[#eaeff6] mx-5 rounded-[4px]">
    //           <p className="w-full mx-6 bg-red-100 text-red-700">پروژه ای یافت نشد</p>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div>
      {/* //^ PROGRESS BAR  */}
      <ul className="steps mx-auto my-16 w-full" dir="ltr">
        <li className="step  text-xs tracking-tighter  step-primary">تکمیل سفارش</li>
        <li className="step  text-xs tracking-tighter  step-primary">واریز پیش پرداخت</li>
        <li className="step  text-xs tracking-tighter  step-primary">بررسی نیاز های پروژه</li>
        <li className="step  text-xs tracking-tighter  step-primary">کدنویسی بک اند</li>
        <li className="step  text-xs tracking-tighter  step-primary">ساخت دیتابیس</li>
        <li className="step  text-xs tracking-tighter  step-primary">طراحی رابط کاربری</li>
        <li className="step  text-xs tracking-tighter  step-primary">کدنویسی فرانت اند</li>
        <li className="step  text-xs tracking-tighter  step-primary">ایجاد درگاه ها و لینک ها</li>
        <li className="step  text-xs tracking-tighter  step-primary">کنترل کیفی نهایی</li>
        <li className="step  text-xs tracking-tighter  step-primary">تحویل وب اپلیکیشن</li>
      </ul>

      <div className="w-[210px] z-10">
        <div className="bg-[#4866CE] text-white rounded-t-lg relative right-1 top-1 py-2 px-2 flex justify-start items-center gap-2">
          <span>شماره درخواست:</span>
          <p className="font-faNum">{id}</p>
        </div>
      </div>
      <div className="py-[3%] w-full shadow mx-auto bg-white rounded-lg px-[3%] grid grid-cols-1 gap-5 relative">

        <div className="flex justify-end text-xl cursor-pointer absolute -top-12 left-0">
          <Link href="/panel/user/project-management" className="bg-white rounded-lg p-3 hover:bg-[#4866CF] hover:text-white duration-300"   >
            <IoArrowBack />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <p className="tracking-tight">عنوان پروژه : </p>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                  {projectDetail?.title ? projectDetail?.title : "-"}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="tracking-tight">نوع پروژه : </label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                  {projectDetail?.plan?.title ? projectDetail?.plan?.title : "-"}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="tracking-tight">پلن انتخابی : </label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                  {projectDetail?.plan?.title ? projectDetail?.plan?.title : "-"}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="tracking-tight">بودجه مورد نظر : </label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-4 rounded-[4px] font-faNum">
                  {projectDetail?.budget_cost ? Number(projectDetail?.budget_cost).toLocaleString() : ""}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="tracking-tight">سایت مشابه مورد نظر شما : </label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-4 rounded-[4px] text-xl tracking-wide">
                {projectDetail?.site_lookslikes ? (
                  projectDetail?.site_lookslikes.map((item: any) => (
                    <p key={item.id} className="text-zinc-500 p-1 rounded-xs"  >
                      {item ? item.title : "ثبت نشده"}
                    </p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label className="tracking-tight">توضیحات پروژه : </label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                {projectDetail?.description}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="tracking-tight">قالب و افزونه های مورد نیاز  : </label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                {projectDetail?.Templates ? (
                  projectDetail?.Templates.map((item: any, index: any) => (
                    <p key={item.id} className="bg-[#4866CE] text-white p-1 rounded-xs"  >
                      {item.template_name ? item.template_name : "تمپلیتی توسط کاربر ثبت نشده است"}
                    </p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="tracking-tight">رنگ سازمانی : </label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                {projectDetail?.org_colors ? (projectDetail?.org_colors.map((item: any) => (
                  <p key={item.id} className="text-zinc-500 w-fit text-xs">
                    {item.color ? item.color : "ثبت نشده"}
                  </p>
                ))
                ) : (
                  <p dir="rtl">-</p>
                )}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-[#4866CE] text-white rounded-lg p-4 flex justify-start items-center gap-3 w-[50%]">
              <label className="whitespace-nowrap">
                {rejection.isRejected ? "شماره درخواست:" : "مبلغ نهایی:"}
              </label>
              {rejection.isRejected && (
                <div className="font-faNum bg-[#4866CE] text-white">{id}</div>
              )}
              {!rejection.isRejected && (
                <div className="font-faNum bg-[#4866CE] text-white">
                  {projectDetail?.budget_cost ? Number(projectDetail?.budget_cost).toLocaleString() : ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
