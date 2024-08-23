"use client";
import React, { useEffect, useState } from "react";
import vieweye from "../../../../public/ViewUsers/vieweye.svg";
import search from "../../../../public/ViewUsers/search.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import axios from "axios";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SearchInput from "../components/SearchInput";
import NotFound from "../components/NotFound";

function SearchProject() {
  const [searchProject, setSearchProject] = useState("");
  const { localToken, localUserId } = useSelector(
    (state: any) => state.userData
  );
  const dispatch = useDispatch();
  const [SearchProjectData, setSearchProjectData] = useState<any>([]);
  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch(getIdFromLocal());
    dispatch<any>(fetchUserProfile());
  }, []);

  const [allProjectsStatus, setAllProjectsStatus] = useState({
    error: "",
    loading: false,
  });

  const AllProjects = async () => {
    try {
      setAllProjectsStatus((last) => ({ ...last, loading: true }));
      const { data } = await axios(
        `https://keykavoos.liara.run/Admin/AllProject/${localUserId}`,
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      setSearchProjectData(data.data);
      setAllProjectsStatus((last) => ({ ...last, loading: false }));
      console.log(data);
    } catch (error) {
      setAllProjectsStatus({ error: "خطا در دریافت اطلاعات", loading: false });
      console.log(error);
    }
  };
  
  useEffect(() => {
    AllProjects();
  }, []);

  // useEffect(() => {
  //   if (localUserId) {
  //     AllProjects();
  //   }
  // }, [localUserId]);

  return (
    <div className="flex flex-col gap-5 bg-white shadow mx-auto rounded-2xl w-full p-[3%]">
      <SearchInput
        value={searchProject}
        onChange={(e) => setSearchProject(e.target.value)}
        placeholder="جستجو بر اساس شماره موبایل و درخواست"
      />
      <div className="grid grid-cols-6 text-center">
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
        SearchProjectData.filter(
          (item: any) =>
            item.Serial.includes(searchProject) ||
            item.PhoneNumber.includes(searchProject)
        ).map((item: any) => (
          <div
            key={item._id}
            className="grid grid-cols-6 text-center py-1 bg-[#EAEFF6] rounded-[4px] cursor-pointer"
            //   onClick={() => setStep(2)}
          >
            <p className="font-faNum">{item.Serial}</p>
            <p>{item.title}</p>
            <p className="font-faNum">{Number(item.budget).toLocaleString()}</p>
            <p>{item.type}</p>
            <p>
              {item.isConfirmationProject === "true"
                ? "تایید شده"
                : item.isConfirmationProject === "unknown"
                ? "نا معلوم"
                : "تایید نشده"}
            </p>
            <Link
              href={`/panel/admin/search-project/project-detail?id=${item._id}`}
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

export default SearchProject;
