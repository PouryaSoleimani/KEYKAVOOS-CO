/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { deleteDepartment, getAllDepartments, restoreDepartment, updateBrand, } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "/public/ViewUsers/vieweye.svg";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { DepartmentContext } from "../../context/department-context/DepartmentContext";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../components/NotFound";
import { IoArrowBack, IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export type DepartmentType = { id: number; name_en: string; name_fa: string; deleted_at: string; };
export type DepartmentFinalType = { department: { id: number; name_en: string; name_fa: string; deleted_at: string; }; };
function Departments() {
  const [departments, setDepartments] = useState<DepartmentType[] | DepartmentFinalType[]>([]);
  const [departmentLoading, setDepartmentLoading] = useState({ loading: false, error: "", });
  const { token } = useSelector((state: any) => state.userData);
  const [departmentIsDeleted, setDepartmentIsDeleted] = useState(false);
  const [editField, setEditField] = useState({ showEditField: false, name_en: "", name_fa: "", });

  useEffect(() => {
      const localDepartments = JSON.parse(
        window.sessionStorage.getItem("departments") as string
      );
      setDepartments(localDepartments);
  }, []);

  useEffect(() => { getAllDepartments(token, setDepartments, setDepartmentLoading); }, []);

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex items-center justify-between">
        <NewInfoOnEachPageBtn btnText="ایجاد دپارتمان" src="/panel/admin/org_management/departments/create-department" />
        <BackButton />
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center grid grid-cols-1 gap-5">
        <div className="grid lg:grid-cols-4 grid-cols-10 items-center">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-3 lg:col-span-1">نام دپارتمان به انگلیسی</div>
          <div className="col-span-3 lg:col-span-1">نام دپارتمان به فارسی</div>
          <div className="col-span-3 lg:col-span-1">عملیات</div>
        </div>

        {departmentLoading.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : departmentLoading.error ? (
          <NotFound text={`${departmentLoading.error}`} />
        ) : (
          departments.map((item: any, index) => (
            <div className={`${item.department.deleted_at ? "bg-red-500" : "bg-[#EAEFF6]"} grid lg:grid-cols-4 grid-cols-10 gap-x-5 text-center py-4 rounded-[4px] cursor-pointer items-center`} key={index}  >
              <p className="col-span-1">{index + 1}</p>
              <p className="bg-transparent caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1">
                {item.department.name_en}
              </p>
              <p className="bg-transparent caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1">
                {item.department.name_fa}
              </p>
              <div className="flex flex-row items-center justify-center gap-3 col-span-3 lg:col-span-1">
                <Link href={`/panel/admin/org_management/departments/department-detail?id=${item.department.id}`} className="flex justify-center hover:scale-125 duration-300"  >
                  <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                </Link>
                <span onClick={() => deleteDepartment(item.department.id, setDepartmentIsDeleted)} className="flex justify-center"  >
                  <RiDeleteBin7Fill className={`text-red-600 text-lg hover:scale-125 duration-300 ${item.department.deleted_at ? "hidden" : "inline"}`} />
                </span>
                <span onClick={() => restoreDepartment(item.department.id, setDepartmentIsDeleted)}   >
                  <IoReloadCircle className={`text-emerald-600 text-xl hover:scale-125 duration-300 ${!item.department.deleted_at ? "hidden" : "inline"}`} />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Departments;
