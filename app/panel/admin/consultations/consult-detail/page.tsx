"use client";
import { getConsultationDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
const moment = require("moment-jalaali");
export type ConsultationDetail = {
  id: number;
  title: string;
  description: string;
  date: string;
};
function ConsultDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [consultationDetail, setConsultationDetail] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [consultDetailStatus, setConsultDetailStatus] = useState({
    loading: false,
    erorr: "",
  });
  useEffect(() => {
    getConsultationDetail(
      token,
      id,
      setConsultationDetail,
      setConsultDetailStatus
    );
  }, []);
  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center grid grid-cols-1 gap-5">
      <div className="grid grid-cols-3">
        <div>تاریخ درخواست مشاوره</div>
        <div>عنوان مشاوره</div>
        <div>توضیحات</div>
      </div>
      {consultDetailStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : consultDetailStatus.erorr ? (
        <NotFound text={`${consultDetailStatus.erorr}`} />
      ) : (
        <div className="grid grid-cols-3 py-1 bg-[#EAEFF6] rounded-[4px]">
          <p>
            {consultationDetail.date
              ? moment(
                  consultationDetail.date,
                  "YYYY-MM-DDTHH:mm:ss.SSSZ"
                ).format("jYYYY/jM/jD")
              : "-"}
          </p>
          <p>{consultationDetail.title}</p>
          <p>{consultationDetail.description}</p>
        </div>
      )}
    </div>
  );
}

export default ConsultDetail;
