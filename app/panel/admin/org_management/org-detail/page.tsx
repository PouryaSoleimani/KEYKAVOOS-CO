/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { getBrandDetail, getOrganizationDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

export type BrandDetailType = {
  title: string;
  description: string;
};

//^ COMPONENT
function OrgDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [orgDetailStatus, setOrgDetailStatus] = useState({ loading: false, error: "", });
  const [orgDetail, setOrgDetail] = useState({ id: "", name: "", descriprion: "", phone: "", shenase_melli: "", user: "", address: "", logo: "" });

  useEffect(() => { getOrganizationDetail(token, id, setOrgDetail, setOrgDetailStatus); console.log("ORG DETAILS ====>", orgDetail) }, []);

  return (
    <>
      <div className="flex items-center justify-end">
        <Link href='/panel/admin/org_management/' className="bg-white rounded-lg p-3 my-3 w-fit hover:bg-[#4866CF] hover:text-white cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center grid grid-cols-1 gap-5">
        <div className="grid grid-cols-8 place-items-center">
          <div>ردیف</div>
          <div>نام سازمان</div>
          <div>مالک / مدیر</div>
          <div>توضیحات</div>
          <div>شماره تماس</div>
          <div>آدرس</div>
          <div>شناسه ملی</div>
          <div>لوگو</div>
        </div>
        {orgDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : orgDetailStatus.error ? (
          <NotFound text={`${orgDetailStatus.error}`} />
        ) : (
          <div className="grid grid-cols-8 py-3 bg-[#EAEFF6] rounded-[4px] place-items-center">
            <p>{orgDetail?.id}</p>
            <p>{orgDetail?.name}</p>
            <p>{orgDetail?.descriprion ? orgDetail?.descriprion : "-"}</p>
            <p>{orgDetail?.user}</p>
            <p>{orgDetail?.phone}</p>
            <p>{orgDetail?.address}</p>
            <p>{orgDetail?.shenase_melli ? orgDetail?.shenase_melli : "-"}</p>
            <p>{orgDetail?.logo ? orgDetail?.logo : "---"}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default OrgDetail;
