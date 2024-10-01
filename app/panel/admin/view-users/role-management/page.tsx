/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { deleteRole, getAllRole, restoreRole, updateRole } from "@/utils/utils";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { RoleContext } from "../../context/role-context/RoleContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../components/NotFound";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";
import { IoArrowBack, IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export type RoleType = { role: { name_en: string; name_fa: string; id: number; deleted_at: string; }; };

function RoleManagement() {
  const [roles, setRoles] = useState<RoleType[]>([]);
  // const { setRoles, roles } = useContext(RoleContext);
  const [roleLoading, setRoleLoading] = useState({ loading: false, error: "", });
  const { token } = useSelector((state: any) => state.userData);
  const [roleIsDeleted, setRoleIsDeleted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localRoles = JSON.parse(window.sessionStorage.getItem("roles") as string);
      console.log(localRoles);
      setRoles(localRoles);
    }
  }, []);

  useEffect(() => {
    getAllRole(token, setRoles, setRoleLoading);
    console.log("ALL ROLES", roles);
  }, []);


  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="flex items-center justify-end">
        <Link href='/panel/admin/view-users' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="w-[150px] lg:w-full">
          <NewInfoOnEachPageBtn btnText="ایجاد نقش" src="/panel/admin/view-users/role-management/create-role" />
        </div>
        <Link href={`/panel/admin/view-users/role-management/change-role`} className="text-white bg-[#4866CF] hover:bg-blue-800 duration-300 p-4 rounded-[5px] w-[210px] lg:w-full" >
          تغییر و مدیریت نقش ها
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-xl w-full p-[3%] text-center space-y-3">
        <div className="grid lg:grid-cols-4 grid-cols-10">
          <div className="col-span-1 font-semibold tracking-tight lg:col-span-1">ردیف</div>
          <div className="col-span-3 font-semibold tracking-tight lg:col-span-1">نام نقش به فارسی</div>
          <div className="col-span-3 font-semibold tracking-tight lg:col-span-1">نام نقش به انگلیسی</div>
          <div className="col-span-3 font-semibold tracking-tight lg:col-span-1">عملیات</div>
        </div>

        {roleLoading.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2 mt-4" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : roleLoading.error ? (
          <NotFound text={`${roleLoading.error}`} />
        ) : (
          roles.map((item: any, index) => (
            <div className={`${item.role.deleted_at ? "bg-red-400" : "bg-[#EAEFF6]"} grid lg:grid-cols-4 grid-cols-10 gap-x-5 text-center py-4 mt-2 rounded-[4px] cursor-pointer items-center`} key={index}>

              <p className="col-span-1">{index + 1}</p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center col-span-3 lg:col-span-1 py-2 rounded-md">
                {item.role.name_fa}
              </p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center col-span-3 lg:col-span-1 py-2 rounded-md">
                {item.role.name_en}
              </p>
              <div className="flex flex-row items-center justify-center gap-3 col-span-3 lg:col-span-1">
                <Link href={`/panel/admin/view-users/role-management/role-detail?id=${item.role.id}`} className="flex justify-center">
                  <Image src={vieweye} alt="مشاهده" width={20} height={20} className="hover:scale-125 duration-300" />
                </Link>
                <span onClick={() => deleteRole(item.role.id, setRoleIsDeleted,)} className={`flex justify-center ${item.role.deleted_at ? "hidden" : "inline"}`}>
                  <RiDeleteBin7Fill className="text-red-600 text-lg hover:scale-125 duration-300" />
                </span>
                <span onClick={() => restoreRole(item.role.id, setRoleIsDeleted)} className={`flex justify-center ${!item.role.deleted_at ? "hidden" : "inline"}`}>
                  <IoReloadCircle className="text-emerald-600 text-xl hover:scale-125 duration-300" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RoleManagement;
