/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  deletePermission,
  getAllPermissions,
  restorePermission,
} from "@/utils/utils";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import { PermissionContext } from "../../context/permission-context/PermissionContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../../../../components/ADMIN__PANEL__COMPONENTS/NotFound";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoArrowBack, IoReloadCircle } from "react-icons/io5";
import app from "@/services/service";

export type PermissionType = { name_en: string; name_fa: string; id: number; };

//^ COMPONENT 
function PermissionManagement() {
  const { permissions, setPermissions, permissionStatus, setPermissionStatus } = useContext(PermissionContext);
  const { token } = useSelector((state: any) => state.userData);
  const [permissionIsDeleted, setPermissionIsDeleted] = useState(false);
  const TOKEN = JSON.stringify(sessionStorage.getItem('token') as string)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPermissions = JSON.parse(window.sessionStorage.getItem("permissions") as string);
      setPermissions(localPermissions);
    }
  }, [setPermissions]);

  useEffect(() => { getAllPermissions(token, setPermissions, setPermissionStatus); console.log("PERMISSIONS ==>", permissions); }, []);

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center justify-end">
        <Link href='/panel/admin/view-users' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
          <IoArrowBack />
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="w-[150px] lg:w-full">
          <NewInfoOnEachPageBtn btnText="ایجاد دسترسی" src="/panel/admin/view-users/permission-management/create-permission" />
        </div>
        <Link href={`/panel/admin/view-users/permission-management/change-permission`} className="text-white bg-[#4866CF] hover:bg-blue-800 duration-300 p-4 rounded-[5px] w-[210px] lg:w-full" >
          تغییر و مدیریت دسترسی ها
        </Link>
      </div>

      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center space-y-3 tracking-tight">
        <div className="grid lg:grid-cols-4 grid-cols-10">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-3 lg:col-span-1">نام دسترسی به فارسی</div>
          <div className="col-span-3 lg:col-span-1">نام دسترسی به انگلیسی</div>
          <div className="col-span-2 lg:col-span-1">عملیات</div>
        </div>

        {permissionStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : permissionStatus.error ? (
          <NotFound text={`${permissionStatus.error}`} />
        ) : (
          permissions?.map((item: any, index) => (
            <div className={`${item.deleted_at !== null ? "bg-red-400" : "bg-[#EAEFF6]"} grid lg:grid-cols-4 grid-cols-10 gap-x-5 text-center py-4 rounded-[4px] cursor-pointer`} key={index} >
              <p className={`col-span-1 ${item.deleted_at ? "text-white" : ""}`}>{index + 1}</p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1 py-2 rounded-md">
                {item.name_fa}
              </p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1 py-2 rounded-md">
                {item.name_en}
              </p>
              <div className="flex flex-row items-center justify-center gap-4 col-span-2 lg:col-span-1">
                <Link href={`/panel/admin/view-users/permission-management/permission-detail?id=${item.id}`} className="flex justify-center hover:scale-125 duration-300" >
                  <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                </Link>
                <span onClick={() => deletePermission(item.id, setPermissionIsDeleted)} className="hover:scale-125 duration-300" >
                  <RiDeleteBin7Fill className={`text-red-600 text-xl mr-3 ${item.deleted_at ? "hidden" : "inline"}`} />
                </span>
                <span onClick={() => restorePermission(item.id, setPermissionIsDeleted)} className="hover:scale-125 duration-300">
                  <IoReloadCircle className={`text-emerald-600 text-xl translate-x-4 ${!item.deleted_at ? "hidden" : "inline"}`} />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div >
  );
}

export default PermissionManagement;
