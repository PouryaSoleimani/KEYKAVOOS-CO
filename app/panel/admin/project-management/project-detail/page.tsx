"use client";
import FileUpload from "@/app/panel/user/submit-order/components/file-upload";
import {
  confirmProjectByAdmin,
  getProjectDetail,
  rejectProject,
} from "@/utils/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";

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
  const [rejection, setRejection] = useState({
    isRejected: false,
    rejection_reason: "",
  });
  const params = useSearchParams();
  const id = params.get("id");
  const { token, userProfile } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailType>([]);
  const [projectDetailStatus, setProjectDetailStatus] = useState({
    loading: false,
    error: "",
  });

  useEffect(() => {
    getProjectDetail(token, id, setProjectDetail, setProjectDetailStatus);
  }, []);

  return (
    <div>
      <div className="w-[210px] z-10">
        <div className="bg-[#4866CE] text-white rounded-t-lg relative right-1 top-1 py-2 px-2 flex justify-start items-center gap-2">
          <span>شماره درخواست:</span>
          <p className="font-faNum">{id}</p>
        </div>
      </div>
      <div className="py-[3%] w-full shadow mx-auto bg-white rounded-xl px-[3%] grid grid-cols-1 gap-5 relative">
        <div className="flex justify-end text-xl cursor-pointer absolute -top-12 left-0">
          <Link
            href="/panel/admin/project-management"
            className="bg-white rounded-full p-2"
          >
            <IoArrowBack />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <p>عنوان پروژه:</p>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                  {projectDetail.title ? projectDetail.title : "-"}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">نوع پروژه:</label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                  {projectDetail.plan?.title ? projectDetail.plan?.title : "-"}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="">پلن انتخابی:</label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                  {projectDetail.plan?.title ? projectDetail.plan?.title : "-"}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">بودجه مورد نظر:</label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-2 rounded-[4px] font-faNum">
                  {projectDetail.budget_cost
                    ? Number(projectDetail.budget_cost).toLocaleString()
                    : ""}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">سایت مشابه مورد نظر شماست:</label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                {projectDetail.Similar_Site ? (
                  projectDetail.Similar_Site.map((item, index) => (
                    <p
                      key={item.id}
                      className="bg-[#4866CE] text-white p-1 rounded-sm"
                    >
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
              <label>توضیحات پروژه:</label>
              {projectDetailStatus.loading ? (
                <SkeletonTheme>
                  <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : (
                <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                  {projectDetail.description}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">قالب و افزونه های مورد نیاز:</label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                {projectDetail.Templates ? (
                  projectDetail.Templates.map((item, index) => (
                    <p
                      key={item.id}
                      className="bg-[#4866CE] text-white p-1 rounded-sm"
                    >
                      {item.template_name
                        ? item.template_name
                        : "تمپلیتی توسط کاربر ثبت نشده است"}
                    </p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">رنگ سازمانی:</label>
            {projectDetailStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : (
              <div className="bg-[#EAEFF6] p-2 rounded-[4px]">
                {projectDetail.Colors ? (
                  projectDetail.Colors.map((item, index) => (
                    <p key={item.id}>
                      {item.color
                        ? item.color
                        : "رنگی توسط کاربر ثبت نشده است."}
                    </p>
                  ))
                ) : (
                  <p dir="rtl">-</p>
                )}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2">
            <div className="bg-[#4866CE] text-white rounded-lg p-1 flex justify-start items-center gap-2 w-[40%]">
              <label className="whitespace-nowrap">
                {rejection.isRejected ? "شماره درخواست:" : "مبلغ نهایی:"}
              </label>
              {rejection.isRejected && (
                <div className="font-faNum bg-[#4866CE] text-white">{id}</div>
              )}
              {!rejection.isRejected && (
                <div className="font-faNum bg-[#4866CE] text-white">
                  {projectDetail.budget_cost
                    ? Number(projectDetail.budget_cost).toLocaleString()
                    : ""}
                </div>
              )}
            </div>
            {projectDetail.status === "processing" && (
              <div className="w-full flex justify-end items-center gap-3">
                <button
                  className="bg-[#EAEFF6] text-[#4866CE] rounded-lg py-1 px-3"
                  onClick={() =>
                    setRejection((last) => ({ ...last, isRejected: true }))
                  }
                >
                  رد پروژه
                </button>
                <button
                  className="bg-[#4866CE] text-white rounded-lg p-1"
                  onClick={() => confirmProjectByAdmin(token, Number(id))}
                >
                  تایید پروژه
                </button>
              </div>
            )}
          </div>
          {rejection.isRejected && (
            <div className="relative">
              <textarea
                className="p-[1%] bg-[#EAEFF6] rounded-[4px] w-full placeholder:text-[#4866CE]"
                rows={4}
                placeholder="علت رد پروژه"
                onChange={(e) =>
                  setRejection((last) => ({
                    ...last,
                    rejection_reason: e.target.value,
                  }))
                }
                value={rejection.rejection_reason}
              ></textarea>
              <button
                className="bg-[#4866CE] text-white absolute left-2 bottom-5 rounded-[4px] p-2"
                onClick={() =>
                  rejectProject(
                    token,
                    rejection.rejection_reason,
                    Number(id),
                    userProfile.id
                  )
                }
              >
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
