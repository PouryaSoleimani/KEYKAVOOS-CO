"use client";
import { getBrandDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../../../../../components/ADMIN__PANEL__COMPONENTS/NotFound";
import BackButton from "../../../../../../components/ADMIN__PANEL__COMPONENTS/BackButton";

export type BrandDetailType = { title: string; description: string; };
//^ COMPONENT
function BrandDetail() {
  const params = useSearchParams();
  const id = params.get("id");
  const [brandDetailStatus, setBrandDetailStatus] = useState({ loading: false, error: "", });
  const [brandDetail, setBrandDetail] = useState({ title: "", description: "", });


  useEffect(() => { getBrandDetail(id, setBrandDetail); }, []);


  return (
    <>
      <BackButton/>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center grid grid-cols-1 gap-5">
        <div className="grid grid-cols-2">
          <div className="font-semibold">نام برند</div>
          <div className="font-semibold">توضیحات</div>
        </div>

        {brandDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : brandDetailStatus.error ? (
          <NotFound text={`${brandDetailStatus.error}`} />
        ) : (
          <div className="grid grid-cols-2 py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
            <p>{brandDetail.title}</p>
            <p>{brandDetail.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BrandDetail;
