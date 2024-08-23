"use client";
import { getPermissionDetail, getRoleDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RoleDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [roleDetail, setRoleDetail] = useState({
    name_en: "",
    name_fa: "",
  });

  useEffect(() => {
    getRoleDetail(token, id, setRoleDetail);
  }, []);

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center">
      <div className="grid grid-cols-2">
        <div>نام به فارسی</div>
        <div>نام به انگلیسی</div>
      </div>

      <div className="grid grid-cols-2 py-1 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
        <p>{roleDetail.name_fa}</p>
        <p>{roleDetail.name_en}</p>
      </div>
    </div>
  );
}

export default RoleDetail;
