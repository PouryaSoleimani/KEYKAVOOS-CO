"use client";
import {
  deletePosition,
  getAllPositions,
  restorePosition,
} from "@/utils/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../components/NotFound";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";

export type PositionType = {
  position: {
    title_en: string;
    title_fa: string;
    id: number;
    deleted_at: string;
    dept_id: string;
    user_id: string;
  };
};
function PositionManagement() {
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [positionsStatus, setPositionsStatus] = useState({
    loading: false,
    error: "",
  });
  const { token } = useSelector((state: any) => state.userData);
  const [positionIsDeleted, setPositionIsDeleted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPositions = JSON.parse(
        window.sessionStorage.getItem("positions") as string
      );
      setPositions(localPositions);
    }
  }, []);

  useEffect(() => {
    getAllPositions(token, setPositions, setPositionsStatus);
  }, []);
  const [editField, setEditField] = useState({
    showEditField: false,
    title_en: "",
    title_fa: "",
    dept_id: "",
    user_id: "",
  });

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex">
        <NewInfoOnEachPageBtn
          btnText="ایجاد موقعیت"
          src="/panel/admin/view-users/position-management/create-position"
        />
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center space-y-3">
        <div className="grid lg:grid-cols-4 grid-cols-9">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-3 lg:col-span-1">نام موقعیت به فارسی</div>
          <div className="col-span-3 lg:col-span-1">نام موقعیت به انگلیسی</div>
          <div className="col-span-2 lg:col-span-1">عملیات</div>
        </div>

        {positionsStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : positionsStatus.error ? (
          <NotFound text={`${positionsStatus.error}`} />
        ) : (
          positions.map((item: any, index) => (
            <div
              className={`${
                item.position.deleted_at
                  ? "bg-red-300"
                  : "bg-[#EAEFF6]"
              } grid lg:grid-cols-4 grid-cols-9 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer`}
              key={index}
            >
              <p className="col-span-1">{index + 1}</p>
              <p
                className="bg-[#EAEFF6] caret-transparent cursor-default text-center
                outline-none col-span-3 lg:col-span-1"
              >
                {item.position.title_en}
              </p>
              <p
                className="bg-[#EAEFF6] caret-transparent cursor-default text-center
                outline-none col-span-3 lg:col-span-1"
              >
                {item.position.title_fa}
              </p>

              <div className="flex flex-row items-center justify-center gap-3 col-span-2 lg:col-span-1">
                {/* <Link
                  href={`/panel/admin/view-users/position-management/position-detail?id=${item.position.id}`}
                  className="flex justify-center"
                >
                  <Image src={vieweye} alt="مشاهده" width={20} height={20} />
                </Link> */}
                <span
                  onClick={() =>
                    deletePosition(
                      item.position.id,
                      token,
                      setPositionIsDeleted
                    )
                  }
                  className="flex justify-center"
                >
                  <RxCross1 className="text-red-600 text-lg" />
                </span>
                <span
                  onClick={() =>
                    restorePosition(
                      item.position.id,
                      token,
                      setPositionIsDeleted
                    )
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

export default PositionManagement;
