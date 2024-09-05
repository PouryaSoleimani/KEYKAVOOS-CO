/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { getPermissionDetail } from "@/utils/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PermissionDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [permissionDetail, setPermissionDetail] = useState({ name_en: "", name_fa: "", });

  useEffect(() => { getPermissionDetail(token, id, setPermissionDetail); }, []);

  return (
    <>
      <div className="w-full flex items-center justify-end py-2">
        <Link rel="stylesheet" href="/panel/admin/view-users/permission-management" className="text-xl flex items-center bg-white px-3 py-2 font-black rounded-md hover:bg-[#4866CF] hover:text-white duration-300" > ← </Link>
      </div>

      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center tracking-tight font-semibold">
        <div className="grid grid-cols-2">
          <div>نام به فارسی</div>
          <div>نام به انگلیسی</div>
        </div>

        <div className="grid grid-cols-2 py-3 bg-[#EAEFF6] rounded-[4px] my-3 cursor-pointer tracking-tight font-thin">
          <p>{permissionDetail.name_fa}</p>
          <p>{permissionDetail.name_en}</p>
        </div>
      </div>
    </>
  );
}

export default PermissionDetail;
