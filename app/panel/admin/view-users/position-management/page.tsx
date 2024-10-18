/* eslint-disable react-hooks/exhaustive-deps */
// ^ POSITION-MANAGEMENT-PAGE =========================================================================================================================================
"use client";
import { deletePosition, getAllPositions, restorePosition, } from "@/utils/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../components/NotFound";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";
import { IoArrowBack, IoReloadCircle, IoReloadCircleSharp } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export type PositionType = { position: { title_en: string; title_fa: string; id: number; deleted_at: string; dept_id: string; user_id: string; }; };

function PositionManagement() {
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [positionsStatus, setPositionsStatus] = useState({ loading: false, error: "", });
  const { token } = useSelector((state: any) => state.userData);
  const [positionIsDeleted, setPositionIsDeleted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPositions = JSON.parse(window.sessionStorage.getItem("positions") as string);
      setPositions(localPositions);
    }
  }, []);

  useEffect(() => {
    getAllPositions(token, setPositions, setPositionsStatus);
  }, []);

  const [editField, setEditField] = useState({ showEditField: false, title_en: "", title_fa: "", dept_id: "", user_id: "", });

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center justify-end">
        <BackButton />
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="w-[150px] lg:w-full">
          <NewInfoOnEachPageBtn btnText="ایجاد جایگاه جدید" src="/panel/admin/view-users/position-management/create-position" />
        </div>
        <Link href={`/panel/admin/view-users/position-management/change-position`} className="text-white bg-[#4866CF] hover:bg-blue-800 duration-300 p-4 rounded-[5px] w-[210px] lg:w-full" >
          تغییر و مدیریت جایگاه ها
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] text-center space-y-3">
        <div className="grid lg:grid-cols-4 grid-cols-9 tracking-tight my-4">
          <div className="col-span-1 font-semibold">ردیف</div>
          <div className="col-span-3 font-semibold lg:col-span-1">نام موقعیت به فارسی</div>
          <div className="col-span-3 font-semibold lg:col-span-1">نام موقعیت به انگلیسی</div>
          <div className="col-span-2 font-semibold lg:col-span-1">عملیات</div>
        </div>

        {positionsStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : positionsStatus.error ? (
          <NotFound text={`${positionsStatus.error}`} />
        ) : (
          positions.map((item: any, index) => (
            <div className={`${item.position.deleted_at ? "bg-red-400" : "bg-[#EAEFF6]"} grid lg:grid-cols-4 grid-cols-9 gap-x-5 text-center py-4 tracking-tight rounded-[4px] cursor-pointer`} key={index}  >
              <p className="col-span-1">{index + 1}</p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1" >
                {item.position.title_en}
              </p>
              <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1" >
                {item.position.title_fa}
              </p>

              <div className="flex flex-row items-center justify-center gap-2 col-span-2 lg:col-span-1">
                <Link href={`/panel/admin/view-users/position-management/position-detail?id=${item.position.id}`} className="flex justify-center" >
                  <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                </Link>

                <span onClick={() => deletePosition(item.position.id, token, setPositionIsDeleted)} className="flex justify-center" >
                  <RiDeleteBin7Fill className={`text-red-600 text-lg hover:scale-125 duration-300 mr-2 ${item.position.deleted_at ? "hidden" : "inline"}`} />
                </span>

                <span onClick={() => restorePosition(item.position.id, setPositionIsDeleted)} className="flex justify-center" >
                  <IoReloadCircleSharp className={`text-emerald-600 text-lg hover:scale-125 duration-300 ${!item.position.deleted_at ? "hidden" : "inline"}`} />
                </span>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PositionManagement;
