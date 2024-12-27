/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { getConsultationDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
const moment = require("moment-jalaali");
export type ConsultationDetail = { id: number; title: string; description: string; date: string; };

function ConsultDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [consultationDetail, setConsultationDetail] = useState<any>({ title: "", description: "", date: "", user_id: "" });
  const [consultDetailStatus, setConsultDetailStatus] = useState({ loading: false, erorr: "", });

  useEffect(() => { getConsultationDetail(token, id, setConsultationDetail, setConsultDetailStatus); }, []);


  return (
    <>
      <div className="flex items-center justify-end py-2">
        <Link href='/panel/admin/consultations' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>

      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center grid grid-cols-1 gap-5">
        <div className="grid grid-cols-5">
          <div>ID</div>
          <div>تاریخ درخواست مشاوره</div>
          <div>عنوان مشاوره</div>
          <div> USER_ID </div>
          <div>توضیحات</div>
        </div>
        {consultDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : consultDetailStatus.erorr ? (
          <NotFound text={`${consultDetailStatus.erorr}`} />
        ) : (
          <div className="grid grid-cols-5 py-4 bg-[#EAEFF6] rounded-[4px]">
            <p>{consultationDetail.id}</p>
            <p>{consultationDetail.date ? moment(consultationDetail.date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : "-"}</p>
            <p>{consultationDetail.title}</p>
            <p>{consultationDetail.user_id ? consultationDetail.user_id : " --- "}</p>
            <p>{consultationDetail.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ConsultDetail;
