"use client";
import { getPermissionDetail, getRoleDetail } from "@/utils/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";

function RoleDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [roleDetail, setRoleDetail] = useState({ id: 0, name_en: "", name_fa: "", created_at: "", deleted_at: "" });

  useEffect(() => { getRoleDetail(token, id, setRoleDetail); }, []);
  useEffect(() => { console.log("%c SINGLE ROLE DETAIL", "color : yellow", roleDetail); }, [])

  return (
    <>

      <div className="w-full flex items-center justify-end py-2">
        <Link href='/panel/admin/view-users/role-management' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>

      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center">
        <div className="grid grid-cols-5">
          <div className="py-2 font-semibold">ID</div>
          <div className="py-2 font-semibold">نام به فارسی</div>
          <div className="py-2 font-semibold">نام به انگلیسی</div>
          <div className="py-2 font-semibold">تاریخ ایجاد</div>
          <div className="py-2 font-semibold">تاریخ حذف</div>
        </div>

        <div className="grid grid-cols-5 py-1 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
          <p className="py-2 text-lg text-zinc-800">{roleDetail.id}</p>
          <p className="py-2 text-lg text-zinc-800">{roleDetail.name_fa}</p>
          <p className="py-2 text-lg text-zinc-800">{roleDetail.name_en}</p>
          <p className="py-2 text-lg text-blue-800">{roleDetail.created_at.slice(0, 10)}</p>
          <p className="py-2 text-lg text-red-800">{roleDetail.deleted_at ? roleDetail.deleted_at : "---"}</p>
        </div>
      </div>

    </>
  );
}

export default RoleDetail;
