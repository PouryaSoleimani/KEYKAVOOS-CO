/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../admin/components/NotFound";
import { getAllProjects } from "@/utils/utils";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";

function AllProjects() {
  const [allProjects, setAllProjects] = useState([]);
  const [projectStatus, setProjectStatus] = useState({ error: "", loading: false, });

  const { token } = useSelector((state: any) => state.userData);

  useEffect(() => { getAllProjects(token, setAllProjects, setProjectStatus); }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 text-center tracking-tight">
        <p className="font-light py-1 text-zinc-800">ردیف</p>
        <p className="font-light py-1 text-zinc-800">عنوان پروژه</p>
        <p className="font-light py-1 text-zinc-800">وضعیت پروژه</p>
        <p className="font-light py-1 text-zinc-800">مشاهده</p>
      </div>
      {projectStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-3" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : projectStatus.error ? (
        <NotFound text={projectStatus.error} />
      ) : (
        allProjects.map((item: any, index) => (
          <div key={item.id} className="grid grid-cols-4 text-center py-2 bg-[#EAEFF6] rounded-[4px]"  >
            <p>{index + 1}</p>
            <p className="font-semibold text-zinc-900">{item.title ? item.title : "-"}</p>
            <p>
              <span className="text-red-600">
                {(item.rejected_projects.length !== 0 || item.status === "not-verified") && "رد شده"}
              </span>
              <span className="text-green-600">{item.status === "verified" && "تایید شده"}</span>
              <span className="font-thin tracking-tight text-blue-700">
                {item.status === "processing" && item.rejected_projects.length === 0 && "در حال بررسی"}
              </span>
            </p>
            <Link href={`/panel/user/project-management/project-detail?id=${item.id}`} className="flex justify-center" >
              <Image src={vieweye} alt="مشاهده" width={20} height={20} className="hover:scale-[125%] duration-300" />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default AllProjects;
