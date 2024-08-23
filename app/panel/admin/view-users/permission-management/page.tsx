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
import { RxCross1 } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { PermissionContext } from "../../context/permission-context/PermissionContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../components/NotFound";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";

export type PermissionType = {
  name_en: string;
  name_fa: string;
  id: number;
};

function PermissionManagement() {
  const { permissions, setPermissions, permissionStatus, setPermissionStatus } =
    useContext(PermissionContext);
  const { token } = useSelector((state: any) => state.userData);
  const [permissionIsDeleted, setPermissionIsDeleted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPermissions = JSON.parse(
        window.sessionStorage.getItem("permissions") as string
      );
      setPermissions(localPermissions);
    }
  }, [setPermissions]);

  useEffect(() => {
    getAllPermissions(token, setPermissions, setPermissionStatus);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="w-[150px] lg:w-full">
          <NewInfoOnEachPageBtn
            btnText="ایجاد دسترسی"
            src="/panel/admin/view-users/permission-management/create-permission"
          />
        </div>
        <Link
          href={`/panel/admin/view-users/permission-management/change-permission`}
          className="text-white bg-[#4866CF] p-2 rounded-[5px] w-[210px] lg:w-full"
        >
          تغییر و مدیریت دسترسی ها
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center space-y-3">
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
            <div
              className={`${
                permissionIsDeleted
                  ? "bg-red-300"
                  : "bg-[#EAEFF6]"
              } grid lg:grid-cols-4 grid-cols-10 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer`}
              key={index}
            >
              <p className="col-span-1">{index + 1}</p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1">
                {item.name_fa}
              </p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1">
                {item.name_en}
              </p>
              <div className="flex flex-row items-center justify-center gap-3 col-span-2 lg:col-span-1">
                <Link
                  href={`/panel/admin/view-users/permission-management/permission-detail?id=${item.id}`}
                  className="flex justify-center"
                >
                  <Image src={vieweye} alt="مشاهده" width={20} height={20} />
                </Link>
                <span
                  onClick={() =>
                    deletePermission(item.id, token, setPermissionIsDeleted)
                  }
                  className="flex justify-center"
                >
                  <RxCross1 className="text-red-600 text-lg" />
                </span>
                <span
                  onClick={() =>
                    restorePermission(item.id, token, setPermissionIsDeleted)
                  }
                >
                  <MdOutlineSettingsBackupRestore className="text-yellow-600 text-lg" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PermissionManagement;
