"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import vieweye from "../../../../public/ViewUsers/vieweye.svg";
import { useSelector } from "react-redux";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import { getAllProjects } from "@/utils/utils";

function AllProjects() {
  const { token } = useSelector((state: any) => state.userData);
  const [projectMangementData, setProjectMangementData] = useState([]);
  const [allProjectsStatus, setAllProjectsStatus] = useState({
    error: "",
    loading: false,
  });

  useEffect(() => {
    getAllProjects(token, setProjectMangementData, setAllProjectsStatus);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-7 text-center">
        <p>ردیف</p>
        <p>شماره درخواست</p>
        <p>عنوان پروژه</p>
        <p>مبلغ پروژه</p>
        <p>نوع</p>
        <p>وضعیت</p>
        <p>مشاهده</p>
      </div>
      {allProjectsStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : allProjectsStatus.error ? (
        <NotFound text={`${allProjectsStatus.error}`} />
      ) : (
        projectMangementData?.map((item: any, index) => (
          <div
            key={item?.id}
            className={`grid grid-cols-7 items-center text-center py-1 rounded-[4px] ${
              item.rejected_projects.length !== 0 ||
              item?.status === "not-verified"
                ? "bg-red-100"
                : " bg-[#EAEFF6] text-black"
            }`}
          >
            <p className="font-faNum">{index + 1}</p>
            <p className="font-faNum">{item?.id}</p>
            <p>{item?.title ? item?.title : "-"}</p>
            <p className="font-faNum">
              {Number(item?.final_price).toLocaleString()}
            </p>
            <p>{item.plan?.title ? item.plan?.title : "-"}</p>
            <p className="font-semibold">
              <span className="text-red-600">
                {(item.rejected_projects?.length !== 0 ||
                  item.status === "not-verified") &&
                  "رد شده"}
              </span>
              <span className="text-green-600">
                {item?.status === "verified" && "تایید شده"}
              </span>
              <span>
                {item?.status === "processing" &&
                  item.rejected_projects?.length === 0 &&
                  "در حال بررسی"}
              </span>
            </p>
            <Link
              href={`/panel/admin/project-management/project-detail?id=${item?.id}`}
              className="flex justify-center"
            >
              <Image src={vieweye} alt="مشاهده" width={20} height={20} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default AllProjects;
