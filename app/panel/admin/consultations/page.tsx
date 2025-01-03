/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { deleteConsultation, getAllConsultations, restoreConsultation, } from "@/utils/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import { IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import BackButton from "../components/BackButton";
const moment = require("moment-jalaali");
export type ConsultTypes = {
  [x: string]: any; id: number; deleted_at: string; title: string; description: string; created_at: string;
};
function Consultations() {
  const { token } = useSelector((state: any) => state.userData);
  const [allConsults, setAllConsults] = useState<ConsultTypes[]>([]);
  const [consultIsDeleted, setConsultIsDeleted] = useState(false);
  const [consultStatus, setConsultStatus] = useState({ loading: false, erorr: "", });

  useEffect(() => { getAllConsultations(token, setAllConsults, setConsultStatus); }, []);

  return (
    <>
      <div className="py-3">
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مشاوره ها</h1>
      </div>
      <div>
        <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center grid grid-cols-1 gap-5 text-sm">
          <div className="grid lg:grid-cols-6 grid-cols-12 items-center">
            <div className="text-xs lg:text-[16px] font-thin col-span-1">ردیف</div>
            <div className="text-xs lg:text-[16px] font-thin col-span-2 lg:col-span-1">نام و نام خانوادگی</div>
            <div className="text-xs lg:text-[16px] font-thin col-span-2 lg:col-span-1">تاریخ مشاوره</div>
            <div className="text-xs lg:text-[16px] font-thin col-span-3 lg:col-span-1">موضوع مشاوره</div>
            <div className="text-xs lg:text-[16px] font-thin col-span-3 lg:col-span-1">توضیحات</div>
            <div className="text-xs lg:text-[16px] font-thin col-span-3 lg:col-span-1">عملیات</div>
          </div>
          {consultStatus.loading ? (
            <SkeletonTheme>
              <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
            </SkeletonTheme>
          ) : consultStatus.erorr ? (
            <NotFound text={`${consultStatus.erorr}`} />
          ) : (
            <div className="grid grid-cols-1 gap-5 text-md">
              {allConsults.map((item, index) => (
                <div className={`${item.deleted_at ? "bg-red-500" : "bg-[#EAEFF6]"} grid lg:grid-cols-6 grid-cols-12 gap-x-5 text-center py-4 rounded-[4px] cursor-pointer items-center`} key={index}>
                  <p className="col-span-1">{index + 1}</p>
                  <p className="col-span-1">{item?.register_user?.name} {item?.register_user.surname}</p>
                  <p className="col-span-2 lg:col-span-1">
                    {item.date ? moment(item.date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : "-"}
                  </p>
                  <p className="col-span-3 lg:col-span-1">{item.title}</p>
                  <p className="col-span-3 lg:col-span-1">{item.description}</p>
                  <div className="flex flex-row items-center justify-center gap-3 col-span-3 lg:col-span-1">
                    <Link href={`/panel/admin/consultations/consult-detail?id=${item.id}`} className="flex justify-center hover:scale-125 duration-300">
                      <Image src='/ViewUsers/vieweye.svg' alt="مشاهده" width={20} height={20} />
                    </Link>
                    <span onClick={() => deleteConsultation(item.id, setConsultIsDeleted)} className="flex justify-center" >
                      <RiDeleteBin7Fill className={`text-red-600 text-lg hover:scale-125 duration-300 mr-3 ${item.deleted_at ? "hidden" : "inline"}`} />
                    </span>
                    <span onClick={() => restoreConsultation(item.id, setConsultIsDeleted)} >
                      <IoReloadCircle className={`text-emerald-600 text-xl hover:scale-125 duration-300   ${!item.deleted_at ? "hidden" : "inline"}`} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Consultations;
