/* eslint-disable react-hooks/exhaustive-deps */
//^ USER-PANEL === SUPPORT PAGE =============================================================================================================================================
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import add from "/public/Panel/addticket.svg";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import checkmark from "/public/Panel/checkmark.svg";
import vieweye from "/public/ViewUsers/vieweye.svg";
import CloseTicketModal from "./components/close-ticket-modal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../../admin/components/NotFound";
import { getAllTickets } from "@/utils/utils";
import 'animate.css';

const moment = require("moment-jalaali");

// ^ COMPONENT
const Support = () => {
  const [showModal, setShowModal] = useState(false);
  const [allTickets, setAllTickets] = useState([]);
  const [closeTicketId, setCloseTicketId] = useState("");
  const [supportStatus, setSupportStatus] = useState({ error: "", loading: false, });
  const { token, localUserId } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getIdFromLocal()); dispatch(getTokenFromLocal()); dispatch<any>(fetchUserProfile()); }, []);
  useEffect(() => { getAllTickets(token, setAllTickets, setSupportStatus); }, []);

  //^ RETURN =================================================================================================================================== 
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold p-2 text-[#4866CF]">پشتیبانی</h1>
      <Link href="/panel/user/support/add-new-ticket" className="flex flex-row items-center justify-between gap-2 bg-[#4866CE] text-white p-3 rounded-lg  w-[150px] whitespace-nowrap hover:bg-blue-800 duration-300" >
        <span>تیکت جدید</span>
        <Image src="/Panel/addticket.svg" alt="add" width={25} height={25} />
      </Link>
      <div className="bg-white shadow mx-auto rounded-xl py-[3%] px-[3%] w-full animate__animated animate__pulse">
        <div className="flex flex-col gap-5">
          <div className="grid lg:grid-cols-6 grid-cols-8 text-center">
            <p className="col-span-1">شماره</p>
            <p className="col-span-2 lg:col-span-1">عنوان</p>
            <p className="col-span-2 lg:col-span-1">واحد مربوطه</p>
            <p className="col-span-2 lg:col-span-1">تاریخ به روزرسانی</p>
            <p className="col-span-2 lg:col-span-1">وضعیت</p>
            <p>عملیات</p>
          </div>
          {supportStatus.loading ? (
            <SkeletonTheme>
              <Skeleton count={1} className="p-3" baseColor="#EAEFF6" />
            </SkeletonTheme>
          ) : supportStatus.error ? (
            <NotFound text={supportStatus.error} />
          ) : !allTickets.length ? (<NotFound text="تیکتی یافت نشد" />) : (
            allTickets?.map((item: any, index) => (
              <div key={item.id} className="grid lg:grid-cols-6 grid-cols-8 text-center py-3 bg-[#EAEFF6] rounded-[4px]"  >
                <p className="font-faNum col-span-1">{index + 1}</p>
                <p className="font-faNum col-span-2 lg:col-span-1">{item.title}</p>
                {/* item.priority_id */}

                <p>{item.dept_id == 1 ? "واحد مالی" : "واحد فنی"}</p>
                <p className="font-faNum col-span-2 lg:col-span-1">
                  {moment(item.updated_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD")}
                </p>
                <div className="col-span-2 lg:col-span-1">
                  {item.status_id === 2 ? (
                    <p>بسته{" "} <span className="text-emerald-600 font-semibold">شده</span> </p>
                  ) : (
                    <p>بسته{" "}<span className="text-red-400 font-semibold">نشده</span></p>
                  )}
                </div>
                <Link href={`/panel/user/support/ticket-detail?id=${item.id}`} className="flex justify-center">
                  <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                </Link>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default Support;
