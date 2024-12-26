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
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BiEdit } from "react-icons/bi";
import { space } from "postcss/lib/list";
import toast, { Toaster } from 'react-hot-toast';

const schema = yup.object().shape({
  budget: yup.number().required(),
}).required();

export type ProjectDetailType = {
  title: string;
  type: string;
  plan: { title: string, type_id: string | number };
  budget_cost: string;
  Similar_Site: { id: number; url: string }[];
  description: string;
  Templates: { id: number; template_name: string }[];
  org_colors: string[] | number[]
  Colors: { id: number; color: string }[];
  status?: string;
  plugins: any[]
  site_lookslikes: any[]
};

type Inputs = { budget: number }

function ProjectDetail() {
  const [rejection, setRejection] = useState({ isRejected: false, rejection_reason: "", });
  const params = useSearchParams();
  const id = params.get("id");
  const { token, userProfile } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<ProjectDetailType>();
  const [projectDetailStatus, setProjectDetailStatus] = useState({ loading: false, error: "", });
  const [BUDGET, setBUDGET] = useState<any>("")
  // ^ FUNCTIONS
  useEffect(() => { getProjectDetail(token, id, setProjectDetail, setProjectDetailStatus); }, []);

  useEffect(() => {
    if (projectDetail !== null) {
      setBUDGET(projectDetail?.budget_cost.toLocaleString());
      console.log(" BUDGET ===> ", BUDGET)
    }
  }, [projectDetail])


  function budgetChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (BUDGET) {
      setBUDGET(`${Number(event.target.value).toLocaleString()}  تومان`)
    } else {
      setBUDGET("---")
    }
  }
  const notifyBudgetChange = () => toast.success('مبلغ پروژه با موفقیت ویرایش شد');
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
  const onSubmitBudget: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    setBUDGET(Number(data.budget))
    notifyBudgetChange()
  }
  // ^ RETURN ===================================================================================================================================================
  return (
    <>
      {/* //!  BUDGET MODAL */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box py-10">
          <form className="flex items-center  justify-between gap-x-2" onSubmit={handleSubmit(onSubmitBudget)}>
            <input className="border border-zinc-300 px-2 py-3  rounded-md w-full" type="text" {...register('budget')} placeholder={`${Number(BUDGET).toLocaleString()}  تومان`} />
            {errors.budget && <span className="absolute top-24 mr-1 bg-red-300/50 p-1 rounded-md  text-[10px] text-red-800">مبلغ به درستی وارد نشده است</span>}
            <button type="submit" className="btn btn-success p-1 text-white hover:bg-green-500 font-extralight"> ویرایش مبلغ</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
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
                    {projectDetail?.plan?.type_id == 1 ? "فروشگاهی" : projectDetail?.plan?.type_id == 2 ? "شرکتی" : projectDetail?.plan?.type_id == 3 ? "گردشگری" : projectDetail?.plan?.type_id == 4 ? "پزشکی" : projectDetail?.plan?.type_id == 5 ? "شخصی" : projectDetail?.plan?.type_id == 6 ? "پورتال" : projectDetail?.plan?.type_id == 7 ? "خبری" : "-"}
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
                  {projectDetail?.site_lookslikes ? (
                    projectDetail?.site_lookslikes.map((item, index) => (
                      <p key={item.id} className="text-zinc-500 p-1 rounded-sm"  >
                        {item.title ? item.title : "ثبت نشده"}
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
                  {projectDetail?.plugins ? (
                    projectDetail?.plugins.map((item: any, index) => (
                      <p key={item.id} className="text-zinc-500  p-1 rounded-sm"  >
                        {item.template_name ? item.template_name : " ثبت نشده "}
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
                  {projectDetail?.org_colors ? (projectDetail?.org_colors.map((item: any, index) => (
                    <p key={item.id} className="text-zinc-500 w-fit text-sm">
                      {item.color ? item.color : "ثبت نشده"}
                    </p>
                  ))
                  ) : (
                    <p dir="rtl">-</p>
                  )}
                </div>
              )}
            </div>
            <div className="">
              {/* //^ مبلغ نهایی */}
              <div className="flex flex-col gap-3">
                <label className="tracking-tight">مبلغ نهایی پروژه : </label>
                {projectDetailStatus.loading ? (
                  <SkeletonTheme>
                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                  </SkeletonTheme>
                ) : (
                  <>
                    <div className="bg-[#EAEFF6] p-4 rounded-[4px] flex items-center gap-x-4">
                      {Number(BUDGET).toLocaleString()} تومان
                      <label htmlFor="my_modal_7" className="btn p-0.5 px-3">
                        <BiEdit className="z-30 hover:text-blue-700 hover:scale-110  duration-500 cursor-pointer text-xl" />
                      </label>
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
    </>
  );
}

export default ProjectDetail;
