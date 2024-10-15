/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { deletePlan, getAllPlans, restorePlan, updatePlan, } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";


import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import NewInfoOnEachPageBtn from "../../user/components/NewInfoOnEachPageBtn";
import { IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";

export type PlanType = { plan: { title: string; description: string; id: number; deleted_at: string; }; };

function PlanManagement() {
  const { token } = useSelector((state: any) => state.userData);
  const [allPlans, setAllPlans] = useState<PlanType[]>([]);
  const [planIsDeleted, setPlanIsDeleted] = useState(false);
  const [plansStatus, setPlansStatus] = useState({ loading: false, error: "", });

  const [editField, setEditField] = useState({ showEditField: false, editTitle: "", editDesc: "", });

  useEffect(() => { getAllPlans(token, setAllPlans, setPlansStatus); }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="py-3">
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت پلن ها</h1>
      </div>
      <div className="flex flex-row items-center gap-5 whitespace-nowrap">
        <NewInfoOnEachPageBtn btnText="ایجاد پلن" src="/panel/admin/plan-management/create-plan" />
        <Link href={`/panel/admin/plan-management/site-types`} className="text-white bg-[#4866CF] p-4 tracking-tight rounded-[5px] w-[225px] hover:bg-blue-800 duration-300" >
          مدیریت سایت های قابل طراحی
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center space-y-3">
        <div className="grid grid-cols-4">
          <div>ردیف</div>
          <div>عنوان پلن</div>
          <div>توضیحات</div>
          <div>عملیات</div>
        </div>
        {plansStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : plansStatus.error ? (
          <NotFound text={`${plansStatus.error}`} />
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {allPlans.map((item: PlanType, index) => (
              <div
                className={`${planIsDeleted && item.plan.deleted_at
                  ? "bg-red-500/80"
                  : "bg-[#EAEFF6]"
                  } grid grid-cols-4 text-center py-4 rounded-[4px] cursor-pointer`}
                key={index}
              >
                <p>{index + 1}</p>
                <input
                  value={item.plan.title}
                  className={`${item.plan.deleted_at
                    ? "bg-transparent caret-transparent cursor-default text-center"
                    : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
                    } outline-none`}
                  readOnly={true}
                />
                <input
                  value={item.plan.description ? item.plan.description : "-"}
                  className={`${item.plan.deleted_at
                    ? "bg-transparent caret-transparent cursor-default text-center"
                    : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
                    } outline-none`}
                  readOnly={true}
                />
                <div className="flex flex-row items-center justify-center gap-5">
                  <Link href={`/panel/admin/plan-management/plan-detail?id=${item.plan.id}`} className="flex justify-center hover:scale-125 duration-300" >
                    <Image src='/ViewUsers/vieweye.svg' alt="مشاهده" width={25} height={20} />
                  </Link>
                  <span onClick={() => deletePlan(item.plan.id, token, setPlanIsDeleted, setAllPlans)} className="flex justify-center hover:scale-125 duration-300"  >
                    <RiDeleteBin7Fill className="text-red-600 text-2xl" />
                  </span>
                  <span onClick={() => restorePlan(item.plan.id, token, setPlanIsDeleted)} >
                    <IoReloadCircle className={`${item.plan.deleted_at && planIsDeleted ? "text-green-600" : "text-yellow-600"}  text-2xl hover:scale-125 duration-300`} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanManagement;
