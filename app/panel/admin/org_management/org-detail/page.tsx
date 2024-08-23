"use client";
import { getBrandDetail, getOrganizationDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";

export type BrandDetailType = {
  title: string;
  description: string;
};
function OrgDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [orgDetailStatus, setOrgDetailStatus] = useState({
    loading: false,
    error: "",
  });
  const [orgDetail, setOrgDetail] = useState({
    name: "",
    descriprion: "",
    phone: "",
    shenase_melli: "",
  });

  useEffect(() => {
    getOrganizationDetail(token, id, setOrgDetail, setOrgDetailStatus);
  }, []);

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center grid grid-cols-1 gap-5">
      <div className="grid grid-cols-4">
        <div>نام سازمان</div>
        <div>توضیحات</div>
        <div>شماره تماس</div>
        <div>شناسه ملی</div>
      </div>
      {orgDetailStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : orgDetailStatus.error ? (
        <NotFound text={`${orgDetailStatus.error}`} />
      ) : (
        <div className="grid grid-cols-4 py-1 bg-[#EAEFF6] rounded-[4px]">
          <p>{orgDetail.name}</p>
          <p>{orgDetail.descriprion ? orgDetail.descriprion : "-"}</p>
          <p>{orgDetail.phone}</p>
          <p>{orgDetail.shenase_melli ? orgDetail.shenase_melli : "-"}</p>
        </div>
      )}
    </div>
  );
}

export default OrgDetail;
