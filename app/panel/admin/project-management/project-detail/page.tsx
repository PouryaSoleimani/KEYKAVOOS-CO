/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FileUpload from "@/app/panel/user/submit-order/components/file-upload";
import { confirmProjectByAdmin, getProjectDetail, rejectProject, } from "@/utils/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import { ImInsertTemplate } from "react-icons/im";

export type ProjectDetailType = {
  title: string;
  type: string;
  plan: { title: string };
  budget_cost: string;
  Similar_Site: { id: number; url: string }[];
  description: string;
  Templates: { id: number; template_name: string }[];
  Colors: { id: number; color: string }[];
  status?: string;
};

function ProjectDetail() {
  const [rejection, setRejection] = useState({ isRejected: false, rejection_reason: "", });
  const params = useSearchParams();
  const id = params.get("id");
  const { token, userProfile } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailType>();
  const [projectDetailStatus, setProjectDetailStatus] = useState({ loading: false, error: "", });
  const [BUDGET, setBUDGET] = useState<any>(null)
  useEffect(() => { getProjectDetail(token, id, setProjectDetail, setProjectDetailStatus); }, []);
  useEffect(() => {
    if (projectDetail !== null) {
      setBUDGET(projectDetail?.budget_cost.toLocaleString());
      console.log(" BUDGET ===> ", BUDGET)
    }
  }, [projectDetail])

  return (
    <div>
      <div className="w-[210px] z-10">
        <div className="bg-[#4866CE] text-white rounded-t-lg relative right-1 top-1 py-2 px-2 flex justify-start items-center gap-2">
          <span>شماره درخواست:</span>
          <p className="font-faNum">{id}</p>
        </div>
      </div>
      <div className="py-[3%] w-full shadow mx-auto bg-white rounded-lg px-[3%] grid grid-cols-1 gap-5 relative">

        <div className="flex justify-end text-xl cursor-pointer absolute -top-12 left-0">
          <Link href="/panel/admin/project-management" className="bg-white rounded-lg p-3 hover:bg-[#4866CF] hover:text-white duration-300"   >
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
              <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                {projectDetail?.Similar_Site ? (
                  projectDetail?.Similar_Site.map((item, index) => (
                    <p key={item.id} className="bg-[#4866CE] text-white p-1 rounded-sm"  >
                      {item.url ? item.url : "سایتی توسط کاربر ثبت نشده است."}
                    </p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
            )}
          </div>
          <div>
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
                  projectDetail?.Templates.map((item, index) => (
                    <p key={item.id} className="bg-[#4866CE] text-white p-1 rounded-sm"  >
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
                {projectDetail?.Colors ? (
                  projectDetail?.Colors.map((item, index) => (
                    <p key={item.id}>
                      {item.color ? item.color : "رنگی توسط کاربر ثبت نشده است."}
                    </p>
                  ))
                ) : (
                  <p dir="rtl">-</p>
                )}
              </div>
            )}
          </div>
          <div className="">
            <div className="bg-[#4866CE] text-white rounded-lg p-4 gap-2 w-fit flex items-center justify-center leading-2">
              <label className="whitespace-nowrap pr-1 text-xl">
                {rejection.isRejected ? "شماره درخواست:" : "مبلغ نهایی:"}
              </label>
              {rejection.isRejected && (
                <div className="font-faNum bg-[#4866CE] text-white">{id}</div>
              )}
              {!rejection.isRejected && (
                <>
                  <div className="font-faNum bg-[#4866CE] text-white pt-2`">
                    <input type="text" placeholder={`${Number(BUDGET).toLocaleString()} تومان`} className="input input-bordered w-full max-w-xs text-black text-lg" />
                    <button></button>
                  </div>
                </>
              )}
            </div>
            {projectDetail?.status === "processing" && (
              <div className="w-full flex justify-end items-center gap-3">
                <button className="bg-red-800 text-white rounded-lg py-3 px-4 hover:bg-red-600 duration-300" onClick={() => setRejection((last) => ({ ...last, isRejected: true }))}>
                  رد پروژه
                </button>
                <button className="bg-emerald-800 text-white rounded-lg py-3 px-4 hover:bg-emerald-600 duration-500" onClick={() => confirmProjectByAdmin(token, Number(id))}>
                  تایید پروژه
                </button>
              </div>
            )}
          </div>
          {rejection.isRejected && (
            <div className="relative">
              <textarea className="p-[1%] bg-[#EAEFF6] rounded-[4px] w-full placeholder:text-[#4866CE]" rows={4} placeholder="علت رد پروژه" onChange={(e) => setRejection((last) => ({ ...last, rejection_reason: e.target.value, }))} value={rejection.rejection_reason}></textarea>
              <button className="bg-[#4866CE] text-white absolute left-2 bottom-5 rounded-[4px] px-4 py-3 hover:bg-blue-800 duration-500" onClick={() => rejectProject(token, rejection.rejection_reason, Number(id), userProfile.id)} >
                تایید و ارسال به کارفرما
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
