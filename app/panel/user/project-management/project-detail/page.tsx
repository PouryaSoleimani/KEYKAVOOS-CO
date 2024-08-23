"use client";
import {
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import { getOrderDetail, getProjectDetail } from "@/utils/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImBackward, ImBackward2 } from "react-icons/im";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ProjectDetailNav = [
  "مشاوره",
  "ثبت سفارش",
  "دریافت فایل Brief",
  "پروپوزال",
  "تهیه زیرساخت",
  "طراحی وب",
  "تحویل وب",
];
function ProjectDetail() {
  const router = useRouter();
  const { token, localUserId } = useSelector((state: any) => state.userData);
  const [projectDetail, setProjectDetail] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIdFromLocal());
    dispatch(getTokenFromLocal());
  }, []);

  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    getOrderDetail(token, Number(id), setProjectDetail);
  }, []);
  // console.log(projectDetail);
  const projectCurrentState = projectDetail.status?.title;
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
  // console.log(projectCurrentState);
  return (
    <div className="relative">
      <div
        className="flex justify-end w-full text-xl cursor-pointer absolute -top-12"
        onClick={() => router.back()}
      >
        <div className="bg-white rounded-full p-2">
          <IoArrowBack />
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        {projectCurrentState ? (
          ProjectDetailNav.includes(projectCurrentState) ? (
            <ul className="grid grid-cols-7 justify-between bg-[#4866CE] text-white text-center rounded-t-2xl overflow-hidden">
              {ProjectDetailNav.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item === projectCurrentState
                      ? "bg-[#EAEFF6] text-[#4866CE]"
                      : ""
                  }  p-5  border border-[#4866CE]`}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="bg-[#4866CE] text-white text-center rounded-t-2xl overflow-hidden">
              ...
            </p>
          )
        ) : (
          <p className="bg-[#4866CE] text-white text-center rounded-t-2xl overflow-hidden">
            وضعیتی یافت نشد.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
