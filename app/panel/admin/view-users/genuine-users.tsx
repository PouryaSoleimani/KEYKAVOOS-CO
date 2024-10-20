"use client";
import Image from "next/image";
import React from "react";
import vieweye from "/public/ViewUsers/vieweye.svg";
import Link from "next/link";
import NotFound from "../components/NotFound";
import GenuineUserHeader from "../components/GenuineUserHeader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import toast, { Toaster } from 'react-hot-toast';
import { deleteUser, getAllUsers } from "@/utils/utils";
import SearchInput from "../components/SearchInput";
import { RiDeleteBin7Fill } from "react-icons/ri";
import app from "@/services/service";

type GenuineUsersProps = {
  GenuineUsersData: never[];
  usersStatus: { loading: boolean; };
  token: string;
  setAllUsers: React.Dispatch<any>;
  setDataStatus: React.Dispatch<React.SetStateAction<{ loading: boolean; }>>;
  AllUsersData: never[];
  searchUsers: string;
  setSearchUsers: React.Dispatch<React.SetStateAction<string>>;
};

function GenuineUsers({ GenuineUsersData, usersStatus, token, setAllUsers, setDataStatus, AllUsersData, searchUsers, setSearchUsers }: GenuineUsersProps) {

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
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex flex-col gap-5">
        <SearchInput value={searchUsers} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchUsers(e.target.value)} placeholder="جستجو بر اساس شماره موبایل" />
        <GenuineUserHeader />
        {usersStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : GenuineUsersData?.length > 0 ? (

          GenuineUsersData?.filter(
            (item: { id: number; mobile: string; name: string; email: string }) =>
              item.mobile.includes(searchUsers)
          ).map((item: { id: number; mobile: string; name: string; surname: string, email: string }, index: number) => (
            <div key={item.id} className="grid md:grid-cols-5 grid-cols-9 text-center py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
              <p className="col-span-1">{index + 1}</p>
              <p className="font-faNum col-span-2 md:col-span-1">{item.mobile}</p>
              <p className="col-span-2 md:col-span-1">{item.name} {item.surname}</p>
              <p className="col-span-3 md:col-span-1">{item.email ? item.email : "-"}</p>
              {/* <span onClick={() => deleteUser(item.id, token, setAllUsers, AllUsersData)} className="flex justify-center col-span-1" > */}
              <span onClick={(event) => deleteUser(event, item.id)} className="flex justify-center col-span-1" >
                <RiDeleteBin7Fill className="text-lg text-red-800 font-extrabold -translate-x-1 translate-y-.5 hover:scale-125 duration-300" />
                {/* <Image src={vieweye} alt="مشاهده" width={20} height={20} /> */}
              </span>
            </div>
          )
          )
        ) : (
          <NotFound text="کاربری یافت نشد." />
        )
        }
      </div >
    </>
  );
}

export default GenuineUsers;
