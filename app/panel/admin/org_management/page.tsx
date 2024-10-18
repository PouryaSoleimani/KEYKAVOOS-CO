/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import { deleteOrgan, getOrganizations, restoreOrganization, } from "@/utils/utils";
import { useSelector } from "react-redux";

import Image from "next/image";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import { IoAddCircle, IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";


function OrgManagement() {
  const { token } = useSelector((state: any) => state.userData);
  const [organizations, setOrganizations] = useState([]);
  const [organIsDeleted, setOrganIsDeleted] = useState(false);
  const [organizationsStatus, setOrganizationsStatus] = useState({ loading: false, error: "", });

  useEffect(() => { getOrganizations(setOrganizations, setOrganizationsStatus); }, []);

  return (
    <div className="grid grid-cols-1 gap-5">
      <div>
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت سازمان ها</h1>
      </div>
      <div className="flex gap-5">
        <Link href={`/panel/admin/org_management/create-organization`} className="text-white bg-[#4866CF] p-3 flex items-center justify-between gap-x-3 hover:bg-blue-800 duration-300 rounded-[5px]" >
          سازمان جدید
          <IoAddCircle className="text-xl" />
        </Link>
        <Link href={`/panel/admin/org_management/brands`} className="text-white bg-[#4866CF] py-3 px-6 hover:bg-blue-800 duration-300 rounded-[5px]" >
          برندها
        </Link>
        <Link href={`/panel/admin/org_management/departments`} className="text-white bg-[#4866CF] py-3 px-6 hover:bg-blue-800 duration-300 rounded-[5px]" >
          دپارتمان ها
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full p-3 text-center space-y-3">
        <div className="grid lg:grid-cols-5 grid-cols-12">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-2 lg:col-span-1">نام سازمان</div>
          <div className="col-span-3 lg:col-span-1">شماره تلفن سازمان</div>
          <div className="col-span-3 lg:col-span-1">آدرس سازمان</div>
          <div className="col-span-3 lg:col-span-1">عملیات</div>
        </div>

        <div>
          {organizationsStatus.loading ? (
            <SkeletonTheme>
              <Skeleton count={1} className="p-3" baseColor="#EAEFF6" />
            </SkeletonTheme>
          ) : organizationsStatus.error ? (
            <NotFound text={`${organizationsStatus.error}`} />
          ) : (
            <div>
              {organizations?.map((item: { org_name: string; phone: number; address: string; id: number; deleted_at: string | null }, index) => (

                <div className={`grid lg:grid-cols-5 grid-cols-12 bg-[#EAEFF6] caret-transparent my-2 cursor-default text-center gap-x-5 py-3 rounded-[4px] ${item.deleted_at ? "bg-red-500 " : ""}`} key={item.id}>
                  <p className="col-span-1">{index + 1}</p>
                  <p className="col-span-2 lg:col-span-1">{item.org_name}</p>
                  <p className="col-span-3 lg:col-span-1">{item.phone}</p>
                  <p className="col-span-3 lg:col-span-1">{item.address}</p>

                  <div className="flex flex-row items-center justify-center lg:gap-3 col-span-3 gap-1 lg:col-span-1">
                    <Link href={`/panel/admin/org_management/org-detail?id=${item.id}`} className="flex justify-center">
                      <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                    </Link>

                    <span onClick={() => deleteOrgan(item.id, setOrganIsDeleted)} className="flex justify-center cursor-pointer" >
                      <RiDeleteBin7Fill className={`text-red-600 text-lg ${item.deleted_at ? "hidden" : "inline mr-3"}`} />
                    </span>

                    <span onClick={() => restoreOrganization(item.id, setOrganIsDeleted)} >
                      <IoReloadCircle className={`text-emerald-600 text-xl cursor-pointer ${!item.deleted_at ? "hidden" : "inline"}`} />
                    </span>

                  </div>
                </div>
              )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrgManagement;
