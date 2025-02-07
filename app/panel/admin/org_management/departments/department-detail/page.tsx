"use client";
import { getBrandDetail, getDepartmentDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";

export type BrandDetailType = {
  title: string;
  description: string;
};
function DepartmentDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [departmentDetail, setDepartmentDetail] = useState({
    name_en: "",
    name_fa: "",
  });

  useEffect(() => {
    getDepartmentDetail(token, id, setDepartmentDetail);
  }, []);

  return (
    <>
      <BackButton />
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-3 text-center mt-4">
        <div className="grid grid-cols-2">
          <div>نام دپارتمان به فارسی</div>
          <div>نام دپارتمان به انگلیسی</div>
        </div>

        <div className="grid grid-cols-2 py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer my-4">
          <p>{departmentDetail.name_en}</p>
          <p>{departmentDetail.name_fa}</p>
        </div>
      </div>
    </>
  );
}

export default DepartmentDetail;
