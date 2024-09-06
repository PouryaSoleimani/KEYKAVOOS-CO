/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { deleteSiteType, getAllSiteTypes, restoreSiteType, updateSiteType, } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoReloadCircle } from "react-icons/io5";

function SiteTypes() {
  const [siteTypes, setSiteTypes] = useState<never[]>([]);
  const { token } = useSelector((state: any) => state.userData);
  const [siteTypeIsDeleted, setSiteTypeIsDeleted] = useState(false);

  useEffect(() => { getAllSiteTypes(token, setSiteTypes as any) }, []);

  const [editField, setEditField] = useState({ showEditField: false, editTitle: "", editDesc: "", });

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex">
        <NewInfoOnEachPageBtn btnText="ایجاد نوع طراحی" src="/panel/admin/plan-management/site-types/create-site-type" />
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center space-y-3">
        <div className="grid grid-cols-4">
          <div>ردیف</div>
          <div>نام طراحی</div>
          <div>توضیحات</div>
          <div>عملیات</div>
        </div>

        {siteTypes.map((item: any, index) => (
          <div className={`${siteTypeIsDeleted && item.deleted_at ? "bg-red-300" : "bg-[#EAEFF6]"} grid grid-cols-4 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer`} key={index}>
            <p>{index + 1}</p>
            <input value={item.title ? item.title : "-"} readOnly={true} className={`${editField.showEditField ? "bg-white" : "bg-[#EAEFF6] caret-transparent cursor-default text-center"} outline-none`} />
            <input value={item.description ? item.description : "-"} readOnly={true} className={`${editField.showEditField ? "bg-white" : "bg-[#EAEFF6] caret-transparent cursor-default text-center"} outline-none`} />
            <div className="flex flex-row items-center justify-center gap-3">
              <Link href={`/panel/admin/plan-management/site-types/site-type-detail?id=${item.id}`} className="flex justify-center"  >
                <Image src={vieweye} alt="مشاهده" width={20} height={20} />
              </Link>
              <span onClick={() => deleteSiteType(item.id, token, setSiteTypeIsDeleted)} className="flex justify-center" >
                <RiDeleteBin7Fill className="text-red-600 text-lg" />
              </span>
              <span onClick={() => restoreSiteType(item.id, token, setSiteTypeIsDeleted)}>
                <IoReloadCircle className="text-emerald-600 text-xl" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SiteTypes;
