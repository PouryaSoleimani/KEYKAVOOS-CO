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
import Image from "next/image";
const moment = require("moment-jalaali");
export type ConsultationDetail = { id: number; title: string; description: string; date: string; };

function ConsultDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [consultationDetail, setConsultationDetail] = useState<any>({ title: "", description: "", date: "", user_id: "", register_user: { name: "", surname: "", pic_path: "" } });
  const [consultDetailStatus, setConsultDetailStatus] = useState({ loading: false, erorr: "", });

  useEffect(() => { getConsultationDetail(token, id, setConsultationDetail, setConsultDetailStatus); }, []);


  return (
    <>
      <div className="flex items-center justify-end py-2">
        <Link href='/panel/admin/consultations' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>

      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center grid grid-cols-* gap-3">
        <div className="grid grid-cols-6">
          <div>ID</div>
          <div>تاریخ درخواست مشاوره</div>
          <div>عنوان مشاوره</div>
          <div> درخواست دهنده </div>
          <div> شماره تماس </div>
          <div>توضیحات</div>
        </div>
        {consultDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : consultDetailStatus.erorr ? (
          <NotFound text={`${consultDetailStatus.erorr}`} />
        ) : (
          <div className="grid grid-cols-6 py-4 bg-[#EAEFF6] rounded-[4px]">
            <p>{consultationDetail.id}</p>
            <p>{consultationDetail.date ? moment(consultationDetail.date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : "-"}</p>
            <p>{consultationDetail.title}</p>
            <p className="flex items-center justify-center gap-x-2">
              <Image alt="profile" src={`https://back.keykavoos.co/storage/${consultationDetail?.register_user.pic_path}`} className="rounded-full flex items-center justify-center text-[10px] text-zinc-600 p-0" width={32} height={32} />
              {consultationDetail?.register_user.name}  {consultationDetail?.register_user.surname}
            </p>
            <p>{consultationDetail?.register_user?.mobile}</p>
            <p>{consultationDetail.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ConsultDetail;
