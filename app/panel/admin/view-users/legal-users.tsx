"use client";
import Image from "next/image";
import React from "react";
import vieweye from "/public/ViewUsers/vieweye.svg";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import LegalUserHeader from "../components/LegalUserHeader";
import { deleteUser } from "@/utils/utils";
import SearchInput from "../components/SearchInput";
import { RiDeleteBin7Fill } from "react-icons/ri";
import app from "@/services/service";
import { toast } from "react-toastify";

type LegalUsersProps = { LegalUsersData: any[]; usersStatus: { loading: boolean; }; token: string; setAllUsers: React.Dispatch<any>; setDataStatus: React.Dispatch<React.SetStateAction<{ loading: boolean; }>>; AllUsersData: never[]; searchUsers: string; setSearchUsers: React.Dispatch<React.SetStateAction<string>>; };

function LegalUsers({ LegalUsersData, usersStatus, token, setAllUsers, setDataStatus, AllUsersData, searchUsers, setSearchUsers, }: LegalUsersProps) {
  const notifySuccess = () => toast.success('کاربر با موفقیت حذف شد')
  const notifyError = () => toast.error('خطا در حذف کاربر')
  //! DELETE USER FUNCTION 
  function deleteUser(event: React.MouseEvent<HTMLSpanElement, MouseEvent>, ID: number | string) {
    event.preventDefault()

    const TOKEN: string | null = sessionStorage.getItem('token')

    app.delete(`/user/delete/${ID.toString()}`, { headers: { Authorization: `Bearer ${JSON.parse(TOKEN as string)}` }, })
      .then(response => {
        console.log("AXIOS --->", response.data); notifySuccess();
        let NEWUSERS = AllUsersData?.filter((item: { id: number }) => item.id !== ID)
        setAllUsers(NEWUSERS)
      }
      )
      .catch(error => {
        console.log("ERROR --->", error?.response); notifyError()
      })
  }

  return (
    <div className="flex flex-col gap-5">
      <SearchInput value={searchUsers} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchUsers(e.target.value)} placeholder="جستجو بر اساس شماره موبایل" />
      <LegalUserHeader />
      {usersStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : LegalUsersData?.length > 0 ? (
        LegalUsersData?.filter((item) => item.mobile.includes(searchUsers)).map(
          (item, index) => (
            <div key={item.id} className="grid md:grid-cols-6 grid-cols-12 text-center py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer"  >

              <p className="font-faNum py-2  col-span-1">{index + 1}</p>
              <p className="col-span-1 py-2 ">{item.org_name ? item.org_name : "-"}</p>
              <p className="col-span-3 py-2  md:col-span-1">{item.ncode}</p>
              <p className="col-span-3 py-2  md:col-span-1">{item.mobile}</p>
              <p className="col-span-3  py-2 md:col-span-1">{item.org_registration_Number ? item.org_registration_Number : "-"}</p>

              {/* <span onClick={() => deleteUser(item.id, token, setAllUsers, AllUsersData)} className="flex justify-center col-span-1 py-2"  > */}
              <span onClick={(event) => deleteUser(event, item.id)} className="flex justify-center col-span-1" >
                <RiDeleteBin7Fill className="text-lg text-red-800 hover:scale-125 duration-300" />
              </span>

            </div>
          )
        )
      ) : (
        <NotFound text="کاربری یافت نشد." />
      )}
    </div>
  );
}

export default LegalUsers;
