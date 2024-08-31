/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// ^ PROJECT MANAGEMENT ==> ALL PROJECTS ==> PROJECTS DETAILS 
import { getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import { getOrderDetail, getProjectDetail } from "@/utils/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImBackward, ImBackward2 } from "react-icons/im";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetailNav = ["مشاوره", "ثبت سفارش", "دریافت فایل Brief", "پروپوزال", "تهیه زیرساخت", "طراحی وب", "تحویل وب",];

//^ COMPONENT
function ProjectDetail() {
  const router = useRouter();
  const { token, localUserId } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<any>([]);
  const dispatch = useDispatch();
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => { dispatch(getIdFromLocal()); dispatch(getTokenFromLocal()); }, []);
  useEffect(() => { getProjectDetail(token, id, setProjectDetail); }, []);

  console.log("PROJECT DETAILS ====>", projectDetail);
  const projectCurrentState = projectDetail.status;
  const returnStatus = (item: string) => {
    if (projectCurrentState) {
      if (item === projectCurrentState) {
        return item;
      } else {
        return "...";
      }
    } else {
      return "وضعیتی یافت نشد.";
    }
  };
  console.log(projectCurrentState);
  return (
    <div className="relative">
      <div className="flex justify-end w-full text-xl cursor-pointer absolute -top-12" onClick={() => router.back()} >
        <div className="bg-white rounded-lg p-2 hover:bg-[#4866CF] hover:text-white duration-300">
          <IoArrowBack />
        </div>
      </div>
      {/* CHANGING THIS PART */}
      <div className="mt-10 lg:mt-0">
        {projectDetail ? (
          <div className="flex flex-col gap-5 bg-white rounded-lg py-8">
            <div className="grid grid-cols-4 text-center tracking-tight">
              <p className="font-light py-1 text-zinc-800">ID پروژه</p>
              <p className="font-light py-1 text-zinc-800">مالک  پروژه</p>
              <p className="font-light py-1 text-zinc-800">عنوان پروژه</p>
              <p className="font-light py-1 text-zinc-800">وضعیت پروژه</p>
            </div>

            <div className="grid grid-cols-4 text-center py-3 bg-[#eaeff6] mx-5 rounded-[4px] "  >
              <p>{projectDetail.id}</p>
              <p>{projectDetail.register_user?.name.toString()} {projectDetail.register_user?.surname.toString()} </p>
              <p>{projectDetail.title}</p>
              <p>{projectDetail.status == "processing" ? "در حال بررسی" : ""}</p>
            </div>
          </div>
        ) : (
          <h2>NO</h2>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
