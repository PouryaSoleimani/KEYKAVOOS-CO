/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import PersonalInfoHeader from "../../user/personal-info/components/personal-info-header";
import LegalUsers from "./legal-users";
import GenuineUsers from "./genuine-users";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getAllUsers } from "@/utils/utils";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ViewUsers() {
  const { localToken, token } = useSelector((state: any) => state.userData);
  const [AllUsersData, setAllUsersData] = useState([]);
  const [type, setType] = useState("Genuine");
  const [searchUsers, setSearchUsers] = useState("");
  const [legalUsers, setLegalUsers] = useState<never[]>([]);
  const [genuineUsers, setGenuineUsers] = useState<never[]>([]);
  const [usersStatus, setUsersStatus] = useState({ loading: false, });

  useEffect(() => {
    getAllUsers(token, setAllUsersData, setUsersStatus);
  }, []);

  useEffect(() => {
    const allUsers = JSON.parse(window.sessionStorage.getItem("users") as string);
    setAllUsersData(allUsers);
  }, [setAllUsersData]);

  useEffect(() => {
    let legal = AllUsersData?.filter((item: any) => item.type === "hoghooghi");
    setLegalUsers(legal);
  }, [setLegalUsers, AllUsersData]);

  useEffect(() => {
    let genuine = AllUsersData?.filter((item: any) => item.type === "haghighi");
    setGenuineUsers(genuine);
  }, [setGenuineUsers, AllUsersData]);

  const renderSteps = () => {
    switch (type) {
      case "Genuine":
        return (
          <GenuineUsers
            GenuineUsersData={genuineUsers}
            usersStatus={usersStatus}
            setAllUsers={setAllUsersData}
            setDataStatus={setUsersStatus}
            token={localToken}
            AllUsersData={AllUsersData}
            searchUsers={searchUsers}
            setSearchUsers={setSearchUsers}
          />
        );
      case "Legal":
        return (
          <LegalUsers
            LegalUsersData={legalUsers}
            usersStatus={usersStatus}
            setAllUsers={setAllUsersData}
            setDataStatus={setUsersStatus}
            token={localToken}
            AllUsersData={AllUsersData}
            searchUsers={searchUsers}
            setSearchUsers={setSearchUsers}
          />
        );
      default:
        return;
    }
  };

  // ^ RETURN
  return (
    <div className="grid grid-cols-1 gap-8">
      <div>
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت کاربران</h1>
      </div>
      <div className="flex flex-row gap-2 justify-center md:justify-end md:text-base text-sm">
        {/* <Link href={"/panel/admin/view-users/permission-management"} className="text-white tracking-tight font-normal bg-[#4866CF] hover:bg-blue-800 duration-300 px-2 py-3 rounded-[5px] md:w-[155px] whitespace-nowrap" >
          مدیریت دسترسی ها
        </Link> */}
        {/* <Link href={"/panel/admin/view-users/role-management"} className="text-white tracking-tight font-normal bg-[#4866CF] hover:bg-blue-800 duration-300 px-2 py-3 rounded-[5px] md:w-[125px] whitespace-nowrap"  >
          مدیریت نقش ها
        </Link> */}
        {/* <Link href={"/panel/admin/view-users/position-management"} className="text-white tracking-tight font-normal bg-[#4866CF] hover:bg-blue-800 duration-300 px-2 py-3 rounded-[5px] md:w-[135px] whitespace-nowrap" >
          مدیریت جایگاه ها
        </Link> */}
      </div>
      <div className="grid grid-cols-1 gap-10 w-full">
        <PersonalInfoHeader step={type} setStep={setType} color="#ffffff" />
        <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-xs md:text-base">
          {usersStatus.loading ? (
            <SkeletonTheme>
              <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
            </SkeletonTheme>
          ) : (
            renderSteps()
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewUsers;
